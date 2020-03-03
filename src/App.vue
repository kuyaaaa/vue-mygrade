<template>
  <div id="app">
    <el-container>
      <!-- header -->
      <el-header>📚 个人考试成绩记录</el-header>
      <el-container>
        <!-- aside -->
        <el-aside width="200px">
          <AsideNav></AsideNav>
        </el-aside>
        <!-- main -->
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AsideNav from './components/AsideNav'
export default {
  name: 'App',
  components: {
    AsideNav
  }
}
</script>

<style>
  #app,.el-container{
    height: 100%;
    overflow: hidden;
  }
  .el-header {
    background-color: #333;
    color: #fff;
    font-size: 24px;
    line-height: 60px;
  }
  .el-aside {
    background-color: rgb(84, 92, 100);
    border:0;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
</style>
