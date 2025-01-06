import { hookstate } from "@hookstate/core";

const initAppState = {
  isLogin: true,
  username: "",
};

const appStore = hookstate(initAppState);

export default appStore;
