import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import ErrorPage from "./pages/error/Error";
import About from "./routes/About";
import Community from "./routes/Community";
import Careers from "./routes/Careers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />
  },
  {
    path: "/community",
    element: <Community />,
    errorElement: <ErrorPage />
  },
  {
    path: "/careers",
    element: <Careers />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
