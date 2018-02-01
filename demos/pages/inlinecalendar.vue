<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;" >inlinecalendar</fe-header>
    <div class="fe-content">
      <fe-inlinecalendar
        ref="calendar"
        @on-change="onChange"
        @on-view-change="onViewChange"
        class="inline-calendar-demo"
        :show.sync="show"
        v-model="value"
        start-date="2016-04-21"
        end-date="2018-11-11"
        :range="range"
        :show-last-month="showLastMonth"
        :show-next-month="showNextMonth"
        :highlight-weekend="highlightWeekend"
        :return-six-rows="return6Rows"
        :hide-header="hideHeader"
        :hide-week-list="hideWeekList"
        :replace-text-list="replaceTextList"
        :weeks-list="weeksList"
        :render-function="buildSlotFn"
        :disable-past="disablePast"
        :disable-future="disableFuture"
        :disable-weekend="disableWeekend"
        :disable-date-function="disableDateFunction">
      </fe-inlinecalendar>

        <fe-group>
          <fe-cell title="当前时间" :value="value"></fe-cell>
          <fe-cell title="开始时间" value="2016-04-21"></fe-cell>
          <fe-cell title="结束时间" value="2018-11-11"></fe-cell>
        </fe-group>

        <div style="margin: 15px;">
          <fe-button type="primary" @click.native="$refs.calendar.switchViewToToday()">切换到今天</fe-button>
          <fe-button type="primary" @click.native="$refs.calendar.switchViewToMonth(2017, 12)">切换到月份(2017, 12)</fe-button>
          <fe-button type="primary" @click.native="$refs.calendar.switchViewToMonth(2018, 10)">切换到月份(2018, 10)</fe-button>
          <fe-button type="primary" @click.native="$refs.calendar.switchViewToCurrentValue()">切换到当前值所在月</fe-button>
        </div>

        <fe-group title="控制日期" style="margin-top: 30px;">
          <fe-switch v-model="disablePast" title="禁止选择过去的日期"></fe-switch>
          <fe-switch v-model="disableFuture" title="禁止选择未来的日期"></fe-switch>
          <fe-switch v-model="disableWeekend" title="禁止选择周末日期"></fe-switch>
          <fe-switch v-model="showLastMonth" title="显示上个月"></fe-switch>
          <fe-switch v-model="showNextMonth" title="显示下个月"></fe-switch>
          <fe-switch v-model="return6Rows" :inline-desc="'否则，日历的高度会发生改变'" title="固定显示6行"></fe-switch>
          <fe-switch v-model="highlightWeekend" title="高亮周末"></fe-switch>
          <fe-cell title="当前值" :value="value"></fe-cell>
        </fe-group>
        <fe-group title="控制导航部分">
          <fe-switch v-model="hideHeader" title="隐藏日历头部"></fe-switch>
          <fe-switch v-model="hideWeekList" title="隐藏星期列表"></fe-switch>
          <fe-switch v-model="changeWeeksList" title="切换星期列表"></fe-switch>
        </fe-group>
        <fe-group title="更换文本">
          <fe-switch v-model="replace" title="替换日期文本"></fe-switch>
        </fe-group>
        <br>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onChange(val) {
      console.log("on-change", val);
    },
    onViewChange(val, count) {
      console.log("on view change", val, count);
    }
  },
  data() {
    return {
      show: true,
      value: ["2018-11-10", "2018-11-11", "2018-11-12"],
      listValue: "",
      range: false,
      showLastMonth: true,
      showNextMonth: true,
      highlightWeekend: false,
      return6Rows: true,
      hideHeader: false,
      hideWeekList: false,
      replaceTextList: {},
      replace: false,
      changeWeeksList: false,
      weeksList: [],
      useCustomFn: false,
      buildSlotFn: () => "",
      disablePast: false,
      disableFuture: false,
      disableWeekend: false,
      disableDateFunction(date) {
        if (date.formatedDate === "2017-10-16") {
          return true;
        }
      }
    };
  },
  watch: {
    replace(val) {
      this.replaceTextList = val
        ? {
            TODAY: "今"
          }
        : {};
    },
    useCustomFn(val) {
      this.buildSlotFn = val
        ? (line, index, data) => {
            return /8/.test(data.date)
              ? '<div style="font-size:12px;text-align:center;"><span style="display:inline-block;width:5px;height:5px;background-color:red;border-radius:50%;"></span></div>'
              : '<div style="height:19px;"></div>';
          }
        : () => "";
    },
    changeWeeksList(val) {
      this.weeksList = val
        ? ["日", "一", "二", "三", "四", "五", "六 "]
        : ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    }
  }
};
</script>
