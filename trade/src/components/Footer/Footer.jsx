
// import ScrollToTop from "../../components/ScrollToTop/ScrollToTop ";
import style from './Footer.module.scss'
// import Logo from '../Logo/Logo';

export const Footer = () => {
  
    return (
        <footer>
            {/* Container for the footer content */}
            <div className={style.footer}>
                {/* Section containing the logo, text, and copyright */}
                <section className={style.footerSection}>
                    {/* <Logo/> */}
                    <p>Footer with a lot of info</p>
                    <h4>©2024 TradePalz and more copyright</h4> {/* Copyright information */}
                </section>
                {/* <ScrollToTop />  */}
            </div>
        </footer>
    );
};
