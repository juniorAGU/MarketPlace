// components/WhyTrustUs.jsx
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import marketImage from '../assets/pawel-czerwinski-pC8e7FFONcI-unsplash.jpg';

const WhyTrustUs = () => {
    useEffect(() => {
        AOS.init({
        duration: 800,
        once: false,
        });
    }, []);

    return (
        <section className='bg-[#1A1E1B] py-20 px-4'>
        <article className='max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
            
            
            <article className='space-y-8'>
                <h2 
                    className='text-white text-3xl md:text-4xl font-bold'
                    data-aos="fade-up"
                >
                    Why Trust Kennystores?
                </h2>

                <article className='space-y-6'>
                    <article 
                    className='border-l-2 border-[#7C9A7E] pl-5'
                    data-aos="fade-right"
                    data-aos-delay="100"
                    >
                    <h3 className='text-white text-lg font-semibold'>
                        Verified Sellers, Real Products
                    </h3>
                    <p className='text-[#E8EDE8]/70 mt-1'>
                        Every seller goes through a verification process. Only quality products make it to our marketplace.
                    </p>
                    </article>

                    <article 
                    className='border-l-2 border-[#7C9A7E] pl-5'
                    data-aos="fade-right"
                    data-aos-delay="200"
                    >
                    <h3 className='text-white text-lg font-semibold'>
                        Secure Payments, Every Time
                    </h3>
                    <p className='text-[#E8EDE8]/70 mt-1'>
                        Your money is held safely until you confirm delivery. No risk, total peace of mind.
                    </p>
                    </article>

                    <article 
                    className='border-l-2 border-[#7C9A7E] pl-5'
                    data-aos="fade-right"
                    data-aos-delay="300"
                    >
                    <h3 className='text-white text-lg font-semibold'>
                        Buyer Protection Guaranteed
                    </h3>
                    <p className='text-[#E8EDE8]/70 mt-1'>
                        Not happy with your order? We'll make it right. Full refunds on eligible purchases.
                    </p>
                    </article>

                    <article 
                    className='border-l-2 border-[#7C9A7E] pl-5'
                    data-aos="fade-right"
                    data-aos-delay="400"
                    >
                    <h3 className='text-white text-lg font-semibold'>
                        Growing Community of 10,000+
                    </h3>
                    <p className='text-[#E8EDE8]/70 mt-1'>
                        Join thousands of happy buyers and sellers already trading on Kennystores.
                    </p>
                    </article>
                    
                </article>
            </article>

            {/* Right — Large market image */}
            <article 
            data-aos="fade-left"
            data-aos-delay="200"
            >
            <img 
                src='https://media.istockphoto.com/id/1329384615/photo/saleswoman-showing-a-new-mobile-phone-to-her-colleague.jpg?s=612x612&w=0&k=20&c=j8nPYOlOeoP2bL6kZpNLDAttlnlUO3yek3QP6Do510g='
                alt="Kennystores marketplace"
                className='w-full h-[500px] object-cover rounded-2xl'
            />
            </article>

        </article>
        </section>
    );
};

export default WhyTrustUs;