<template>
    <div class="page index">
        <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">下拉刷新上拉加载</fe-header>
        <div class="content">
            <fe-pullrefresh height="400px" ref="pullScroll" v-model="status" @on-pullup-loading='loadmove' @on-pulldown-loading="reload" :usePullup="true" :usePulldown="true" style="background-color:ghostwhite">
                <div class="feui-box-demo">
                    <li v-for="(item,index) in list" class="nuim-1px-b" :key="index">{{item}}</li>
                </div>
                <div slot="pulldown" style="height:40px;">
                    <!--<span v-show="status.pulldown === 'default'">下拉刷新</span>-->
                    <span class="feui-arrow" v-show="status.pulldown === 'down' || status.pulldown === 'up'" :class="{'is-rotate': status.pulldown === 'up'}">↓</span>
                    <span v-show="status.pulldown === 'down'">下拉刷新</span>
                    <span v-show="status.pulldown === 'up'">松开刷新</span>
                    <span v-show="status.pulldown === 'loading'">加载中...</span>
                </div>
                <div slot="pullup">
                    <span class="feui-arrow" v-show="status.pullup === 'down' || status.pullup === 'up'" :class="{'is-rotate': status.pullup === 'down'}">↓</span>
                    <span v-show="status.pullup === 'loading'">加载中...</span>
                </div>
            </fe-pullrefresh>
            <fe-group title="启用or禁用上拉加载">
                <fe-switch title="默认启用" v-model="defaultT"></fe-switch>
            </fe-group>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                status: {
                    pulldown: 'default',
                    pullup: 'default'
                },
                list: ['1', '2', '3', '4', '5', '6', '7'],
                defaultT:true
            }
        },
        methods: {
            reload() {
                setTimeout(() => {
                    this.list.unshift(`${this.list.length + 1}`);
                    this.$nextTick(() => {
                        this.$refs.pullScroll.reset();
                    })
                }, 1000)
            },
            loadmove() {
                setTimeout(() => {
                    this.list.push(`${this.list.length + 1}`);
                    this.$nextTick(() => {
                        this.$refs.pullScroll.reset();
                    })
                }, 1000)
            }
        },
        watch:{
            defaultT(newVal){
                if(!newVal){
                    this.$refs.pullScroll.disablePullup();
                }else{
                    this.$refs.pullScroll.enablePullup();
                }
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../src/styles/1px.less';
    .page {
        height: 100%;
    }
    .content {
        padding-top: 46px;
        height: 100%;
        box-sizing: border-box;
    }
    .feui-box-demo {
        li {
            list-style: none;
            padding: 10px;
        }
    }
    .feui-arrow {
        display: inline-block;
        transition: all linear 0.2s;
        -webkit-transition: all linear 0.2s;
    }
    .is-rotate {
        transform: rotate(-180deg);
        -webkit-transform: rotate(-180deg);
    }
</style>
