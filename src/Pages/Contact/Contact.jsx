import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import Lottie from 'lottie-react';
import lottieAnimate from '../../assets/Animation - 1703523491431 (1).json'
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
            });
    }

    return (
        <div>
          
            <div className="max-w-[1200px] lg:mt-1 pt-10 pb-24 mt-12 px-10 mx-auto text-white">
                <h2 className="lg:text-[48px] text-start  text-white banner-text sm:text-[35px] text-[32px] font-bold mb-8 ">
                    New Message
                </h2>
                <div className="flex lg:flex-row flex-col justify-between">
                    {/* <div className="flex gap-10 flex-col ">
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
                    </div> */}
                    <form ref={form} onSubmit={sendEmail} 
                                noValidate=''
                                action=''
                                className='space-y-6 ng-untouched ng-pristine ng-valid px-10 mt-5 lg:w-1/2 '
                            >
                                <div className='space-y-4'>
                                    <div>
                                        <input
                                            type='text'
                                            name="user_name"
                                            id='name'
                                            placeholder='Enter Your Name Here'
                                            className=' w-full  h-full bg-transparent text-blue-700 outline outline-0 focus:outline-0 disabled:bg-blue-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-200 placeholder-shown:border-t-blue-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-lg px-3 py-6 rounded-[7px] border-blue-300 focus:border-blue-700'
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
                                            className=' w-full  h-full bg-transparent text-blue-700 outline outline-0 focus:outline-0 disabled:bg-blue-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-200 placeholder-shown:border-t-blue-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-lg px-3 py-6 rounded-[7px] border-blue-300 focus:border-blue-700'
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
                                            className=' w-full  h-full bg-transparent text-blue-700 outline outline-0 focus:outline-0 disabled:bg-blue-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-200 placeholder-shown:border-t-blue-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-lg px-3 py-6 rounded-[7px] border-blue-300 focus:border-blue-700'
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type='submit'
                                        className='bg-blue-600 w-full rounded-md py-3 text-white'
                                    >
                                        

                                        Send Me 
                                    </button>
                                </div>
                            </form>
                    <div className="lg:w-1/2 lg:-mt-20 animate__animated animate__rubberBand">
                        <Lottie  animationData={lottieAnimate}></Lottie>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;