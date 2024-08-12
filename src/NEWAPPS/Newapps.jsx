import { Home } from "../PAGES/Home"
import { About } from "../PAGES/About"
import { Product } from "../PAGES/Product"
import { Layout } from "../NAVBAR/Nav"
import { Error } from "../PAGES/Error"
import { Login } from "../MANAGEMWNT/Login"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { SignUp } from "../MANAGEMWNT/SignUp"



export const Newapps = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            errorElement:<Error/>,
            children: [{
                path: 'home',
                element: <Home />,

            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'product',
                element: <Product />
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path:'signup',
                element:<SignUp/>
            }

            ]
        },
       
    ])
    return (
        
        <RouterProvider router={router} />
        
    )
}
