// components/Footer.jsx
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className='bg-[#252C26] border-t border-[#1A1E1B]'>
            <article className='max-w-7xl mx-auto px-4 py-12 md:py-16'>
                
                <article className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12'>
                    
                    <article className='col-span-2 md:col-span-1'>
                        <Logo />
                        <p className='text-[#E8EDE8]/60 text-sm mt-4 leading-relaxed'>
                            Buy and sell with confidence. The marketplace built on trust.
                        </p>
                    </article>

                    <article>
                        <h4 className='text-white text-sm font-semibold mb-4'>Marketplace</h4>
                        <article className='space-y-3'>
                            <Link to={'/products'} className='block text-[#E8EDE8]/60 text-sm hover:text-[#7C9A7E] transition-colors'>Browse All</Link>
                            <Link to={'/categories'} className='block text-[#E8EDE8]/60 text-sm hover:text-[#7C9A7E] transition-colors'>Categories</Link>
                            <Link to={'/sellers'} className='block text-[#E8EDE8]/60 text-sm hover:text-[#7C9A7E] transition-colors'>Top Sellers</Link>
                        </article>
                    </article>

                    <article>
                        <h4 className='text-white text-sm font-semibold mb-4'>Company</h4>
                        <article className='space-y-3'>
                            <Link to={'/about'} className='block text-[#E8EDE8]/60 text-sm hover:text-[#7C9A7E] transition-colors'>About</Link>
                            <Link to={'/contact'} className='block text-[#E8EDE8]/60 text-sm hover:text-[#7C9A7E] transition-colors'>Contact</Link>
                            <Link to={'/how-it-works'} className='block text-[#E8EDE8]/60 text-sm hover:text-[#7C9A7E] transition-colors'>How It Works</Link>
                        </article>
                    </article>

                    <article>
                        <h4 className='text-white text-sm font-semibold mb-4'>Account</h4>
                        <article className='space-y-3'>
                            <Link to={'/login'} className='block text-[#E8EDE8]/60 text-sm hover:text-[#7C9A7E] transition-colors'>Sign In</Link>
                            <Link to={'/register'} className='block text-[#E8EDE8]/60 text-sm hover:text-[#7C9A7E] transition-colors'>Create Account</Link>
                        </article>
                    </article>

                </article>

                <article className='border-t border-[#1A1E1B] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4'>
                    <p className='text-[#E8EDE8]/40 text-xs'>
                        &copy; {new Date().getFullYear()} Kennystores. All rights reserved.
                    </p>
                    <article className='flex items-center gap-6'>
                        <Link to={'/privacy'} className='text-[#E8EDE8]/40 text-xs hover:text-[#E8EDE8] transition-colors'>Privacy</Link>
                        <Link to={'/terms'} className='text-[#E8EDE8]/40 text-xs hover:text-[#E8EDE8] transition-colors'>Terms</Link>
                    </article>
                </article>

            </article>
        </footer>
    );
};

export default Footer;