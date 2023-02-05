import { Parallax } from 'react-parallax';
import Space from '../assets/img/pixel.svg'
import NavBar from './NavBar';




const ImageOne = () => (
    <><NavBar />
    <Parallax strength={300} bgImage={Space} className='h-screen w-full'>
    </Parallax></>
);

export default ImageOne;