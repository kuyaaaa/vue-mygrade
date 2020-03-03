<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router>
    <el-menu-item index="/">
      <i class="el-icon-s-order"></i>
      <span slot="title">学习计划</span>
    </el-menu-item>
    <el-menu-item index="/write">
      <i class="el-icon-edit-outline"></i>
      <span slot="title">成绩记录</span>
    </el-menu-item>
    <el-menu-item index="/select">
      <i class="el-icon-search"></i>
      <span slot="title">成绩查看</span>
    </el-menu-item>
    <el-menu-item index="/chart">
      <i class="el-icon-s-marketing"></i>
      <span slot="title">单科折线图</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'AsideNav',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .el-menu{
    border: 0;
  }
</style>
