import Axios from 'axios'

export default{
  state: {
    chartData: [],
    type: ''
  },
  mutations: {
    // 获取考试数据
    getChartData (state, res) {
      state.chartData = res.data
      // 反转排序
      state.chartData.reverse()
      // 成绩种类默认为sum
      state.type = 'sum'
    },
    // 更改成绩类型
    changeType (state, payload) {
      if (state.type !== payload) {
        state.type = payload
        // console.log(state.type)
      }
    }
  },
  actions: {
    // 获取考试数据
    getChartData (context) {
      Axios.get('/exam?_sort=date&_order=desc&_limit=12')
        .then(res => {
          context.commit('getChartData', res)
        })
        .catch(err => console.log(err))
    }
  }
}
