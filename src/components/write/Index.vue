<template>
  <div class="formbox">
    <el-form ref="writeForm" :model="writeForm" label-width="100px">
      <el-form-item
        label="考试名称："
        :rules="[{ required: true, message: '不能为空'}]"
        prop="name">
        <el-input v-model="writeForm.name"></el-input>
      </el-form-item>
      <el-form-item
        label="考试时间："
        :rules="[{ required: true, message: '不能为空'}]"
        prop="date">
        <el-date-picker
          v-model="writeForm.date"
          type="date"
          placeholder="选择日期"
          format="yyyy 年 MM 月 dd 日"
          value-format="yyyy-MM-dd">
        </el-date-picker>
      </el-form-item>
      <el-form-item
        label="考试分数："
        :rules="[
          { required: true, message: '不能为空'},
          { type: 'number', message: '必须为数字值'}
        ]"
        prop="grade.math">
        <el-input class="grade" v-model.number="writeForm.grade.math" placeholder="数学"></el-input>
      </el-form-item>
      <el-form-item
        :rules="[
          { required: true, message: '不能为空'},
          { type: 'number', message: '必须为数字值'}
        ]"
        prop="grade.Chinese">
      <el-input class="grade" v-model.number="writeForm.grade.Chinese" placeholder="语文"></el-input>
      </el-form-item>
      <el-form-item
        :rules="[
          { required: true, message: '不能为空'},
          { type: 'number', message: '必须为数字值'}
        ]"
        prop="grade.English">
      <el-input class="grade" v-model.number="writeForm.grade.English" placeholder="英语"></el-input>
      </el-form-item>
      <el-form-item
        :rules="[
          { required: true, message: '不能为空'},
          { type: 'number', message: '必须为数字值'}
        ]"
        prop="grade.synthesis">
      <el-input class="grade" v-model.number="writeForm.grade.synthesis" placeholder="综合"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('writeForm')">添加</el-button>
        <el-button @click="resetForm('writeForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  data () {
    return {
      writeForm: {
        name: '',
        date: '',
        grade: {
          math: '',
          Chinese: '',
          English: '',
          synthesis: ''
        },
        sum: 0
      }
    }
  },
  methods: {
    ...mapActions({
      // 添加数据
      addExam: 'addExam'
    }),
    // 提交表单
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.writeForm.sum = this.gradeSum(this.writeForm.grade)
          // console.log(this.writeForm)
          this.addExam(this.writeForm)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 重置表单
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    // 分数求和
    gradeSum (grade) {
      let sum = 0
      for (const key in grade) {
        sum += grade[key]
      }
      return sum
    }
  },
  computed: {
    ...mapState({
      // 弹窗信息
      alertMsg: state => state.exam.alertMsg,
      // 弹窗类型
      alertType: state => state.exam.alertType
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
  }
}
</script>

<style scoped>
  .formbox{
    margin: 10px 50px;
    padding: 50px 100px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
  .grade{
    width: 130px;
    margin-right: 20px;
  }
</style>
