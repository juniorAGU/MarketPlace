import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { Navigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';


function RoutesGate({component: Component, isProtected,role, accountType}) {

    const {isAuthenticated, loading, user} = UseAuth();

    if (loading) {
        return (
            <section className=' bg-[#1A1E1B] flex items-center justify-center'>
                <Loader2 className='h-8 w-8 animate-spin text-[#7C9A7E]' />
            </section>
        );
    }
    
    if(!isProtected) return <Component />;

    if(!isAuthenticated){
        return <Navigate to='/login' replace/>
    }

    if (accountType && !accountType.includes(user.accountType)) {
    return <Navigate to='/' replace />;
    }



    return <Component />
}

export default RoutesGate