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

**事件处理的方式**

1. 通过onXxx属性指定事件处理函数(注意大小写)
   1. React使用的是自定义(合成)事件, 而不是使用原生DOM事件 --- 为了更好的兼容性
   2. React中的事件是通过事件委托方式处理的(委托给组件最外层的元素) --- 为了高效
2. 通过event.target得到发生事件的DOM元素对象 --- 不要过度使用Ref

``` jsx
<script type="text/babel">
    class Demo extends React.Component {
        myRef = React.createRef()
        render() {
            return (
                <div>
                    <input type="text" placeholder="输入" ref={this.myRef}/>
                    <button onClick={this.showData}>点击</button>
                    {/*发生事件的元素刚好是要操作的元素*/}
                    <input type="text" placeholder="失去焦点" onBlur={this.showData2}/>
                </div>
            )
        }
        showData = () => {
            const {current} = this.myRef
            alert(current.value)
        }
        showData2 = (event) => {
            const {value} = event.target
            alert(value)
        }
    }
    ReactDOM.render(<Demo/>, document.getElementById("test"))
</script>
```

###### 为什么第二个input元素可以使用event.target?

>  因为发生事件的元素刚好是要操作的元素

-----



#### 2.6 收集表单数据

**表单分为两种**

1. 非受控组件 --- 现用现取

   ``` jsx
   <script type="text/babel">
       class Login extends React.Component {
           render() {
               return (
                   <form action="http://www.atguigu.com" onSubmit={this.handleSubmit}>
                       username: <input type="text" name="username" ref={c => this.username = c}/>
                       <br/>
                       password: <input type="password" name="password" ref={c => this.password = c}/>
                       <br/>
                       <button>Login</button>
                   </form>
               )
           }
           // 非受控组件: 现用现取
           handleSubmit = (event) => {
               event.preventDefault() // 阻止表单提交
               const {username, password} = this
               alert(`你输入的是${username.value}, 密码是${password.value}`)
           }
       }
       ReactDOM.render(<Login/>, document.getElementById("test"))
   </script>
   ```

   - **现用现取**: 当用户触发事件才去获取获取值

2. 受控组件

   ``` jsx
   <script type="text/babel">
       class Login extends React.Component {
           state = {
               username: "",
               password: ""
           }
           render() {
               return (
                   <form action="http://www.atguigu.com" onSubmit={this.handleSubmit}>
                       username: <input type="text" name="username" onChange={this.updateUsername}/>
                       <br/>
                       password: <input type="password" name="password" onChange={this.updatePassword}/>
                       <br/>
                       <button>Login</button>
                   </form>
               )
           }
           handleSubmit = (event) => {
               event.preventDefault() // 阻止表单提交
               const {username, password} = this.state
               alert(`你输入的是${username}, 密码是${password}`)
           }
           updateUsername = (event) => {
               const {value} = event.target
               this.setState({
                   username: value
               })
           }
           updatePassword = (event) => {
               const {value} = event.target
               this.setState({
                   password: value
               })
           }
       }
       ReactDOM.render(<Login/>, document.getElementById("test"))
   </script>
   ```

   - **好处**: 可以减少ref的使用

-----



#### 2.7 高阶函数与函数柯里化

##### 2.7.1 高阶函数

- **普通函数**

  ``` js
  updateUsername = (event) => {
      const {value} = event.target
      this.setState({
          username: value
      })
  }
  updatePassword = (event) => {
      const {value} = event.target
      this.setState({
          password: value
      })
  }
  ```

- **高阶函数**

  ``` js
  saveFormData = (dataType) => {
      return (event) => {
          const {value} = event.target
          this.setState({
              [dataType]: value
          })
      }
  }
  ```

**如果一个函数符合下面2个规范中的任何一个, 那该函数就是高阶函数**

1. 若函数接收的参数是一个函数, 那么就可以称之为高阶函数
2. 若函数调用的返回值依然是一个函数, 那么就可以称之为高阶函数
3. 常见的高阶函数: Promise、setTimeout、arr.map()等



##### 2.7.2 函数柯里化

- **非柯里化**

  ``` js
  function sum(a, b, c) {
      return a + b + c
  }
  const result = sum(1, 2, 3)
  console.log(result);
  ```

  

- **柯里化**

  ``` js
  function sum02(a) {
      return (b) => {
          return (c) => {
              return a + b + c
          }
      }
  }
  const result02 = sum02(1)(2)(3)
  console.log(result02);
  ```

**函数柯里化** 通过函数调用, 继续返回函数的方式, 实现多次接收参数最后统一处理的函数编码形式



##### 2.7.3 不使用柯里化实现同样效果

- **柯里化**

``` jsx
<script type="text/babel">
    //#region
    /*
    高阶函数: 如果一个函数符合下面2个规范中的任何一个, 那该函数就是高阶函数.
    1. 若A函数, 接收的参数是一个函数, 那么A就可以称之为高阶函数
    2. 若A函数, 调用的返回值依然是一个函数, 那么A就可以称之为高阶函数
    常见的高阶函数有: Promise setTimeout arr.map()等等

    函数的柯里化: 通过函数调用继续返回函数的方式, 实现多次接收参数最后统一处理的函数编码形式
    */
    class Login extends React.Component {
        state = {
            username: "",
            password: ""
        }
        render() {
            return (
                <form action="http://www.atguigu.com" onSubmit={this.handleSubmit}>
                    username: <input type="text" name="username" onChange={this.saveFormData("username")}/>
                    <br/>
                    password: <input type="password" name="password" onChange={this.saveFormData("password")}/>
                    <br/>
                    <button>Login</button>
                </form>
            )
        }
        handleSubmit = (event) => {
            event.preventDefault() // 阻止表单提交
            const {username, password} = this.state
            alert(`你输入的是${username}, 密码是${password}`)
        }
        saveFormData = (dataType) => {
            return (event) => {
                const {value} = event.target
                this.setState({
                    [dataType]: value
                })
            }
        }
    }
    ReactDOM.render(<Login/>, document.getElementById("test"))
</script>
```

- **非柯里化**

``` jsx
<script type="text/babel">
    class Login extends React.Component {
        state = {
            username: "",
            password: ""
        }
        render() {
            return (
                <form action="http://www.atguigu.com" onSubmit={this.handleSubmit}>
                    username: <input type="text" name="username" onChange={(event) => {this.saveFormData("username", event.target.value)}}/>
                    <br/>
                    password: <input type="password" name="password" onChange={(event) => {this.saveFormData("password", event.target.value)}}/>
                    <br/>
                    <button>Login</button>
                </form>
            )
        }
        handleSubmit = (event) => {
            event.preventDefault() // 阻止表单提交
            const {username, password} = this.state
            alert(`你输入的是${username}, 密码是${password}`)
        }
        saveFormData = (dataType, value) => {
            this.setState({
                [dataType]: value
            })
        }
    }
    ReactDOM.render(<Login/>, document.getElementById("test"))
</script>
```

-----



#### 2.8 生命周期

##### 2.8.1 React生命周期(旧)

![生命周期---旧](/images/React生命周期(旧).png)

**各个阶段的生命周期函数调用顺序**

- **初始化阶段** 由ReactDOM.render()触发
  1. constructor()
  2. componentWillMount()
  3. render()
  4. componentDidMount() ===> 常用, 通常在这个钩子里做些初始化的事情
- **更新阶段** 由组件内部this.state()、强制刷新this.forceUpdate()或父组件render触发
  1. shouldComponentupdate()
  2. componentWillUpdate()
  3. render() ===> 常用
  4. componentDidUpdate()
- **卸载组件** 由ReactDOM.unmountComponentAtNode()触发
  1. componentWillUnmount ===> 常用, 通常做些收尾的事情

| 钩子函数名            | 作用                               |
| --------------------- | ---------------------------------- |
| componentWillMount    | 组件将要挂载时调用                 |
| componentDidMount     | 组件已经挂载时调用                 |
| shouldComponentUpdate | 控制组件更新的阀门(默认为输出true) |
| componentWillUpdate   | 组件将要更新时调用                 |
| componentDidUpdate    | 组件已经更新时调用                 |
| componentWillUnmount  | 组件将被卸载时调用                 |



##### 2.8.2 React生命周期(新)

![React生命周期(新)](./images/React生命周期(新).png)

**各个阶段生命周期函数调用顺序**

- **初始化阶段** 由ReactDOM.render()触发 --- 初次渲染
  1. constructor()
  2. getDerivedStateFromProps()
  3. render()
  4. componentDidMount()
- **更新阶段** 由组件内部this.setState、this.forceUpdate()或父组件更新render触发
  1. getDerivedStateFromProps()
  2. shouldComponentUpdate()
  3. render()
  4. getSnapshotBeforeUpdate()
  5. componentDidUpdate()
- **卸载组件** 由ReactDOMunmountComponentAtNode()触发
  1. componentWillUnmount()

###### 17.X新添加的钩子函数

| 新添加的钩子函数         | 作用                                     |
| ------------------------ | ---------------------------------------- |
| getDerivedStateFromProps | 若state的值在任何时候都取决于Props时调用 |
| getSnapshotBeforeUpdate  | 在更新状态之前获取获取快照               |

###### 即将被抛弃的钩子

1. componentWillMount
2. componentWillReceiveProps
3. componentWillUpdate

现在使用会出现警告, 下一个大版本需要加上UNSAFE_前缀才能使用, 以后可能会被废弃, 不建议使用.



##### 2.8.3 getSnapshotBeforeUpdate案例

``` jsx
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>getSnapshotBeforeUpdate</title>
  <style>
    .list {
      width: 200px;
      height: 150px;
      background-color: skyblue;
      overflow: auto;
    }
    .news {
      height: 30px;
    }
  </style>
</head>
<body>
  <div id="test"></div>
  <script src="../js/17.0.1/react.development.js"></script>
  <script src="../js/17.0.1/react-dom.development.js"></script>
  <script src="../js/17.0.1/babel.min.js"></script>
  <script src="../js/17.0.1/prop-types.js"></script>
  <script type="text/babel">
    class NewsList extends React.Component {

      state = {
        newsArr: []
      }

      componentDidMount() {
        setInterval(() => {
          const {newsArr} = this.state
          const news = "新闻" + (newsArr.length + 1)
          this.setState({
            newsArr: [news, ...newsArr]
          })
        }, 1000)
      }

      getSnapshotBeforeUpdate() {
        return this.refs.list.scrollHeight
      }

      componentDidUpdate(prevProps, prevState, snapshotValue) {
        // 当状态更新时, 获取更新前的list的高度, 减去显示list的高度, 获取添加项的高度
        this.refs.list.scrollTop += this.refs.list.scrollHeight - snapshotValue
      }

      render() {
        return (
          <div className="list" ref="list">
            {this.state.newsArr.map((n, index) => {
              return <div className="news" key={index}>{n}</div>
            })}
          </div>
        )
      }
    }
    ReactDOM.render(<NewsList/>, document.getElementById("test"))
  </script>
</body>
</html>
```

-----



#### 2.9 DOM的Diffing算法

##### 2.9.1 验证

``` jsx
<script type="text/babel">
    class Time extends React.Component {
        state = {
            date: new Date()
        }

        componentDidMount() {
            setInterval(() => {
                this.setState({
                    date: new Date()
                })
            }, 1000)
        }

        render() {
            <div>
                <h1>Hello</h1>
                <input type="text"/><br/>
                <span>现在是: {this.state.date.toTimeString()}</span>
            </div>
        }
    }
    ReactDOM.render(<Time/>, document.getElementById("test"))
</script>
```

- 当<span>标签中的事件改变时, input框中的内容并不会改变, 这就是Diffing算法



##### 2.9.2 Key的作用

###### 经典面试题

1. React/Vue中的key有什么作用(key的内部原理)
2. 为什么遍历列表时, key最好不要用index?

###### 虚拟DOM中key的作用

1. **简单来说** key时虚拟DOM对象的表示, 在更新显示时key起着极其重要的作用.

2. **详细来说** 当状态中的数据发生变化时, React会根据**<u>新数据</u>**生成**<u>新的虚拟DOM</u>**, 随后React进行新的虚拟DOM与旧的虚拟DOM的diff比较, 比较规则如下:

   a. 若虚拟DOM中找到了与新虚拟DOM相同的key:

      1. 若虚拟DOM中内容没变, 直接使用之前的真实DOM
      2. 若虚拟DOM中内容变了, 则生成新的真实DOM, 随后替换掉页面之前的真实DOM

   b. 旧虚拟DOM中未找到与新虚拟DOM相同的key

      根据数据创建新的真实DOM, 随后渲染到页面

###### 用index作为key可能会引发的问题

1. 若对数据进行: 逆序添加、逆序删除等破坏顺序操作

   ​	会产生没有必要的真实DOM更新 ==> 界面效果没有问题， 但是效率低

2. 如果结构还包含输入类的DOM

   ​	会产生错误DOM更新 ==> 界面有问题

3. **PS** 如果不存在对数据的逆序添加、逆序删除等破坏操作，仅用于渲染列表用于展示，使用index作为key是没有问题的

###### 开发中如何选择key？

1. 最好使用每条数据的唯一标识作为key，比如ID、手机号、身份证号、学号等唯一值
2. 如果确定只是简单的展示数据，用index也是可以的

###### DEMO

``` jsx
<script type="text/babel">
    class Person extends React.Component {
        state = {
            persons: [
                {id: 1, name: "Jater", age: 21},
                {id: 2, name: "Jam", age: 23}
            ]
        }

        addPerson = () => {
            const {persons} = this.state
            const p = {id: persons.length, name: "Shit", age: 22}
            this.setState({
                persons: [p, ...persons]
            })
        }

        render() {
            return (
                <div>
                    <h2>Show Personal Info</h2>
                    <h3>Use Index as Key</h3>
                    <button onClick={this.addPerson}>Add New Person</button>
                    <ul>
                        {
                            this.state.persons.map((person, index) => {
                                return <li key={index}>{person.name} --- {person.age}</li>
                            })
                        }
                    </ul>
                    <hr/>
                    <hr/>
                    <h3>Use ID as Key</h3>
                    <ul>
                        {
                            this.state.persons.map((person) => {
                                return <li key={person.id}>{person.name} --- {person.age}</li>
                            })
                        }
                    </ul>
                </div>
            )
        }
    }
    ReactDOM.render(<Person/>, document.getElementById("test"))
</script>
```

- **慢动作回放 --- 使用index索引值作为key**

  > 数据:
  >     	{id: 1, name: "Jater", age: 21}
  >    	 {id: 2, name: "Jam", age: 23}
  >  初始的虚拟DOM:
  >     	<li key=0>Jater --- 21</li>
  >     	<li key=1>Jam --- 23</li>

  > 更新后的数据:
  > 	{id:3, name: "Shit", age: 22}
  > 	{id: 1, name: "Jater", age: 21}
  > 	{id: 2, name: "Jam", age: 23}
  > 更新后的虚拟DOM:
  > 	<li key=0>Shit --- 22</li>
  > 	<li key=1>Jater --- 21</li>
  > 	<li key=2>Jam --- 23</li>
  
  **所有虚拟DOM都改变, 所以数据都更新**
  
- **慢动作回放 --- 使用id唯一标识作为key**

  >   **数据**:
  >   {id: 1, name: "Jater", age: 21}
  >   {id: 2, name: "Jam", age: 23}
  >   **初始的虚拟DOM**:
  >   <li key=1>Jater --- 21</li>
  >   <li key=2>Jam --- 23</li>

  > **更新后的数据**:
  > {id:3, name: "Shit", age: 22}
  > {id: 1, name: "Jater", age: 21}
  > {id: 2, name: "Jam", age: 23}
  > **更新后的虚拟DOM**:
  > <li key=3>Shit --- 22</li>
  > <li key=1>Jater --- 21</li>
  > <li key=2>Jam --- 23</li>

  **虚拟DOM是添加key=3的标签, 所以不需要全部更新**

-----



## 3. React应用(基于脚手架)

#### 3.1 使用create-react-app创建React应用

##### 3.1.1 React脚手架

1. **脚手架** 用来帮助程序员快速创建一个基于xxx库的模板项目
2. React提供了一个用于创建React项目的脚手架库: create-react-app
3. 项目的整体技术框架: React + webpack + ES6 + eslint
4. 使用脚手架开发的项目的特点: 模块化、组件化、工程化



##### 3.1.2 创建项目并启动
​	step 1: 全局安装: npm install create-react-app -g
​	step 2: 创建项目: create-react-app hello-react
​	step 3: 进入项目: cd hello-react
​	step 4: 启动项目: npm start



##### 3.1.3 React项目常用配置

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <!-- %PUBLIC_URL%代表public文件夹的路径 -->
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <!-- 移动端适配 -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- 用于配置浏览器页签 + 地址栏的颜色(仅支持Android手机浏览器) -->
    <meta name="theme-color" content="#000000" />
    <!-- 简介 -->
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <!-- 苹果手机主屏幕图标 -->
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!-- 应用加壳时的配置文件 -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <!-- 浏览器不支持JavaScript显示 -->
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

-----



#### 3.2 Hello React脚手架版

- 可以使用.jsx替代React的.js文件

-----



#### 3.3 样式模块化

- 使用xxx.module.css的形式创建css文件
- 在jsx/js文件中引入 `import hello from "./Hello.module.css"`
- 使用: `className={hello.title}`

-----



#### 3.4 Todo List案例

- defaultChecked和checked的区别
- 父子组件通信
- state在哪, 操作状态的方法就在哪

-----



#### 3.5 React脚手架配置代理总结

##### 方法一

> 在package.json中追加如下配置

```json
"proxy": "http://localhost:5000"
```

**说明**

- **优点** 配置简单, 前端请求资源时可以不加任何前缀
- **缺点** 不能配置多个代理
- **工作方式** 上述方式配置代理, 当请求了3000不存在的资源时, 那么请求会转发给5000(优先匹配前端资源)

##### 方法二

1. **step one** 创建代理配置文件

``` none
在src下创建配置文件: setupProxy.js
```

2. **step two** 编写setupProxy.js配置具体代理规则 
``` js
const proxy = require("http-proxy-middleware")

module.exports = function (app) {
  app.use(
    proxy("/api1", { // 遇见api1前缀的请求就会触发该代理配置
      target: "http://localhost:5000", // 请求转发给谁
      changeOrigin: true, // 控制服务器收到的请求头中Host字段的值
      /*
      	changeOrigin设置为true时, 服务器收到的请求头中的Host为: localhost:5000
      	changeOrigin设置为false时, 服务器收到的请求头中的Host为: localhost:3000
      	changeOrigin默认值为false, 但我们一般将changeOrigin设置为true
      */
      // 重写请求路径
      pathRewrite: {
        "^/api1": ""
      }
    }),
    proxy("/api2", {
      target: "http://localhost:5001",
      changeOrigin: true,
      pathRewrite: {
        "^/api2": ""
      }
    })
  )
}
```

**说明**

- **优点** 可以配置多个代理, 可以灵活的控制请求是否走代理.
- **缺点** 配置繁琐, 前端请求资源时必须加前缀

-----



## 4. React Ajax

#### 4.1 Github用户搜索案例 --- axios

``` js
axios.get(`/api1/search/users?q=${keyword}`).then(
    response => {
        this.props.updateAppState({
            isLoading: false,
            users: response.data.items
        })
    },
    error => {
        this.props.updateAppState({
            isLoading: false,
            err: error.message
        })
    }
)
```

-----



#### 4.2 消息订阅&发布机制 --- pubsub-js

- **`yarn add pubsub-js`**
- **`import PubSub from "pubsub-js"`**

``` js
// List.jsx
componentDidMount() {
    this.token = PubSub.subscribe("jater", (_, state) => {
        this.setState(state)
    })
}

componentWillUnmount() {
    PubSub.unsubscribe(this.token)
}
```

``` jsx
search = () => {
    const {keywordElement: {value: keyword}} = this
    PubSub.publish("jater", {
        isFirst: false,
        isLoading: true
    })
    axios.get(`/api1/search/users2?q=${keyword}`).then(
        response => {
            PubSub.publish("jater", {
                isLoading: false,
                users: response.data.items
            })
        },
        error => {
            PubSub.publish("jater", {
                isLoading: false,
                err: error.message
            })
        }
    )
}
```

----



#### 4.3 fetch发送请求(关注分离的设计思想)

``` jsx
fetch(`/api1/search/users2?q=${keyword}`).then(
    response => {
        console.log("Success", response);
        return response.json()
    }
).then(
    response => {
        console.log("Success", response);
    }
).catch(
    error => {
        console.log("Failed", error);
    }
)
```

``` jsx
try {
    const response = await fetch(`/api1/search/users2?q=${keyword}`)
    const data = await response.json()
    PubSub.publish("jater", {
        isLoading: false,
        users: data.items
    })
} catch (error) {
    PubSub.publish("jater", {
        isLoading: false,
        err: error.message
    })
}
```

-----



# Others

## 1. Babel

##### Babel能干什么

1. ES6 ==> ES5
2. jsx ==> js

