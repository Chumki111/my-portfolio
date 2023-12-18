import videoSource from '../../../assets/Blue Futuristic Moving Particles Cyber Monday Sale Video.mp4'
import { useTypewriter } from 'react-simple-typewriter'

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
const Banner = () => {

    const [text] = useTypewriter({
        /* Config */
        words: ['Chumki Khatun', 'Front End Developer'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
    })
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
            </div>
        </div>
    );
};

export default Banner;