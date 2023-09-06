import React from 'react';

import GlobalSvgSelector from 'assets/images/icons/GlobalSvgSelector';

import { Link } from 'react-scroll';

import styles from './Footer.module.scss';

function Footer() {
  const sections = ['home', 'locations', 'about us', 'testimonials', 'contact us'];
  const socials = [
    {
      iconId: 'facebook'
    },
    {
      iconId: 'instagram'
    },
    {
      iconId: 'pinterest'
    }
  ];

  return (
    <footer className={styles.footer}>
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
          <div className={styles.socials}>
            {socials.map((social) => (
              <div className={styles.social} key={social.iconId}>
                <GlobalSvgSelector iconId={social.iconId} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.line} />
        <p className={`desc ${styles.copyright}`}>
          © 2021. All copyrights reserved by RH Agency
        </p>
      </div>
    </footer>
  );
}

export default Footer;
