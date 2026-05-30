// Components/ProductDetails.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, MessageCircle, ChevronLeft, Star, Truck, ShieldCheck, RotateCcw } from 'lucide-react';

function ProductDetails() {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);

    const product = {
        id: id,
        seller: 'TechHub',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
        name: 'Wireless Headphones',
        price: '$89.99',
        rating: 4.7,
        reviews: 234,
        sold: 1200,
        description: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and ultra-comfortable memory foam ear cushions. Features Bluetooth 5.0, built-in microphone, and foldable design for easy storage.',
        category: 'Electronics',
        condition: 'Brand New',
        shipping: 'Free Shipping',
        warranty: '1 Year Warranty',
        returnPolicy: '30 Days Return',
        inStock: true,
    };

    return (
        <section className='w-full min-h-screen bg-[#1A1E1B] pt-20 px-4 pb-12'>
            
            <article className='max-w-[700px] mx-auto'>
                
                {/* Back Button */}
                <Link to={'/marketplace'} className='inline-flex items-center gap-2 text-[#E8EDE8] mb-6 hover:text-[#7C9A7E] transition-colors'>
                    <ChevronLeft size={20} />
                    <span className='text-sm'>Back to Marketplace</span>
                </Link>

                {/* Product Image - Rectangle */}
                <article className='w-full aspect-video rounded-xl overflow-hidden mb-6'>
                    <img 
                        src={product.image} 
                        alt={product.name}
                        className='w-full h-full object-cover'
                    />
                </article>

                {/* Seller & Product Info - Side by side */}
                <article className='flex items-center justify-between mb-6'>
                    <article className='flex items-center gap-3'>
                        <img 
                            src={product.avatar} 
                            alt={product.seller}
                            className='w-10 h-10 rounded-full object-cover'
                        />
                        <article>
                            <p className='text-white font-semibold text-sm'>{product.seller}</p>
                            <p className='text-[#E8EDE8]/50 text-xs'>{product.sold} sold</p>
                        </article>
                    </article>
                    <article className='flex items-center gap-1 text-yellow-400'>
                        <Star size={16} fill='currentColor' />
                        <span className='text-white text-sm font-semibold'>{product.rating}</span>
                        <span className='text-[#E8EDE8]/50 text-sm'>({product.reviews})</span>
                    </article>
                </article>

                {/* Name & Price */}
                <article className='mb-6'>
                    <h1 className='text-white text-2xl font-bold mb-1'>{product.name}</h1>
                    <p className='text-[#7C9A7E] text-3xl font-bold'>{product.price}</p>
                </article>

                {/* Details Grid - Side by side */}
                <article className='grid grid-cols-2 gap-3 mb-6'>
                    <article className='bg-[#252C26] rounded-lg p-4'>
                        <p className='text-[#E8EDE8]/50 text-xs uppercase tracking-wider mb-1'>Category</p>
                        <p className='text-white text-sm font-medium'>{product.category}</p>
                    </article>
                    <article className='bg-[#252C26] rounded-lg p-4'>
                        <p className='text-[#E8EDE8]/50 text-xs uppercase tracking-wider mb-1'>Condition</p>
                        <p className='text-white text-sm font-medium'>{product.condition}</p>
                    </article>
                </article>

                {/* Description - Full width */}
                <article className='mb-6'>
                    <h3 className='text-white font-semibold text-sm mb-2'>Description</h3>
                    <p className='text-[#E8EDE8]/70 text-sm leading-relaxed'>{product.description}</p>
                </article>

                {/* Shipping & Policies - Side by side */}
                <article className='grid grid-cols-3 gap-3 mb-6'>
                    <article className='bg-[#252C26] rounded-lg p-3 text-center'>
                        <Truck size={20} className='text-[#7C9A7E] mx-auto mb-1' />
                        <p className='text-[#E8EDE8] text-xs'>{product.shipping}</p>
                    </article>
                    <article className='bg-[#252C26] rounded-lg p-3 text-center'>
                        <ShieldCheck size={20} className='text-[#7C9A7E] mx-auto mb-1' />
                        <p className='text-[#E8EDE8] text-xs'>{product.warranty}</p>
                    </article>
                    <article className='bg-[#252C26] rounded-lg p-3 text-center'>
                        <RotateCcw size={20} className='text-[#7C9A7E] mx-auto mb-1' />
                        <p className='text-[#E8EDE8] text-xs'>{product.returnPolicy}</p>
                    </article>
                </article>

                {/* Quantity */}
                <article className='flex items-center justify-between mb-6'>
                    <span className='text-white text-sm font-medium'>Quantity</span>
                    <article className='flex items-center gap-3'>
                        <button 
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className='w-8 h-8 bg-[#252C26] text-white rounded-lg flex items-center justify-center hover:bg-[#7C9A7E] transition-colors'
                        >
                            -
                        </button>
                        <span className='text-white text-sm w-6 text-center'>{quantity}</span>
                        <button 
                            onClick={() => setQuantity(quantity + 1)}
                            className='w-8 h-8 bg-[#252C26] text-white rounded-lg flex items-center justify-center hover:bg-[#7C9A7E] transition-colors'
                        >
                            +
                        </button>
                    </article>
                </article>

                {/* Like & Comment */}
                <article className='flex items-center gap-5 mb-6'>
                    <button className='flex items-center gap-1.5 text-[#E8EDE8] hover:text-[#7C9A7E] transition-colors'>
                        <Heart size={22} />
                        <span className='text-sm'>{product.reviews}</span>
                    </button>
                    <button className='flex items-center gap-1.5 text-[#E8EDE8] hover:text-[#7C9A7E] transition-colors'>
                        <MessageCircle size={22} />
                        <span className='text-sm'>18</span>
                    </button>
                </article>

                {/* Add to Cart - Full width at bottom */}
                <button className='w-full py-4 bg-[#7C9A7E] text-white font-semibold rounded-lg hover:bg-[#5E7D61] transition-colors text-base'>
                    Add to Cart - {product.price}
                </button>

            </article>

        </section>
    );
}

export default ProductDetails;