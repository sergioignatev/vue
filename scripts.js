let Here=(x)=>{
return `<div style="color:red">HELLO THERE ${x}</div>`

}

const Home = { template: '<div><a href="circles.html">c</a></div>' }
const About = { template: Here("About") }
const Phone = { template:Here('phone')}
//
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path:'/phone',component: Phone}
]

const router = VueRouter.createRouter({
  
  history: VueRouter.createWebHashHistory(),
  routes, 
})


const app = Vue.createApp({})

app.use(router)

app.mount('#app')
