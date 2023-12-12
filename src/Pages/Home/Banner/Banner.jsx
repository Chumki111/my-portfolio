import videoSource from '../../../assets/Blue Futuristic Moving Particles Cyber Monday Sale Video.mp4'
const Banner = () => {
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
                <div className='text-white'>
                <h1>Hi</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus impedit esse dicta dolor, adipisci perspiciatis voluptatem ullam odit necessitatibus aspernatur veritatis consectetur maxime dolorum ab.</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;