<!--
 * @Description:
 * @Author: Daito Chai
 * @Date: 2020-11-03 20:43:07
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-07-18 22:47:51
-->

## 博客后台

```
启动 MySQL
进入 MySQL 安装目录
例如 C:\mysql-8.0.22-winx64\bin
cmd 以管理员权限运行
启动命令 net start mysql
show databases
切换数据库：user test
显示表：show tables

进入 server 根目录运行
yarn start  // npm start

localhost:3000
```

打包

```
yarn build  // npm build
```

### 实现功能

登录、分页、查询、标签列表、分类列表、收藏列表、文章列表、发布文章时间轴、文章访问次数统计、关于、回到顶部、博客适配移动端、后台适配移动端、后台对访问文章次数进行可视化、评论功能、渲染优化、打包优化、mobx 管理数据
