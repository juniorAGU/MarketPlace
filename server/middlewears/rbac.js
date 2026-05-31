

const Authorize = (accountType) => {
    return async (req,res,next) => {
        console.log("user account type",req.user.accountType);
        console.log("required account type", accountType);

        if(!accountType.includes(req.user.accountType)){
            return res.status(403).json({
                success: false,
                message: "you can not create a product is you are not a seller"
            });
        };

        next();

    }
}

export default Authorize