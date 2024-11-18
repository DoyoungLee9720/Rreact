import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main/MainPage";

//라우팅 정의
const router = createBrowserRouter([
  { path: "/", element: <MainPage/> },
  { path: "/introduction/hello", element: null },
  { path: "/introduction/direction", element: null },
  { path: "/market/list", element: null },
  { path: "/croptalk/story", element: null },
  { path: "/croptalk/grow", element: null },
  { path: "/croptalk/school", element: null },
  { path: "/user/login", element: null },
  { path: "/admin", element: null },
  { path: "/admin/product/register", element: null },
]);

// 라우터 내보내기
export default router;
