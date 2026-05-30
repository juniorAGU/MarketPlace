// components/Logo.jsx
// const Logo = () => {
//     return (
//         <div className="flex items-baseline">
//         <span className="text-2xl font-extrabold text-white tracking-tight">
//             kenny
//         </span>
//         <span 
//             className="text-2xl font-semibold italic tracking-wide"
//             style={{ color: '#7C9A7E' }}
//         >
//             stores
//         </span>
//         </div>
//     );
// };

// export default Logo;
const Logo = () => {
    return (
        <div className="flex items-baseline gap-0">
        <span className="text-2xl font-extrabold text-white tracking-tight">
            kenny
        </span>
        <span 
            className="text-2xl font-bold mx-1"
            style={{ color: '#7C9A7E' }}
        >
            ·
        </span>
        <span 
            className="text-2xl font-light italic tracking-wide"
            style={{ color: '#7C9A7E' }}
        >
            stores
        </span>
        </div>
    );
};

export default Logo