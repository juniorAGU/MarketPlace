// pages/About.jsx
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: false });
    }, []);

    return (
        <section className='bg-[#1A1E1B] py-16 md:py-24 px-4'>
            <article className='max-w-4xl mx-auto'>
                
                {/* Heading */}
                <h1 
                    className='text-white text-3xl md:text-4xl font-bold'
                    data-aos="fade-up"
                >
                    About Kennystores
                </h1>
                <p 
                    className='text-[#E8EDE8]/70 text-lg mt-4 leading-relaxed'
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    A marketplace built on trust, simplicity, and opportunity.
                </p>

                {/* Story */}
                <article 
                    className='mt-16 space-y-10'
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <article className='space-y-4'>
                        <h2 className='text-white text-xl font-semibold'>Our Story</h2>
                        <p className='text-[#E8EDE8]/70 leading-relaxed'>
                            Kennystores started with a simple idea, make buying and selling accessible to everyone. 
                            Whether you're a small business owner, a creator, or just someone with something to sell, 
                            this platform gives you the tools to reach real customers without the noise.
                        </p>
                    </article>

                    <article className='space-y-4'>
                        <h2 className='text-white text-xl font-semibold'>Our Mission</h2>
                        <p className='text-[#E8EDE8]/70 leading-relaxed'>
                            We're here to connect buyers and sellers in a space that's transparent, secure, 
                            and easy to use. No hidden fees, no complicated setup, just a marketplace that works.
                        </p>
                    </article>

                    <article className='space-y-4'>
                        <h2 className='text-white text-xl font-semibold'>Why Choose Kennystores?</h2>
                        <article className='grid sm:grid-cols-2 gap-6 mt-4'>
                            {[
                                { title: 'Verified Sellers', desc: 'Every seller is vetted to ensure quality and trust.' },
                                { title: 'Secure Payments', desc: 'Your money is protected until you confirm delivery.' },
                                { title: 'Easy to Start', desc: 'Create an account and start selling in minutes.' },
                                { title: 'No Hidden Fees', desc: 'What you see is what you get. Transparent pricing always.' },
                            ].map((item, index) => (
                                <article 
                                    key={index}
                                    className='bg-[#252C26] rounded-lg p-5 border border-[#252C26]'
                                >
                                    <h3 className='text-white font-semibold text-sm'>{item.title}</h3>
                                    <p className='text-[#E8EDE8]/60 text-sm mt-2'>{item.desc}</p>
                                </article>
                            ))}
                        </article>
                    </article>
                </article>

            </article>
        </section>
    );
};

export default About;