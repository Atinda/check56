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
          <span>共为你找到{{item.total}}家</span>
        </div>
      </div>
      <div class="items-info" v-for="itemList in item.itemList" :key="itemList.id">
        <div class="info-header">
          <span>公司名称:{{itemList.company}}</span>
          <span>评分:{{itemList.score}}</span>
        </div>
        <div class="info-content">
          <div class="content-img">
            <span>{{itemList.type}}</span>
          </div>
          <div class="content-detailed">
            <div class="detailed-top">
              <div>
                <span>始:{{itemList.start}}</span>
                <span>终:{{itemList.end}}</span>
                <span>{{itemList.title}}</span>
              </div>
              <div>
                <span>座机:{{itemList.landline}}</span>
                <span>手机:{{itemList.phone}}</span>
                <span>联系人:{{itemList.contacts}}</span>
              </div>
              <div>
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
              score: 5,
              img: "#",
              type: "VIP商家",
              start: "开始",
              end: "结束",
              title: "请说在查56上推荐的!",
              landline: "0731-89558545",
              phone: "1561******0229",
              contacts: "张三",
              weight: "500",
              foam: "400",
              efficiency: "5"
            },
            {
              id: 2,
              company: "长沙五洲",
              score: 5,
              img: "#",
              type: "推荐商家",
              start: "开始",
              end: "结束",
              title: "请说在查56上推荐的!",
              landline: "0731-89558545",
              phone: "1561******0229",
              contacts: "张三",
              weight: "500",
              foam: "400",
              efficiency: "5"
            },
            {
              id: 3,
              company: "长沙五洲",
              score: 5,
              img: "#",
              type: "免费商家",
              start: "开始",
              end: "结束",
              title: "请说在查56上推荐的!",
              landline: "0731-89558545",
              phone: "1561******0229",
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
          total: 3,
          itemList: [
            {
              id: 1,
              company: "长沙五洲",
              score: 5,
              img: "#",
              type: "VIP商家",
              start: "开始",
              end: "结束",
              title: "请说在查56上推荐的!",
              landline: "0731-89558545",
              phone: "1561******0229",
              contacts: "张三",
              weight: "500",
              foam: "400",
              efficiency: "5"
            },
            {
              id: 2,
              company: "长沙五洲",
              score: 5,
              img: "#",
              type: "推荐商家",
              start: "开始",
              end: "结束",
              title: "请说在查56上推荐的!",
              landline: "0731-89558545",
              phone: "1561******0229",
              contacts: "张三",
              weight: "500",
              foam: "400",
              efficiency: "5"
            },
            {
              id: 3,
              company: "长沙五洲",
              score: 5,
              img: "#",
              type: "免费商家",
              start: "开始",
              end: "结束",
              title: "请说在查56上推荐的!",
              landline: "0731-89558545",
              phone: "1561******0229",
              contacts: "张三",
              weight: "500",
              foam: "400",
              efficiency: "5"
            }
          ]
        }
      ],
      // 广告数据
      bannerList: [
        { name: 1, imageSrc: require("../../assets/images/logo.png") },
        { name: 2, imageSrc: require("../../assets/images/logo.png") },
        { name: 3, imageSrc: require("../../assets/images/logo.png") },
        { name: 4, imageSrc: require("../../assets/images/logo.png") },
        { name: 5, imageSrc: require("../../assets/images/logo.png") }
      ],
      destination: null, // 目的地
      type: null, // 类型
      sort: null, // 排序
      distance: "1000", // 距离
      weight: "500", // 纯重
      foam: "600", // 纯泡
      shape: "400" // 异形
    };
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
.info-content {
  display: flex;
}
</style>
