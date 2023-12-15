import videoSource from '../../assets/page.mp4'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Skills = () => {
  useEffect(() =>{
    Aos.init()
  },[])
    return (
        <div>
            <div style={{
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
                 
                    {/* Skill Card 1 */}
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

          {/* Skill Card 2 */}
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

          {/* Skill Card 3 */}
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
           {/* Express.js */}
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
           {/* MongoDB */}
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
            {/* Firebase */}
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

        {/* Bootstrap */}
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
           {/* Tailwind */}
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
            </div>
        </div>
    );
};

export default Skills;