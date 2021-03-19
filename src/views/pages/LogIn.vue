<template>
  <div>
    <el-form ref="form" :model="form" label-width="10%" :span="8" :xs="10" :sm="10" :md="6" :lg="6" :xl="6" :offset="2">
      <el-col>
        <el-form-item label="学号/ID">
          <el-input v-model="form.sno"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onLogIn">登录</el-button>
          <el-button @click="onCancel">取消</el-button>
        </el-form-item>
      </el-col>
    </el-form>
    <div>
      <span>还没有账号？</span>
      <span @click="onSignIn">点击注册</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LogIn',
  data () {
    return {
      form: {
        sno: '',
        password: ''
      },
      userMes: null
    }
  },
  props: {},
  computed: {

  },
  methods: {
    // 取消
    onCancel () {
      this.$router.push('/')
    },

    // 登录
    onLogIn () {
      const userId = this.form.sno
      const userPassword = this.form.password
      if (userId.length === 0 || userPassword.length === 0) {
        console.log('ID或密码为空')
      } else {

   
        localStorage.setItem('message', this.form)

        // 执行post请求
        this.axios.post('/submitLogin',{
          userId: userId,
          userPassword: userPassword
        })
        .then((response)=>{
          const data = response.data;
          console.log('logInData:',data);

          if (data.isMatch) {

          this.userMes = data.userMes
          console.log(data.userMes)
            // 跳转至首页
            this.$router.push('/')
          }else{
            console.log('密码输入错误')
          }
        })
        .catch((response)=>{
          console.log(response);
        })

      }
    },

    // 注册
    onSignIn () {
      // 跳转至注册页面
      this.$router.push('/signIn')
    }
  }
}
</script>
<style scoped>
.el-form {
  margin-top: 5%;
}
</style>