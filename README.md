## vue-co-dialog
基于[co-dialog.js](https://github.com/ZWLTZ/co-dialog) `v2.0.8`弹出框 和 依赖于[vue.js](https://cn.vuejs.org/v2/guide/)`2.5.17`框架封装.

## install
  - npm(cmd)

```bash
npm install co-dialog vue-co-dialog
```

并且你需要再你的文件里添加以下代码：

```js
import Vue from 'vue'
import coog from 'co-dialog'
import VueCoog from 'vue-co-dialog'

Vue.use(VueCoog, coog)
```

## 使用

于是你就可以获得vue绑定的$coog弹出框的API.
你可以想下面这样调用$coog:
```js
Vue.$coog.app('.coog').use('Test', '测试完成', 'success');

this.$coog.app('.coog').use('Test', '测试完成', 'success');
```
