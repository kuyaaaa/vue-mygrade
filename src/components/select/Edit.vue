<template>
  <el-dialog title="修改考试信息" :visible.sync="dialogFormVisible" :before-close="dialogShow">
    <el-form :model="newEditExam" ref="newEditExam" label-width="100px">
      <el-form-item
          label="考试名称："
          :rules="[{ required: true, message: '不能为空'}]"
          prop="name">
          <el-input v-model="newEditExam.name" clearable></el-input>
        </el-form-item>
        <el-form-item
          label="考试时间："
          :rules="[{ required: true, message: '不能为空'}]"
          prop="date">
          <el-date-picker
            v-model="newEditExam.date"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-form-item>
        <el-form-item
          label="数学："
          :rules="[
            { required: true, message: '不能为空'},
            { type: 'number', message: '必须为数字值'}
          ]"
          prop="grade.math">
          <el-input class="grade" v-model.number="newEditExam.grade.math" placeholder="数学" clearable></el-input>
        </el-form-item>
        <el-form-item
          label="语文："
          :rules="[
            { required: true, message: '不能为空'},
            { type: 'number', message: '必须为数字值'}
          ]"
          prop="grade.Chinese">
        <el-input class="grade" v-model.number="newEditExam.grade.Chinese" placeholder="语文" clearable></el-input>
        </el-form-item>
        <el-form-item
          label="英语："
          :rules="[
            { required: true, message: '不能为空'},
            { type: 'number', message: '必须为数字值'}
          ]"
          prop="grade.English">
        <el-input class="grade" v-model.number="newEditExam.grade.English" placeholder="英语" clearable></el-input>
        </el-form-item>
        <el-form-item
          label="综合："
          :rules="[
            { required: true, message: '不能为空'},
            { type: 'number', message: '必须为数字值'}
          ]"
          prop="grade.synthesis">
        <el-input class="grade" v-model.number="newEditExam.grade.synthesis" placeholder="综合" clearable></el-input>
        </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogShow">取 消</el-button>
      <el-button type="primary" @click="submitForm('newEditExam')">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  data () {
    return {
      newEditExam: {
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
    ...mapMutations([
      // 是否显示
      'dialogShow'
    ]),
    ...mapActions({
      // 修改数据
      editExam: 'editExam'
    }),
    // 提交表单
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.newEditExam.sum = this.gradeSum(this.newEditExam.grade)
          // console.log(this.newEditExam)
          this.editExam(this.newEditExam)
          this.dialogShow()
        } else {
          console.log('error submit!!')
          return false
        }
      })
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
      // 是否显示对话框
      dialogFormVisible: state => state.exam.dialogFormVisible,
      // 编辑的考试内容
      editExamData: state => state.exam.editExamData
    })
  },
  watch: {
    editExamData (val) {
      this.newEditExam = val
    }
  }
}
</script>

<style scoped>
  .grade{
    width: 130px;
    margin-right: 20px;
  }
  .el-form-item{
    text-align: left;
  }
</style>
