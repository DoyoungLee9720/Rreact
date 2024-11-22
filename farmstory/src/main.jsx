import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";

import store from "./store.jsx";

createRoot(document.getElementById("root")).render(
  //배포 환경에서는 StrictMode 비활성화
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);