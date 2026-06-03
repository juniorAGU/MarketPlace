// pages/AddProduct.jsx
import { useState } from 'react';
import { ChevronLeft, Upload, X,Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import UseProducts from '../Hooks/UseProducts';
import UseMessage from '../Hooks/UseMessage';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate();
    const [images, setImages] = useState([]);
    const [imagefiles, setImagefiles] = useState([])
    const { Createone } = UseProducts();
    const {messages, Showmessage, typColo} = UseMessage();

    const categories = ['electronics', 'fashion', 'home & garden', 'sports', 'books', 'beauty', 'automotive', 'other'];

    const conditions = ['Brand New', 'Like New', 'Used - Good', 'Used - Fair'];

    const [data, setData] = useState({
        name: "",
        category: "",
        condition: "",
        price: "",
        description: "",
        quantity: "",
        shippingFee: "",
        deliveryTime: "",
        loading: false
    });

    const handleChange = (e) =>{
        const { name,value } = e.target;
        setData({...data, [name]: value});
    };

    const handleImage = (e) => {
        const file = Array.from(e.target.files);

        const newPreviews = file.map(files => URL.createObjectURL(files));
        setImages(prev => [...prev, ...newPreviews]);
        setImagefiles(prev => [...prev, ...file]);
    };

    const removeImage = (index) => {
        setImagefiles(prev => prev.filter((_,i) => i !== index));
        setImages(prev => prev.filter((_,i) => i !== index));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(data.category === "" || data.condition === "" || data.deliveryTime === "" || data.description === "" || data.name === "" || data.price === "" || data.quantity === "" || data.shippingFee === ""){
            Showmessage("failed", "inputs must not be empty!!!");
            return;
        };

        if(!imagefiles.length === 0){
            Showmessage("warning","images must be selected too");
            return
        }

        setData({...data, loading: true});
        try{
            const formData = {
                name: data.name,
                condition: data.condition,
                description: data.description,
                deliveryTime: data.deliveryTime,
                price: data.price,
                quantity: data.quantity,
                shippingFee: data.shippingFee,
                category: data.category,
                images: imagefiles
            }

            const success = await Createone(formData);

            if(success){
                setData({
                    name: "",
                    category: "",
                    condition: "",
                    price: "",
                    description: "",
                    quantity: "",
                    shippingFee: "",
                    deliveryTime: "",
                    loading: false
                });
                setImagefiles([]);
                setImages([]);
                navigate("/dashboard");
            }
        }catch(err){
            console.log(err);
            setData({...data,loading: false})
            throw err
        }


    }
    

    return (
        <section className='w-full min-h-screen bg-[#1A1E1B] pt-20 px-4 pb-12'>
            <article className='max-w-[700px] mx-auto'>

                
                <Link 
                    to='/dashboard'
                    className='flex items-center gap-2 text-[#E8EDE8] mb-8 hover:text-[#7C9A7E] transition-colors'
                >
                    <ChevronLeft size={20} />
                    <span className='text-sm'>Back to Dashboard</span>
                </Link>

                <h1 className='text-white text-2xl font-bold mb-2'>Add New Product</h1>
                <p className='text-[#E8EDE8]/50 text-sm mb-8'>Fill in the details to list your product on the marketplace.</p>

                <form className='space-y-6' onSubmit={handleSubmit}>
                    
                    
                    <article>
                        <label className='block text-sm font-medium text-[#E8EDE8] mb-2'>Product Images</label>
                        <article className='grid grid-cols-4 gap-3'>
                            {images.map((img, index) => (
                                <article key={index} className='relative aspect-square bg-[#252C26] rounded-lg overflow-hidden'>
                                    <img src={img} 
                                        alt={`Preview ${index}`} 
                                        className='w-full h-full object-cover' 
                                    />
                                    <button 
                                        type='button'
                                        onClick={() => removeImage(index)}
                                        className='absolute top-1 right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center'>
                                        <X size={12} className='text-white' />
                                    </button>
                                </article>
                            ))}
                            <label className='aspect-square bg-[#252C26] rounded-lg border-2 border-dashed border-[#7C9A7E] flex flex-col items-center justify-center cursor-pointer hover:bg-[#1A1E1B] transition-colors'>
                                <Upload size={20} className='text-[#7C9A7E] mb-1' />
                                <span className='text-[#E8EDE8]/50 text-xs'>Add Image</span>
                                <input type="file" accept='image/*' className='hidden'  multiple onChange={handleImage}/>
                            </label>
                        </article>
                    </article>

                    {/* Product Name */}
                    <article>
                        <label className='block text-sm font-medium text-[#E8EDE8] mb-2'>Product Name</label>
                        <input 
                            name='name'
                            value={data.name}
                            onChange={handleChange}
                            type="text"
                            placeholder="e.g. Wireless Bluetooth Headphones"
                            className='w-full px-4 py-3 bg-[#252C26] border border-[#7C9A7E] rounded-lg text-white placeholder-[#E8EDE8]/50 focus:outline-none focus:ring-2 focus:ring-[#7C9A7E] focus:border-transparent transition'
                        />
                    </article>

                    {/* Category & Condition */}
                    <article className='grid grid-cols-2 gap-4'>
                        <article>
                            <label className='block text-sm font-medium text-[#E8EDE8] mb-2'>Category</label>
                            <select 
                                name='category'
                                onChange={handleChange}
                                value={data.category}
                                className='w-full px-4 py-3 bg-[#252C26] border border-[#7C9A7E] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#7C9A7E] focus:border-transparent transition'>
                                <option value=''>Select category</option>
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </article>
                        <article>
                            <label className='block text-sm font-medium text-[#E8EDE8] mb-2'>Condition</label>
                            <select 
                                name='condition'
                                onChange={handleChange}
                                value={data.condition}
                                className='w-full px-4 py-3 bg-[#252C26] border border-[#7C9A7E] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#7C9A7E] focus:border-transparent transition'>
                                <option value=''>Select condition</option>
                                {conditions.map(cond => (
                                    <option key={cond} value={cond}>{cond}</option>
                                ))}
                            </select>
                        </article>
                    </article>

                    {/* Price & Quantity */}
                    <article className='grid grid-cols-2 gap-4'>
                        <article>
                            <label className='block text-sm font-medium text-[#E8EDE8] mb-2'>Price ($)</label>
                            <input 
                                name='price'
                                onChange={handleChange}
                                value={data.price}
                                type="number"
                                min={0}
                                max={500000}
                                placeholder="0.00"
                                className='w-full px-4 py-3 bg-[#252C26] border border-[#7C9A7E] rounded-lg text-white placeholder-[#E8EDE8]/50 focus:outline-none focus:ring-2 focus:ring-[#7C9A7E] focus:border-transparent transition'
                            />
                        </article>
                        <article>
                            <label className='block text-sm font-medium text-[#E8EDE8] mb-2'>Quantity</label>
                            <input 
                                onChange={handleChange}
                                value={data.quantity}
                                name='quantity'
                                type="number"
                                min={1}
                                max={5}
                                placeholder="1"
                                className='w-full px-4 py-3 bg-[#252C26] border border-[#7C9A7E] rounded-lg text-white placeholder-[#E8EDE8]/50 focus:outline-none focus:ring-2 focus:ring-[#7C9A7E] focus:border-transparent transition'
                            />
                        </article>
                    </article>

                    {/* Description */}
                    <article>
                        <label className='block text-sm font-medium text-[#E8EDE8] mb-2'>Description</label>
                        <textarea 
                            onChange={handleChange}
                            value={data.description}
                            name='description'
                            rows={5}
                            placeholder="Describe your product in detail — features, specifications, what's included..."
                            className='w-full px-4 py-3 bg-[#252C26] border border-[#7C9A7E] rounded-lg text-white placeholder-[#E8EDE8]/50 focus:outline-none focus:ring-2 focus:ring-[#7C9A7E] focus:border-transparent transition resize-none'
                        />
                    </article>

                    {/* Shipping */}
                    <article className='grid grid-cols-2 gap-4'>
                        <article>
                            <label className='block text-sm font-medium text-[#E8EDE8] mb-2'>Shipping Fee ($)</label>
                            <input 
                                name='shippingFee'
                                value={data.shippingFee}
                                onChange={handleChange}
                                type="number"
                                placeholder="0.00"
                                max={50000}
                                min={0}
                                className='w-full px-4 py-3 bg-[#252C26] border border-[#7C9A7E] rounded-lg text-white placeholder-[#E8EDE8]/50 focus:outline-none focus:ring-2 focus:ring-[#7C9A7E] focus:border-transparent transition'
                            />
                        </article>
                        <article>
                            <label className='block text-sm font-medium text-[#E8EDE8] mb-2'>Delivery Time (days)</label>
                            <input 
                                onChange={handleChange}
                                value={data.deliveryTime}
                                name='deliveryTime'
                                type="number" 
                                max={5}
                                min={1}
                                placeholder="3-5"
                                className='w-full px-4 py-3 bg-[#252C26] border border-[#7C9A7E] rounded-lg text-white placeholder-[#E8EDE8]/50 focus:outline-none focus:ring-2 focus:ring-[#7C9A7E] focus:border-transparent transition'
                            />
                        </article>
                    </article>

                    {/* Submit */}
                    <article className='flex gap-4 pt-4'>
                        <Link 
                            to='/dashboard'
                            className='flex-1 py-3 bg-[#252C26] text-[#E8EDE8] font-semibold rounded-lg hover:bg-[#1A1E1B] transition-colors text-center border border-[#252C26]'
                        >
                            Cancel
                        </Link>
                        <button 
                            disabled={data.loading}
                            type="submit"
                            className={`flex-1 py-3 bg-[#7C9A7E] text-white font-semibold rounded-lg hover:bg-[#5E7D61] transition-colorsdisabled:opacity-50 disabled:cursor-not-allowed duration-200 tracking-wide flex items-center justify-center ${
                            data.loading 
                                ? 'bg-[#5E7D61] cursor-not-allowed' 
                                : 'bg-[#7C9A7E] hover:bg-[#5E7D64] focus:ring-[#7C9A7E]'}`}
                        >
                            { data.loading ?  <Loader2 className="h-5 w-5 animate-spin text-white" /> : "List Product"}
                        </button>
                    </article>

                </form>

            </article>
            {
                messages && (
                    <div className={`slider fixed top-4 right-4 z-50 text-white px-4 py-2 rounded ${typColo[messages.type]} `}>
                        <h1>

                            {messages.message}

                        </h1>
                    </div>
                )
            }
        </section>
    );
};

export default AddProduct;