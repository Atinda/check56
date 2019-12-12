<template>
  <div id="listPage">
    <!-- 广告位 -->
    <el-carousel :interval="4000" type="card" style="margin-top:8px;" class="isShow-carousel">
      <el-carousel-item v-for="item in bannerList" :key="item.id" class="setSwitch">
        <img :src="item.imageSrc" alt="广告图片" srcset class="home-image2" height="100%">
      </el-carousel-item>
    </el-carousel>
    <div class="listPage-content">
      <!-- 兼容移动端的显示 -->
      <el-collapse class="showListSearch1">
        <el-collapse-item title="基础搜索" name="1">
          <vsearch></vsearch>
        </el-collapse-item>
      </el-collapse>
      <!-- 如果窗口宽度在768PX以上时显示次组件 -->
      <vsearch class="showListSearch2"></vsearch>
      <!-- 热搜路线 -->
      <div class="listPage-hot">
        <span style="margin-left:7%">热搜线路:</span>
        <span style="margin:0 10px">长沙市至北京市</span>
        <span>长沙市至南京市</span>
      </div>
      <line-Items></line-Items>
    </div>
  </div>
</template>

<script>
import vsearch from "./search.vue";
import lineItems from "./lineItems.vue";
export default {
  name: "listPage",
  components: {
    vsearch,
    lineItems
  },
  data() {
    return {
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
.el-collapse {
  border: none;
}
.listPage-hot {
  display: flex;
  height: 25px;
  line-height: 25px;
  border-bottom: 1px solid gray;
}
.el-carousel__indicator,
.el-carousel__indicator--horizontal {
  padding: 0px !important;
}
</style>
