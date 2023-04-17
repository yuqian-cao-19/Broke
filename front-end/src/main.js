import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const store = createStore({
    state () {
        return {
            count: 0,
            locationType: "",
            item: "",
            address: "",
            radius: 0
        }
    },
    mutations: {
        increment (state) {
            state.count++
        },

        setLocationType(state, locType){
            state.locationType = locType;
        },

        setItem(state, item){
            state.item = item;
        },

        setRadius(state, r){
            state.radius = r;
        }
    }
})

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
