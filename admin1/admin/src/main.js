import { createApp } from 'vue'
import { Quasar } from 'quasar'


import './style.css'


import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'


import router from './router'

import App from './App.vue'



const app = createApp(App)

app.use(router)


app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

// Assumes you have a <div id="app"></div> in your index.html
app.mount('#app')

