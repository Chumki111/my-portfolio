// import videoSource from '../../assets/page.mp4'
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import ButtonBase from '@mui/material/ButtonBase';
// import Typography from '@mui/material/Typography';
// import image from '../../assets/Capturedgf.png'
// import image2 from '../../assets/Capturdfgde.png'
// import image3 from '../../assets/Captureeeeeeeee.png'
// import { Link } from '@mui/material';

import FirstProject from "./FirstProject";
import SecondProject from "./SecondProject";
import ThirdProject from "./ThirdProject";

// const images = [
//   {
//     url: image,
//    link : 'https://database-brand-assignment.web.app/',
//     title: 'Live Link',
//     width: '40%',
//     github : 'https://github.com/Chumki111/brand-shop-client-side',
//     code : 'Source Code'
//   },
//   {
//     url: image2,
//     link : 'https://calm-plane.surge.sh/',
//     title: 'Live Link',
//     github : 'https://github.com/Chumki111/donation-campaign',
//     code : 'Source Code',
//     width: '30%'
//   },
//   {
//     url: image3,
//     link : 'https://offline-services-sharing.web.app/',
//     title: 'Live Link',
//     github : 'https://github.com/Chumki111/crud-and-jwt-client',
//     code : 'Source Code',
//     width: '30%'
//   },
// ];

// const ImageButton = styled(ButtonBase)(({ theme }) => ({
//   position: 'relative',
//   height: 200,
//   [theme.breakpoints.down('sm')]: {
//     width: '100% !important', 
//     height: 100,
//   },
//   '&:hover, &.Mui-focusVisible': {
//     zIndex: 1,
//     '& .MuiImageBackdrop-root': {
//       opacity: 0.15,
//     },
//     '& .MuiImageMarked-root': {
//       opacity: 0,
//     },
//     '& .MuiTypography-root': {
//       border: '4px solid currentColor',
//     },
//   },
// }));

// const ImageSrc = styled('span')({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center 40%',
// });

// const Image = styled('span')(({ theme }) => ({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   color: theme.palette.common.white,
// }));

// const ImageBackdrop = styled('span')(({ theme }) => ({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   backgroundColor: theme.palette.common.black,
//   opacity: 0.4,
//   transition: theme.transitions.create('opacity'),
// }));

// const ImageMarked = styled('span')(({ theme }) => ({
//   height: 3,
//   width: 18,
//   backgroundColor: theme.palette.common.white,
//   position: 'absolute',
//   bottom: -2,
//   left: 'calc(50% - 9px)',
//   transition: theme.transitions.create('opacity'),
// }));
const Projects = () => {
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
                <div>
                    <h1 className='text-white text-center text-5xl font-bold pl-5 hover:text-[#FF3811]'  >My <span className='text-[#FF3811]'>Projects</span> </h1>
                </div>
                <Box className="mt-10" sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
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
           <Link href={image.link}>
           <Typography
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
            </Typography>
           </Link>
           <Link href={image.github}>
           <Typography
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
              {image.code}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
           </Link>
          </Image>
        </ImageButton>
      ))}
    </Box>
             
            </div>
        </div> */}

<div className="max-w-[1200px] lg:mt-1 pb-36 mt-12 px-10 mx-auto text-white">
      <h2 className="lg:text-[50px] text-center  text-white banner-text sm:text-[35px] text-[35px] font-bold mb-8">
        My Projects
      </h2>
      <FirstProject></FirstProject>
 <SecondProject></SecondProject>
 <ThirdProject></ThirdProject>


      
      
    </div>
    </div>
    );
};

export default Projects;