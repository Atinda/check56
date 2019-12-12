<template>
  <div id="listPage">
    <!-- 广告位 -->
    <el-carousel :interval="4000" type="card" style="margin-top:8px;" class="isShow-carousel">
      <el-carousel-item v-for="item in bannerList" :key="item.id" class="setSwitch">
        <img :src="item.imageSrc" alt="广告图片" srcset class="home-image2" height="100%">
      </el-carousel-item>
    </el-carousel>
    <!-- 目的地基础信息 -->
    <div class="listPage-search">
      <div style="display:flex">
        <span>目的地</span>
        <el-input placeholder="请输入城市名称" v-model="destination" type="text"
            size="mini" >
          <template slot="append"><el-button size="mini" @click="searchCity()">搜索</el-button></template>
        </el-input>
      </div>
      <div style="display:flex">
        <span>类型</span>
        <el-select v-model="type" size="mini">
          <el-option label="零担" value="零担"></el-option>
          <el-option label="冷链" value="冷链"></el-option>
          <el-option label="危化" value="危化"></el-option>
        </el-select>
      </div>
      <div>
        <span>排序</span>
        <el-select  v-model="sort" size="mini">
          <el-option label="评分最高" value="评分最高"></el-option>
          <el-option label="时效最短" value="时效最短"></el-option>
          <el-option label="价格最低" value="价格最低"></el-option>
        </el-select>
        <span>距离:{{distance}}公里</span>
      </div>
      <div>
        <span>市场运价纯重:{{weight}}元/吨</span>
        <span>纯泡:{{foam}}元/吨</span>
        <span>异形:{{shape}}元/吨</span>
      </div>
    </div>
    <!-- 热搜路线 -->
    <div class="listPage-hot">
      <span>热搜线路:</span>
      <span>长沙市至北京市</span>
      <span>长沙市至南京市</span>
    </div>

    <!-- 零担专线 -->
    <div class="listPage-hot">
      <!-- 零担专线区域广告位 -->
      <div class="listPage-cold"></div>
    </div>

    <!-- 冷链专线 -->
    <div class="listPage-cold"></div>
  </div>
</template>

<script>
export default {
  name: "listPage",
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
      destination: null,    // 目的地
      type: null,           // 类型
      sort: null,           // 排序
      distance:'1000',      // 距离
      weight:'500',         // 纯重
      foam:'600',           // 纯泡
      shape:'400',          // 异形
    };
  },
  methods: {
    // 搜索城市名称
    searchCity(){
      console.log(this.destination)
    }
  }
};
</script>

<style scoped>
</style>
