export const SetSellerFilter = async (req, res, next) => {

    req.filter = {seller: req.user._id};

    next();

}