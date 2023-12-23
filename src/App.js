import "./App.css";
import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
import RootLayOut from "./components/RootLayOut";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
