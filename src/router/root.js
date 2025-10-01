// root.js

import { lazy, Suspense } from "react";
import { todoRouter } from "./todoRouter";
import { scoreRouter } from "./scoreRouter"; // 👈 import 됨

const { createBrowserRouter } = require("react-router-dom");
const Loading = () => <div>Loading...</div>;
const Main = lazy(() => import("../pages/MainPage"));
const About = lazy(() => import("../pages/AboutPage"));
const TodoIndex = lazy(() => import("../pages/todo/IndexPage"));

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "about",
    element: (
      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>
    ),
  },
  // 💡 해결: scoreRouter()를 최상위 배열에 추가
  ...scoreRouter(), // 👈 추가된 부분. /s/list, /s/:sno 경로가 최상위 레벨에서 인식됨.
  {
    path: "todo",
    element: (
      <Suspense fallback={<Loading />}>
        <TodoIndex />
      </Suspense>
    ),
    children: todoRouter(),
  },
]);

export default root;
