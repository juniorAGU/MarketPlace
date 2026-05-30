import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

function MainLayout({children}) {
    return (
        <section>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </section>
    )
}

export default MainLayout