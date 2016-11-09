import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './components/app.vue'

// Vue.component(Checkbox.name, Checkbox)
Vue.use(ElementUI);
new Vue({
    render: h => h(App)
}).$mount('#app')