import videoSource from '../../assets/page.mp4'
// import assignmentPDF from '../../assets/Assignment (1).pdf';
import image from '../../assets/profile-pic (4).png'
const About = () => {
    return (
        <div>
            <div style={{
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




                            {/* <a href={assignmentPDF} download> <button type='' className='btn w-full py-3 px-3 text-white uppercase mt-5  border-2 border-[#FF3811] rounded-full'>
                                Download resume</button></a> */}

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
            </div>
        </div>
    );
};

export default About;