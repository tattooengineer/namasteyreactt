import React,{ useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
// import Error from "./components/Error";
import TimesTable from "./TimesTable";



const AppLayout = () => {
  let [counter, setCounter] = useState(0);
  return (
    <div className="layout">
      <Header/>
      <Outlet/>
      {/* <TimesTable/> */}
      {/* <Body counter={counter} counterfn={setCounter}/> */}
    </div>
  )

}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact:dyId",
        element: <Contact/>
      },
     
    ]
  },
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


