<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Datetime</fe-header>
    <div class="fe-content">
      <fe-group title="默认格式: YYYY-MM-DD">
        <fe-datetime v-model="value1" @on-change="change" title="生日"></fe-datetime>
      </fe-group>
      <fe-group title="自定义分钟列表（每15分钟）">
        <fe-datetime v-model="minuteListValue" format="YYYY-MM-DD HH:mm" :minute-list="['00', '15', '30', '45']" @on-change="change" title="生日"></fe-datetime>
      </fe-group>

      <fe-group title="定义小时列表">
        <fe-datetime v-model="hourListValue" format="YYYY-MM-DD HH:mm" :hour-list="['09', '10', '11', '12', '13', '14', '15', '16']" :minute-list="['00', '15', '30', '45']" @on-change="change" title="生日"></fe-datetime>
      </fe-group>

      <fe-group title="Readonly">
        <fe-datetime v-model="valueReadonly" :readonly="readonly" @on-change="change" title="生日"></fe-datetime>
      </fe-group>
      <div style="padding:15px">
        <fe-button type="primary" plain @click.native="readonly = !readonly"> {{ '切换 readonly 属性' }} </fe-button>
      </div>

      <fe-group title="格式化显示">
        <fe-datetime v-model="formatValue" :display-format="formatValueFunction" @on-change="change" title="生日"></fe-datetime>
      </fe-group>

      <div style="padding:15px;">
        <fe-button type="primary" @click.native="formatValue = '2017-11-11'">{{ '设置时间为2017-11-11' }}</fe-button>
      </div>

      <fe-group title="限定小时范围">
        <fe-datetime v-model="limitHourValue" format="YYYY-MM-DD HH:mm" :min-hour=9 :mafe-hour=18 @on-change="change" title="限定小时范围" :inline-desc="'工作时间为 09-18'"></fe-datetime>
      </fe-group>

      <fe-group title="设置开始时间和结束日期 2015-11-11 ~ 2017-10-11">
        <fe-datetime v-model="limitHourValue" :start-date="startDate" :end-date="endDate" format="YYYY-MM-DD HH:mm" @on-change="change" title="开始时间"></fe-datetime>
      </fe-group>

      <fe-group title="Format: format">
        <fe-datetime v-model="value2" :format="format" @on-change="change" title="开始时间"></fe-datetime>
      </fe-group>

      <div style="padding:15px;">
        <fe-button type="primary" @click.native="toggleFormat">{{ '改变格式' }}</fe-button>
      </div>

      <fe-group title="提示文字">
        <fe-datetime v-model="value3" default-selected-value="2017-06-18 13" format="YYYY-MM-DD HH" placeholder="请选择" @on-change="change" title="开始时间"></fe-datetime>
      </fe-group>

      <fe-group title="设置默认选中值为 2017-11-11">
        <fe-datetime v-model="value3_1" default-selected-value="2017-11-11" format="YYYY-MM-DD" placeholder="请选择" @on-change="change" title="开始时间" :inline-desc=" '当前值'  + `: ${value3_1}`"></fe-datetime>
      </fe-group>

      <fe-group title="设置开始和结束年份">
        <fe-datetime v-model="value4" placeholder="请选择" :min-year=2000 :mafe-year=2016 format="YYYY-MM-DD HH:mm" @on-change="change" title="2000年以后的时间"></fe-datetime>
      </fe-group>

      <fe-group title="自定义小时列表生成逻辑">
        <fe-datetime format="YYYY-MM-DD HH" v-model="computeHoursValue" :compute-hours-function="computeHoursFunction" title="生日"></fe-datetime>
      </fe-group>

      <fe-group title="自定义日期列表生成逻辑">
        <fe-datetime format="YYYY-MM-DD HH" v-model="computeDaysValue" :compute-days-function="computeDaysFunction" title="生日"></fe-datetime>
      </fe-group>

      <fe-group title="自定义中文显示模板">
        <fe-datetime v-model="value5" placeholder="请选择" :min-year=2000 :mafe-year=2016 format="YYYY-MM-DD HH:mm" @on-change="change" title="中文" year-row="{value}年" month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分" confirm-text="完成" cancel-text="取消"></fe-datetime>
      </fe-group>

      <fe-group title="显示中间的清除按钮">
        <fe-datetime v-model="value6" @on-change="change" title="生日" clear-text="清除" @on-clear="clearValue"></fe-datetime>
      </fe-group>

      <fe-group title="显示中间的设置日期为今天的按钮">
        <fe-datetime v-model="value7" @on-change="change" title="生日" clear-text="今天" @on-clear="setToday"></fe-datetime>
      </fe-group>

      <fe-group title="自定义触发内容">
        <fe-datetime v-model="value7" @on-change="change" title="生日" clear-text="今天" @on-clear="setToday">
          <fe-button>{{'点我啊'}}</fe-button>
        </fe-datetime>
      </fe-group>

      <fe-group title="必填">
        <fe-datetime v-model="value8" title="必填" clear-text="清除" @on-clear="clearValue8" :required="true"></fe-datetime>
      </fe-group>

      <fe-group title="使用 prop: show.sync 控制显示(vue^2.3)">
        <fe-datetime v-model="value9" @on-change="change" title="生日" :show.sync="visibility"></fe-datetime>
      </fe-group>

      <div style="padding:15px;">
        <fe-button type="primary" plain @click.native="visibility = true">显示</fe-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      readonly: true,
      minuteListValue: "2017-06-12 09:00",
      hourListValue: "2017-06-12 09:00",
      format: "YYYY-MM-DD HH:mm",
      value1: "2015-11-12",
      valueReadonly: "2015-11-12",
      value2: "",
      value3: "",
      value3_1: "",
      value4: "",
      value5: "",
      value6: "2016-08-18",
      value7: "",
      value8: "",
      limitHourValue: "",
      startDate: "2015-11-11",
      endDate: "2017-10-11",
      formatValue: "2017-10-11",
      formatValueFunction(val) {
        return val.replace(/-/g, "$");
      },
      value9: "",
      visibility: false,
      computeHoursValue: "",
      computeDaysValue: "",
      computeHoursFunction(date, isToday, generateRange) {
        if (isToday) {
          return generateRange(new Date().getHours(), 23);
        } else {
          return generateRange(0, 23);
        }
      },
      computeDaysFunction(options, generateRange) {
        return [options.month]; // if current month is n, days are [n]
      }
    };
  },
  methods: {
    toggleFormat() {
      this.format =
        this.format === "YYYY-MM-DD HH:mm" ? "YYYY-MM-DD" : "YYYY-MM-DD HH:mm";
    },
    change(value) {
      console.log("change", value);
    },
    clearValue(value) {
      this.value6 = "";
    },
    clearValue8(value) {
      this.value8 = "";
    },
    setToday(value) {
      let now = new Date();
      let cmonth = now.getMonth() + 1;
      let day = now.getDate();
      if (cmonth < 10) cmonth = "0" + cmonth;
      if (day < 10) day = "0" + day;
      this.value7 = now.getFullYear() + "-" + cmonth + "-" + day;
      console.log("set today ok");
    }
  }
};
</script>
