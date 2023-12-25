import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Layout = () => {
    return (
        <div className="bg-[#232d3f]">
            
            <Navbar/>
           <Outlet/>
         <Footer/>
        </div>
    );
};

export default Layout;