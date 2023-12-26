import { useEffect } from 'react';
import image2 from '../../assets/Donation-Campaign-Assignment.png'
import Aos from 'aos';

const SecondProject = () => {
  useEffect(() =>{
    Aos.init()
  },[])
    const backgroundImageStyle = {
        backgroundImage: `url(${image2})`,
};
    return (
        <div className="max-w-[800px] rounded-xl mt-20 flex md:flex-row-reverse ml-auto flex-col bg-[#363636] shadow-lg" data-aos="zoom-in">
      <div
        className="md:w-1/3 w-full rounded-r-xl bg-cover bg-top hover:bg-bottom ease-in-out duration-[3000ms] h-64 md:h-auto cursor-pointer"
        style={backgroundImageStyle}
      ></div>

      <div className="md:w-2/3 w-full px-6 py-4">
        <h2 className="text-3xl font-bold mb-3 text-white">Donation Campaign</h2>

        <p className="text-lg mb-4 text-gray-300">
         A donation campaign website , user can view full website , user can donate .
        </p>

        <div className="flex flex-wrap mb-4">
          <span className="text-lg text-gray-300">
            {" "}
            <span className="text-lg font-semibold text-white mr-3">
              Technology:
            </span>{" "}
            HTML, Tailwind CSS, Daisy Ui , Sweetalert
          </span>
        </div>

        <div className="flex items-center  gap-5">
            <a href="https://calm-plane.surge.sh/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            View Project
          </button>    
            </a>
          <a href="https://github.com/Chumki111/donation-campaign">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Github Repo
          </button>
          </a>
          
        </div>
      </div>
    </div>
    );
};

export default SecondProject;