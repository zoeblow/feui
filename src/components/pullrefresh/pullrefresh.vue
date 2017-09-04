<template>
    <div class="feui-wrapper" :style="styles">
        <div class="feui-scroller">
            <slot name="pulldown"></slot>
            <slot></slot>
            <slot name="pullup"></slot>
        </div>
    </div>
</template>

<script>
    const pulldownDefaultConfig = () => ({
        defaultContent: '下拉刷新',
        downContent: '下拉刷新',
        upContent: '松开刷新',
        loadingContent: '加载中....',
        isdownOrup: true
    });
    const pullupDefaultConfig = () => ({
        defaultContent: '上拉加载更多',
        downContent: '上拉加载更多',
        upContent: '松开进行加载',
        loadingContent: '加载中....',
        isdownOrup: false
    })
    import Base from '../../libs/base'
    import objectAssign from 'object-assign'
    import {
        iScroll
    } from 'iscroll/src/iscroll.js'
    export default {
        name: 'fe-pullrefresh',
        created() {
            if (!this.value) {
                this.currentValue = {
                    pulldown: '',
                    pullup: ''
                }
            } else {
                this.currentValue = this.value
            }
        },
        mounted() {
            this.uuid = Math.random().toString(36).substring(3, 8);
            this.$nextTick(() => {
                this.$el.setAttribute('id', `feui-scroller-${this.uuid}`);
                let content = null,
                    offsetHeight = (this.$slots.pulldown && this.$slots.pulldown[0].elm.clientHeight) || 50,
                    that = this;
                if (this.$slots.default) {
                    content = this.$slots.default[0].elm;
                }
                if (!content) {
                    throw new Error('no content is found')
                }
                if (this.usePulldown) { //是否开启下拉刷新
                    var config_down = objectAssign(pulldownDefaultConfig(), this.pulldownConfig);
                    let pulldown = '';
                    if (!this.$slots.pulldown) { //如果用户没有pulldown插槽
                        pulldown = config_down.pulldown = document.createElement('div');
                        content.before(pulldown);
                    } else {
                        pulldown = this.$slots.pulldown[0].elm;
                        this.isPulldown = true;
                    }
                    pulldown.className = 'pulldown-container';
                }
                if (this.usePullup) { //是否开启上拉加载
                    var config_up = objectAssign(pullupDefaultConfig(), this.pullupConfig);
                    let pullup = '';
                    if (!this.$slots.pullup) { //如果用户没有pullup插槽
                        pullup = config_up.pullup = document.createElement('div');
                        pullup.style.display = 'none';
                        content.after(pullup);
                    } else {
                        pullup = this.$slots.pullup[0].elm;
                        this.isPullup = true;
                    }
                    pullup.className = 'pullup-container';
                }
                this.myScroll = new iScroll(`feui-scroller-${this.uuid}`, {
                    useTransition: true,
                    fixedScrollbar: true,
                    topOffset: offsetHeight,
                    onScrollMove: function() {
                        if (that.usePulldown) {
                            if (this.dirY < 0) { //下拉
                                that.setInnerhtml('down', config_down);
                            }
                            if (this.y > 0) {
                                that.setInnerhtml('up', config_down);
                                this.minScrollY = 0;
                            }
                            if (this.y < 0 && that.currentValue.pulldown == 'up') {
                                that.setInnerhtml('down', config_down);
                                this.minScrollY = -offsetHeight;
                            }
                        }
                        if (that.usePullup && !that.disableUp) {
                            if (this.dirY > 0) { //上拉
                                config_up.pullup && (config_up.pullup.style.display = 'block');
                                that.setInnerhtml('down', config_up);
                            }
                            if (this.scrollerH < this.wrapperH && this.y < (this.minScrollY - offsetHeight) || this.scrollerH > this.wrapperH && this.y < (this.maxScrollY - offsetHeight)) {
                                that.setInnerhtml('up', config_up);
                            }
                            if (this.scrollerH < this.wrapperH && this.y > (this.minScrollY - offsetHeight) && that.currentValue.pullup == 'up' || this.scrollerH > this.wrapperH && this.y > (this.maxScrollY - offsetHeight) && that.currentValue.pullup == 'up') {
                               that.setInnerhtml('down', config_up);
                            }
                        }
                        //处理滑出屏幕后容器不回弹
                        var cli = document.body.clientHeight,
                            pointY = this.pointY;
                        if (pointY < 0) {
                            this.scrollTo(0, -offsetHeight, 400);
                        } else if (pointY > (cli - 20)) {
                            this.scrollTo(0, offsetHeight, 400);
                        }
                    },
                    onScrollEnd: function() {
                        if (that.currentValue.pulldown === 'up') {
                            that.setInnerhtml('loading', config_down);
                            that.$emit('on-pulldown-loading');  //下拉刷新回调
                        }
                        if (that.currentValue.pullup == 'up') {
                            that.setInnerhtml('loading', config_up);
                            that.$emit('on-pullup-loading'); //上拉加载回调
                        }
                        if(that.currentValue.pullup == 'down'){
                            that.setInnerhtml('default', config_up);
                        }
                    },
                    onRefresh: function() {
                        if (that.currentValue.pulldown === 'loading') {
                            that.setInnerhtml('default', config_down);
                        }
                        if (that.currentValue.pullup === 'loading') {
                            that.setInnerhtml('default', config_up);
                        }
                    }
                });
            })
            this.getStyles();
            document.addEventListener('touchmove', function(e) {
                e.preventDefault();
            }, false);
        },
        beforeDestroy() {
            this.myScroll.destroy();
        },
        mixins: [Base],
        props: {
            value: {
                type: Object,
                default: () => {
                    return {
                        pulldown: '',
                        pullup: ''
                    }
                }
            },
            height: String,
            pulldownConfig: {
                type: Object,
                default () {
                    return {}
                }
            },
            pullupConfig: {
                type: Object,
                default () {
                    return {}
                }
            },
            usePulldown: {
                type: Boolean,
                default: false
            },
            usePullup: {
                type: Boolean,
                default: false
            }
        },
        computed: {},
        methods: {
            getStyles() {
                let height = this.height;
                //如果没有传入容器高度，那么就默认为整个容器高度
                if (!this.height && (this.$el && !this.$el.style.height)) {
                    height = `${document.documentElement.clientHeight}px`
                }
                //如果传入容器高度并且不为负数高度
                if (this.height && this.height.indexOf('-') === 0) {
                    height = `${document.documentElement.clientHeight + parseInt(this.height)}px`
                }
                this.styles = {
                    height: `${height}`
                }
            },
            setInnerhtml(status, config) {
                if (config.isdownOrup) {
                    this.currentValue.pulldown = status;
                    if (!this.isPulldown)
                        config.pulldown.innerHTML = config[status + 'Content'];
                }
                if (!config.isdownOrup) {
                    this.currentValue.pullup = status;
                    if (!this.isPullup)
                        config.pullup.innerHTML = config[status + 'Content'];
                }
            },
            reset() {
                this.myScroll.refresh();
            },
            disablePullup(){//禁用上拉加载，在没有更多数据时执行
                this.disableUp = true;
                this.reset();
            },
            enablePullup(){//启用上拉加载
                this.disableUp = false;
            }
        },
        data() {
            return {
                styles: {},
                myScroll: {},
                currentValue: {},
                isPulldown: false,
                isPullup: false,
                disableUp:false,
            }
        },
        watch: {
            currentValue: {
                handler: function(val) {
                    this.$emit('input', JSON.parse(JSON.stringify(val)))
                },
                deep: true
            },
        }
    }
</script>

<style lang="less">
    .feui-wrapper {
        position: relative;
        overflow: hidden;
        width: 100%;
    }
    .feui-scroller {
        position: absolute;
        z-index: 1;
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        width: 100%;
        padding: 0;
    }
    .pulldown-container,
    .pullup-container {
        text-align: center;
        width: 100%;
        height: 50px;
        line-height: 50px;
    }
</style>