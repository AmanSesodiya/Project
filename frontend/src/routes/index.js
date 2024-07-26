import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ForgotPassowrd from '../pages/ForgotPassowrd'
import SignUp from '../pages/SignUp'
import AdminPanel from '../pages/AdminPanel'
import AllUsers from '../pages/AllUsers'
import AllProducts from '../pages/AllProducts'
import CategoryProduct from '../pages/CategoryProduct'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import SearchProduct from '../pages/SearchProduct'
import Success from '../pages/Success'
import Cancel from '../pages/Cancel'
import OrderPage from '../pages/OrderPage'
import AllOrder from '../pages/AllOrder'
import AboutUs from '../pages/AboutUs'; // Import About Us component
import Careers from '../pages/Careers';
import OurTeam from '../pages/OurTeam';
import Projects from '../pages/Project';
import ContactUs from '../pages/ContactUs'
import Blog from '../pages/Blog'
import Newsletter from '../pages/NewLetter'
import FreeProducts from '../pages/FreeProducts'
import Templates from '../pages/Templates'
import AffiliateProgram from '../pages/AffiliateProgram'
import UIKits from '../pages/UiKits'
import Icons from '../pages/Icons'
import Mockups from '../pages/MocksUp'

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "forgot-password",
                element : <ForgotPassowrd/>
            },
            {
                path : "sign-up",
                element : <SignUp/>
            },
            {
                path : "product-category",
                element : <CategoryProduct/>
            },
            {
                path : "product/:id",
                element : <ProductDetails/>
            },
            {
                path : 'cart',
                element : <Cart/>
            },
            {
                path : 'success',
                element : <Success/>
            },
            {
                path : "cancel",
                element : <Cancel/>
            },
            {
              path: "about-us", // New route for About Us page
              element: <AboutUs />,
            },
            {
              path: "careers",
              element: <Careers />,
            },
            {
              path: "our-team",
              element: <OurTeam />,
            },
            {
              path: "project",
              element: <Projects />,
            },
            {
                path: "contact-us",
                element: <ContactUs />,
            },
            {
                path: "free-products",
                element: <FreeProducts />,
            },
            {
                path: "templates",
                element: <Templates />,
            },
            {
                path: "affiliate-program",
                element: <AffiliateProgram />
            },
            {
                path: "news-letter",
                element: <Newsletter />,
            },
            {
                path: "mocks-up",
                element: <Mockups />,
            },
            {
                path: "blog",
                element: <Blog />,
            },
            {
                path: "ui-kits",
                element: <UIKits />,
            },
            {
                path: "icons",
                element: <Icons />,
            },
            {
                path : "search",
                element : <SearchProduct/>
            },
            {
                path : 'order',
                element : <OrderPage/>
            },
            {
                path : "admin-panel",
                element : <AdminPanel/>,
                children : [
                    {
                        path : "all-users",
                        element : <AllUsers/>
                    },
                    {
                        path : "all-products",
                        element : <AllProducts/>
                    },
                    {
                        path : "all-orders",
                        element : <AllOrder/>
                    }
                ]
            },
        ]
    }
])


export default router