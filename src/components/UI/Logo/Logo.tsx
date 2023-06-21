import { Link } from 'react-router-dom';
import URL from '../../../assets/logo.svg';

export default function Logo({ props }: any) {
  const { isDark, link, size } = props;
  return (
    <Link to={link}>
      {isDark ? (
        <img
          src={URL}
          height={size}
          style={{ filter: 'brightness(0.1)' }}
          alt='logo'
        />
      ) : (
        <img src={URL} height={size} alt='logo' />
      )}
    </Link>
  );
}
