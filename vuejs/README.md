## Vue.js

Vue.js是目前最好的框架，React是最流行的框架（React还可以开发手机APP，Vue需要借助于Weex进行app开发）

Vue.js/Angular.js/React.js前端三大框架

Vue.js构建用户界面的框架，**只关注视图层**。便于与第三方库或既有项目整合（Vue有配套的第三方类库，可以整合起来做大型项目的开发）


Vue核心的概念是让用户不在操作DOM元素，让程序员可以更多的关注业务逻辑

> 框架与库的区别：
> 框架是一套完整的解决方案，对项目的侵入性较大。库，提供一个小功能（工具），对项目的侵入小。

Node后端中的MVC分层与前端的MVVM分层
- app.js
    - 项目的入口模块，所有请求都是先进入这里处理
    - 没有路由分发的功能，需要调用router.js
- router.js
    - 路由分发处理模块
    - 只负责分发，不负责具体业务的逻辑处理，需要调用controller
- Controller
    - 封装了具体的业务处理逻辑
    - 为了保证职能单一，不负责数据的CRUD，需要调用model层
> router.js和Controller构成Controller层
- Model层
    - 只负责操作数据库，执行对应的SQL，进行数据CRUD
- View层
    - 用户操作了界面，需要进行业务处理，就会通过网络请求去请求侯丹服务器，此时app.js就会监听到
    
MVVM：前端视图分层思想
- M：保存每个页面中单独的数据
- V：每个页面的HTML结构
- VM：调度者，分割了M和V。V通过VM获取数据，保存数据
> MVVM的好处：为了开发更方便
> MVVM 提供数据的双向绑定，由VM提供