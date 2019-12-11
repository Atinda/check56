<template>
  <div class="home">
    <img :src="this.imageSrc" alt srcset class="home-image">
    <div class="search-area">
      <div class="area-tabs">
        <span>查专线</span>
        <span class="border">查公司</span>
        <span>综合信息</span>
      </div>
      <div class="area-btn">
        <input type="text" style="width:80%">
        <button>搜索</button>
      </div>
      <div class="area-history">
        <span>历史记录:</span>
        <span>长沙</span>至
        <span>北京</span>
      </div>
    </div>
    <div class="content">
      <div class="banner">
        <img
          v-for="item in bannerList"
          :key="item.id"
          :src="item.imageSrc"
          alt="广告图片"
          srcset
          class="home-image2"
        >
      </div>
      <div class="member-line">
        <div class="cityArea">
          <span v-for="item in cityArea" :key="item.id">{{item.name}}</span>
        </div>
        <div class="company">
          <div class="company-item" v-for="item in companyLsit" :key="item.id">
            <img :src="item.imageUrl" alt="公司照片" srcset class="company-image">
            <span>
              公司名称:
              <span>{{item.name}}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      // logo
      imageSrc: require("../../assets/images/logo.png"),
      // 地区数据
      cityArea: [
        { name: "华中", id: 1, path: "#1" },
        { name: "华南", id: 2, path: "#1" },
        { name: "华东", id: 3, path: "#1" },
        { name: "华北", id: 4, path: "#1" },
        { name: "东北", id: 5, path: "#1" },
        { name: "西南", id: 6, path: "#1" },
        { name: "西北", id: 7, path: "#1" }
      ],
      // 广告数据
      bannerList: [
        { name: 1, imageSrc: require("../../assets/images/logo.png") },
        { name: 2, imageSrc: require("../../assets/images/logo.png") },
        { name: 3, imageSrc: require("../../assets/images/logo.png") }
        // {name:4,imageSrc: require("../../assets/images/logo.png")},
        // {name:5,imageSrc: require("../../assets/images/logo.png")},
        // {name:6,imageSrc: require("../../assets/images/logo.png")},
        // {name:7,imageSrc: require("../../assets/images/logo.png")},
        // {name:8,imageSrc: require("../../assets/images/logo.png")}
      ],
      // 公司数据
      companyLsit: [
        {
          name: "长沙五洲",
          id: 1,
          path: "#1",
          imageUrl: require("../../assets/images/logo.png")
        },
        {
          name: "长沙五洲",
          id: 2,
          path: "#1",
          imageUrl: require("../../assets/images/logo.png")
        },
        {
          name: "长沙五洲",
          id: 3,
          path: "#1",
          imageUrl: require("../../assets/images/logo.png")
        },
        {
          name: "长沙五洲",
          id: 4,
          path: "#1",
          imageUrl: require("../../assets/images/logo.png")
        },
        {
          name: "长沙五洲",
          id: 5,
          path: "#1",
          imageUrl: require("../../assets/images/logo.png")
        },
        {
          name: "长沙五洲",
          id: 6,
          path: "#1",
          imageUrl: require("../../assets/images/logo.png")
        },
        {
          name: "长沙五洲",
          id: 7,
          path: "#1",
          imageUrl: require("../../assets/images/logo.png")
        },
        {
          name: "长沙五洲",
          id: 8,
          path: "#1",
          imageUrl: require("../../assets/images/logo.png")
        }
      ]
    };
  }
};
</script>
<style scoped>
.home,
.content {
  height: 100%;
}
.area-tabs {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #a9a9a9;
}
.area-tabs span {
  flex: 1;
  cursor: pointer;
}
.border {
  border-left: 1px solid #a9a9a9;
  border-right: 1px solid #a9a9a9;
}
.area-btn,
.area-history {
  margin: 5px;
  padding: 5px;
}
.area-btn {
  display: flex;
  justify-content: space-between;
}
.area-history {
  display: flex;
  align-items: flex-start;
}
button {
  border-radius: 5px;
  background-color: transparent;
  border-style: none;
  border: 1px solid gray;
}
.member-line {
  /* background: #ececd5; */
  border-top: 1px solid gray;
}
.cityArea {
  display: flex;
}
.cityArea span {
  padding: 0 3px;
}
.company {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
}
.company-item {
  margin: 5px;
  background: #e8e8e5
}
</style>
