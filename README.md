# React Whole

## 1. React Basic

#### 1.1 React简介

##### 1.1.1 React特点

1. **声明式编程**
2. **组件化编程**
3. **React Native编写原生应用**
4. **高效(优秀的Diffing算法)**

##### 1.1.2 React高效的原因

1. **使用虚拟(virtual)DOM,不总是直接操作页面真实DOM**
2. **DOM Diffing算法,最小化页面重绘**

-----



#### 1.2 React的基本使用

##### 1.2.1 Hello React

``` react
<body>
  <!-- "container" ready -->
  <div id="test"></div>
  <!-- 引入react核心库 -->
  <script type="text/javascript" src="../js/react.development.js"></script>
  <!-- 引入react-dom, 用于支持react操作DOM -->
  <script type="text/javascript" src="../js/react-dom.development.js"></script>
  <!-- 引入babel, 用于将jsx转为js -->
  <script type="text/javascript" src="../js/babel.min.js"></script>
  <script type="text/babel">
    // 1. 创建虚拟DOM
    const VDOM = <h1>Hello, React</h1>
    // 2. 渲染虚拟DOM到页面
    ReactDOM.render(VDOM, document.getElementById("test"))
  </script>
</body>
```

##### 1.2.2 创建虚拟DOM的两种方式

1. **纯JS方式**

``` react
<body>
  <!-- "container" ready -->
  <div id="test"></div>
  <!-- 引入react核心库 -->
  <script type="text/javascript" src="../js/react.development.js"></script>
  <!-- 引入react-dom, 用于支持react操作DOM -->
  <script type="text/javascript" src="../js/react-dom.development.js"></script>
  <script type="text/javascript">
    // 1. 创建虚拟DOM
    const VDOM = React.createElement("h1", {id: "title"}, React.createElement("span", {}, "Hello React"))
    // 2. 渲染虚拟DOM到页面
    ReactDOM.render(VDOM, document.getElementById("test"))
  </script>
</body>
```

2. **JSX方式**

``` react
<body>
  <!-- "container" ready -->
  <div id="test"></div>
  <!-- 引入react核心库 -->
  <script type="text/javascript" src="../js/react.development.js"></script>
  <!-- 引入react-dom, 用于支持react操作DOM -->
  <script type="text/javascript" src="../js/react-dom.development.js"></script>
  <!-- 引入babel, 用于将jsx转为js -->
  <script type="text/javascript" src="../js/babel.min.js"></script>
  <script type="text/babel">
    // 1. 创建虚拟DOM
    const VDOM = <h1>Hello, React</h1>
    // 2. 渲染虚拟DOM到页面
    ReactDOM.render(VDOM, document.getElementById("test"))
  </script>
</body>
```

##### 1.2.3 关于虚拟DOM

1. **本质上是一个Object类型的对象(一般对象)**
2. **虚拟DOM比较"轻量级", 真实DOM比较"重", 因为虚拟DOM是React内部在用, 无需真实DOM那么多的属性**
3. **虚拟DOM最终会被React转换成真实DOM, 呈现在页面上**





#### 1.3 React JSX

# Others

## 1. Babel

##### Babel能干什么

1. ES6 ==> ES5
2. jsx ==> js

