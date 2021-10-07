# ES Modules

## Last Week
You a copy of your development framework. Parcel bundler because were going to start coding with modules.





## Default Exports
Modules Can only have one default export
```js
  const sayHello = () => {
    return "say hello"
  }

  export default sayHello

```

## Exports

```js
  const sayHello = () => {
    return "say hello"
  }

  export {sayHello}

```