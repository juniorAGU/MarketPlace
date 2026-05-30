import Errorplace from './Components/Errorplace';
import './App.css'
import RoutesGate from './Components/RoutesGate';
import Routes from './RoutsConfig/Routes';
import LayeroutsSelector from './Layouts/LayeroutsSelector';
import AuthContectProvider from './Context/AuthContect';

// internal packages
import { createBrowserRouter,RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
    {
      path: "/",
      element: <LayeroutsSelector />,
      errorElement: <Errorplace />,
      children: Routes.map(route => ({
        path: route.path === "/" ? undefined : route.path,
        index: route.path === "/",
        element: (
            <RoutesGate 
                component={route.components}
                isProtected={route.isProtected}
                role={route.role}
            />
        )
      }))
    }
  ]);


function App() {
  return(
    <AuthContectProvider>
        <RouterProvider router={router}/>
    </AuthContectProvider>
  )
    
  
}

export default App
