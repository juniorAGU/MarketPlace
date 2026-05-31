import { Products } from "../models/Product.js";

const BusinessEnvironment = (req) => {

    const IpAddress = req.ip || req.headers["x-forwarded-for"];
    const Vpn = !!req.headers["x-forwarded-for"] 



    return{
        ipAddress: IpAddress,
        isVpn: Vpn
    }
}




const policy = {

    deletItem:  (user,product, environment) => {
        const isAdmin = user.role === "admin" || user.role === "manager"
        const isOwner = user._id.toString() === product.seller.toString();

        return (isAdmin || isOwner) && !environment.isVpn && environment.ipAddress

    },

    updateItem: (user,product,environment) => {
        const isOwer = user._id.toString() === product.seller.toString();
        const isAdmin = user.role === "admin" || user.role === "manager";

        return ( isAdmin || isOwer) && !environment.isVpn && environment.ipAddress;

    }
}

const abac = (action) => {
    return async (req,res,next) => {

        try{

            const user = req.user

            const product = await Products.findById(req.params.id);

            if(!product){
                return res.status(404).json({
                    success: false,
                    message: "Product not found"
                });
            };

            const policies = policy[action];
            
            if(!policies){
                return res.status(403).json({
                    success: false,
                    message: "Access Denied"
                });
            };

            const environment = BusinessEnvironment(req);

            if(!environment){
                return res.status(403).json({
                    success: false,
                    message: "ip or vpn ERROR"
                });
            };

            const isAllowed = policies(user,product,environment);

            if(!isAllowed){
                return res.status(403).json({
                    success: false,
                    message: "Access Denied"
                });
            };

            req.resources = isAllowed
            next();
        }catch(err){
            console.log(err);
            throw err
        }
    }
}

export default abac