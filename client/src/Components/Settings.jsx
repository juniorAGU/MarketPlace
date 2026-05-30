import React from 'react';
import { useState } from 'react';

function Settings() {

    const [showpassword, setShowpassword] = useState(null);

    const [formData, setFormData] = useState({
            name: user?.name || '',
            bio: user?.bio || '',
            location: user?.location || '',
            phone: user?.phone || '',
            title: user?.title || "",
            newpassword: "",
            oldpassword: "",
            confirmnewpassword: "",
            loading: false
        });

        const handleChange = (e) => {

        const{ name,value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }
    
    return (
        <section>
            <article className='border-t border-[#252C26] pt-6'>
                                    <h2 className='text-white text-lg font-semibold mb-4'>Change Password</h2>
                                </article>
            
                                
                                <article className='relative'>
                                    <label className='block text-sm font-medium text-[#E8EDE8] mb-2'>Current Password</label>
                                    <input 
                                        name='oldpassword'
                                        value={formData.oldpassword}
                                        onChange={handleChange}
                                        type={showpassword ? "text" : "password"}
                                        placeholder="Enter current password"
                                        className='w-full px-4 py-3 bg-[#252C26] border border-[#7C9A7E] rounded-lg text-white placeholder-[#E8EDE8]/50 focus:outline-none focus:ring-2 focus:ring-[#7C9A7E] focus:border-transparent transition pr-12'
                                    />
                                    <button 
                                        type='button'
                                        onClick={() => setShowpassword(!showpassword)}
                                        className='absolute right-3 top-9 text-[#E8EDE8]/50 hover:text-[#E8EDE8] transition-colors'
                                    >
                                        {showpassword ? <EyeOff size={18} /> : <Eye size={18} />} 
                                    </button>
                                </article>
            
                                
                                <article className='relative'>
                                    <label className='block text-sm font-medium text-[#E8EDE8] mb-2'>New Password</label>
                                    <input 
                                        value={formData.newpassword}
                                        name='newpassword'
                                        onChange={handleChange}
                                        type={showpassword ? 'text' : 'password'}
                                        placeholder="Enter new password"
                                        className='w-full px-4 py-3 bg-[#252C26] border border-[#7C9A7E] rounded-lg text-white placeholder-[#E8EDE8]/50 focus:outline-none focus:ring-2 focus:ring-[#7C9A7E] focus:border-transparent transition pr-12'
                                    />
                                    <button 
                                        type='button'
                                        onClick={() => setShowpassword(!showpassword)}
                                        className='absolute right-3 top-9 text-[#E8EDE8]/50 hover:text-[#E8EDE8] transition-colors'
                                    >
                                        {showpassword ? <EyeOff size={18} /> : <Eye size={18} />} 
                                    </button>
                                </article>
            
                                {/* Confirm New Password */}
                                <article>
                                    <label className='block text-sm font-medium text-[#E8EDE8] mb-2'>Confirm New Password</label>
                                    <input 
                                        value={formData.confirmnewpassword}
                                        name='confirmnewpassword'
                                        onChange={handleChange}
                                        type='password'
                                        placeholder="Confirm new password"
                                        className='w-full px-4 py-3 bg-[#252C26] border border-[#7C9A7E] rounded-lg text-white placeholder-[#E8EDE8]/50 focus:outline-none focus:ring-2 focus:ring-[#7C9A7E] focus:border-transparent transition'
                                    />
                                </article>
            
        </section>
    )
}

export default Settings