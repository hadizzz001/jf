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
                href="index.html"
                className="header-logo__link store_image"
                data-header-logo-link=""
              >
                <div className="header-logo-image-container">
                  <img
                    className="header-logo-image"
                    src="https://ucarecdn.com/f4020f98-be3d-4d27-b301-7df5bf18ee96/logo.png"
                    srcSet="https://ucarecdn.com/f4020f98-be3d-4d27-b301-7df5bf18ee96/logo.png"
                    alt="Jardali Food Machines- New York"
                    title="Jardali Food Machines- New York"
                    width="100%"
                    height="100%"
                  />
                </div>
              </a>
            </div>
            <h3 className="footer-info-heading"> </h3>
            <address> 
              Saida - Lebanon
            </address>
            <div className="footerarticlebox customlinksbox desk-hide">
              <h3 className="footer-info-heading">Call Us</h3>
              <div className="contactdeatils">
                <p>
                  <a href="tel:+9613538266" className="phone-num">
                  +961 3 538266
                  </a>
                </p>
                <p>
                  <a href="mailto:salahjardali@gmail.com" className="email">
                  salahjardali@gmail.com
                  </a>
                </p>
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
                <a href="products/index.html">Home</a>
              </li>
              <li>
                <a href="spare-parts/index.html">About</a>
              </li>
              <li className="Support">
                <a href="support/index.html">Machines</a>
              </li>
              <li className="Videos">
                <a href="videos/index.html">Contact</a>
              </li> 
            </ul>
          </div>
        </article> 
        <article className="footer-info-col footer-info-col--small Mb-hide">
          <div className="footerarticlebox customlinksbox">
            <h3 className="footer-info-heading">Call Us</h3>
            <div className="contactdeatils">
              <p>
                <a
                  href="tel:845-779-0404"
                  className="phone-num"
                  onclick="gtag('event', 'conversion', {'send_to': 'AW-853871099/Loh1CNGt-cAZEPuTlJcD'});"
                >
                  845-779-0404
                </a>{" "}
                / <a href="sms:+19143473178">914-347-3178</a>
              </p>
              <p>
                <a href="mailto:sales@spinninggrillers.com" className="email">
                  sales@spinninggrillers.com
                </a>
              </p>
              <div className="StoreavailableBox">
                <h3 className="footer-info-heading">Timings</h3>
                <p className="textBox">Monday – Friday: 9AM – 6PM</p>
                <p className="textBox">Saturday: 10AM - 2PM (By Appointment)</p>
              </div>
            </div>
          </div>
        </article>
      </section> 
    </div>
    <div data-content-region="ssl_site_seal--global" />
  </footer>
  )
}

export default Footer