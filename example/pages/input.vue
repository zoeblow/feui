<template>
    <div class="pages input">
      <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">input</fe-header>
      <div class="fe-content">
        <fe-group title="is-type传入function">
          <fe-input title="输入验证" :is-type="be2333" placeholder="必须输入2333"></fe-input>
        </fe-group>

        <fe-group title="使用icon代替title">
          <fe-input title="必须输入2333" :is-type="be2333" placeholder="必须输入2333">
            <img slot="label" style="padding-right:10px;display:block;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
          </fe-input>
        </fe-group>

        <fe-group title="max is alias to maxlength">
          <fe-input title='max=5' :max="5" @on-change="change" v-model="maxValue"></fe-input>
        </fe-group>

        <fe-group title="debounce = 1000">
          <fe-input title='debounce' :debounce="500" @on-change="change" v-model="debounceValue"></fe-input>
        </fe-group>

        <fe-group title="disabled">
          <fe-input title='value' disabled v-model="disabledValue"></fe-input>
        </fe-group>

        <fe-group title="set type = tel">
          <fe-input title='value' type="tel"></fe-input>
        </fe-group>


        <fe-group title="html title">
          <fe-input label-width="4em" :title='`<span style="${style}">hello</span>`' placeholder="I'm placeholder"></fe-input>
        </fe-group>
        <div style="padding:15px;">
          <fe-button @click.native="style = 'color:red;'" type="primary">set red</fe-button>
          <fe-button @click.native="style = 'color:green'" type="primary">set green</fe-button>
          <fe-button @click.native="style = 'color:#000'" type="primary">set default</fe-button>
        </div>

        <fe-group title="Default">
          <fe-input title="message" placeholder="I'm placeholder"></fe-input>
        </fe-group>

        <fe-group title="不显示清除按钮">
          <fe-input title="message" required placeholder="I'm placeholder" :show-clear="false" autocapitalize="characters"></fe-input>
        </fe-group>

        <fe-group title="focus事件">
          <fe-input title="focus-handler" placeholder="focus me!" :show-clear="true" @on-focus="onFocus"></fe-input>
        </fe-group>

        <fe-group title="set is-type=china-name">
          <fe-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"></fe-input>
        </fe-group>

        <fe-group title="set keyboard=number and is-type=china-mobile">
          <fe-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></fe-input>
        </fe-group>

        <fe-group title="set is-type=email">
          <fe-input title="邮箱" name="email" placeholder="请输入邮箱地址" is-type="email"></fe-input>
        </fe-group>

        <fe-group title="set min=2 and max=5">
          <fe-input title="2-5个字符" placeholder="" :min="2" :max="5"></fe-input>
        </fe-group>

        <fe-group title="确认输入">
          <fe-input title="请输入6位数字" type="text" placeholder="" v-model="password" :min="6" :max="6" @on-change="change"></fe-input>
          <fe-input title="请确认6位数字" v-model="password2" type="text" placeholder="" :equal-with="password"></fe-input>
        </fe-group>
      </div>  
    </div>
</template>
<script>
export default {
  data () {
    return {
      password: '123465',
      password2: '',
      be2333: function (value) {
        return {
          valid: value === '2333',
          msg: 'Must be 2333'
        }
      },
      style: '',
      disabledValue: 'hello',
      debounceValue: '',
      maxValue: ''
    }
  },
  methods:{
    getValid1 () {
      this.valid1 = this.$refs.input01.valid
    },
    getValid2 () {
      this.valid2 = this.$refs.input02.valid
    },
    change (val) {
      console.log(val)
    },
    onBlur (val) {
      console.log('on blur', val)
    },
    onFocus (val) {
      console.log('on focus', val)
    }
  }
}
</script>

<style scoped lang="less">
.fe-content{
  padding: 0px;margin: 50px 0 0 0 ;
}
</style>