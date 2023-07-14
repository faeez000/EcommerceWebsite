import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import Dashboard from "./Components/Dashboard";
import Cart from "./Components/Cart";
import RootLayout from "./Components/rootLayout";

function App() {

const router = createBrowserRouter(createRoutesFromElements(
  <Route path = "/" element={ <RootLayout />} >
    <Route index element={<Dashboard />}></Route>
    <Route path="/Cart" element={<Cart/> }></Route>
  </Route>
))

  return (
    <div className="App">
      
        <div>
          {/* <Product /> */}
          <RouterProvider  router={router} />
        </div>
    </div>
  );
}

export default App;
