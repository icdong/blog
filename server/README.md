<!--
 * @Description:
 * @Author: Daito Chai
 * @Date: 2020-11-03 20:43:07
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-07-20 15:00:19
-->

## 博客后台

# 数据库操作

```
启动 MySQL

进入 MySQL 安装目录
———————— windows：
例如 C:\mysql-8.0.22-winx64\bin
cmd 以管理员权限运行
启动命令 net start mysql
———————— Mac：
1、启动mysql
sudo /usr/local/mysql/support-files/mysql.server start
2、停止mysql
sudo /usr/local/mysql/support-files/mysql.server stop
3、重启mysql
sudo /usr/local/mysql/support-files/mysql.server restart
```

# 进入 mysql

```
———————— Mac：
方法一：
1.终端输入进入bin 目录（没有环境配置）
cd /usr/local/mysql/bin/
2.mysql登录,输入密码即可
mysql -u root -p

/usr/local/mysql/bin/mysql -u root -p
再输入数据库密码即可

-- 前提：mysql 服务已启动
方法二：
终端输入：open .bash_profile
然后添加：
export  PATH=$PATH:/usr/local/mysql/bin
export  PATH=$PATH:/usr/local/mysql/support-files
关闭配置文件后
终端输入：source .bash_profile
以后在终端可以直接进行登录

mysql -u root -p

退出MYSQL命令：exit （回车）

1.创建数据库
create database 库名;

2.显示所有数据库
show databases;

3.切换数据库
use 库名；

4.删除数据库
drop database 库名;
```

# 数据表操作

```
1.创建数据表
use 库名；
create table 表名 (字段设定列表);

2.显示所有数据表
use 库名;
show tables;

3.某表的数据结构
describe 表名;

4.显示表中所有记录
select * from 表名;

5.删除表
drop table 表名;

6.删除表数据
delete from 表名;
truncate table 表名;
不带where参数的delete语句可以删除mysql表中所有内容；
使用truncate table也可以清空mysql表中所有内容；
(1)但是使用delete清空表中的记录，内容的ID仍然从删除点的ID继续建立，而不是从1开始。而truncate相当于保留了表的结构而重新建立了一张同样的新表。
(2)效率上truncate比delete快。但truncate删除后不记录mysql日志，不可以恢复数据。delete的效果有点像将mysql表中所有记录一条一条删除到删完。
```

```

进入 server 根目录运行
yarn start // npm start

localhost:3000
打包：yarn build // npm build

```

### 实现功能

登录、分页、查询、标签列表、分类列表、收藏列表、文章列表、发布文章时间轴、文章访问次数统计、关于、回到顶部、博客适配移动端、后台适配移动端、后台对访问文章次数进行可视化、评论功能、渲染优化、打包优化、mobx 管理数据
