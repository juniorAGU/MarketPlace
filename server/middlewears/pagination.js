
export const paginat = (model) =>  {
    return async (req,res,next) => {
    try{

        const page = parseInt(req.query.page) || 1;

        const limit = parseInt(req.query.limit) || 10;

        const skip = (page - 1) * limit;

        const filter = req.filter || {};

        if(req.params.productId){
            filter.product = req.params.productId
        }

        const fetchData = await model.find(filter).sort({createdAt: -1}).skip(skip).limit(limit);

        const total = await model.countDocuments(filter);

        const totalpage = Math.ceil(total/limit);

        res.pagination = {
            success: true,
            message: "Successful",
            data: fetchData,
            page: page,
            limit: limit,
            total,
            totalpage,

        }

        next();

    }catch(err){
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "Pagination Failed"
        })
    }
    }
}    