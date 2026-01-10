import ChildRoot from "./child-components/ChildRoot.js";
const app = Vue.createApp(ChildRoot);
app.use(ElementPlus);
app.mount("#child-app");
