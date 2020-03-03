<template>
  <div>
    <!-- 科目选取 -->
    <chartForm></chartForm>
    <!-- 分割线 -->
    <el-divider></el-divider>
    <!-- 图表 -->
    <chart></chart>
  </div>
</template>

<script>
import chart from './Chart'
import chartForm from './ChartForm'

export default {
  components: {
    chart,
    chartForm
  }
}
</script>

<style>

</style>
