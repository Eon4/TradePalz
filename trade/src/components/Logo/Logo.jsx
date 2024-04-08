
import style from './Logo.module.scss';
import logo from '../../assets/img/Logo/TPLogo.png';

const Logo = () => {
  return (
    <div className={style.logo}>
      <img src={logo} alt='Logo' />
    </div>
  );
}

export default Logo;
