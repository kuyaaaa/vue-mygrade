<template>
  <div>
    <!-- 查询条件表单 -->
    <selForm></selForm>
    <!-- 分割线 -->
    <el-divider></el-divider>
    <!-- 成绩表格 -->
    <selTable></selTable>
    <!-- 编辑对话框 -->
    <edit></edit>
    <!-- 分页 -->
    <pagination></pagination>
  </div>
</template>

<script>
import selForm from './Form'
import selTable from './Table'
import edit from './Edit'
import pagination from './Pagination'

export default {
  components: {
    selForm,
    selTable,
    edit,
    pagination
  }
}
</script>

<style>

</style>
