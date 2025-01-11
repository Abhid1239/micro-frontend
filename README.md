# micro-frontend
Learning and setup for multiple micro frontends

BAsic Types:
Monolith , frontend backend, frontend with microsdervices conected with middlewares like rest or graph ql

Used mostly for scalable frontend architect

which would create end to end teams with micro frontned
team inspire, team search, team products, team chekout


type of integration in micro frontend
build time integration -> compile time integration -> before contianer gets loaded in browser
runtime integration ->  client side integration -> after container gets loaded in browser
server side integration -> while sending down JS to load up container, a server decides which container to load



Build time integration
publish a npm pakcage and use it in the project
Then build the project and run it
Adv and Dis adv:
easy to setup
need to redeploy the project to update the npm package
tightly coupled with the project


Runtime integration
develop 
deploy and bundle the project on a website
when use navigates to the website, the container is loaded and executed

Adv and Dis adv:
independntly deployable
different versions of the same micro frontend can be deployed
tooling + setup is complex

To create a micro frontend
create a new project with multiple projects
container 
    - products
    - cart
    - checkout


Now to understand webpack ...





shared module versioning
when we used shared in webpack.cofig for libraries or packages, it will check the type of version support i.e ^, ~, * which means major, minor, patch
and depending on the version it will get that particular packages
So, it automatically handles the versioning utilize and get that particular package

Singleton Loading
A process in webpack where only one package type would be alowed to be loaded in the project
how to setup:

webpack.config.js
```
module.exports = {
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            filename: 'remoteEntry.js',
            exposes: {
                './Xyz': './src/index'
            },
            shared: {
                faker: {
                    singleton: true // this means that only one instance of faker will be loaded in the project
                }
            }
        })
    ]
}
```

Sub-App Execution Context
To check if we are getting executed in the right context, we can check if we are in development fistr . then we can check if the div ID is exceitd or not else we can just export it

Eg:
const mount = (el) => {
    ...

    el.innerHTML = xyz;


}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');
    if (el) {
        mount(el);
    }
}

export { mount };

Gotcha:
if we are using the same name for the sub app and the container, then we need to use the name of the sub app in the container
We need to keep the same name of remotes which are added in module federation plugin
for example:
```
remotes: {
    products: 'products@http://localhost:8081/remoteEntry.js',
    cart: 'cart@http://localhost:8082/remoteEntry.js' --> name should be same as the name in the child app
}
```
Child App:
plugins: [
    new ModuleFederationPlugin({
        name: 'products', --> name should be same as the name in the container
        ...
    })
]

