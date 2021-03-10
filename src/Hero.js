import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';

const Hero = () => {
  const data = useGlobalContext();
  
  return (
    <>
      <p>Hero</p>
    </>
  )
}
export default Hero;