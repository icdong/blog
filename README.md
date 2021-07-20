<!--
 * @Description:
 * @Author: Daito Chai
 * @Date: 2020-11-02 21:51:39
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-07-20 11:46:59
-->

# blog

```
前端：react + antd + react-router + es6 + webpack + axios
服务端：koa2 + mysql + sequelize
```

# 数据库

Mac 电脑：数据库账户：root，密码：password

## 博客前台

运行

```
yarn start  // npm start

localhost:3000
```

打包

```
yarn build  // npm build
```

### 实现功能

登录、分页、查询、标签列表、分类列表、收藏列表、文章列表、发布文章时间轴、文章访问次数统计、关于、回到顶部、博客适配移动端、后台适配移动端、后台对访问文章次数进行可视化、评论功能、渲染优化、打包优化、mobx 管理数据

# yarn 常用命令更新所有依赖

```
// 需要手动选择升级的依赖包，按空格键选择，a 键切换所有，i 键反选选择
yarn upgrade-interactive --latest
```
