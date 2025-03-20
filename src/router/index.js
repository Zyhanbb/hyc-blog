
import { createBrowserRouter ,Navigate} from 'react-router-dom'
import Main from '../workpages/main'
import Home from '../workpages/home'
import Project from '../workpages/project'
import LifeMain from '../lifepages/main'
import Password from '../lifepages/password'
const routes = [
    // 🔹 让根路径 `/` 自动重定向到 `/zh-CN`
  {
    path: "/",
    element: <Navigate to="/zh-CN" replace />,
  },
    {
        path: '/zh-CN',//英文是en
        Component: Main,
        children: [
            {
                path:"", // 让 `/zh-CN` 自动重定向到 `/zh-CN/home`
                element:<Navigate to="home" replace/>
            },
            {
                path: 'home',
                Component: Home,
            },
            {
                path: 'project',//主要项目
                Component: Project,
            }
        ]
    },
    {
        path: '/password',
        Component: Password
    },
    {
        path: '/life',
        Component: LifeMain
    }
]
export default createBrowserRouter(routes)