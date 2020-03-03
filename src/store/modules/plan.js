import Axios from 'axios'

export default{
  state: {
    planData: [],
    alertMsg: '',
    alertType: ''
  },
  mutations: {
    // 获取计划数据
    getPlanData (state, res) {
      state.planData = res.data
      // console.log(state.planData)
    },
    // 删除计划数据
    delSuccess (state, payload) {
      state.alertMsg = '删除计划成功！'
      state.alertType = 'success'
      // 查找被删掉的数据并删除
      const i = state.planData.findIndex(val => val.id === payload)
      state.planData.splice(i, 1)
    },
    delError (state, res) {
      state.alertMsg = '删除计划失败！ ' + res.status
      state.alertType = 'error'
    },
    // 添加计划数据
    addSuccess (state, payload) {
      state.alertMsg = '添加计划成功！'
      state.alertType = 'success'
      // 更新新增数据
      state.planData.push(payload)
    },
    addError (state, res) {
      state.alertMsg = '添加计划失败！ ' + res.status
      state.alertType = 'error'
    },
    // 清除消息窗口信息
    clearMsg (state) {
      state.alertMsg = ''
      state.alertType = ''
    }
  },
  actions: {
    // 获取计划数据
    getPlanData (context) {
      Axios.get('/planData')
        .then(res => {
          context.commit('getPlanData', res)
        })
        .catch(err => console.log(err))
    },
    // 删除计划数据
    delPlanData (context, payload) {
      Axios.delete('/planData/' + payload)
        .then(res => {
          // console.log(res)
          if (res.status === 200) {
            context.commit('delSuccess', payload)
          } else {
            context.commit('delError', res)
          }
        })
        .then(context.commit('clearMsg'))
        .catch(err => console.log(err))
    },
    // 添加计划数据
    addPlanData (context, payload) {
      // console.log(payload)
      Axios.post('/planData', payload)
        .then(res => {
          // console.log(res)
          if (res.status === 201) {
            context.commit('addSuccess', res.data)
          } else {
            context.commit('addError', res)
          }
        }).then(context.commit('clearMsg'))
        .catch(err => console.log(err))
    }
  }
}
