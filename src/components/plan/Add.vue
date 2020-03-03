<template>
  <div class="addbox">
      <el-time-select
        v-model="planData.time"
        :picker-options="{
          start: '06:00',
          step: '00:30',
          end: '24:00'
        }"
        placeholder="选择时间">
      </el-time-select>
      <el-input
       v-model="planData.plan"
       placeholder="计划"
       style="width: 300px"
       @keyup.enter.native="addFn"
       clearable>
      </el-input>
      <el-button type="success" plain @click="addFn()">添加</el-button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data () {
    return {
      planData: {
        time: '',
        plan: ''
      }
    }
  },
  methods: {
    ...mapActions({
      // 添加数据
      addData: 'addPlanData'
    }),
    addFn () {
      // console.log(this.planData)
      if (this.planData.time && this.planData.plan) {
        this.addData(this.planData)
      } else {
        this.$alert('时间或计划内容不能为空！', '提示')
      }
    }
  }
}
</script>

<style scoped>
  .addbox{
    margin: 20px 10px;
  }
</style>
