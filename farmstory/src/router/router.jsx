import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main/MainPage";
import LoginPage from "../pages/user/LoginPage";
import RegisterPage from "../pages/user/RegisterPage";
import TermsPage from "../pages/user/TermsPage";
import HelloPage from "../pages/introduction/HelloPage";
import DirectionPage from "../pages/introduction/DirectionPage";
import ListPage from "../pages/market/ListPage";
import { lazy, Suspense } from "react";


const BoardListPage = lazy(() => import("../pages/board/ListPage"));
const BoardWritePage = lazy(() => import("../pages/board/WritePage"));
const BoardViewPage = lazy(() => import("../pages/board/ViewPage"));
const BoardModifyPage = lazy(() => import("../pages/board/ModifyPage"));

//라우팅 정의
const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/introduction/hello", element: <HelloPage /> },
  { path: "/introduction/direction", element: <DirectionPage /> },
  { path: "/market/list", element: <ListPage /> },
  { path: "/board/list", element: <Suspense><BoardListPage /> </Suspense>},
  { path: "/board/write", element: <Suspense><BoardWritePage /></Suspense> },
  { path: "/board/modify", element: <Suspense><BoardModifyPage /></Suspense> },
  { path: "/board/view", element: <Suspense><BoardViewPage /> </Suspense>},
  { path: "/user/login", element: <LoginPage /> },
  { path: "/user/terms", element: <TermsPage /> },
  { path: "/user/register", element: <RegisterPage /> },
  { path: "/admin", element: null },
  { path: "/admin/product/register", element: null },
]);

// 라우터 내보내기
export default router;
