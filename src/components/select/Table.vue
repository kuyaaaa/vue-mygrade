<template>
  <el-table
    :data="examData.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
    style="width: 100%;"
    :default-sort = "{prop: 'date'}"
    border>
    <el-table-column
      label="考试名称"
      prop="name"
      header-align="center"
      algin="center"
      width="300">
      <template slot-scope="scope">
        <span>{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="日期"
      prop="date"
      header-align="center"
      algin="center"
      width="140">
      <template slot-scope="scope">
        <span>{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="数学"
      prop="grade.math"
      header-align="center"
      algin="center"
      width="80">
      <template slot-scope="scope">
        <span>{{ scope.row.grade.math }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="语文"
      prop="grade.Chinese"
      header-align="center"
      algin="center"
      width="80">
      <template slot-scope="scope">
        <span>{{ scope.row.grade.Chinese }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="英语"
      prop="grade.English"
      header-align="center"
      algin="center"
      width="80">
      <template slot-scope="scope">
        <span>{{ scope.row.grade.English }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="综合"
      prop="grade.synthesis"
      header-align="center"
      algin="center"
      width="80">
      <template slot-scope="scope">
        <span>{{ scope.row.grade.synthesis }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="总分"
      prop="sum"
      header-align="center"
      algin="center"
      width="80">
      <template slot-scope="scope">
        <span>{{ scope.row.sum }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="处理"
      header-align="center"
      algin="center">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="dialogShow();getEidtExam(scope.row)"
        >编辑</el-button>
        <el-popconfirm
          title="确定要删除该行数据吗？"
          @onConfirm="delExam(scope.row.id)">
        <el-button
          size="mini"
          type="danger"
          slot="reference"
        >删除</el-button>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'

export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapActions({
      // 获取数据
      getExam: 'getExam',
      // 删除数据
      delExam: 'delExam'
    }),
    ...mapMutations([
      // 更改对话框显示状态
      'dialogShow',
      // 获取编辑的考试内容
      'getEidtExam'
    ])
  },
  computed: {
    ...mapState({
      // 计划数据
      examData: state => state.exam.exam,
      // 弹窗信息
      alertMsg: state => state.exam.alertMsg,
      // 弹窗类型
      alertType: state => state.exam.alertType,
      // 是否显示对话框
      dialogFormVisible: state => state.exam.dialogFormVisible,
      // 默认开始页面
      currentPage: state => state.exam.currentPage,
      // 每页的数据条数
      pagesize: state => state.exam.pagesize
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
    this.getExam()
  }
}
</script>

<style>
  .el-table td, .el-table th{
    text-align: center;
  }
</style>
