import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Suspense } from "react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </Suspense>
);

//<React.StrictMode>
