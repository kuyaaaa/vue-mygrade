<template>
  <el-table
    :data="planData"
    style="width: 100%;"
    :default-sort = "{prop: 'time'}">
    <el-table-column
      label="时间"
      prop="time"
      header-align="center"
      algin="center">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.time }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="计划"
      prop="plan"
      header-align="center"
      algin="center">
      <template slot-scope="scope">
        <span>{{ scope.row.plan }}</span>
      </template>
    </el-table-column>
    <el-table-column
      header-align="center"
      algin="center">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="delData(scope.row.id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  methods: {
    ...mapActions({
      // 获取数据
      getData: 'getPlanData',
      // 删除数据
      delData: 'delPlanData'
    })
  },
  computed: {
    ...mapState({
      // 计划数据
      planData: state => state.plan.planData,
      // 弹窗信息
      alertMsg: state => state.plan.alertMsg,
      // 弹窗类型
      alertType: state => state.plan.alertType
    })
  },
  watch: {
    // 消息提示
    alertMsg (val) {
      if (val !== '') {
        this.$message({
          message: this.alertMsg,
          type: this.alertType
        })
      }
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style scoped>
  .el-table{
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
</style>
<style>
  .el-table td, .el-table th{
    text-align: center;
  }
</style>
