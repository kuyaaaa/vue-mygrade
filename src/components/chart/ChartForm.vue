<template>
  <el-form :inline="true" :model="chartForm" class="demo-form-inline">
    <el-form-item>
      <el-select v-model="chartForm.type" placeholder="请选择" size="small">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit" size="small">查看</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  data () {
    return {
      chartForm: {
        type: 'sum'
      },
      options: [
        {value: 'math', label: '数学'},
        {value: 'Chinese', label: '语文'},
        {value: 'English', label: '英语'},
        {value: 'synthesis', label: '综合'},
        {value: 'sum', label: '总分'}
      ]
    }
  },
  methods: {
    ...mapMutations([
      // 获取编辑的考试内容
      'changeType'
    ]),
    onSubmit () {
      this.changeType(this.chartForm.type)
    }
  }
}
</script>

<style>

</style>
