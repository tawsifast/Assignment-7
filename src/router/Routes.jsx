import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/Homepage/Homepage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Navbar from "../components/shared/Navbar";



export const router = createBrowserRouter([

{
    path:"/",
    element:<RootLayout/>,
    children: [
        {
            index:true,
            element:<Homepage/>
        },
        
        {
            path:"/aa",
            element:<Navbar/>
        },
        
        {
            path:"/",
            element:<Homepage/>
        },
        
       
    ],
    errorElement:<NotFoundPage/>

}

])