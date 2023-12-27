// import videoSource from '../../../assets/Blue Futuristic Moving Particles Cyber Monday Sale Video.mp4'


// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import { Box, IconButton } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { useTypewriter } from 'react-simple-typewriter';
import img from '../../../assets/profile-pic__5_-removebg-preview.png'
import { Typewriter } from "react-simple-typewriter";
import 'animate.css';

const Banner = () => {
  const job = ["Frontend Developer />", "Web Developer />"];

  const jobColors = {
    "Frontend Developer": "#4c8df5",
    "MERN Developer": "#6ab04c",
  };
   
    // const [text] = useTypewriter({
    //     /* Config */
    //     words: ['Chumki Khatun', 'Front End Developer'],
    //     loop: {},
    //     typeSpeed: 100,
    //     deleteSpeed: 40
    // })
    return (
        <div>
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
                    <div className='text-white flex justify-center items-center '>
                        <div>
                            <h1 className='text-5xl font-bold text-center mt-32 pb-4'>Hi, I'm <span className='text-[#FF3811]'>{text}</span></h1>
                            <p className='max-w-lg text-center text-2xl md:text-lg font-light pb-4'>I'm always open to new opportunities, collaborations, and discussions about the exciting possibilities in the world of web development.Whether you`re a fellow developer, potential collaborator, or someone with a shared passion for innovation, I`d love to connect.</p>

                            <Box className="text-center">
                               
                               <Link to="https://www.facebook.com/profile.php?id=100093644379500">
                               <IconButton aria-label="delete" size="large">
                                    <FacebookOutlinedIcon className='text-white' fontSize="inherit" />
                                </IconButton>
                               </Link>
                               <Link to="https://github.com/Chumki111">
                               <IconButton aria-label="delete" size="large">
                                    <GitHubIcon className='text-white' fontSize="inherit" />
                                </IconButton>
                               </Link>
                               <Link to="https://www.linkedin.com/feed/">
                               <IconButton aria-label="delete" size="large">
                                    <LinkedInIcon className='text-white' fontSize="inherit" />
                                </IconButton>
                               </Link>
                            
                            </Box>



                            <a href='https://drive.google.com/uc?export=download&id=1ZcpI8ryqvllNwuNZmJsTtC2f9PoH7E4_' download target="_blank "> <button data-aos="flip-up" type='' className='btn w-full py-3 px-3 text-white uppercase mt-5  border-2 border-[#FF3811] rounded-full'>
                                Download resume</button></a>


                        </div>
                    </div>
                </div>
            </div> */}

<div className="flex flex-col lg:flex-row max-w-[1200px] mx-auto py-20 text-white">
    <div className="lg:w-[65%] lg:order-1 order-2 px-10 flex flex-col" data-aos="fade-up"
     data-aos-duration="3000">
      <div className="lg:text-[48px] text-white banner-text sm:text-[35px] text-[28px] font-bold mb-8">
        <h2>
         {'<'} Hi 👋, <br /> My name is <br />
          <span className="super-text font-bold my-element ">Chumki Khatun</span>
          <p className="  ">
            I`m{' '}
            <span className="font-bold tech-dev ">
                <Typewriter words={job} loop={20} cursor cursorColor={jobColors[job]} /> 
              </span>
          </p>
          
        </h2>
      </div>
      <div className="fronted ">
          <a
          // href="https://drive.google.com/uc?export=download&id=1ZcpI8ryqvllNwuNZmJsTtC2f9PoH7E4_" 
            href="/Chumki Khatun (resume).pdf" 
            download="Chumki_Khatun_Resume.pdf" 
            className="btn-resume bg-blue-600 mt-6 border-blue-600 border-2 hover:bg-[#232D3F] rounded-3xl  text-white font-bold lg:py-3 py-2 lg:px-6 px-4 md:text-base text-sm lg:text-lg focus:outline-none focus:shadow-outline inline-block"
            style={{ textDecoration: 'none' }}
          >
           {'<'} Download Resume {'/>'}
          </a>
        </div>
    </div>

    <div className="lg:w-[35%]  hidden rounded-fulll lg:order-2 order-1    lg:flex justify-center mx-auto items-center relative">
  <img className=" rounded-full shadow-xl max-w-[250px] shadow-blue-500 border-[2px] border-black lg:w-3/6 banner-img " src={img} alt=""  />
</div>

  </div>
        </div>
    );
};

export default Banner;