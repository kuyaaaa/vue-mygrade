<template>
  <div>
    <h1>学习计划</h1>
    <el-divider></el-divider>
    <!-- 添加计划 -->
    <addPlan></addPlan>
    <!-- 计划表格 -->
    <planTable></planTable>
  </div>
</template>

<script>
import planTable from './Table'
import addPlan from './Add'

export default {
  components: {
    planTable,
    addPlan
  }
}
</script>

<style>
  h1{
    font-size: 38px;
    font-weight: bolder;
  }

</style>
