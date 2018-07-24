# AreaSelector 地区选择器 [地区选择器](https://laamginghong.github.io/areaSelector/dist/areaSelector/index.html)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

该项目基于[Angular](https://github.com/angular/angular-cli) 6.0.8。

## Development server 本地开发服务器

Run `ng serve or npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

打开终端运行`ng serve`或者`npm start`来启动本地开发服务器，服务器地址为`http://localhost:4200/`。开发中，当代码发生改变时，本项目会自动刷新重新渲染整个页面。


## Build 打包

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. 

打开终端运行`npm run build`来打包整个项目。该项目打包完成的工程文件会存储在`dist/`目录下。

## Menu 项目目录结构
    |--src
       |--app(页面组件)
          |--area(区组件)
          |--city(市组件）
          |--province(省组件)
          |--street(街道组件)
          |--app.component.css(根组件样式)
          |--app.component.html(根组件页面)
          |--app.component.ts(根组件脚本)
          |--app.module.ts(根组件模块)
          |--broadcast.service.ts(广播服务)
          |--store.service.ts(状态管理store)
       |--assets(静态资源)
          |--pcas-code.json(数据来源)
       |--environments(环境配置)
