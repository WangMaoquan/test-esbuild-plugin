### learn

Esbuild 插件结构被设计为一个对象，里面有 `name` 和 `setup` 两个属性，`name` 是插件的名称，`setup` 是一个函数，其中入参是一个 `build` 对象，这个对象上挂载了一些钩子可供我们自定义一些钩子函数逻辑

#### onResolve 钩子 和 onLoad 钩子

在 Esbuild 插件中，`onResolve` 和 `onload` 是两个非常重要的钩子，分别控制路径解析和模块内容加载的过程

#### onStart 钩子 和 onEnd 钩子

还有 `onStart` 和 `onEnd` 两个钩子用来在构建开启和结束时执行一些自定义的逻辑

onStart 的执行时机是在每次 build 的时候，包括触发 watch 或者 serve 模式下的重新构建

onEnd 钩子中如果要拿到 metafile，必须将 Esbuild 的构建配置中 metafile 属性设为 true
