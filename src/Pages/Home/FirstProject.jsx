
import { useEffect } from 'react';
import image from '../../assets/Capturedgf.png'
import Aos from 'aos';

const FirstProject = () => {
  useEffect(() =>{
    Aos.init()
  },[])
    const backgroundImageStyle = {
        backgroundImage: `url(${image})`,
};
    return (
        <div className="max-w-[800px] rounded-xl mt-20 flex md:flex-row flex-col bg-[#363636] shadow-lg" data-aos="zoom-in">
      <div
        className="md:w-1/3 w-full rounded-l-xl bg-cover bg-top hover:bg-bottom ease-in-out duration-[6000ms] h-64 md:h-auto cursor-pointer"
        style={backgroundImageStyle}
      ></div>

      <div className="md:w-2/3 w-full px-6 py-4">
        <h2 className="text-3xl font-bold mb-3 text-white">BrandShop</h2>

        <p className="text-lg mb-4 text-gray-300">
          Discover brand in BrandShop , add brand , see details brand , delete brand and updated your brand . 
        </p>

        <div className="flex flex-wrap mb-4">
          <span className="text-lg text-gray-300">
            {" "}
            <span className="text-lg font-semibold text-white mr-3">
              Technology:
            </span>{" "}
            HTML, Tailwind CSS, React.js, Firebase, MongoDB, Express.js,
            Node.js
          </span>
        </div>
        <div className="flex items-center  gap-5">
            <a href="https://database-brand-assignment.web.app/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            View Project
          </button>    
            </a>
          <a href="https://github.com/Chumki111/brand-shop-client-side">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Github Repo
          </button>
          </a>
          
        </div>
      </div>
    </div>
    );
};

export default FirstProject;