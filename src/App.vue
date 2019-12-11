<template>
  <div id="app">
    <el-row class="header-row">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="header-row-left">
          <span>当前城市:</span>
          <span>长沙市</span>
          <span style="margin-left:5px">晴 18°C</span>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="header-row-right">
          <!-- 适应移动端的登录按钮组 -->
          <el-button size="small" class="setBtn" @click="login()">登录</el-button>
          <span class="setMiniBtn" @click="login()">登录</span>
          <span>关注微信公众号</span>
        </div>
      </el-col>
    </el-row>
    <router-view/>
    <Login :isShow="isShow" @setFalse="setFalse()"></Login>
  </div>
</template>

<script>
import Login from './components/home/Login'
export default {
  name: "App",
  components:{
    Login
  },
  data(){
    return{
      isShow:false
    }
  },
  methods:{
    login(){
      this.isShow = true;
    },
    setFalse(){
      this.isShow = false;
    }
  }
};
</script>

<style>
/* 响应式样式表按从小到大引入 */
@import "/assets/styles/common.css";
@import "/assets/styles/min320px.css";
@import "/assets/styles/min768px.css";
@import "/assets/styles/min1000px.css";

#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header-row {
  border-bottom: 1px solid rgba(187, 187, 187, 1);
}
.header-row-left,.header-row-right{
  display: flex;
}
.header-row-left{
  margin-left: 3px;
  justify-content: flex-start;
}
.header-row-right{
  margin-right: 3px;
  justify-content: flex-end;
}

</style>
