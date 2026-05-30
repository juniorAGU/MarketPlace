
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Categories = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: false });
    }, []);

    const categories = [
        { name: 'Electronics', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600', count: '1.2K items' },
        { name: 'Fashion', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600', count: '3.5K items' },
        { name: 'Home & Garden', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600', count: '890 items' },
        { name: 'Sports', image: 'https://thumbs.dreamstime.com/b/workout-soccer-sport-equipment-background-set-fitness-male-outfit-active-lifestyle-body-care-concept-workout-soccer-100967551.jpg', count: '2.1K items' },
        { name: 'Books', image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600', count: '4.3K items' },
        { name: 'Beauty', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600', count: '2.8K items' },
        { name: 'Automotive', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600', count: '650 items' },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const prevSlide = () => {
        setActiveIndex((prev) => Math.max(prev - 1, 0));
    };

    const nextSlide = () => {
        setActiveIndex((prev) => Math.min(prev + 1, categories.length - 1));
    };

    return (
        <section className='bg-[#1A1E1B] py-12 md:py-20 px-4'>
            <article className='max-w-7xl mx-auto'>
                
                <h2 
                    className='text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 md:mb-16'
                    data-aos="fade-up"
                >
                    Browse Categories
                </h2>

                {/* Full width container with larger height */}
                <article 
                    className='relative w-full h-64 md:h-80 flex items-center justify-center gap-3 md:gap-4'
                    data-aos="fade-up" 
                    data-aos-delay="200"
                >
                    {/* Left Arrow */}
                    <button 
                        onClick={prevSlide}
                        disabled={activeIndex === 0}
                        className={`absolute left-0 z-30 p-2 md:p-3 rounded-full transition-all flex-shrink-0 ${
                            activeIndex === 0 
                                ? 'bg-[#252C26] text-[#E8EDE8]/30 cursor-not-allowed' 
                                : 'bg-[#252C26] text-[#E8EDE8] hover:bg-[#7C9A7E] hover:text-white'
                        }`}
                    >
                        <ChevronLeft size={20} />
                    </button>

                    {/* Cards */}
                    <article className='w-full h-full flex items-center justify-center gap-3 md:gap-4 overflow-hidden'>
                        {categories.map((category, index) => {
                            const offset = index - activeIndex;
                            const isVisible = offset >= -2 && offset <= 2;
                            const isCenter = offset === 0;

                            return (
                                <Link 
                                    key={index} 
                                    to={`/products?category=${category.name.toLowerCase()}`}
                                    className={`flex-shrink-0 transition-all duration-500 ease-in-out ${
                                        isVisible 
                                            ? 'opacity-100 translate-x-0' 
                                            : 'opacity-0 translate-x-8 w-0 overflow-hidden'
                                    }`}
                                >
                                    <article 
                                        className={`relative bg-[#252C26] rounded-2xl overflow-hidden cursor-pointer border transition-all duration-500 ${
                                            isCenter 
                                                ? 'w-56 h-full md:w-72 border-[#7C9A7E] scale-105 z-20 shadow-2xl shadow-[#7C9A7E]/20' 
                                                : Math.abs(offset) === 1
                                                    ? 'w-40 h-[85%] md:w-52 border-[#252C26] scale-95 opacity-60 z-10'
                                                    : 'w-32 h-[70%] md:w-40 border-[#252C26] scale-90 opacity-40 z-0'
                                        }`}
                                    >
                                        <img 
                                            src={category.image} 
                                            alt={category.name}
                                            className='w-full h-full object-cover'
                                        />
                                        {/* Text overlay */}
                                        <article className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A1E1B] to-transparent p-3 pt-8'>
                                            <h3 className={`font-semibold text-xs md:text-sm ${
                                                isCenter ? 'text-[#7C9A7E]' : 'text-white'
                                            }`}>
                                                {category.name}
                                            </h3>
                                            {isCenter && (
                                                <p className='text-[#E8EDE8]/60 text-[10px] md:text-xs mt-0.5'>
                                                    {category.count}
                                                </p>
                                            )}
                                        </article>
                                    </article>
                                </Link>
                            );
                        })}
                    </article>

                    {/* Right Arrow */}
                    <button 
                        onClick={nextSlide}
                        disabled={activeIndex === categories.length - 1}
                        className={`absolute right-0 z-30 p-2 md:p-3 rounded-full transition-all flex-shrink-0 ${
                            activeIndex === categories.length - 1
                                ? 'bg-[#252C26] text-[#E8EDE8]/30 cursor-not-allowed' 
                                : 'bg-[#252C26] text-[#E8EDE8] hover:bg-[#7C9A7E] hover:text-white'
                        }`}
                    >
                        <ChevronRight size={20} />
                    </button>
                </article>

            </article>
        </section>
    );
};

export default Categories;