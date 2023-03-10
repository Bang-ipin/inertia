require('./bootstrap');

import { createApp, h } from 'vue'
import { App, Link, plugin } from '@inertiajs/inertia-vue3'

const el = document.getElementById('app')

createApp({
    render: () => h(App, {
        initialPage: JSON.parse(el.dataset.page),
        resolveComponent: name => require(`./Pages/${name}`).default,
    })
})
.component('inertia-link', Link)
.use(plugin).mount(el)