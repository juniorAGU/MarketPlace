import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MarketPlace from "../pages/MarketPlace";
import About from "../pages/About";
import ProductDetails from "../Components/ProductDetails";
import EditProfile from "../Components/EditProfile";

const Routes = [
    {
        path: "/",
        components: Home,
        isProtected: false,
        role: ["user", "admin", "manager"]
    },
    {
        path: "contact",
        components: Contact,
        isProtected: false,
        role: ["user", "admin", "manager"]
    },
    {
        path: 'about',
        components: About,
        isProtected: false,
        role: ["user", "admin", "manager"]
    },
    {
        path: "marketplace/:id",
        components: ProductDetails,
        isProtected: true,
        role: ["user", "admin", "manager"]

    },
    {
        path: "/profile/edit",
        components: EditProfile,
        isProtected: true,
        role: ["user", "admin", "manager"]
    },
    {
        path: "marketplace",
        components: MarketPlace,
        isProtected: true,
        role: ["user", "admin", "manager"]
    },
    {
        path: "login",
        components: Login,
        isProtected: false,
        role: []
    },
    {
        path: "register",
        components: Register,
        isProtected: false,
        role: []
    }
];

export default Routes