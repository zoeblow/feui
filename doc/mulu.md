```
├── Readme.md                   // help
├── package.json                // 应用依赖源
├── static                      // 静态文件
├── demos                       // feui栗子
├── packages                    // 组件目录
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
