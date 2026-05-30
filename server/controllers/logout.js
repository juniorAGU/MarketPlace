



const logoutUser = async (req,res,next) => {
    try{

        res.clearCookie("token",{
            httpOnly: true,
            secure: false,
            samSite: "lax"
        });

        res.status(200).json({
            success: true,
            message: "you have successfully logedout"
        });

    }catch(err){
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "internal server issue"
        })
    }

}

export {logoutUser}