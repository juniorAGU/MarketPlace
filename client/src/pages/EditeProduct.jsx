import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSpecifiedProduct } from "../Services/ProductServices";
import { Loader2,ArrowLeft, Upload, X } from "lucide-react";
import { Link } from "react-router-dom";

function EditeProduct() {
    const [product, setProduct] = useState();
    const [loading,setLoading] =useState(true)
    const {id} = useParams();
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        quantity: "",
        category: "",
        description: "",
        status: "available"
    });
    const [images, setImages] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try{
                const products =  await getSpecifiedProduct(id);
                setProduct(products);
                setFormData({
                    name: products.name || "",
                    price: products.price || "",
                    quantity: products.quantity || "",
                    category: products.category || "",
                    description: products.description || "",
                    status: products.status || ""
                })
                setImagePreviews(products.images || []);

            }catch(err){
                console.log(err)
            }finally{
                setLoading(false)
            }
        }
        fetchProduct();
    },[id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setImages(prev => [...prev, ...files]);
        
        const previews = files.map(file => URL.createObjectURL(file));
        setImagePreviews(prev => [...prev, ...previews]);
    };

    const removeImage = (index) => {
        setImages(prev => prev.filter((_, i) => i !== index));
        setImagePreviews(prev => prev.filter((_, i) => i !== index));
    };

    if(loading){
        <section className="flex justify-center items-center max-h-screen">
            <Loader2 className="animate-spin text-[#7C9A7E]" size={32} />
        </section>
    }

    if (!product) {
        return (
            <section className="min-h-screen bg-[#1A1E1B] flex justify-center items-center">
                <div className="text-center">
                    <p className="text-[#E8EDE8]/60 mb-4">Product not found</p>
                    <Link to="/myproducts" className="text-[#7C9A7E] hover:underline">
                        Back to My Products
                    </Link>
                </div>
            </section>
        );
    }

    

    return (
        <section className="min-h-screen bg-[#1A1E1B] pt-20 px-4 pb-12">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <Link 
                        to="/dashboard/my-products"
                        className="p-2 bg-[#252C26] rounded-lg hover:bg-[#2F3830] transition-colors"
                    >
                        <ArrowLeft size={20} className="text-[#E8EDE8]" />
                    </Link>
                    <div>
                        <h1 className="text-white text-2xl font-bold">Edit Product</h1>
                        <p className="text-[#E8EDE8]/50 text-sm mt-1">Update your product information</p>
                    </div>
                </div>

                {/* Form */}
                <form className="space-y-6">
                    {/* Product Name */}
                    <div>
                        <label className="block text-[#E8EDE8] text-sm font-medium mb-2">
                            Product Name *
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#252C26] border border-[#2F3830] rounded-lg text-white focus:outline-none focus:border-[#7C9A7E] transition-colors"
                            placeholder="Enter product name"
                        />
                    </div>

                    {/* Price & Quantity */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-[#E8EDE8] text-sm font-medium mb-2">
                                Price (₦) *
                            </label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                min={0}
                                max={2000000}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-[#252C26] border border-[#2F3830] rounded-lg text-white focus:outline-none focus:border-[#7C9A7E] transition-colors"
                                placeholder="0.00"
                            />
                        </div>
                        <div>
                            <label className="block text-[#E8EDE8] text-sm font-medium mb-2">
                                Quantity / Stock *
                            </label>
                            <input
                                type="number"
                                name="quantity"
                                min={1}
                                max={10}
                                value={formData.quantity}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-[#252C26] border border-[#2F3830] rounded-lg text-white focus:outline-none focus:border-[#7C9A7E] transition-colors"
                                placeholder="0"
                            />
                        </div>
                    </div>

                    {/* Category & Status */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-[#E8EDE8] text-sm font-medium mb-2">
                                Category *
                            </label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-[#252C26] border border-[#2F3830] rounded-lg text-white focus:outline-none focus:border-[#7C9A7E] transition-colors"
                            >
                                <option value="">Select category</option>
                                <option value="electronics">Electronics</option>
                                <option value="fashion">Fashion</option>
                                <option value="home">Home & Living</option>
                                <option value="books">Books</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-[#E8EDE8] text-sm font-medium mb-2">
                                Status
                            </label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-[#252C26] border border-[#2F3830] rounded-lg text-white focus:outline-none focus:border-[#7C9A7E] transition-colors"
                            >
                                <option value="available">Available</option>
                                <option value="sold">Sold</option>
                                <option value="reserved">Reserved</option>
                            </select>
                        </div>
                    </div>

                    {/* Images */}
                    <div>
                        <label className="block text-[#E8EDE8] text-sm font-medium mb-2">
                            Product Images
                        </label>
                        <div className="border-2 border-dashed border-[#2F3830] rounded-lg p-6 hover:border-[#7C9A7E] transition-colors">
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleImageUpload}
                                className="hidden"
                                id="imageUpload"
                            />
                            <label
                                htmlFor="imageUpload"
                                className="flex flex-col items-center justify-center gap-2 cursor-pointer"
                            >
                                <Upload size={32} className="text-[#E8EDE8]/40" />
                                <p className="text-[#E8EDE8]/40 text-sm">
                                    Click to upload or drag and drop
                                </p>
                                <p className="text-[#E8EDE8]/30 text-xs">
                                    PNG, JPG, WEBP (Max 5MB each)
                                </p>
                            </label>
                        </div>

                        {/* Image Previews */}
                        {imagePreviews.length > 0 && (
                            <div className="flex flex-wrap gap-3 mt-4">
                                {imagePreviews.map((preview, index) => (
                                    <div key={index} className="relative group">
                                        <img
                                            src={preview}
                                            alt={`Preview ${index + 1}`}
                                            className="w-20 h-20 rounded-lg object-cover"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeImage(index)}
                                            className="absolute -top-2 -right-2 p-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <X size={12} className="text-white" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-[#E8EDE8] text-sm font-medium mb-2">
                            Description *
                        </label>
                        <textarea
                            name="description"
                            rows={6}
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#252C26] border border-[#2F3830] rounded-lg text-white focus:outline-none focus:border-[#7C9A7E] transition-colors resize-none"
                            placeholder="Describe your product..."
                        />
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex gap-4 pt-4">
                        <button
                            type="submit"
                            disabled={uploading}
                            className="flex-1 px-6 py-3 bg-[#7C9A7E] hover:bg-[#5E7D61] text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {uploading ? "Saving..." : "Save Changes"}
                        </button>
                        <Link
                            to="/dashboard/my-products"
                            className="px-6 py-3 bg-[#252C26] hover:bg-[#2F3830] text-[#E8EDE8] font-semibold rounded-lg transition-colors text-center"
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default EditeProduct