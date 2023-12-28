import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import ErrorPage from "./pages/error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
