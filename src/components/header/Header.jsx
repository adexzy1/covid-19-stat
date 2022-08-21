import logo from '../../Assets/nigeriaFlag.png';
import style from './header.module.css';

const Header = () => {
  return (
    <header className={style.container}>
      <p>Naija Covid Stat</p>
      <div className={style.img_wrapper}>
        <img src={logo} alt="Nigerian flag" />
      </div>
    </header>
  );
};

export default Header;
