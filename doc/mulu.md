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