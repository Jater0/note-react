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

-----



#### 1.3 React JSX

##### 1.3.1 JSX

1. **Javascript XML**

2. **React定义的一种类似于XML的JS扩展语法: JS + XML**

3. **本质是React.createElement(component, props, ...children)方法的语法糖**

4. **作用: 用来简化创建虚拟DOM**

   a. **写法: `var ele = <h1>Hello JSX!</h1>`**

   b. **PS1: 它不是字符串, 也不是HTML/XML元素**

   c. **PS2: 它最终产生的就是一个JS对象**

5. **标签名任意: HTML标签或其他标签**

##### 1.3.2 JSX语法规则

1. 定义虚拟DOM时, 不要写引号

   ``` react
   const VDOM = <h1>Hello React</h1> √
   const VDOM = "<h1>Hello React</h1>" ×
   ```

2. 标签中混入JS表达式时要用{}

   ``` react
   const VDOM = <h1 id={myId.toLowerCase()}></h1>
   ```

3. 样式的类名指定不要使用'class', 要用'className'

   ``` react
   const VDOM = <h1 className="title"></h1>
   ```

4. 内联样式, 要用style={{...key:value}}的形式去写

   ``` react
   const VDOM = <h1 style={{color:'white', fontSize: "29px"}}></h1>
   // 属性名使用驼峰命名法
   ```

5. 虚拟DOM只有一个根标签

6. 标签必须闭合

   ``` react
   const VDOM = <div><input type="text"></div> ×
   const VDOM = <div><input type="text"/></div> √
   ```

7. 标签首字母

   1. 若小写字母开头, 则将该标签转换为HTML中同名元素, 若HTML中无该标签对应的同名元素, 则报错
   2. 若大写字母开头, React就去渲染对应组件, 若组件没有定义, 则报错

##### 1.3.3 JSX小练习

**如何区分: [JS语句(代码)] 与 [JS表达式]**

1. 表达式: 一个表达式会产生一个值, 可以放在任何一个需要值的地方

   ​	下面这些都是表达式

   	1. mockData
    	2. a + b
    	3. func(1)
    	4. arr.map()
    	5. function test() {}

2. 语句(代码):

   ​	下面这些都是语句(代码):

   	1. if () {}
    	2. for () {}
    	3. switch() {case:xxx}

**遍历数组呈现列表**

``` react
<body>
  <div id="test"></div>
  <script type="text/javascript" src="../js/react.development.js"></script>
  <script type="text/javascript" src="../js/react-dom.development.js"></script>
  <script type="text/javascript" src="../js/babel.min.js"></script>
  <script type="text/babel">
    const mockData = ["Angular", "React", "Vue"]
    const VDOM = (
      <div>
        <h1>前端JS框架</h1>
        <ul>
          {
            mockData.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>  
      </div>
    )
    ReactDOM.render(VDOM, document.getElementById("test"))
  </script>
</body>
```

-----



#### 1.4 模块与组件、模块化与组件化的理解

##### 1.4.1 模块

1. **理解: 向外提供特定功能的JS程序**
2. **为什么要拆分为模块: 随着业务逻辑增加, 代码越来越复杂**
3. **作用: 复用JS, 简化JS的编写, 提高JS运行效率**

##### 1.4.2 组件

1. **理解: 用来实现局部功能效果的代码和资源的集合(html/css/js/image等等)**
2. **为什么: 一个界面的功能更复杂**
3. **作用: 复用编码, 简化项目代码. 提高运行效率**

##### 1.4.3 模块化

​	**当应用的JS都以模块来编写, 这个应用就是一个模块化的应用**

##### 1.4.4 组件化

​	**当应用是多组件的方式实现, 这个应用就是一个组件化的应用**

-----



# Others

## 1. Babel

##### Babel能干什么

1. ES6 ==> ES5
2. jsx ==> js

