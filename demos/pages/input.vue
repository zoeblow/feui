<template>
    <div class="page input">
      <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">input</fe-header>
      <div class="fe-content">
        <fe-group title="默认用法">
          <fe-input title="message" placeholder="我是可爱的占位符"></fe-input>
        </fe-group>

        <fe-group title="禁用内置验证及显示成功或者错误样式">
          <fe-input title="禁用验证" placeholder="我是可爱的占位符" novalidate :icon-type="iconType" :show-clear="false" @on-blur="onBlur" placeholder-align="right"></fe-input>
        </fe-group>
        <div style="padding:15px;">
          <fe-button @click.native="iconType = 'success'" type="primary"> 设置success</fe-button>
          <fe-button @click.native="iconType = 'error'" type="primary"> 设置error</fe-button>
          <fe-button @click.native="iconType = ''" type="primary"> 设置empty</fe-button>
        </div>
        <fe-group title="is-type传入function">
          <fe-input title="输入验证" :is-type="be2333" placeholder="必须输入2333"></fe-input>
        </fe-group>
        <fe-group title="mask">
          <fe-input title="手机号码格式化" mask="999 9999 9999" v-model="maskValue" :max="13" is-type="china-mobile"></fe-input>
          <fe-cell title="value" :value="maskValue"></fe-cell>
          <fe-input title="(99) 9-999" mask="(99) 9-999"  v-model="maskValue2" :max="10" placeholder="76幢1单元305"></fe-input>
        </fe-group>
        
        <fe-group title="使用icon代替title">
          <fe-input title="必须输入2333" :is-type="be2333" placeholder="必须输入2333">
            <img slot="label" style="padding-right:10px;display:block;" src="http://temp.im/42x42/34AADC/fff" width="24" height="24">
          </fe-input>
        </fe-group>

        <fe-group title="max代替maxlength">
          <fe-input title='max=5' :max="5" @on-change="change" v-model="maxValue"></fe-input>
        </fe-group>

        <fe-group title="debounce = 1000">
          <fe-input title='debounce' :debounce="500" @on-change="change" placeholder="debounce" v-model="debounceValue"></fe-input>
        </fe-group>

        <fe-group title="不可用状态">
          <fe-input title='value' disabled v-model="disabledValue"></fe-input>
        </fe-group>

        <fe-group title="设置type = 'tel'">
          <fe-input title='value' type="tel" placeholder="弹出数字键盘" ></fe-input>
        </fe-group>

        <fe-group title="自定义title">
          <fe-input label-width="4em" :title='`<span style="${style}">hello</span>`' placeholder="我是可爱的占位符"></fe-input>
        </fe-group>
        <div style="padding:15px;">
          <fe-button @click.native="style = 'color:red;'" type="primary">set red</fe-button>
          <fe-button @click.native="style = 'color:green'" type="primary">set green</fe-button>
          <fe-button @click.native="style = 'color:#000'" type="primary">set default</fe-button>
        </div>

        <fe-group title="不显示清除按钮">
          <fe-input title="message" required placeholder="我是可爱的占位符" :show-clear="false" autocapitalize="characters"></fe-input>
        </fe-group>

        <fe-group title="focus事件">
          <fe-input title="focus-handler" placeholder="focus me!" :show-clear="true" @on-focus="onFocus"></fe-input>
        </fe-group>

        <fe-group title="请输入姓名">
          <fe-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"></fe-input>
        </fe-group>

        <fe-group title="设置 keyboard=number ，is-type=china-mobile">
          <fe-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></fe-input>
        </fe-group>

        <fe-group title="设置 is-type=email">
          <fe-input title="邮箱" name="email" placeholder="请输入邮箱地址" is-type="email"></fe-input>
        </fe-group>

        <fe-group title="设置 min=2 and max=5">
          <fe-input title="2-5个字符" placeholder="我是可爱的占位符" :min="2" :max="5"></fe-input>
        </fe-group>

        <fe-group title="确认输入">
          <fe-input title="请输入6位数字" type="text" placeholder="我是可爱的占位符" v-model="password" :min="6" :max="6" @on-change="change"></fe-input>
          <fe-input title="请确认6位数字" v-model="password2" type="text" placeholder="我是可爱的占位符" :equal-with="password"></fe-input>
        </fe-group>

        <fe-group title="enter事件">
          <fe-input title="输入完成后回车" type="text" placeholder="我是可爱的占位符" v-model="enterText"
            @on-enter="onEnter"></fe-input>
        </fe-group>

        <fe-group title="验证码" class="weui-cells_form">
          <fe-input title="验证码" class="weui-cell_vcode">
            <img slot="right" class="weui-vcode-img" src="https://i.loli.net/2018/01/24/5a68308e04350.png">
          </fe-input>
          <fe-input title="发送验证码" class="weui-vcode">
            <fe-button slot="right" type="primary" mini>发送验证码</fe-button>
          </fe-input>
        </fe-group>
        <!-- <fe-group title="check if value is valid when required===true">
          <fe-input title="message" placeholder="I'm placeholder" ref="input01" required></fe-input>
          <fe-cell title="click to get valid value" :value="'$valid value:' + valid1" @click.native="getValid1"></fe-cell>
        </fe-group>

        <fe-group title="check if value is valid when required===false">
          <fe-input title="message" placeholder="I'm placeholder" :required="false" ref="input02" @click.native="getValid2"></fe-input>
          <fe-cell title="click to get valid value" :value="'$valid value:' + valid2" @click.native="getValid2"></fe-cell>
        </fe-group> -->
        <br>
        <br>
      </div>  
    </div>
</template>
<script>
export default {
  data() {
    return {
      password: "123465",
      password2: "",
      enterText: "",
      // valid1: false,
      // valid2: false,
      iconType: "",
      be2333: function(value) {
        return {
          valid: value === "2333",
          msg: "必须输入2333"
        };
      },
      style: "",
      disabledValue: "hello",
      debounceValue: "",
      maxValue: "",
      maskValue: "13456789101",
      maskValue2: ""
    };
  },
  methods: {
    // getValid1 () {
    //   this.valid1 = this.$refs.input01.valid
    // },
    // getValid2 () {
    //   this.valid2 = this.$refs.input02.valid
    // },
    change(val) {
      console.log("on change", val);
    },
    onBlur(val) {
      console.log("on blur", val);
    },
    onFocus(val, $event) {
      console.log("on focus", val, $event);
    },
    onEnter(val) {
      console.log("click enter!", val);
    }
  }
};
</script>
<style scoped>
.red {
  color: red;
}
.green {
  color: green;
}
</style>
