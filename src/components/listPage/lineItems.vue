<template>
  <!-- 专线组件 -->
  <div class="lineItems">
    <!-- 广告位 -->
    <div class="listPage-banner"></div>
    <div class="company-items" v-for="item in items" :key="item.id">
      <div class="items-header">
        <div class="header-left">
          <span>{{item.address}}</span>
          <span>{{item.title}}</span>
        </div>
        <div class="header-right">
          <span>共为你找到 {{item.total}} 家</span>
        </div>
      </div>
      <div class="items-info" v-for="itemList in item.itemList" :key="itemList.id">
        <div class="info-header">
          <span class="header-name">公司名称:{{itemList.company}}</span>
          <span class="header-rate">
            <span style="width:40px">评分:</span>
            <el-rate disabled v-model="itemList.score" :colors="colors"></el-rate>
          </span>
        </div>
        <div class="info-content">
          <div
            class="content-img"
            :style="{
            backgroundImage: 'url(' + itemList.img + ')', 
            backgroundRepeat: 'no-repeat',
            backgroundSize:'100% 100%',
            }"
          >
            <span class="content-type">{{itemList.type}}</span>
            <!-- <img class="content-BG" :src="itemList.img"/> -->
          </div>
          <div class="content-detailed">
            <div class="detailed-top">
              <div class="top-info">
                <span>始:{{itemList.start}}</span>
                <span>终:{{itemList.end}}</span>
                <span>{{itemList.title}}</span>
              </div>
              <div class="top-info">
                <span>
                  <p style="margin:0">
                    座
                    <template>&nbsp&nbsp&nbsp</template>机:
                  </p>
                  {{itemList.landline}}
                </span>
                <span>
                  <p style="margin:0">
                    手
                    <template>&nbsp&nbsp&nbsp</template>机:
                  </p>
                  {{itemList.phone}}
                </span>
                <span>联系人:{{itemList.contacts}}</span>
              </div>
              <div class="top-info">
                <span>纯重:{{itemList.weight}}</span>
                <span>纯泡:{{itemList.foam}}</span>
                <span>时效:{{itemList.efficiency}}</span>
              </div>
            </div>
            <div class="detailed-bottom">
              <el-button size="mini">发货</el-button>
            </div>
          </div>
        </div>
        <el-carousel trigger="click" height="50px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lineItems",
  data() {
    return {
      items: [
        {
          address: "长沙市到北京市",
          title: "零担专线",
          type: 0,
          total: 3,
          itemList: [
            {
              id: 1,
              company: "长沙五洲",
              score: 4,
              img: require("../../assets/images/logo.png"),
              type: "VIP商家",
              start: "开始",
              end: "结束",
              title: "请说在查56上推荐的!",
              landline: "0731-8955854",
              phone: "1561***0229",
              contacts: "张三",
              weight: "500",
              foam: "400",
              efficiency: "5"
            },
            {
              id: 2,
              company: "长沙五洲",
              score: 4.5,
              img: require("../../assets/images/logo.png"),
              type: "推荐商家",
              start: "开始",
              end: "结束",
              title: "请说在查56上推荐的!",
              landline: "0731-8955854",
              phone: "1561***0229",
              contacts: "张三",
              weight: "500",
              foam: "400",
              efficiency: "5"
            },
            {
              id: 3,
              company: "长沙五洲",
              score: 5,
              img: require("../../assets/images/logo.png"),
              type: "免费商家",
              start: "开始",
              end: "结束",
              title: "请说在查56上推荐的!",
              landline: "0731-89558545",
              phone: "1561***0229",
              contacts: "张三",
              weight: "500",
              foam: "400",
              efficiency: "5"
            }
          ]
        },
        {
          address: "长沙市到北京市",
          title: "冷链专线",
          type: 2,
          total: 2,
          itemList: [
            {
              id: 1,
              company: "长沙五洲",
              score: 4,
              img: require("../../assets/images/logo.png"),
              type: "VIP商家",
              start: "开始",
              end: "结束",
              title: "请说在查56上推荐的!",
              landline: "0731-8955854",
              phone: "1561***0229",
              contacts: "张三",
              weight: "500",
              foam: "400",
              efficiency: "5"
            },
            {
              id: 2,
              company: "长沙五洲",
              score: 3.5,
              img: require("../../assets/images/logo.png"),
              type: "推荐商家",
              start: "开始",
              end: "结束",
              title: "请说在查56上推荐的!",
              landline: "0731-8955854",
              phone: "1561***0229",
              contacts: "张三",
              weight: "500",
              foam: "400",
              efficiency: "5"
            }
          ]
        }
      ],
      // 顶部广告数据
      bannerList: [
        { name: 1, imageSrc: require("../../assets/images/logo.png") },
        { name: 2, imageSrc: require("../../assets/images/logo.png") },
        { name: 3, imageSrc: require("../../assets/images/logo.png") },
        { name: 4, imageSrc: require("../../assets/images/logo.png") },
        { name: 5, imageSrc: require("../../assets/images/logo.png") }
      ],
      // 间隙广告数据
      bannerList2: [
        {
          name: "广告商1",
          id: 1,
          ADImgList: [
            { text: "A", imageSrc: require("../../assets/images/logo.png") },
            { text: "A", imageSrc: require("../../assets/images/logo.png") },
            { text: "A", imageSrc: require("../../assets/images/logo.png") }
          ]
        },
        {
          name: "广告商2",
          id: 2,
          ADImgList: [
            { text: "A", imageSrc: require("../../assets/images/logo.png") },
            { text: "A", imageSrc: require("../../assets/images/logo.png") },
            { text: "A", imageSrc: require("../../assets/images/logo.png") }
          ]
        },
        {
          name: "广告商3",
          id: 3,
          ADImgList: [
            { text: "A", imageSrc: require("../../assets/images/logo.png") },
            { text: "A", imageSrc: require("../../assets/images/logo.png") },
            { text: "A", imageSrc: require("../../assets/images/logo.png") }
          ]
        },
        {
          name: "广告商4",
          id: 4,
          ADImgList: [
            { text: "A", imageSrc: require("../../assets/images/logo.png") },
            { text: "A", imageSrc: require("../../assets/images/logo.png") },
            { text: "A", imageSrc: require("../../assets/images/logo.png") }
          ]
        }
      ],
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"] //默认颜色
    };
  },
  created() {
    this.items.map((value, index, array) => {
      value.itemList.map((value1, index1, array1) => {
        console.log(value1, index1);
        this.bannerList.map((banner, index2, array2) => {
          console.log(banner.imageSrc);
        });
        value.itemList[index1].banner = "456";
      });
    });
    console.log(this.items);
  },
  methods: {
    // 搜索城市名称
    searchCity() {
      console.log(this.destination);
    }
  }
};
</script>

<style scoped>
.listPage-search {
  padding: 5px;
}
.items-header,
.info-header {
  display: flex;
  justify-content: space-between;
}
.info-header{
  border-top: 1px solid gray;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.items-header {
  padding: 0 5px;
  margin-top: 5px;
}
.company-items {
  margin: 5px 5px 10px;
  border: 1px solid gray;
  border-radius: 5px;
}
.info-content {
  display: flex;
  padding: 2px;
  border-bottom: 1px solid gray;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.items-info {
  /* margin: 5px; */
  border-radius: 5px;
  padding: 3px;
}
.content-img {
  background: #f3e8e8;
  position: relative;
  z-index: -3;
  border-radius: 5px;
}
.content-BG {
  z-index: -1;
}
.content-detailed {
  padding-left: 5px;
}
.content-type {
  display: block;
  position: absolute;
  top: 15px;
  left: -4px;
  transform: rotate(-45deg);
  -ms-transform: rotate(-45deg); /* Internet Explorer 9*/
  -moz-transform: rotate(-45deg); /* Firefox */
  -webkit-transform: rotate(-45deg); /* Safari 和 Chrome */
  -o-transform: rotate(-45deg); /* Opera */
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
}
.detailed-bottom {
  display: flex;
  justify-content: flex-start;
}
</style>
