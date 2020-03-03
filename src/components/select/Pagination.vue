<template>
  <el-pagination
   layout="prev, pager, next"
   @current-change="currentChange"
   :total="total"
   background>
  </el-pagination>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  data () {
    return {
      // total: 1
    }
  },
  methods: {
    ...mapMutations([
      // 当前页
      'currentChange'
    ])
  },
  computed: {
    ...mapState({
      // 数据总数
      total: state => state.exam.total
    })
  }
}
</script>

<style scoped>
  .el-pagination{
    margin:10px 0;
    text-align: center;
  }
</style>
