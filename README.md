# 重构熊猫系统后台

## 技术栈

```
create-react-app + reate-router + mobx + sass
```

## 安装与运行

```
yarn add
yarn link
yarn start
yarn build
yarn analyze
```

## 简介

[原网站](http://pstest.dfth.com) 是由 vue-cli + elementUI 搭建的后台系统，现已废弃，想着无聊就用 react 重构一下，给自己打打基础吧。

## 已完成组件

* `Layout` **纵向布局**，可配置是否固定首尾
* `Divide` **分割线**，仿 ElementUI 的 [Divide](https://element.eleme.cn/#/zh-CN/component/divider)
* `Loading` **等待**，仿 ElementUI 的 [Loading](https://element.eleme.cn/#/zh-CN/component/loading)，但尚不可指令式调用
* `Tabs` **标签页**，粗劣的版本
* `ScrollView` **滚动容器**，包括触底和下拉，大数据量的虚拟滚动
* `DragAble` **拖拽容器**，简单的封装，但实则更应该用函数来做

## 待完成组件

* `Form` **表单**
* `Modal` **弹窗**
* `Notice` **提示**
* `Popover` **气泡**
* `Transition` **过渡效果**