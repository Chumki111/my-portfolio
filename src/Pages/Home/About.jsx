import videoSource from '../../assets/page.mp4'
// import assignmentPDF from '../../assets/Assignment (1).pdf';
import image from '../../assets/profile-pic__5_-removebg-preview.png'


const About = () => {

    return (
        <div className='min-h-screen text-white'>
            {/* <div style={{
                position: 'relative',
                width: '100%',
                height: '100vh',
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
                    <div className=' flex justify-evenly'>
                        <div className='w-[229] h-[300]'>
                            <img src={image} className='rounded-full' alt="" />
                        </div>
                        <div className='text-white ml-10'>
                            <h1 className='text-5xl font-bold text-center mt-20 pb-4'>Hi, I`m <span className='text-[#FF3811]'>Chumki Khatun</span></h1>
                            <p className='max-w-lg text-center text-lg font-light pb-4'>I believe in the power of technology to make a positive impact on people`s lives. Each line of code I write is fueled by a desire to create solutions that are not just functional but also intuitive and delightful for users.</p>




                           

                            <div className="max-w-md text-white shadow-md p-6">
                                <h1 className="text-4xl font-bold mb-4 text-[#FF3811]">Person Information</h1>
                                <div>
                                    <p className="mb-2 font-semibold text-2xl"><span className="text-gray-400">Full Name:</span> Chumki Khatun</p>
                                    <p className="mb-2 font-semibold text-2xl"><span className="text-gray-400">Age:</span> 20</p>
                                    <p className="mb-2 font-semibold text-2xl"><span className="text-gray-400">Nationality:</span> Bangladeshi</p>
                                    <p className="mb-2 font-semibold text-2xl"><span className="text-gray-400">Language:</span> Bengali, English</p>
                                    <p className="mb-2 font-semibold text-2xl"><span className="text-gray-400">Location:</span> Rajshahi, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
 <div className="max-w-[1200px] lg:mt-1 pt-10 pb-24 mt-12 px-10 mx-auto text-white">
      <h2 className="lg:text-[48px] text-start  text-white banner-text sm:text-[35px] text-[32px] font-bold mb-8">
        A Little Bit About Me
      </h2>
      <div className="flex lg:flex-row flex-col">

    
      <div className="flex gap-10 flex-col ">
        <div>
          <h3 className="mt-8 lg:text-[25px] animate__animated animate__shakeY font-semibold text-gray-400">
            Who I am{" "}
          </h3>
          <p className="mt-3 text-[18px] max-w-[500px] font-medium text-gray-300 animate__animated animate__flipInX">
            I'm Arif, a junior frontend developer with a keen interest in
            technology and a passion for designing websites.
          </p>
        </div>
        <div>
          <h3 className="mt-6 lg:text-[25px] font-semibold animate__animated animate__shakeY text-gray-400">
            What I do{" "}
          </h3>
          <p className="mt-3 text-[18px] max-w-[500px] font-medium text-gray-300 animate__animated animate__flipInX">
            As an aspiring frontend developer, I've devoted myself to learning
            technologies like HTML, CSS, JavaScript, React.js, MongoDB , Node.js , Express.js , jwt and more. I've
            also undertaken personal projects such as building responsive
            websites and experimenting with various frameworks and libraries.
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 lg:-mt-20 animate__animated animate__rubberBand">
       {/* <Lottie  animationData={Aboutanimate}></Lottie> */}
      </div>
      </div>
    </div>
        </div>
    );
};

export default About;