﻿# 说明
Koa2 项目脚手架

在bin/www中添加 require('babel-core/register')，使项目支持import


# 命令
* npm run watch(nodemon app.js) 开发命令 每次js文件修改后，node就会自动重启
* npm run mysql-init 数据库初始化

## 流程
* Model层，使用sequelize定义数据结构，包括数据校验
* Control层，纯函数，调用Model，对Model进行增删改查，并返回结果到API（数据错误抛出尽量在这一层）
* API层，权限控制，调用Control实现业务

![Alt 流程图](https://raw.githubusercontent.com/milolu/koa2-seed/master/koa.png)

## 中间件
* check-permission 权限验证中间件，设置ctx.state.permission = ['login', 'user']来验证该接口所需要的权限，否则抛出异常
* res-formater 返回数据格式化，接口所有异常都在此处梳理

### 日志
2017.4.28 支持文件上传功能（上传目录在app/config.js中配置）
