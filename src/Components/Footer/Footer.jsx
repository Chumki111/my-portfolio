import { Box, Container, IconButton, Typography } from "@mui/material";

// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {

   
    return (
        <Box className="bg-black px-2 py-6">
            <Container>
                <Box className="w-full text-center" sx={{
                        '& svg': {
                            color: 'white'
                        }
                    }}>
                   <IconButton>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton>
                            <YouTubeIcon />
                        </IconButton>
                        <IconButton>
                            <LinkedInIcon />
                        </IconButton>
                    
                </Box>

               

                    <Typography color='gray' variant="body2" textAlign="center">
                    @2023 Dragon News. Design by Programming Hero
                    </Typography>
            </Container>
        </Box>
    );
};

export default Footer;