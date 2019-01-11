# [vue-growingio](https://github.com/aocgame/vue-growingio)

> vuejs growingio埋点插件

## 1. 安装

```shell
npm install vue-growingio --save
```
通过es6模块加载
```javascript
import growingio from 'vue-growingio'
```
使用 vue-growingio 插件
```javascript
Vue.use(growingio, 'YOUR_SITEID_HERE')
```
通过传递 options 参数进行更多设置
```javascript
Vue.use(growingio, options)
```
**options**

| 参数 | 必输 | 默认 | 说明 | 备注 |
|-----|------|-----|-----|------|
| siteId | 是 | | 绑定要接受API请求的统计代码siteid| |

## 2. growingio API

[官方文档](https://docs.growingio.com/)
