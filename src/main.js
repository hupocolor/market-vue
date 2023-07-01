import './assets/base.css'
import { createApp } from 'vue'
//本地存储和会话存储
import store from './stores'

//element-ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//markdow编辑器
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import Prism from 'prismjs';

//markdow浏览
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';




import App from './App.vue'
import router from './router'

const app = createApp(App)

VueMarkdownEditor.use(vuepressTheme, {
    Prism,
});
VMdPreview.use(githubTheme, {
    Hljs: hljs,
});
app.use(VueMarkdownEditor).use(VMdPreview)
app.use(store)
app.use(router).use(ElementPlus)

app.mount('#app')
