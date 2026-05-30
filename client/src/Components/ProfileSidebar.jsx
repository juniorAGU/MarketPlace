import { X, Mail, MapPin, Calendar,SubscriptIcon} from 'lucide-react';
import { Link } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';

const ProfileSidebar = ({ isOpen, onClose }) => {
    const { user } = UseAuth();

    if (!isOpen) return null;

    return (
        <>
            
            <article 
                className='fixed inset-0 z-40 bg-black/50'
                onClick={onClose}
            />

        
            <aside className='fixed top-0 right-0 z-50 h-full w-80 bg-[#252C26] transform transition-transform duration-300 ease-in-out translate-x-0 shadow-2xl '>
                
                
                <button 
                    onClick={onClose}
                    className='absolute top-4 right-4 text-[#E8EDE8] hover:text-[#7C9A7E] transition-colors'
                >
                    <X size={22} />
                </button>

                <article className='bg-[#252C26] flex flex-col items-center pt-16 px-6 pb-4 rounded-md'>
                    
                    
                    <img 
                        src={user?.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQloFBXdJpz-BwRdlA2tRGZabgoHaMMy3DAyRilDT0FRgQ7YymDiws_mQl0bv4LBMWjSnmMZErUS_Efaqug6UobclXP3pvUgkiliBV7PH9v&s=10'} 
                        alt={user?.name}
                        className='w-20 h-20 rounded-full object-cover border-2 border-[#7C9A7E] mb-4'
                    />

                    <h2 className='text-white text-lg font-bold'>{user?.name || 'User'}</h2>

                
                    <span className='text-[#7C9A7E] text-sm font-medium mt-1'>
                        {user?.accountType === 'seller' ? 'Seller' : 'Buyer'}
                    </span>

                    
                    {user?.bio ? (
                        <p className='text-[#E8EDE8]/60 text-sm text-center mt-3 leading-relaxed'>
                            "{user.bio}"
                        </p>
                    ) : (
                        <p className='text-[#E8EDE8]/40 text-sm text-center mt-3 italic'>
                            No bio yet
                        </p>
                    )}

                    {/* Edit Profile Button */}
                    <Link 
                        to='/profile/edit'
                        onClick={onClose}
                        className='w-full mt-6 py-2.5 bg-[#7C9A7E] text-white text-sm font-semibold rounded-lg hover:bg-[#5E7D61] transition-colors text-center'
                    >
                        Edit Profile
                    </Link>

                    {/* Details */}
                    <article className='bg-[#252C26] w-full mt-8 space-y-4 border-t border-[#1A1E1B] pt-6'>
                        <article className='flex items-center gap-3 text-[#E8EDE8]/60 text-sm'>
                            <Mail size={16} />
                            <span>{user?.email || 'No email'}</span>
                        </article>
                        <article className='flex items-center gap-3 text-[#E8EDE8]/60 text-sm'>
                            <SubscriptIcon size={16} />
                            <span className='py-1.5 px-2.5 bg-[#7C9A7E] text-white text-sm font-semibold rounded-lg'>{user?.subscription || 'free'}</span>
                        </article>
                        <article className='flex items-center gap-3 text-[#E8EDE8]/60 text-sm'>
                            <MapPin size={16} />
                            <span>{user?.location || 'No location'}</span>
                        </article>
                        <article className='flex items-center gap-3 text-[#E8EDE8]/60 text-sm'>
                            <Calendar size={16} />
                            <span>Joined {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'Recently'}</span>
                        </article>
                    </article>

                </article>
            </aside>
        </>
    );
};

export default ProfileSidebar;