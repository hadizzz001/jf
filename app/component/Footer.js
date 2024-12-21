import React from 'react'

const Footer = () => {
  return (
    <footer className="footer nichefooter" role="contentinfo">
      <div className="container">
        <section className="footer-info">
          <article className="footer-info-col footer-info-col--small">
            <div className="footerarticlebox logobox">
              <div className="footer-logo">
                <a
                  href="/"
                  className="header-logo__link store_image"
                  data-header-logo-link=""
                >
                  <div className="header-logo-image-container">
                    <img
                      className="header-logo-image"
                      src="/pics/logo1.png"
                      srcSet="/pics/logo1.png"
                      alt="Jardali Food Machines- New York"
                      title="Jardali Food Machines- New York"
                      width="50%"
                      height="50%"
                    />
                  </div>
                </a>
              </div>
              <h3 className="footer-info-heading"> </h3>
              <address>
                Saida - Lebanon
              </address>
              <div className="footerarticlebox customlinksbox desk-hide">
                
                <div className="contactdeatils">
              
               
                  <div className="StoreavailableBox">
                    <h3 className="footer-info-heading">Timings</h3>
                    <p className="textBox">Monday – Friday: 9AM – 6PM</p>
                    <p className="textBox">
                      Saturday: 10AM - 2PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article
            className="footer-info-col footer-info-col--small footer-info-links foterlinkbox"
            data-section-type="footer-categories"
          >
            <div className="footerarticlebox customlinksbox">
              <h3 className="footer-info-heading">
                quick links
                <i className="icon" aria-hidden="true">
                  <svg>
                    <use xlinkHref="#icon-chevron-down" />
                  </svg>
                </i>
              </h3>
              <ul className="footer-info-list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li className="Support">
                  <a href="/machines">Machines</a>
                </li>
                <li className="Videos">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </article>





          <article className="footer-info-col footer-info-col--small ">
            <div className="footerarticlebox customlinksbox">
              <h3 className="footer-info-heading">Call Us</h3>
              <div className="contactdeatils">
                <p>
                  <a
                    href="tel:03538266"
                    className="phone-num"
                    onClick="gtag('event', 'conversion', {'send_to': 'AW-853871099/Loh1CNGt-cAZEPuTlJcD'});"
                  >
                    03538266
                  </a>{" "}
                </p>
                <p>
                  <a href="mailto:salahjardali@gmail.com" className="email">
                    salahjardali@gmail.com
                  </a>
                </p>
                <div className="StoreavailableBox">
                  <h3 className="footer-info-heading">Timings</h3>
                  <p className="textBox">Monday – Friday: 9AM – 6PM</p>
                  <p className="textBox">Saturday: 10AM - 2PM (By Appointment)</p>
                </div>
              </div>
              <div className="social-media-links" >
                <h3 className="footer-info-heading">Follow Us</h3>
                <div className="social-icons" style={{ display: 'flex' }}>
                  <a className='mr-5' href="https://www.facebook.com/share/1K6Rhn8JTi/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#1877F2">
                      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V10.41h3.128V8.048c0-3.1 1.893-4.787 4.659-4.787 1.325 0 2.464.099 2.795.143v3.24h-1.917c-1.504 0-1.795.715-1.795 1.762v2.31h3.59l-.467 3.296h-3.123V24h6.127c.73 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                    </svg>
                  </a>
                  <a className='mr-5' href="https://www.instagram.com/jfmachines" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#C13584">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 1.94.24 2.395.415.573.22.98.482 1.41.913.43.43.692.837.912 1.41.175.455.359 1.189.415 2.395.059 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.24 1.94-.415 2.395-.22.573-.482.98-.913 1.41-.43.43-.837.692-1.41.912-.455.175-1.189.359-2.395.415-1.266.059-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-1.94-.24-2.395-.415-.573-.22-.98-.482-1.41-.913-.43-.43-.692-.837-.912-1.41-.175-.455-.359-1.189-.415-2.395C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.056-1.206.24-1.94.415-2.395.22-.573.482-.98.913-1.41.43-.43.837-.692 1.41-.912.455-.175 1.189-.359 2.395-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.756 0 8.346.014 7.052.072 5.769.129 4.643.317 3.77.73 2.8 1.175 2.074 1.9 1.63 2.87c-.413.873-.6 2-.657 3.283C.014 8.346 0 8.756 0 12c0 3.244.014 3.654.072 4.948.057 1.283.244 2.41.657 3.283.444.97 1.17 1.696 2.14 2.14.873.413 2 .6 3.283.657C8.346 23.986 8.756 24 12 24s3.654-.014 4.948-.072c1.283-.057 2.41-.244 3.283-.657.97-.444 1.696-1.17 2.14-2.14.413-.873.6-2 .657-3.283C23.986 15.654 24 15.244 24 12c0-3.244-.014-3.654-.072-4.948-.057-1.283-.244-2.41-.657-3.283-.444-.97-1.17-1.696-2.14-2.14-.873-.413-2-.6-3.283-.657C15.654.014 15.244 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.882 0 1.44 1.44 0 012.882 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </article>














        </section>
      </div>
      <div data-content-region="ssl_site_seal--global" />

      <style
  dangerouslySetInnerHTML={{
    __html:
      "\n  .footer {\n    background-color: white !important;\n}\n\n.nichefooter .footer-info .footer-info-col .footer-info-list a {\n    color: black !important;\n}\n\n.nichefooter .contactdeatils p a {\n    color: black !important;\n}\n\n.nichefooter .contactdeatils p {\n    color: black !important;\n}\n"
  }}
/>


    </footer>
  )
}

export default Footer