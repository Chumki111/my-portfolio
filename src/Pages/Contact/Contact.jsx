
import { Box, Button, Grid} from '@mui/material';
import videoSource from '../../assets/page.mp4'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_co8cquk', 'template_qr9bb5m', form.current, 'LMplWQV8KVFEBWxQe')
      .then((result) => {
          console.log(result.text);
          toast('Successfully Message send')
          if (form.current) {
            form.current.reset();
          }
          
      }, (error) => {
          console.log(error.text);
      });}

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
                    <div>
                        <h1 className='text-white text-5xl font-bold pl-5 hover:text-[#FF3811]'  >Contact <span className='text-[#FF3811]'>...</span> </h1>
                    </div>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <form ref={form} onSubmit={sendEmail} data-aos="flip-right"
                                noValidate=''
                                action=''
                                className='space-y-6 ng-untouched ng-pristine ng-valid px-10 mt-5'
                            >
                                <div className='space-y-4'>
                                    <div>
                                        <input
                                            type='text'
                                            name="user_name"
                                            id='name'
                                            placeholder='Enter Your Name Here'
                                            className=' w-full  h-full bg-transparent text-blue-700 outline outline-0 focus:outline-0 disabled:bg-blue-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-200 placeholder-shown:border-t-blue-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-lg px-3 py-6 rounded-[7px] border-blue-300 focus:border-[#FF3811]'
                                            data-temp-mail-org='0'
                                        />
                                    </div>

                                    <div>
                                       <input
                                            type='email'
                                            name="user_email"
                                            id='email'
                                            required
                                            placeholder='Enter Your Email Here'
                                            className=' w-full  h-full bg-transparent text-blue-700 outline outline-0 focus:outline-0 disabled:bg-blue-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-200 placeholder-shown:border-t-blue-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-lg px-3 py-6 rounded-[7px] border-blue-300 focus:border-[#FF3811]'
                                            data-temp-mail-org='0'
                                        />
                                    </div>
                                    <div>
                                        
                                        <textarea
                                            type='text'
                                            name="message"
                                            autoComplete='new-password'
                                            id='password'
                                            required
                                            placeholder='Write your message'
                                            className=' w-full  h-full bg-transparent text-blue-700 outline outline-0 focus:outline-0 disabled:bg-blue-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-200 placeholder-shown:border-t-blue-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-lg px-3 py-6 rounded-[7px] border-blue-300 focus:border-[#FF3811]'
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type='submit'
                                        className='bg-[#FF3811] w-full rounded-md py-3 text-white'
                                    >
                                        {/* {loading ? <TbFidgetSpinner className='animate-spin mx-auto' /> : "Continue"} */}

                                        Send Me 
                                    </button>
                                </div>
                            </form>
                        </Grid>
                        <Grid item xs={6} className='px-10'>
                      <Box data-aos="fade-down" className="flex justify-center items-center">
                      <Button className='w-[75%] mx-auto ' sx={{ color: 'white',fontSize:'24px',textTransform: 'none', borderColor: 'red', }} variant="outlined" startIcon={<></>}>
                        Phone <br /> (+880) 177250277
</Button>
                      </Box>
                      <Box className="flex justify-center my-5 items-center">
                      <Button data-aos="fade-down" className='w-[75%] mx-auto ' sx={{ color: 'white',fontSize:'24px',textTransform: 'none', borderColor: 'red', }} variant="outlined" startIcon={<></>}>
                        EMAIL <br /> chumkikhatun370@gmail.com
</Button>
                      </Box>
                      <Box data-aos="fade-down" className="flex justify-center my-5 items-center">
                      <Button className='w-[75%] mx-auto ' sx={{ color: 'white',fontSize:'24px',textTransform: 'none', borderColor: 'red', }}variant="outlined" startIcon={<></>}>
                        ADDRESS <br /> Rajshahi,Bangladesh
</Button>
                      </Box>
                          
                        </Grid>

                    </Grid>

                </div>
            </div>
        </div>
    );
};

export default Contact;