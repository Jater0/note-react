# React Whole

## 1. React Basic

#### 1.1 React简介

##### 1.1.1 React特点

1. **声明式编程**
2. **组件化编程**
3. **React Native编写原生应用**
4. **高效(优秀的Diffinxxg算法)**



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



## 2. 面向组件编程

#### 2.1 基本理解与使用

##### 2.1.1 函数式组件

``` react
<script type="text/babel">
    // 1. 创建函数式组件
    function Demo() {
        return <h1>I am Jater</h1>
    }
    // 2. 渲染组件到页面
    ReactDOM.render(<Demo/>, document.getElementById("test"))
</script>
```

###### **执行了`RenderDOM.render(<Demo/>....)`后, 发生了什么事情**

1. React解析组件标签, 找到Demo组件
2. 发现组件是使用函数定义的, 随后调用该函数, 将返回的虚拟DOM转换成真实DOM, 随后呈现在页面中.



##### 2.1.2 类式组件

``` react
<script type="text/babel">
    // 1. 创建类式组件
    class MyComponent extends React.Component {
        render() {
            // render()是放在哪里的? MyComponent的原型对象上, 供实例使用
            // render()中的this是谁? MyComponent的实例对象 <=> MyComponent组件实例对象
            return <h1>I am Jater</h1>
        }
    }
    // 2. 渲染组件到界面
    ReactDOM.render(<MyComponent/>, document.getElementById("test"))
</script>
```

###### **执行了`ReactDOM.render(<MyComponent/> ...)`后, 发生了什么?**

1. **执行了ReactDOM.render(<MyComponent/> ...)后, 发生了什么?**
2. **发现组件是使用类定义的, 随后new出来该类的实例, 并通过该实例调用到原型上的render方法.**
3. **将render返回的虚拟DOM转换为真实DOM, 随后呈现在页面中.**

###### **MyComponent的render()是放在哪里的?**

- MyComponent的原型对象上, 供实例使用

###### MyComponent中的this是谁?

- MyComponent的实例对象 <=> MyComponent组件实例对象

-----



#### 2.2 组件实例的三大核心属性 ---- state

##### 2.2.1 Demo

``` react
<script type="text/babel">
    class Weather extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isHot: true,
                wind: "微风"
            }
            // 解决changeWeatherState中this指向的问题
            this.changeState = this.changeWeatherState.bind(this)
        }

        // render调用 1+n次 1是初始化 n是状态更新次数
        render() {
            const {isHot, wind} = this.state
            // onClick JSX语法驼峰命名
            return <h2 onClick={this.changeState}>So {isHot?"Hot":"Cold"} today, {wind}</h2>
        }

        // changeWeatherState点击几次调用几次
        changeWeatherState() {
            // changeWeatherState放在哪里? Weather的原型对象上, 供实例使用
            // 由于changeWeatherState是转为onClick的回调, 所以不是通过实例调用的, 是直接调用
            // 类中的方法默认开启了局部的严格模式, 所以changeWeatherState中的this为undefined
            const {isHot} = this.state
            // TOP PS: 状态(state)不可直接更改
            // this.state.isHot = !isHot ×
            // state必须通过setState更新, 且更新是一种合并, 不是替换
            this.setState({
                isHot: !isHot
            })
        }
    }
    ReactDOM.render(<Weather/>, document.getElementById("test"))
</script>
```

###### 如何定义一个state

``` react
this.state = {
    name: "Jater",
    age: 21
}
```

###### 如何给JSX标签添加事件

``` jsx
<h2 onClick={this.类方法名}></h2>
// JSX语法 驼峰命名法
```

###### 为什么onClick方法里不能直接使用this.changeWeatherState?

- **由于changeWeatherState方法中使用了this关键字, 而changeWeatherState是转为onClick的回调, 所以不是通过实例调用的, 是直接调用的**
- **类中的方法默认开启局部的严格模式, 所以changeWeatherState中的this为undefined, 并不是Weather**

###### 如何解决this指向undefined

`this.changeState= this.changeWeatherState.bind(this)`

> 使用bind函数用changeWeatherState产生一个新的Weather对象的方法赋值给新的变量
>
> 在onClick方法中使用changeState, 间接调用changeWeatherState

###### 如何修改state的值

- **state不可直接被修改**

- **`this.state.isHot = !isHot` 是错误的语法**

- **state必须通过setState更新, 且更新是一种合并, 不是替换**

  `this.setState({isHot: !isHot})`

###### 各个函数的执行次数

- `构造函数` 1次
- `render` 1+n次; 1为初始化, n为状态更新次数
- `changeWeatherState` 点击几次执行几次



##### 2.2.2 State的简单写法(推荐使用)

``` jsx
<script type="text/babel">
    class Weather extends React.Component {
        // 初始化状态
        state = {
            isHot: false,
            wind: "微风"
        }

        render() {
            const {isHot, wind} = this.state
            return <h1 onClick={this.changeWeather}>So {isHot?"Hot":"Cold"} Today, {wind}</h1>
        }

        // 自定义方法: 要用赋值语句的形式 + 箭头函数
        changeWeather = () => {
            const {isHot} = this.state
            this.setState({
                isHot: !isHot
            })
        }
    }

    ReactDOM.render(<Weather/>, document.getElementById("test"))
</script>
```



##### 2.2.3 理解

1. **state是组件对象最重要的属性, 值是对象(可以包含多个key-value的组合)**
2. **组件被称为"状态机", 通过更新组件的state来更新对象的页面显示(重新渲染组件)**



##### 2.2.4 强烈注意

1. **组件中render方法中的this为组件实例对象**
2. **组件自定义的方法中this为undefined.如何解决?**
   1. **强制绑定this: 通过函数对象的bind()**
   2. **箭头函数**
3. **状态数据, 不能直接修改或更新**

-----



#### 2.3 组件实例的三大核心属性 --- props

##### 2.3.1 props传值

``` jsx
class Person extends React.Component {
    render() {
        const {name, age, gender} = this.props
        return (
            <ul>
                <li>name: {name}</li>
                <li>age: {age + 1}</li>
                <li>gender: {gender}</li>
            </ul>
        )
    }
}
ReactDOM.render(<Person name="Jater" age={18} gender="male"/>, document.getElementById("test"))
```

##### 2.3.2 props属性限制

``` jsx
<!-- 用于对组件标签属性进行限制 -->
<script src="../js/prop-types.js"></script>
<script type="text/babel">
    class Person extends React.Component {
        render() {
            const {name, age, gender} = this.props
            // props是只读的
            return (
                <ul>
                    <li>name: {name}</li>
                    <li>age: {age + 1}</li>
                    <li>gender: {gender}</li>
                </ul>
            ) 
        }
    }
    // 对标签属性进行类型、必要性的限制
    Person.propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        gender: PropTypes.string,
        speak: PropTypes.func
    }
    // 指定默认标签属性值
    Person.defaultProps = {
        gender: "male",
        age: 18
    }
    const p1 = {name: "Jater", age: 21, gender: "male"}
    const p2 = {name: "Jam", age: 23, gender: "female"}
    ReactDOM.render(<Person {...p1} speak={speak}/>, document.getElementById("test00"))
    ReactDOM.render(<Person {...p2}/>, document.getElementById("test01"))

    function speak() {
        console.log("speaking");
    }
</script>
```

- 15.5前使用`React.PropTypes.string`
- 15.5后使用`PropTypes.string`



- `propTypes`: 对标签属性进行类型、必要性的限制
- `defaultProps`: 指定默认标签属性



##### 2.3.3 Props的简单写法

```  react
class Person extends React.Component {
    render() {
        const {name, age, gender} = this.props
        // props是只读的
        return (
            <ul>
                <li>name: {name}</li>
                <li>age: {age + 1}</li>
                <li>gender: {gender}</li>
            </ul>
        )
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        gender: PropTypes.string,
        speak: PropTypes.func
    }

    static defaultProps = {
        gender: "male",
        age: 18
	}	
}
```



##### 2.3.4 函数式组件使用props

``` react
<script type="text/babel">
    function person(props) {
        const {name, age, gender} = props
        return (
            <ul>
                <li>name: {name}</li>
                <li>age: {age}</li>
                <li>gender: {gender}</li>
            </ul>
        )
    }
    // 对标签属性进行类型、必要性的限制
    Person.propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        gender: PropTypes.string,
        speak: PropTypes.func
    }
    // 指定默认标签属性值
    Person.defaultProps = {
        gender: "male",
        age: 18
    }
    const p1 = {name: "Jater", age: 21, gender: "male"}
    const p2 = {name: "Jam", age: 23, gender: "female"}
    ReactDOM.render(<Person {...p1}/>, document.getElementById("test00"))
    ReactDOM.render(<Person {...p2}/>, document.getElementById("test01"))
</script>
```

-----



#### 2.4 组件实例的三大核心 --- ref

##### 2.4.1 字符串类型的Ref(官方不推荐)

``` jsx
<script type="text/babel">
    class Demo extends React.Component {
        // 字符串类型的Ref(官方不推荐)
        render() {
            return (
                <div>
                    <input type="text" placeholder="点击按钮提示数据" ref="input1"/>&nbsp;
                    <button onClick={this.showData}>点击显示左侧数据</button>&nbsp;
                    <input type="text" placeholder="失去焦点提示数据" onBlur={this.showData2} ref="input2"/>  
                </div>
            )
        }
        showData = () => {
            const {input1} = this.refs
            alert(input1.value)
        }
        showData2 = () => {
            const {input2} = this.refs
            alert(input2.value)
        }
    }
    ReactDOM.render(<Demo/>, document.getElementById("test"))
</script>
```

- 格式: `ref="input1"`
- 调用: `this.refs.input1`
- `ref`获取的是当前这个节点的信息



##### 2.4.2 回调函数形式的Ref

``` jsx
<script type="text/babel">
    class Demo extends React.Component {
        render() {
            return (
                <div>
                    <input type="text" placeholder="输入" ref={currentNode => this.input1 = currentNode}/>
                    <button onClick={this.showData}>点击</button>
                    <input type="text" ref={currentNode => this.input2 = currentNode} onBlur={this.showData2}/>
                </div>
            )
        }
        showData = () => {
            const {input1} = this
            alert(input1.value)
        }
        showData2 = () => {
            const {input2} = this
            alert(input2.value)
        }
    }
    ReactDOM.render(<Demo/>, document.getElementById("test"))
</script>
```

- 格式: `ref={currentNode => this.input1 = currentNode}`
- 调用: `this.input1`



##### 2.4.3 回调函数式Ref的执行次数

1. 如果是`ref={c => this.input1 = c}`的格式

   - 调用的次数为 `1+n*2`, 1为初始化的次数, n为状态更新的次数

2. 如果是`ref={this.saveRef}`的格式

   ``` js
   saveRef = (currentNode) => {
       this.input1 = currentNode
   }
   ```

   - 调用的次数为`1+n`

###### 为什么内联格式下调用的次数为1+n*2次?

> **在更新过程中它会被执行两次的原因是: 第一次传入参数`null`, 然后第二次会传入参数DOM元素.**
>
> **这是因为在每次渲染时会创建一个新的函数实例, 所以React清空旧的Ref并设置新的.**



##### 2.4.4 createRef

``` jsx
<script type="text/babel">
    class Demo extends React.Component {
        myRef = React.createRef()

        render() {
            return (
                <div>
                    <input type="text" placeholder="输入" ref={this.myRef}/>
                    <button onClick={this.showData}>点击</button>
                </div>
            )
        }
        showData = () => {
            const {current} = this.myRef
            alert(current.value)
        }
    }
    ReactDOM.render(<Demo/>, document.getElementById("test"))
  </script>
```

- `React.createRef`调用之后可以返回一个容器, 该容器可以存储被ref标识的节点
- 该容器是"专人专用"的

-----



#### 2.5 React事件处理



# Others

## 1. Babel

##### Babel能干什么

1. ES6 ==> ES5
2. jsx ==> js

