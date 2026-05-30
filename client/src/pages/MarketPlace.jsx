
import { useEffect,useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Heart, MessageCircle } from 'lucide-react';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

const MarketPlace = () => {

    const [commentid,setCommentid] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 800, once: false });
    }, []);

    const products = [
        { id: 1, seller: 'TechHub', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600', name: 'Wireless Headphones', price: '$89.99', likes: 234, comments: 18 },
        { id: 2, seller: 'FashionHub', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600', name: 'Classic Watch', price: '$129.99', likes: 456, comments: 32 },
        { id: 3, seller: 'HomeEssentials', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50', image: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?w=600', name: 'Modern Chair', price: '$199.99', likes: 189, comments: 12 },
        { id: 4, seller: 'GadgetZone', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=50', image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600', name: 'Laptop Stand', price: '$49.99', likes: 321, comments: 24 },
    ];

    const filters = ['All Products', 'Electronics', 'Clothing', 'Furniture'];

    return (
        <section className='bg-[#1A1E1B] py-16 md:py-24 px-4'>
            <article className='max-w-2xl mx-auto'>
                
                {/* Filter Buttons */}
                <article className='flex items-center gap-2 mb-10 overflow-x-auto scrollbar-hide'>
                    {filters.map((filter, index) => (
                        <button 
                            key={index}
                            className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                                index === 0 
                                    ? 'bg-[#7C9A7E] text-white' 
                                    : 'bg-[#252C26] text-[#E8EDE8] hover:bg-[#7C9A7E] hover:text-white'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </article>

                {/* Product Cards — Instagram style */}
                <article className='space-y-8'>
                    {products.map((product, index) => (
                        <motion.article 
                            
                            whileHover={{scale: 1.01,}}
                            key={product.id}
                            className='bg-[#252C26] rounded-xl overflow-hidden'
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Seller Info */}
                            <article className='flex items-center gap-3 p-4'>
                                <img 
                                    src={product.avatar} 
                                    alt={product.seller}
                                    className='w-10 h-10 rounded-full object-cover'
                                />
                                <span className='text-white font-semibold text-sm'>{product.seller}</span>
                            </article>

                            {/* Product Image */}
                            <article className='w-full aspect-square overflow-hidden'>
                                <Link to={`/marketplace/${product.id}`}>
                                    <img 
                                        src={product.image} 
                                        alt={product.name}
                                        className='w-full h-full object-cover'
                                    />
                                </Link>
                                
                            </article>

                            {/* Actions */}
                            <article className='p-4'>
                                {/* Like & Comment */}
                                <article className='flex items-center gap-5 mb-3'>
                                    <button className='flex items-center gap-1.5 text-[#E8EDE8] hover:text-[#7C9A7E] transition-colors'>
                                        <Heart size={22} />
                                        <span className='text-sm'>{product.likes}</span>
                                    </button>
                                    <button 
                                        onClick={() => setCommentid(commentid === product.id ? null : product.id)}
                                        className='flex items-center gap-1.5 text-[#E8EDE8] hover:text-[#7C9A7E] transition-colors'>
                                        <MessageCircle size={22} />
                                        <span className='text-sm'>{product.comments}</span>
                                    </button>
                                </article>

                                {   commentid === product.id && (
                                        <article className='mt-3 flex items-center gap-2'>
                                            <input 
                                                type="text" 
                                                placeholder="Add a comment..."
                                                className='flex-1 px-3 py-2 bg-[#1A1E1B] border border-[#7C9A7E] rounded-lg text-white text-sm placeholder-[#E8EDE8]/50 focus:outline-none focus:ring-1 focus:ring-[#7C9A7E]'
                                            />
                                            <button className='px-4 py-2 bg-[#7C9A7E] text-white text-sm font-semibold rounded-lg hover:bg-[#5E7D61] transition-colors'>
                                                Post
                                            </button>
                                        </article>
                                )}

                                {/* Product Name */}
                                <h3 className='text-white font-semibold text-sm'>{product.name}</h3>
                                <p className='text-[#7C9A7E] font-bold text-lg mt-1'>{product.price}</p>
                            </article>

                            {/* Add to Cart Button */}
                            <article className='px-4 pb-4'>
                                <motion.button
                                    whileHover={{scale: 1.02}}
                                    whileTap={{scale: 1.90}}
                                    className='w-full py-3 bg-[#7C9A7E] text-white font-semibold rounded-lg hover:bg-[#5E7D61] transition-colors'>
                                    Add to Cart
                                </motion.button>
                            </article>
                        </motion.article>
                    ))}
                </article>

            </article>
        </section>
    );
};

export default MarketPlace;