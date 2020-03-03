import Axios from 'axios'

export default{
  state: {
    exam: [],
    alertMsg: '',
    alertType: '',
    dialogFormVisible: false,
    editExamData: {
      name: '',
      date: '',
      grade: {
        math: 0,
        Chinese: 0,
        English: 0,
        synthesis: 0
      },
      sum: 0
    },
    // 分页
    total: 1, // 默认数据总数
    pagesize: 10, // 每页的数据条数
    currentPage: 1 // 默认开始页面
  },
  mutations: {
    // 弹出框消息及后续数据处理
    msgSuccess (state, payload) {
      state.alertMsg = payload.msg
      state.alertType = 'success'
      // 数据处理
      switch (payload.type) {
        case 'add':
          // 添加数据
          state.exam.push(payload.data)
          break
        case 'del':
          // 查找被删掉的数据并删除
          const d = state.exam.findIndex(val => val.id === payload.id)
          state.exam.splice(d, 1)
          break
        case 'edit':
          // 更新修改的数据
          const e = state.exam.findIndex(val => val.id === payload.data.id)
          state.exam.splice(e, 1, payload.data)
          break
        default:
          break
      }
    },
    msgError (state, payload) {
      state.alertMsg = payload.msg + payload.data.status
      state.alertType = 'error'
    },
    // 获取计划数据
    getExam (state, res) {
      state.exam = res.data
      // console.log(state.exam)
      // 更新数据总数
      state.total = state.exam.length
      // 初始当前页为1
      state.currentPage = 1
    },
    // 当前页更新
    currentChange (state, currentPage) {
      state.currentPage = currentPage
    },
    // 清除消息窗口信息
    clearMsg (state) {
      state.alertMsg = ''
      state.alertType = ''
    },
    // 显示隐藏对话框
    dialogShow (state) {
      state.dialogFormVisible = !state.dialogFormVisible
    },
    // 获取编辑的考试内容
    getEidtExam (state, payload) {
      state.editExamData = Object.assign({}, payload)
    }
  },
  actions: {
    // 添加考试数据
    addExam (context, payload) {
      // console.log(payload)
      Axios.post('/exam', payload)
        .then(res => {
          // console.log(res)
          if (res.status === 201) {
            context.commit('msgSuccess', {
              data: res.data,
              type: 'add',
              msg: '添加考试成绩成功！'
            })
          } else {
            context.commit('msgError', {
              data: res.data,
              type: 'add',
              msg: '添加考试成绩失败！'
            })
          }
        })
        .then(context.commit('clearMsg'))
        .catch(err => console.log(err))
    },
    // 获取考试数据
    getExam (context) {
      Axios.get('/exam?_sort=date&_order=asc')
        .then(res => {
          context.commit('getExam', res)
        })
        .catch(err => console.log(err))
    },
    // 查找考试数据
    selExam (context, payload) {
      // console.log(payload)
      Axios.get('/exam?' + payload)
        .then(res => {
          // console.log(res)
          context.commit('getExam', res)
        })
        .catch(err => console.log(err))
    },
    // 删除考试数据
    delExam (context, payload) {
      Axios.delete('/exam/' + payload)
        .then(res => {
          // console.log(res)
          if (res.status === 200) {
            context.commit('msgSuccess', {
              id: payload,
              type: 'del',
              msg: '删除考试成绩成功！'
            })
          } else {
            context.commit('msgError', {
              data: res.data,
              type: 'del',
              msg: '删除考试成绩失败！'
            })
          }
        })
        .then(context.commit('clearMsg'))
        .catch(err => console.log(err))
    },
    // 修改考试数据
    editExam (context, payload) {
      Axios.put('/exam/' + payload.id, payload)
        .then(res => {
          // console.log(res)
          if (res.status === 200) {
            context.commit('msgSuccess', {
              data: res.data,
              type: 'edit',
              msg: '修改考试成绩成功！'
            })
          } else {
            context.commit('msgError', {
              data: res.data,
              type: 'edit',
              msg: '修改考试成绩失败！'
            })
          }
        })
        .then(context.commit('clearMsg'))
        .catch(err => console.log(err))
    }
  }
}
