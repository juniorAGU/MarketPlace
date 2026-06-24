import React from 'react';
import Logo from '../Components/Logo';
import { Link } from 'react-router-dom';
import bgImage from '../assets/pawel-czerwinski-pC8e7FFONcI-unsplash.jpg';
import { useState,useEffect } from 'react';
import UseAuth from '../Hooks/UseAuth';
import { useNavigate } from 'react-router-dom';
import { Loader2,EyeOff,Eye } from "lucide-react"

function Register() {

    const navigate = useNavigate();

    const { register, error } = UseAuth()

    const [messages, setMessages] = useState(null);

    const [showpassword, setShowpassword] = useState(null);

    const [data, setData] = useState({
        name: "",
        email:"",
        password: "",
        confirmpassword: "",
        accountType: "buyer",
        loading: false
    });

    const handleChange = (e) => {
        const { name, value} = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const typColo = {
        "success": "bg-green-700",
        "warning": "bg-yellow-400",
        "failed": "bg-red-500"
    }
    const ShowowMessage = (type,message) => {
        setMessages({type,message});
        setTimeout(()=>{
            setMessages(null)
        },3000)
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(data.name === "" || data.email === "" || data.password === "" || data.confirmpassword === "" || data.accountType === ""){
            ShowowMessage("failed", "input fields must not be Empty!!");
            return
        };

        if(data.password.length < 8 || data.confirmpassword.length < 8){
            ShowowMessage("warning", "password should be more than 8 characters!!");
            return
        };

        if(!/[A-Z]/.test(data.password)){
            ShowowMessage("warning", "password must contain Alphabets");
            return
        };

        if(data.password !== data.confirmpassword){
            ShowowMessage("failed", "Password does not match!!");
            return
        };

        setData({...data,loading: true})

        try{

            const userData = {
                name: data.name,
                email: data.email,
                password: data.password,
                accountType: data.accountType
            };
            

            const success = await register(userData);

            if(success){
                setData({
                    name: "",
                    email:"",
                    password: "",
                    confirmpassword: "",
                    accountType: "buyer",
                });
                navigate("/")
            }
        }catch(err){
            console.log(err?.response?.data?.message);
            throw err
        }finally{
            setData({...data,loading: false})
        }


    }

    return (
        <section className="relative bg-cover bg-center bg-no-repeat flex justify-center items-center px-4 py-10 min-h-screen"
            style={{backgroundImage: `url(${bgImage})`}}
        >
            <article className='w-full max-w-md'>
                <header className='mb-8'>
                    <span className="text-xs tracking-widest uppercase font-semibold">
                        <Logo />
                    </span>
                    <h1 className="text-2xl font-bold text-white mt-2 leading-snug">
                        Create your account
                    </h1>
                    <p className="text-sm text-[#E8EDE8] mt-1">
                        Already have an account?{" "}
                        <Link to={'/login'} className="text-[#7C9A7E] hover:text-white hover:underline font-semibold">
                            Sign in
                        </Link>
                    </p>
                </header>
                <form className='space-y-5' onSubmit={handleSubmit}>
                    <div>
                        <label className='block text-sm font-medium text-[#E8EDE8] mb-2'>
                            Name
                        </label>
                        <input 
                            name='name'
                            value={data.name}
                            onChange={handleChange}
                            type="text" 
                            placeholder="Enter your name"
                            className='w-full px-4 py-3 bg-[#252C26] border border-[#7C9A7E] rounded-lg text-white placeholder-[#E8EDE8]/50 focus:outline-none focus:ring-2 focus:ring-[#7C9A7E] focus:border-transparent transition'
                        />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-[#E8EDE8] mb-2'>
                            Email
                        </label>
                        <input 
                            name='email'
                            value={data.email}
                            onChange={handleChange}
                            type="email" 
                            placeholder="Enter your email"
                            className='w-full px-4 py-3 bg-[#252C26] border border-[#7C9A7E] rounded-lg text-white placeholder-[#E8EDE8]/50 focus:outline-none focus:ring-2 focus:ring-[#7C9A7E] focus:border-transparent transition'
                        />
                    </div>

                    <div className='relative'>
                        <label className='block text-sm font-medium text-[#E8EDE8] mb-2'>
                            Password
                        </label>
                        <input 
                            value={data.password}
                            name='password'
                            onChange={handleChange}
                            type={showpassword ? "text" : "password"} 
                            placeholder="Enter your password"
                            className='w-full px-4 py-3 bg-[#252C26] border border-[#7C9A7E] rounded-lg text-white placeholder-[#E8EDE8]/50 focus:outline-none focus:ring-2 focus:ring-[#7C9A7E] focus:border-transparent transition pr-12'
                        />
                        <button
                            type='button'
                            onClick={() => setShowpassword(!showpassword)}
                            className='absolute right-3 top-[38px] text-[#E8EDE8]/50 hover:text-[#E8EDE8] transition-colors'
                        >
                            {showpassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    <div className='relative'>
                        <label className='block text-sm font-medium text-[#E8EDE8] mb-2'>
                            Confirm Password
                        </label>
                        <input 
                            name='confirmpassword'
                            value={data.confirmpassword}
                            onChange={handleChange}
                            type={showpassword ? "text" : "password"} 
                            placeholder="Confirm your password"
                            className='w-full px-4 py-3 bg-[#252C26] border border-[#7C9A7E] rounded-lg text-white placeholder-[#E8EDE8]/50 focus:outline-none focus:ring-2 focus:ring-[#7C9A7E] focus:border-transparent transition pr-12'
                        />
                        <button
                            type='button'
                            onClick={() => setShowpassword(!showpassword)}
                            className='absolute right-3 top-[38px] text-[#E8EDE8]/50 hover:text-[#E8EDE8] transition-colors'
                        >
                            {showpassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    
                    <article>
                        <label className='block text-sm font-medium text-[#E8EDE8] mb-3'>
                            I want to join as a
                        </label>
                        <article className='grid grid-cols-2 gap-3'>
                            <label className='flex items-center gap-3 bg-[#252C26] border border-[#7C9A7E] rounded-lg p-4 cursor-pointer hover:border-[#5E7D61] transition-colors has-[:checked]:bg-[#7C9A7E]/10 has-[:checked]:border-[#5E7D61]'>
                                <input 
                                    type="radio" 
                                    name="accountType" 
                                    value="buyer"
                                    onChange={handleChange}
                                    defaultChecked
                                    className='accent-[#7C9A7E]'
                                />
                                <article>
                                    <span className='text-white text-sm font-semibold'>Buyer</span>
                                    <p className='text-[#E8EDE8]/60 text-xs mt-0.5'>Browse and purchase products</p>
                                </article>
                            </label>

                            <label className='flex items-center gap-3 bg-[#252C26] border border-[#7C9A7E] rounded-lg p-4 cursor-pointer hover:border-[#5E7D61] transition-colors has-[:checked]:bg-[#7C9A7E]/10 has-[:checked]:border-[#5E7D61]'>
                                <input 
                                    onChange={handleChange}
                                    type="radio" 
                                    name="accountType" 
                                    value="seller" 
                                    className='accent-[#7C9A7E]'
                                />
                                <article>
                                    <span className='text-white text-sm font-semibold'>Seller</span>
                                    <p className='text-[#E8EDE8]/60 text-xs mt-0.5'>List and sell products</p>
                                </article>
                            </label>
                        </article>
                    </article>

                    
                    <button 
                        disabled={data.loading}
                        type="submit"
                        className={`w-full py-3 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1A1E1B] duration-200 tracking-wide flex items-center justify-center ${
                            data.loading 
                                ? 'bg-[#5E7D61] cursor-not-allowed' 
                                : 'bg-[#7C9A7E] hover:bg-[#5E7D64] focus:ring-[#7C9A7E]'
                        }`}
                    >
                        {data.loading ? (
                            <Loader2 className="h-5 w-5 animate-spin text-white" />
                        ) : (
                            "Create Account"
                        )}
                    </button>
                </form>
            </article>
            {
                messages && (
                    <div className={`slider fixed top-4 right-4 text-white px-4 py-2 rounded ${typColo[messages.type]} `}>
                        <h1>

                            {messages.message}

                        </h1>
                    </div>
                )
            }
            
        </section>
    )
}

export default Register