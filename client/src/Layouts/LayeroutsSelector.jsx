import MainLayout from './MainLayout';
import BlankLouts from './BlankLouts';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';



function LayeroutsSelector() {

    const location = useLocation();

    const currentPath = location.pathname;

    if(currentPath === "/" || currentPath === "/register" || currentPath === "/login"){
        return (
            <BlankLouts >
                <Outlet />
            </BlankLouts>
        )
    };


    return (
        <MainLayout >
            <Outlet />
        </MainLayout>
    )
}

export default LayeroutsSelector