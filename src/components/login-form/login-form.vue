<template>
  <Form ref="loginForm" :model="form" :rule="rules" autocomplete="off">
    <FormItem prop="username">
      <i-input :model="form.userName" placeholder="Please enter username.">
        <span slot="prepend">
          <Icon :size="16" type="person"></Icon>
        </span>
      </i-input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" :model="form.password" placeholder="Please enter password.">
        <span slot="prepend">
          <Icon :size="14" type="locked"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem>
      <Button @click="handleSubmit" type="primary" long>SingIn</Button>
    </FormItem>
  </Form>
</template>

<script>
export default {
  name: 'IndexLoginForm',
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: 'username can\'t be empty.', trigger: 'blur' }
        ]
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: 'password can\'t be empty.', trigger: 'blur' }
        ]
      }
    }
  },
  data () {
    return {
      form: {
        userName: 'guakun',
        password: ''
      }
    }
  },
  computed: {
    rules () {
      return {
        userName: this.userNameRules,
        password: this.passwordRules
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$emit('on-success-valid', {
            userName: this.userName,
            password: this.password
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
