import { Navigate, useRoutes } from "react-router-dom";
import Main from "../workpages/main";
import Home from "../workpages/home";
import Project from "../workpages/project";
import LifeMain from "../lifepages/main";
import Password from "../lifepages/password";

// 直接定义 routes 数组
const routes = [
  { path: "/", element: <Navigate to="/zh-CN" replace /> },
  {
    path: "/zh-CN",
    element: <Main />,
    children: [
      { path: "", element: <Navigate to="home" replace /> },
      { path: "home", element: <Home /> },
      { path: "project", element: <Project /> },
    ],
  },
  { path: "/password", element: <Password /> },
  { path: "/life", element: <LifeMain /> },
];

// 创建 Router 组件
export default function RouterComponent() {
  return useRoutes(routes);
}
