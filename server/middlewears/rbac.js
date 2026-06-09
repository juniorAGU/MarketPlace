

const Authorize = (accountType) => {
    return async (req,res,next) => {

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