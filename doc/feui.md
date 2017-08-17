# feui 新更改构建工具写法
<div align="center" >  

![feui-logo](https://git.oschina.net/zoeblow/feui/raw/master/static/feui.png)
</div>   

### 目录结构
```
├── Readme.md                   // help
├── package.json                // 应用依赖源
├── components.json             // 组件列表
├── static                      // 静态文件
├── src                         // 组件开发目录
│   ├── components              // 组件目录
│   │   ├── button              // 组件
│   │   │   ├── button.vue      // 此组件主体
│   │   │   └── index.js        // 此编译入口
│   │   └── ……                
│   ├── libs                    // 库文件夹
│   ├── tools                   // 工具类文件夹
│   ├── styles                  // 样式文件
│   └── index.js                // 组件入口文件
├── node_modules                // 依赖文件
├── lib                         // 组件生成的可用npm文件夹
│   ├── feui.common.js          // npm 入口文件
│   ├── ……                      
│   └── style.min.css           // npm 入口样式文件
├── example                     // 框架用例
├── doc                         // 文档目录
├── dist                        // 生成的可用发布文件
├── build                       // 配置
│   ├── bin
│   │   ├── build-all.js        // 编译全部文件
│   │   └── build-entry.js      // 编译入口文件
│   ├── config.js               // 配置文件
│   ├── cooking.common.js       // 通用配置
│   ├── cooking.component.js    // 组件配置
│   ├── cooking.conf.js         // 总体配置
│   ├── cooking.demo.js         // 用例配置
│   └── release.sh              // 执行文件
└── .babelrc                    // babel配置
```



### 组件开发步骤
> 第一步：在`src/components/`文件夹下面新建目录 <br/>
> 第二步：在`components.json` 文件中添加你的组件目录 <br/>
> 第三步：执行`npm run build:entry` 重新生成入口文件 <br/>
> <br/>
> **注意**：每个组件必须要有一个`name`值，且为必填，为了方便管理和调用，请尽量以`fe-`开头<br/>
> **切记**：这个名字就是组件调用时使用的名字 <br/>
> 生成npm 文件和组件文件 直接运行 `npm run dist`

### 组件调用步骤
> 第一步：安装组件 `npm install feui@latest --save-dev` <br/>
> 第二步：在项目的`入口文件` 中引入组件<br/>
> `import Feui from 'feui'` <br/>
> `Vue.use(Feui)` <br/>
> 引入样式文件 <br/>
> `import 'feui/lib/style.min.css'` <br/>
> 重启一下就可以使用了 so easy!<br/>


### 组件目录

[1.用户接口文档](#1)  
 &nbsp; &nbsp; [ 1.1文档1](#1.1)  
 &nbsp; &nbsp; [ 1.2文档2](#1.2)  
 &nbsp; &nbsp; [ 1.3文档3](#1.3)  


<h2 id='1'>一、文档标题</h2>
<h3 id='1.1'>-1、文档标题1</h3>
<h3 id='1.2'>-2、文档标题2</h3>
<h3 id='1.3'>-3、文档标题3</h3>