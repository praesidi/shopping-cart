import { Link } from 'react-router-dom';
import Image from '../../../assets/logo.svg';

export default function Logo({ props }: any) {
  const { isDark, size } = props;
  return (
    <Link to={'/'}>
      {isDark ? (
        <img src={Image} height={size} alt='logo' />
      ) : (
        <img
          src={Image}
          height={size}
          style={{ filter: 'brightness(0.45)' }}
          alt='logo'
        />
      )}
    </Link>
  );
}
