// import videoSource from '../../assets/page.mp4'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import html from '../../assets/Skills/HTML.svg'
import css from '../../assets/Skills/CSS.svg'
import bootstrap from '../../assets/Skills/Bootstrap.svg'
import tailwind from '../../assets/Skills/Tailwind.svg'
import router from '../../assets/Skills/Router.png'
import react from '../../assets/Skills/React.svg'
import js from '../../assets/Skills/JS.svg'
// import mongodb from '../../assets/Skills/MongoDb.png'
import nodeJs from '../../assets/Skills/NodeJs.png'
import expressJs from '../../assets/Skills/Express.png'
import firebase from '../../assets/Skills/Firebase.png'
import Lottie from 'lottie-react';
import lottieAnimate from '../../assets/Animation - 1703527069984.json'
import htmlAnimated from '../../assets/Animation - 1703527718703.json'
import mongodb from '../../assets/Animation - 1703527995682.json'
const Skills = () => {
  useEffect(() =>{
    Aos.init()
  },[])
    return (
        <div>
            {/* <div style={{
                position: 'relative',
                width: '100%',
                
                overflow: 'hidden',
            }}>
                <video
                    autoPlay
                    muted
                    loop
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                >
                    <source src={videoSource} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div style={{
                    position: 'relative',
                    zIndex: 1,
                }}>
                    <div>
                        <h1 className='text-white text-center text-5xl font-bold pl-5 hover:text-[#FF3811]'  >My <span className='text-[#FF3811]'>Skills</span> </h1>
                    </div>
                   
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10'>
                 
                   
          <div data-aos="zoom-in-up" className=" p-6 rounded-lg text-white hover:text-[#FF3811] border-b-4 hover:border-white border-[#FF3811]">
            <h3 className="text-xl font-semibold mb-4">JavaScript (JS)</h3>
            <img className='w-16 mb-3' src="https://skillicons.dev/icons?i=js" alt="" />
            
            <div className="flex items-center">
              <div className="flex-1">
                <div className="progress-bar bg-white w-3/4 h-4 rounded-full">
                  <div className="progress-bar-inner bg-yellow-400 h-full rounded-full"></div>
                </div>
              </div>
              <p className="ml-4">75%</p>
            </div>
          </div>

         
          <div data-aos="zoom-in-up" className=" p-6 rounded-lg   text-white hover:text-[#FF3811] border-b-4 hover:border-white border-[#FF3811]">
            <h3 className="text-xl font-semibold mb-4">React.js</h3>
            <img className='w-16 mb-3' src="https://skillicons.dev/icons?i=react" alt="" />
            <div className="flex items-center">
              <div className="flex-1">
                <div className="progress-bar bg-white w-5/6 h-4 rounded-full">
                  <div className="progress-bar-inner bg-green-400 h-full rounded-full"></div>
                </div>
              </div>
              <p className="ml-4">80%</p>
            </div>
          </div>

          
          <div data-aos="zoom-in-up" className="  p-6 rounded-lg   text-white hover:text-[#FF3811] border-b-4 hover:border-white border-[#FF3811]">
            <h3 className="text-xl font-semibold mb-4">CSS</h3>
            <img className='w-12 mb-3' src="https://skillicons.dev/icons?i=css" alt="" />
            <div className="flex items-center">
              <div className="flex-1">
                <div className="progress-bar bg-white w-4/5 h-4 rounded-full">
                  <div className="progress-bar-inner bg-red-400 h-full rounded-full"></div>
                </div>
              </div>
              <p className="ml-4">85%</p>
            </div>
          </div>
          
           <div data-aos="zoom-in-up" className="  p-6 rounded-lg  text-white hover:text-[#FF3811] border-b-4 hover:border-white border-[#FF3811]">
            <h3 className="text-xl font-semibold mb-4">Express.js</h3>
            <img className='w-20 mb-3' src="https://skillicons.dev/icons?i=express" alt="" />
            <div className="flex items-center">
              <div className="flex-1">
                <div className="progress-bar bg-white w-2/3 h-4 rounded-full">
                  <div className="progress-bar-inner bg-purple-400 h-full rounded-full"></div>
                </div>
              </div>
              <p className="ml-4">66%</p>
            </div>
          </div>
        
           <div data-aos="zoom-in-up" className="  p-6 rounded-lg   text-white hover:text-[#FF3811] border-b-4 hover:border-white border-[#FF3811]">
            <h3 className="text-xl font-semibold mb-4">MongoDB</h3>
            <img className='w-20 mb-3' src="https://skillicons.dev/icons?i=mongodb" alt="" />
            <div className="flex items-center">
              <div className="flex-1">
                <div className="progress-bar bg-white w-2/3 h-4 rounded-full">
                  <div className="progress-bar-inner bg-orange-400 h-full rounded-full"></div>
                </div>
              </div>
              <p className="ml-4">70%</p>
            </div>
          </div>
           
        <div data-aos="zoom-in-up" className=" p-6 rounded-lg   text-white hover:text-[#FF3811] border-b-4 hover:border-white border-[#FF3811]">
          <h3 className="text-xl font-semibold mb-4">Firebase</h3>
          <img className='w-20 mb-3' src="https://skillicons.dev/icons?i=firebase" alt="Firebase" />
          <div className="flex items-center">
            <div className="flex-1">
              <div className="progress-bar bg-white w-2/3 h-4 rounded-full">
                <div className="progress-bar-inner bg-yellow-400 h-full rounded-full"></div>
              </div>
            </div>
            <p className="ml-4">80%</p>
          </div>
        </div>

       
        <div data-aos="zoom-in-up" className=" p-6 rounded-lg   text-white hover:text-[#FF3811] border-b-4 hover:border-white border-[#FF3811]">
          <h3 className="text-xl font-semibold mb-4">Bootstrap</h3>
          <img className='w-16 mb-3' src="https://skillicons.dev/icons?i=bootstrap" alt="Bootstrap" />
          <div className="flex items-center">
            <div className="flex-1">
              <div className="progress-bar bg-white w-2/3 h-4 rounded-full">
                <div className="progress-bar-inner bg-purple-400 h-full rounded-full"></div>
              </div>
            </div>
            <p className="ml-4">85%</p>
          </div>
        </div>
          
           <div data-aos="zoom-in-up" className="  p-6 rounded-lg   text-white hover:text-[#FF3811] border-b-4 hover:border-white border-[#FF3811]">
            <h3 className="text-xl font-semibold mb-4">Tailwind</h3>
            <img className='w-16 mb-3' src="https://skillicons.dev/icons?i=tailwind" alt="" />
            <div className="flex items-center">
              <div className="flex-1">
                <div className="progress-bar bg-white w-2/3 h-4 rounded-full">
                  <div className="progress-bar-inner bg-sky-400 h-full rounded-full"></div>
                </div>
              </div>
              <p className="ml-4">95%</p>
            </div>
          </div>
           <div data-aos="zoom-in-up" className="  p-6 rounded-lg   text-white hover:text-[#FF3811] border-b-4 hover:border-white border-[#FF3811]">
            <h3 className="text-xl font-semibold mb-4">Material Ui</h3>
            <img className='w-16 mb-3' src="https://skillicons.dev/icons?i=mui" alt="" />
            <div className="flex items-center">
              <div className="flex-1">
                <div className="progress-bar bg-white w-2/3 h-4 rounded-full">
                  <div className="progress-bar-inner bg-sky-400 h-full rounded-full"></div>
                </div>
              </div>
              <p className="ml-4">95%</p>
            </div>
          </div>
                  </div>

                  <div>
                    <h1 className='text-white text-5xl font-bold text-center my-5'>Experience</h1>
                   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6 text-white '>
                   <p data-aos="flip-right" className='max-w-md ml-10 mt-9 border-b-4 border-[#FF3811] rounded-md font-medium text-lg pb-3'>I actively participated in an intensive web development course.Immersing myself and diverse technologies and methodologies . throughout the course I independently executed projects in crafting responsive and visually appealing designs using html,css,tailwind css . </p> <p data-aos="flip-right" className='max-w-md ml-10 mt-9 border-b-4 border-[#FF3811] rounded-md font-medium text-lg pb-3'>Additionally i implemented dynamic and interactive elements using Javascript,elevating the functionally of web applications . Venturing into backend development I gained hands-on experience with node.js and express.js .</p> <p className='max-w-md ml-10 mt-9 border-b-4 border-[#FF3811] rounded-md font-medium text-lg pb-3' data-aos="flip-right"> Moreover  I demonstrated proficiency in working with MongoDB,showcasing my ability to ensure efficient data storage and retrieval.This comprehensive experience has equipped me with a robust skill set in both fondend and backend development .</p> 
                    </div> 
                  </div>
                </div>
            </div> */}
             <div className="max-w-[1200px] lg:mt-1 pb-36 mt-12 px-10 mx-auto text-white" data-aos="zoom-in">
      <h2 className="lg:text-[48px] text-end  text-white banner-text sm:text-[35px] text-[32px] font-bold mb-8">
        My Skills
      </h2>
      <p className="text-lg text-gray-300 text-end max-w-[500px] ml-auto">
        Adept in leveraging a diverse skill set to craft seamless and engaging
        digital experiences, ensuring user-centric designs and intuitive
        interfaces.
      </p>

      <div className="mt-5">
        <h2 className="lg:text-[32px] text-start  text-white banner-text sm:text-[28px] text-[24px] font-bold mb-8">
        Frontend Technologies
        </h2>
        <div className="flex flex-wrap gap-3 mb-20 md:justify-start justify-center items-center mt-7" data-aos="fade-down-right">
         
          <Lottie  animationData={htmlAnimated} style={{ width: '90px', height: '90px' }}></Lottie>
          <img src={css} className="max-w-[70px]" alt="" />
          <img
            src={bootstrap}
            className="max-w-[70px] hover:bg-blue-600"
            alt=""
          />
          
          <img
            src={tailwind}
            className="max-w-[70px]"
            alt=""
          />
          <img
            src={router}
            className="max-w-[80px] rounded-full"
            alt=""
          />
          <img src={js} className="max-w-[70px]" alt="" />
          {/* <img src={react} className="max-w-[70px]" alt="" /> */}
          <Lottie  animationData={lottieAnimate} style={{ width: '90px', height: '90px' }}></Lottie>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="lg:text-[32px] text-end  text-white banner-text sm:text-[28px] text-[24px] font-bold mb-8">
        Backend Technologies
        </h2>
        <div className="flex flex-wrap gap-3 md:justify-end justify-center items-center mt-7" data-aos="zoom-in">
          {/* <img
            src={mongodb}
            className="max-w-[70px] hover:bg-[]"
            alt=""
          /> */}
          <Lottie  animationData={mongodb} style={{ width: '100px', height: '100px' }}></Lottie>
          <img
            src={nodeJs}
            className="max-w-[80px] "
            alt=""
          />
          <img
            src={expressJs}
            className="max-w-[70px]"
            alt=""
          />
          <img
            src={firebase}
            className="max-w-[90px]" 
            alt=""
          />
        </div>
      </div>
      
    </div>
        </div>
    );
};

export default Skills;