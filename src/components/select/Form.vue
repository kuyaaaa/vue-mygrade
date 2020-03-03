<template>
  <el-form :inline="true" :model="selForm" class="demo-form-inline">
    <el-form-item label="考试名称查询：">
      <el-input v-model="selForm.name" placeholder="考试名称" size="small" clearable></el-input>
    </el-form-item>
    <el-form-item label="日期：">
      <el-date-picker
        v-model="selForm.date"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        size="small"
        style="width:220px;"
        value-format="yyyy-MM-dd"
        :picker-options="pickerOptions">
      </el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit" size="small">查询</el-button>
      <el-button @click="getExam" size="small">恢复</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data () {
    return {
      selForm: {
        name: '',
        date: ''
      },
      selKey: '',
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      }
    }
  },
  methods: {
    // 更新搜索关键字
    updataKey (form) {
      let arr = []
      let key = ''
      if (form.name) {
        arr.push(`name_like=${form.name}`)
      }
      if (form.date) {
        arr.push(`date_gte=${form.date[0]}&date_lte=${form.date[1]}`)
      }
      key = arr.join('&')
      return key
    },
    onSubmit () {
      this.selKey = this.updataKey(this.selForm)
      // console.log(this.selKey)
      this.selExam(this.selKey)
    },
    ...mapActions({
      // 查询
      selExam: 'selExam',
      // 获取数据
      getExam: 'getExam'
    })
  }
}
</script>

<style>

</style>
