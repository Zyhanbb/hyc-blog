import "./App.css";
import RouterComponent from "./router";  // ✅ 修改为引入 RouterComponent

function App() {
  return (
    <div className="App">
      <RouterComponent />  {/* ✅ 直接渲染 useRoutes() 生成的路由 */}
    </div>
  );
}

export default App;
