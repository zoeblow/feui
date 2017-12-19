# feui 新更改构建工具写法
<div align="center" >  
<img src="https://git.oschina.net/zoeblow/feui/raw/master/static/feui.png" width="180" alt="">
</div>

### 目录结构
```
├── Readme.md                   // help
├── package.json                // 应用依赖源
├── static                      // 静态文件
├── components                  // 组件目录
│   ├── button                  // 组件
│   │   └── index.vue           // 此组件主体/入口
│   └── ……                
│   ├── feui-css                // 样式文件
│   ├── utils                   // 工具类文件夹
│   └── index.js                // 组件入口文件
├── node_modules                // 依赖文件
├── lib                         // 组件生成的可用npm文件夹
│   ├── index.js                // npm 入口文件
│   ├── ……                      
│   └── feui-css                // npm 样式文件
├── doc                         // 文档目录
├── build                       // 配置
│   ├── bin
│   │   ├── build-components.js // 编译组件配置
│   │   ├── build-entry.js      // 生成组件模板
│   │   ├── build-lib.js        // 生成组件文件
│   │   ├── build-style-entry.js// 生成组件样式文件
│   │   └── get-components.js   // 获取组件配置
│   ├── build.js                // 构建文件
│   ├── webpack.build.js        // 通用配置
│   ├── webpack.config.dev.js   // 组件开发配置
│   ├── webpack.config.prod.js  // 组件发布配置
│   └── release.sh              // 执行文件
└── .babelrc                    // babel配置
```



### 组件开发步骤
> 在`packages/`文件夹下面新建组件目录 <br/>
> 在文件夹下面新建`index.vue`文件 <br/>
> **注意**：每个组件必须要有一个`name`值，且为必填，为了方便管理和调用，请尽量以`fe-`开头<br/>
> **切记**：这个名字就是组件调用时使用的名字 <br/>
> 生成npm 文件和组件文件 直接运行 `npm run dist`

### 组件调用步骤
> 第一步：安装组件 `npm install feui@latest --save-dev` <br/>
> 第二步：在项目中引入组件<br/>
> 使用 babel-plugin-import (推荐) <br/>
> 在 .babelrc <br/>
> "plugins": [["import", { "libraryName": "feui", "style": true }]]<br/>
> `Vue.use(Feui)` <br/>
> 在代码中直接使用`feui`组件 <br/>
> `import { Badge } from 'feui';` <br/>
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