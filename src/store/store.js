import Vue from 'vue'
import Vuex from 'vuex'

import plan from './modules/plan'
import exam from './modules/exam'
import chart from './modules/chart'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    plan: plan,
    exam: exam,
    chart: chart
  }
})

export default store
