import { User } from "../models/User.js"

const postSignup = async(req, res)=>{
    const {fullName, email, password} = req.body

    const user = new User({
        fullName,
        email,
        password
    })

    try {
        const savedUser = await user.save()
        res.json({
            success: true,
            message: 'Signup successfully',
            data: savedUser
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
            data: null
        })
    }
}

const getLogin = async(req, res)=>{
    const {email, password} = req.body

    try {
        const user = await User.findOne({
            email: email,
            password: password
        })
        
        if(!user){
            res.json({
                success: false,
                message: 'Invalid Credentials'
            })
        }
        else{res.json({
            success: true,
            message: 'Login successfully',
            data: user
        })}
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }

}

export {postSignup, getLogin}