import videoSource from '../../../assets/Blue Futuristic Moving Particles Cyber Monday Sale Video.mp4'
import { useTypewriter } from 'react-simple-typewriter'
import assignmentPDF from '../../../assets/Assignment (1).pdf';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import ButtonBase from '@mui/material/ButtonBase';
// import Typography from '@mui/material/Typography';
// import { IconButton } from '@mui/material';
// import facebook from '../../../assets/facebook.jpg'
// import github from '../../../assets/github.jpg'
// import linkin from '../../../assets/linkin.jpg'
// import { Link } from 'react-router-dom';


// const images = [
//     {
//         url: facebook,
//         title: 'Facebook',
//         width: '30%',
//         link: 'https://www.facebook.com/profile.php?id=100093644379500'
//     },
//     {
//         url: github,
//         title: 'Github',
//         width: '30%',
//         link: 'https://github.com/Chumki111'
//     },
//     {
//         url: linkin,
//         title: 'LinkIn',
//         width: '30%',
//         link: 'https://www.linkedin.com/in/chumki-khatun-3083232a4/'
//     },
// ];
// const ImageButton = styled(ButtonBase)(({ theme }) => ({
//     position: 'relative',
//     height: 120,
//     [theme.breakpoints.down('sm')]: {
//         width: '100% !important', // Overrides inline-style
//         height: 100,
//     },
//     '&:hover, &.Mui-focusVisible': {
//         zIndex: 1,
//         '& .MuiImageBackdrop-root': {
//             opacity: 0.15,
//         },
//         '& .MuiImageMarked-root': {
//             opacity: 0,
//         },
//         '& .MuiTypography-root': {
//             border: '4px solid currentColor',
//         },
//     },
// }));

// const ImageSrc = styled('span')({
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center 40%',
// });

// const Image = styled('span')(({ theme }) => ({
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: theme.palette.common.white,
// }));

// const ImageBackdrop = styled('span')(({ theme }) => ({
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     backgroundColor: theme.palette.common.black,
//     opacity: 0.4,
//     transition: theme.transitions.create('opacity'),
// }));

// const ImageMarked = styled('span')(({ theme }) => ({
//     height: 3,
//     width: 18,
//     backgroundColor: theme.palette.common.white,
//     position: 'absolute',
//     bottom: -2,
//     left: 'calc(50% - 9px)',
//     transition: theme.transitions.create('opacity'),
// }));
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
                            <h1 className='text-5xl font-bold text-center mt-32 pb-4'>Hi, I`m <span className='text-[#FF3811]'>{text}</span></h1>
                            <p className='max-w-lg text-center text-lg font-light pb-4'>I`m always open to new opportunities, collaborations, and discussions about the exciting possibilities in the world of web development.Whether you`re a fellow developer, potential collaborator, or someone with a shared passion for innovation, I`d love to connect.</p>



                            {/* <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
                                {images.map((image) => (
                                    <ImageButton
                                        focusRipple
                                        key={image.title}
                                        style={{
                                            width: image.width,
                                        }}
                                    >
                                        <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                                        <ImageBackdrop className="MuiImageBackdrop-root" />
                                        <Image>
                                            <Link to={image.link}> <Typography
                                                component="span"
                                                variant="subtitle1"
                                                color="inherit"
                                                sx={{
                                                    position: 'relative',
                                                    p: 4,
                                                    pt: 2,
                                                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                                }}
                                            >
                                                {image.title}
                                                <ImageMarked className="MuiImageMarked-root" />
                                            </Typography></Link>
                                        </Image>
                                    </ImageButton>
                                ))}
                            </Box> */}
                            <a href={assignmentPDF} download> <button type='' className='btn w-full py-3 px-3 text-white uppercase mt-5  border-2 border-[#FF3811] rounded-full'>
                                Download resume</button></a>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;