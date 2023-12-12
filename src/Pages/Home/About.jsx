import videoSource from '../../assets/page.mp4'
import assignmentPDF from '../../assets/Assignment (1).pdf';
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
                    <div className='text-white flex justify-center items-center '>
                        <div>
                            <h1 className='text-5xl font-bold text-center mt-32 pb-4'>Hi, I`m <span className='text-[#FF3811]'></span></h1>
                            <p className='max-w-lg text-center text-lg font-light pb-4'>I`m always open to new opportunities, collaborations, and discussions about the exciting possibilities in the world of web development.Whether you`re a fellow developer, potential collaborator, or someone with a shared passion for innovation, I`d love to connect.</p>



                          
                            <a href={assignmentPDF} download> <button type='' className='btn w-full py-3 px-3 text-white uppercase mt-5  border-2 border-[#FF3811] rounded-full'>
                                Download resume</button></a>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;