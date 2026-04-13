import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/Homepage/Homepage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Navbar from "../components/shared/Navbar";
import Timeline from "../pages/Timeline/Timeline";
import Stats from "../pages/Stats/Stats";
import FriendsDetails from "../pages/FriendsDetails/FriendsDetails";



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
            path:"/timeline",
            element:<Timeline/>,
        },
        
        {
            path:"/stats",
            element:<Stats/>
        },
        {
            path:"/details/:id",
            element:<FriendsDetails/>
        },
    ],
    errorElement:<NotFoundPage/>
}
])