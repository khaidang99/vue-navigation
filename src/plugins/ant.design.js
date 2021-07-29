import Vue from "vue";
import "ant-design-vue/dist/antd.css";

import { notification, Progress } from "ant-design-vue";

Vue.prototype.$notification = notification;
Vue.use(Progress);
