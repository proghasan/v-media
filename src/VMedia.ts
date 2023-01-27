import type { App } from "vue";
import { VMedia } from "@/components";

export default {
  install(app: App) {
    app.component("VMedia", VMedia);
  },
};

export { VMedia };
