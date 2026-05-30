// pages/Contact.jsx
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: false });
    }, []);

    return (
        <section className='bg-[#1A1E1B] py-16 md:py-24 px-4'>
            <article className='max-w-4xl mx-auto'>
                
                
                <h1 
                    className='text-white text-3xl md:text-4xl font-bold'
                    data-aos="fade-up"
                >
                    Contact Us
                </h1>
                <p 
                    className='text-[#E8EDE8]/70 text-lg mt-4 leading-relaxed'
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Have a question or need help? We're here for you.
                </p>

                <article className='mt-16 grid md:grid-cols-2 gap-12'>
                    
                
                    <article 
                        className='space-y-8'
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <article className='flex items-start gap-4'>
                            <article className='w-10 h-10 bg-[#252C26] rounded-lg flex items-center justify-center flex-shrink-0'>
                                <Mail size={18} className='text-[#7C9A7E]' />
                            </article>
                            <article>
                                <h3 className='text-white font-semibold text-sm'>Email</h3>
                                <p className='text-[#E8EDE8]/60 text-sm mt-1'>support@kennystores.com</p>
                            </article>
                        </article>

                        <article className='flex items-start gap-4'>
                            <article className='w-10 h-10 bg-[#252C26] rounded-lg flex items-center justify-center flex-shrink-0'>
                                <MapPin size={18} className='text-[#7C9A7E]' />
                            </article>
                            <article>
                                <h3 className='text-white font-semibold text-sm'>Location</h3>
                                <p className='text-[#E8EDE8]/60 text-sm mt-1'>Enugu, Nigeria</p>
                            </article>
                        </article>

                        <article className='flex items-start gap-4'>
                            <article className='w-10 h-10 bg-[#252C26] rounded-lg flex items-center justify-center flex-shrink-0'>
                                <Clock size={18} className='text-[#7C9A7E]' />
                            </article>
                            <article>
                                <h3 className='text-white font-semibold text-sm'>Hours</h3>
                                <p className='text-[#E8EDE8]/60 text-sm mt-1'>Mon - Fri, 9AM - 6PM</p>
                            </article>
                        </article>
                    </article>

                    
                    <article 
                        className='space-y-5'
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <article>
                            <label className='block text-sm font-medium text-[#E8EDE8] mb-2'>Name</label>
                            <input 
                                type="text" 
                                placeholder="Your name"
                                className='w-full px-4 py-3 bg-[#252C26] border border-[#7C9A7E] rounded-lg text-white placeholder-[#E8EDE8]/50 focus:outline-none focus:ring-2 focus:ring-[#7C9A7E] focus:border-transparent transition'
                            />
                        </article>

                        <article>
                            <label className='block text-sm font-medium text-[#E8EDE8] mb-2'>Email</label>
                            <input 
                                type="email" 
                                placeholder="Your email"
                                className='w-full px-4 py-3 bg-[#252C26] border border-[#7C9A7E] rounded-lg text-white placeholder-[#E8EDE8]/50 focus:outline-none focus:ring-2 focus:ring-[#7C9A7E] focus:border-transparent transition'
                            />
                        </article>

                        <article>
                            <label className='block text-sm font-medium text-[#E8EDE8] mb-2'>Message</label>
                            <textarea 
                                rows="5"
                                placeholder="How can we help?"
                                className='w-full px-4 py-3 bg-[#252C26] border border-[#7C9A7E] rounded-lg text-white placeholder-[#E8EDE8]/50 focus:outline-none focus:ring-2 focus:ring-[#7C9A7E] focus:border-transparent transition resize-none'
                            />
                        </article>

                        <button 
                            type="submit"
                            className='w-full py-3 bg-[#7C9A7E] text-white font-semibold rounded-lg hover:bg-[#5E7D61] transition-colors'
                        >
                            Send Message
                        </button>
                    </article>

                </article>

            </article>
        </section>
    );
};

export default Contact;