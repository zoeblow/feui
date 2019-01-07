<template>
  <div>
    <div class="nuim-cell-box">
      <div class="weui-cell nuim-tap-active weui-cell_access" @click="choseAdd">
        <div class="weui-cell__hd">
          <slot
            name="title"
            label-class="weui-label"
            :label-style="labelStyles"
            :label-title="title"
          >
            <label
              class="weui-label"
              :class="labelClass"
              :style="labelStyles"
              v-if="title"
              v-html="title"
            ></label>
          </slot>
          <inline-desc v-if="inlineDesc">{{inlineDesc}}</inline-desc>
        </div>
        <div class="nuim-cell-primary nuim-popup-picker-select-box">
          <div class="nuim-popup-picker-select" :style="{textAlign: valueTextAlign}">
            <span class="nuim-popup-picker-value" v-if="value.length">{{value }}</span>
            <span
              v-if="!value.length && placeholder"
              v-text="placeholder"
              class="nuim-popup-picker-placeholder"
            ></span>
          </div>
        </div>
        <div class="weui-cell__ft"></div>
      </div>
    </div>
    <div class="mod_address_slide" v-show="showChose" :class="showChose?'show':''">
      <div class="mod_address_slide_mask" @click="clickMask" v-show="showMask"></div>
      <div class="mod_address_slide_main" :class="showChose?'show':''">
        <div class="title_head">
          {{addTitle?addTitle:'所在地区'}}
          <fe-icons v-show="showClose" @click.native="closeAdd()" class="close" type="fail"></fe-icons>
        </div>
        <div class="title_body">
          <ul class="mod_address_slide_tabs_1">
            <li class="area" @click="provinceSelected('province')" v-show="Province">
              <span>{{Province?Province:''}}</span>
            </li>
            <li class="area" @click="citySelected(!City,'city')" :style="City?'':setTitColor">
              <span>{{City?City:'请选择'}}</span>
            </li>
            <li
              class="area"
              @click="districtSelected('district')"
              :style="District?'':setTitColor"
              v-show="City"
            >
              <span>{{District?District:'请选择'}}</span>
            </li>
            <li
              class="area"
              @click="streetSelected('street')"
              :style="Street?'':setTitColor"
              v-show="District"
            >
              <span>{{hasStreet?(Street ?Street:'请选择'):''}}</span>
            </li>
          </ul>
          <ul class="mod_address_slide_list_2">
            <li
              class="addList"
              v-for="(v,k) in info"
              :key="k"
              @click="getProvinceId(v.id, v.name, k)"
              v-show="showProvince"
            >
              {{ v.name}}
              <fe-icons
                v-show="v.selected"
                :style="setColor"
                class="checked"
                type="success-no-circle2"
              ></fe-icons>
            </li>
            <li
              class="addList"
              v-for="(v,k) in showCityList"
              :key="k"
              @click="getCityId(v.id, v.name, k)"
              v-show="showCity"
            >
              {{v.name}}
              <fe-icons
                v-show="v.selected"
                :style="setColor"
                class="checked"
                type="success-no-circle2"
              ></fe-icons>
            </li>
            <li
              class="addList"
              v-for="(v,k) in showDistrictList"
              :key="k"
              @click="getDistrictId(v.id, v.name, k)"
              v-show="showDistrict"
            >
              {{v.name}}
              <fe-icons
                v-show="v.selected"
                :style="setColor"
                class="checked"
                type="success-no-circle2"
              ></fe-icons>
            </li>
            <li
              class="addList"
              v-for="(v,k) in showStreetList"
              :key="k"
              @click="getStreetId(v.id, v.name, k)"
              v-show="showStreet"
            >
              {{v.name}}
              <fe-icons
                v-show="v.selected"
                :style="setColor"
                class="checked"
                type="success-no-circle2"
              ></fe-icons>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InlineDesc from "../../../packages/inline-desc";
import Icons from "../../../packages/icons";

export default {
  name: "jd-address",
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: Array,
      default() {
        return [];
      }
    },
    showClose: {
      type: Boolean,
      default: true
    },
    info: {
      type: Array,
      required: true
    },
    clickMaskClose: {
      type: Boolean,
      default: true
    },
    showMask: {
      type: Boolean,
      default: true
    },
    inlineDesc: String,
    placeholder: String,
    color: {
      type: String,
      default: "#4a90e2"
    },
    addTitle: String,
    valueTextAlign: {
      type: String,
      default: "right"
    },
    show: Boolean
  },
  components: {
    [InlineDesc.name]: InlineDesc,
    [Icons.name]: Icons
  },
  created() {
    if (this.show) {
      //this.showChose = true
    }
  },
  computed: {
    setColor() {
      return { color: this.color };
    },
    setTitColor() {
      return {
        color: this.color,
        borderBottom: "1px solid",
        marginBottom: "1px"
      };
    },
    citydisplay() {
      let crtIds = [this.province, this.city, this.district, this.street];
      let crtValue = [
        this.Province ? this.Province : "",
        this.City ? this.City : "",
        this.District ? this.District : "",
        this.Street ? this.Street : ""
      ].join(" ");
      let citySel = { id: crtIds, name: crtValue };

      // return citySel
    }
  },
  data() {
    return {
      currentValue: this.value,
      showChose: false,
      showProvince: true,
      showCity: false,
      showDistrict: false,
      showCityList: false,
      showDistrictList: false,
      showStreet: false,
      showStreetList: false,
      province: 0,
      city: 0,
      district: 0,
      street: 0,
      District: false,
      Province: false,
      City: false,
      Street: false,
      // v-for循环判断是否为当前
      selected: false,
      showValue: false,
      hasStreet: false
    };
  },
  methods: {
    clickMask() {
      if (this.clickMaskClose && this.showMask) {
        this.choseAdd();
      }
    },
    choseAdd: function() {
      this.showChose = true;
      this.$emit("on-show", this.showChose);
    },
    closeAdd: function() {
      this.showChose = false;
      this.$emit("on-hide", this.showChose);
    },
    _getAddList(code) {
      const addx = require(`../../assets/datas/jd/${code}.json`);
      window["district_data_" + code] = addx;
      return addx;
    },
    _filter(add, level, code, baseID) {
      let addrProData =
        level === 2
          ? this._getAddList(baseID)
          : window["district_data_" + baseID];
      var provinceData, cityData, townData;

      var result = [];
      switch (level) {
        case 2:
          provinceData = addrProData;
          let cityName;
          for (const i in provinceData) {
            if (typeof provinceData[i] === "object") {
              cityName = provinceData[i][0];
            } else {
              cityName = provinceData[i];
            }
            result.push({ id: i, name: cityName });
          }
          console.log(result, 2);

          break;
        case 3:
          cityData = addrProData[code][1];
          let townName;
          if (
            !(typeof addrProData[code] === "string") ||
            typeof addrProData[code] === "object"
          ) {
            for (const i in cityData) {
              if (typeof cityData[i] === "object") {
                cityName = cityData[i][0];
              } else {
                cityName = cityData[i];
              }
              result.push({ id: i, name: cityName });
            }
          } else {
            result = false;
          }

          console.log(result, 3);
          break;
        case 4:
          let lastName;
          if (! (typeof addrProData[this.city][1][code] === "string") ||
            typeof addrProData[code] === "object" ) {
            townData = addrProData[this.city][1][code][1];
            for (const i in townData) {
              lastName = townData[i];
              result.push({ id: i, name: lastName });
            }
          } else {
            result = false;
          }
        default:
          break;
      }

      return result;
    },
    getProvinceId: function(code, input, index) {
      this.province = code;
      this.Province = input;
      this.showProvince = false;
      this.showCity = true;
      this.showDistrict = false;
      this.showCityList = this._filter(
        this.info,
        2,
        this.province,
        this.province
      );

      // 点击选择当前
      this.info.map(a => (a.selected = false));
      this.info[index].selected = true;
    },
    provinceSelected: function(pr) {
      // 清除市级和区级列表
      this.showCityList = false;
      this.showDistrictList = false;
      // 清除市级和区级选项
      this.Province = false;
      this.City = false;
      this.District = false;
      this.Street = false;
      // 选项页面的切换
      this.showProvince = true;
      this.showCity = false;
      this.showDistrict = false;
      this.showStreet = false;

      // this.showArea()
    },
    getCityId: function(code, input, index) {
      this.city = code;
      this.City = input;
      this.showProvince = false;
      this.showCity = false;

      this.showDistrictList = this._filter(
        this.showCityList,
        3,
        this.city,
        this.province
      );
      // 选择当前添加active
      this.showCityList.map(a => (a.selected = false));
      this.showCityList[index].selected = true;

      if (!this.showDistrictList) {
        this.closeAdd();
        this.showArea();
      } else {
        this.showDistrict = true;
        this.showStreet = false;
      }
      this.hasStreet = false;
    },
    citySelected: function(c, ci) {
      //是否为市 或者是请选择
      if (!c) {
        this.showProvince = false;
      }
      this.City = false;
      this.District = false;
      this.showCity = true;
      this.showDistrict = false;
      this.showStreet = false;

      this.district = "";
      this.street = "";
      // this.showArea()
    },
    getDistrictId: function(code, input, index) {
      this.district = code;
      this.District = input;
      // 选择当前添加active
      this.showDistrictList.map(a => (a.selected = false));
      this.showDistrictList[index].selected = true;
      this.showStreetList = this._filter(
        this.showDistrictList,
        4,
        this.district,
        this.province
      );
      if (!this.showStreetList) {
        this.closeAdd();
        this.showArea();
        this.hasStreet = false;
      } else {
        this.showDistrict = false;
        this.showStreet = true;
        this.hasStreet = true;
      }
    },
    getStreetId(code, input, index) {
      this.street = code;
      this.Street = input;
      // 选择当前添加active
      this.showStreetList.map(a => (a.selected = false));
      this.showStreetList[index].selected = true;
      // 选取市区选项之后关闭弹层
      this.closeAdd();
      this.showArea();
      // this.hasStreet = false;
    },
    showArea() {
      //显示文字
      let crtIds = [
        this.province,
        this.city,
        this.district,
        this.hasStreet ? this.street : ""
      ].join(" ");
      let crtValue = [
        this.Province ? this.Province : "",
        this.City ? this.City : "",
        this.District ? this.District : "",
        this.Street ? this.Street : ""
      ].join(" ");
      let citySel = { id: crtIds, name: crtValue };
      this.value = citySel.name;
      console.log(citySel);
    },
    districtSelected: function() {
      this.District = false;
      this.showProvince = false;
      this.showCity = false;
      this.showDistrict = true;
      this.showStreet = false;
      this.hasStreet = false;

      this.street = "";
      this.Street = "";
    },
    streetSelected: function() {
      this.showProvince = false;
      this.showCity = false;
      this.showDistrict = false;
      this.showStreet = true;
    }
  }
};
</script>
<style lang='less' scoped>
  ul,li{
  list-style: none;
}
.mod_address_slide{
  position: fixed;
  top: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 110;
}
.mod_address_slide_mask{
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    opacity: 1;
    tap-highlight-color: transparent;
    z-index: 121;
    -webkit-transition: opacity .4s;
    transition: opacity .4s;
}
.mod_address_slide.show{
  top: 0;
}
.mod_address_slide_main{
  position: absolute;
  -webkit-transform: translate3d(0,420px,0);
  transform: translate3d(0,420px,0);
  -webkit-transition: -webkit-transform .2s cubic-bezier(0,0,.25,1);
  transition: -webkit-transform .2s cubic-bezier(0,0,.25,1);
  transition: transform .2s cubic-bezier(0,0,.25,1);
  transition: transform .2s cubic-bezier(0,0,.25,1),-webkit-transform .2s cubic-bezier(0,0,.25,1);
  bottom: 0;
  width: 100%;
  background-color: #fff;
  z-index: 130
}
.mod_address_slide_main.show{
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
.mod_address_slide_head:after,.mod_address_slide_tabs_1:after {
  content: '\20';
  display: block;
  position: absolute;
  z-index: 1;
  pointer-events: none;
  background: #ddd;
  height: 1px;
  left: 0;
  right: 0;
  bottom: 0;
  border-color: #ccc;
}
.title_head{
  position: relative;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  color: #333;
  font-size: 14px;
  background-color: #f3f2f8;
  .close {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    text-align: center;
    font-size: 22px;
    line-height: 40px;
  }
}
.title_body {
  .mod_address_slide_tabs_1{
    overflow: hidden;
    padding: 0 10px;
    position: relative;
    li.area {
      font-size: 14px;
      float: left;
      margin-right: 10px;
      span{
        position: relative;
        display: inline-block;
        height: 42px;
        line-height: 42px;
      }
    }
  }
  .mod_address_slide_list_2 {
    font-size: 14px;
    height: 300px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    padding: 5px 10px;
    li{
      position: relative;
      padding: 10px 0;
      font-size: 12px;
      .checked {
          display: inline-block;
          width: 20px;
          height: 20px;
          position: absolute;
          right: 0;
          top: 50%;
          margin-top: -10px;
          width: 20px;
          height: 20px;
      }
    }
  }
}
</style>