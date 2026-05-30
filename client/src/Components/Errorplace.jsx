import React from 'react';
import { useRouteError } from 'react-router-dom';

function Errorplace() {
    const error = useRouteError();
    return (
        <section className='w-full h-full flex flex-col justify-center items-center gap-4'>
            <h1 className='mt-20 text-2xl font-bold text-red-500'>You just encountered an error!!!</h1>
            <div className='w-[50%] h-[400px] rounded-md shadow-md flex justify-center items-center '>
                <p className='bg-red-500 text-white rounded-md py-2 px-2 font-semibold'>{error.message} !!!</p>
            </div>
        </section>
    )
}

export default Errorplace