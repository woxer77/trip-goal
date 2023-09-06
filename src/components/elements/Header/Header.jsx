import React from 'react';

import { Link } from 'react-scroll';

import GlobalSvgSelector from 'assets/images/icons/GlobalSvgSelector';

import FuncBtn from 'components/UI/FuncBtn/FuncBtn';

import styles from './Header.module.scss';

function Header() {
  const sections = ['home', 'locations', 'about us', 'testimonials', 'contact us'];

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.row}>
          <GlobalSvgSelector iconId="logo" />
          <nav className={styles.nav}>
            {sections.map((section) => (
              <Link
                className={styles.section}
                to={section}
                spy
                smooth
                offset={0}
                duration={500}
                key={section}
              >{section}
              </Link>
            ))}
          </nav>
          <FuncBtn>Register</FuncBtn>
        </div>
      </div>
    </div>
  );
}

export default Header;
