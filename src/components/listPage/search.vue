<template>
  <!-- 目的地基础信息 -->
  <div class="listPage-search">
    <div class="search-wrap">
      <div class="search-item">
        <span>目的地:</span>
        <el-input
          placeholder="请输入城市名称"
          v-model="destination"
          type="text"
          size="mini"
          class="itemValue"
        >
          <template slot="append">
            <el-button size="mini" @click="searchCity()">搜索</el-button>
          </template>
        </el-input>
      </div>
      <div class="search-item">
        <span>类型:</span>
        <el-select v-model="type" size="mini" class="itemValue">
          <el-option label="零担" value="零担"></el-option>
          <el-option label="冷链" value="冷链"></el-option>
          <el-option label="危化" value="危化"></el-option>
        </el-select>
      </div>
      <div class="search-item">
        <span>排序:</span>
        <el-select v-model="sort" size="mini" class="itemValue">
          <el-option label="评分最高" value="评分最高"></el-option>
          <el-option label="时效最短" value="时效最短"></el-option>
          <el-option label="价格最低" value="价格最低"></el-option>
        </el-select>
      </div>
    </div>
    <div class="info-item">
      <span>距离:{{distance}}公里</span>
      <span>市场运价纯重:{{weight}}元/吨</span>
      <span>纯泡:{{foam}}元/吨</span>
      <span>异形:{{shape}}元/吨</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
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
.listPage-search {
  padding: 5px;
}
</style>
