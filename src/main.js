import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import axios from 'axios'

// import router from './router'
// import store from './store'

createApp(App).mount('#app')
// createApp(App).use(store).use(router).mount('#app')

// axios.defaults.baseURL = 'http://localhost:8000/api/'

// when testing with the flask serve we need to add the // as vue/axios otherwise requests http://localhost:8081/127.0.0.1:5000/xxx
axios.defaults.baseURL = '//127.0.0.1:5000'
// axios.defaults.withCredentials = true
