import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <div className='min-h-[calc(100vh-176px)]'>
            <Outlet/>
            </div>
            
            <Footer/>
        </div>
    );
};

export default Layout;