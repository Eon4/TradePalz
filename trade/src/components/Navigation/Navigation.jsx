import { NavLink } from 'react-router-dom';
// import unlockLogo from '../../assets/image/Logo/icon-unlock.svg';
import style from './Navigation.module.scss';
// import Logo from '../Logo/Logo';

export function Navigation() {
  return (
    <nav className={style.nav}>
      <section>
        {/* <Logo/> */}
        <ul>
          <li>
          <NavLink
      to='/'
      style={({ isActive }) => ({
        color: isActive ? 'var(--activeGreen)' : 'black',
      })}
    >
      Forside
    </NavLink>
          </li>
          <li>
            <NavLink
              to='/marketplace'
              style={({ isActive }) => {
                return {
                  color: isActive ? 'var(--activeGreen)' : 'black',
                };
              }}
            >
              Genbrugsplads
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/work'
              style={({ isActive }) => {
                return {
                  color: isActive ? 'var(--activeGreen)' : 'black',
                };
              }}
            >
              Arbejde
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/login'
              style={({ isActive }) => {
                return {
                  color: isActive ? 'var(--activeGreen)' : 'black',
                };
              }}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/login'
            >
               {/* <div>
        <img className={style.Unlocklogo} src={unlockLogo} alt='unlock' />
        </div> */}
              {/* Login */}
            </NavLink>
          </li>
        </ul>
      </section>
    </nav>
  );
}


