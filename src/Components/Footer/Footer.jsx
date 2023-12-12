import { Box, Button, Container, IconButton, Typography } from "@mui/material";

// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";

const Footer = () => {

    // navLinks
    const navItems = [
        {
            route: 'Home',
            pathname: '/',
        },
       
        {
            route: 'Contact',
            pathname: '/contact',
        }
    ];
    return (
        <Box className="bg-black px-2 py-10">
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

                <Box className='w-full text-center'>
                        {navItems.map((item) => (
                            <Link key={item} href={item.pathname}>
                                <Button className='text-white'>
                                    {item.route}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <Typography color='gray' variant="body2" textAlign="center">
                    @2023 Dragon News. Design by Programming Hero
                    </Typography>
            </Container>
        </Box>
    );
};

export default Footer;