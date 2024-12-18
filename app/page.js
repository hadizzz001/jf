'use client'

import Image from "next/image";
import Head from './component/Head'
import Footer from './component/Footer'
import { useEffect, useState } from 'react';

export default function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch('/api/category');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }

    fetchCategories();
  }, []);




  return (
    <>
      <Head />
      <div data-content-region="header_bottom--global" />
      <main
        className="body default-page"
        id="main-content"
        role="main"
        data-currency-code="USD"
      >
        <div data-content-region="home_below_menu" />
        <section
          className="heroCarousel"
          style={{ marginTop: "5em" }}
          data-slick='{
    "arrows": true,
    "mobileFirst": true,
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": true,
    "fade": true,
    "adaptiveHeight": true,
    "autoplaySpeed": 5000,
    "slide": "[data-hero-slide]"      
      }'
        >
          <a
            href="/machines?filter=Shawarma Machines"
            data-hero-slide={0}
            aria-label="Shawarma Machines"
          >
            <div className="heroCarousel-slide  heroCarousel-slide--first">
              <div className="heroCarousel-image-wrapper">
                <div className="mobilesliderbg" />
                <img
                  src="https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/1280w/carousel/95/b1.jpg?c=2"
                  alt="Shawarma Machines"
                  title="Shawarma Machines"
                  data-sizes="auto"
                  srcSet="https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/80w/carousel/95/b1.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/160w/carousel/95/b1.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/320w/carousel/95/b1.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/640w/carousel/95/b1.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/960w/carousel/95/b1.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/1280w/carousel/95/b1.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/1920w/carousel/95/b1.jpg?c=2 1920w"
                  className=" heroCarousel-image"
                  fetchpriority="high"
                />
              </div>
              <div className="mobilesliderbg" />
            </div>
          </a>
          <a
            href="/machines?filter=Shawarma Knife & Meat Slicers"
            data-hero-slide={1}
            aria-label="Commercial Sharawma Machines"
          >
            <div className="heroCarousel-slide  ">
              <div className="heroCarousel-image-wrapper">
                <div className="mobilesliderbg" />
                <img
                  src="https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/1280w/carousel/96/b2.jpg?c=2"
                  alt="Commercial Sharawma Machines"
                  title="Commercial Sharawma Machines"
                  data-sizes="auto"
                  srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  data-srcset="https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/80w/carousel/96/b2.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/160w/carousel/96/b2.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/320w/carousel/96/b2.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/640w/carousel/96/b2.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/960w/carousel/96/b2.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/1280w/carousel/96/b2.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/1920w/carousel/96/b2.jpg?c=2 1920w"
                  className="lazyload heroCarousel-image"
                  loading="lazy"
                  fetchpriority="high"
                />
              </div>
              <div className="mobilesliderbg" />
            </div>
          </a>
          <a
            href="/machines?filter=Pita%20Oven"
            data-hero-slide={2}
            aria-label="Dough Mixer and Pita Ovens"
          >
            <div className="heroCarousel-slide  ">
              <div className="heroCarousel-image-wrapper">
                <div className="mobilesliderbg" />
                <img
                  src="https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/1280w/carousel/100/banner3__42827.jpg?c=2"
                  alt="Dough Mixer and Pita Ovens"
                  title="Dough Mixer and Pita Ovens"
                  data-sizes="auto"
                  srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  data-srcset="https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/80w/carousel/100/banner3__42827.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/160w/carousel/100/banner3__42827.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/320w/carousel/100/banner3__42827.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/640w/carousel/100/banner3__42827.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/960w/carousel/100/banner3__42827.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/1280w/carousel/100/banner3__42827.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/1920w/carousel/100/banner3__42827.jpg?c=2 1920w"
                  className="lazyload heroCarousel-image"
                  loading="lazy"
                  fetchpriority="high"
                />
              </div>
              <div className="mobilesliderbg" />
            </div>
          </a>
          <span
            data-carousel-content-change-message=""
            className="aria-description--hidden"
            aria-live="polite"
            role="status"
          />
        </section>
        <div data-content-region="home_below_carousel" />
        <div className="main full">
          <div className="container">
            <div data-content-region="home_above_banner_section" />
          </div>
          <div className="homepage-banner-section"></div>
          <div className="container">
            <div data-content-region="home_below_banner_section" />
          </div>
          <section className="homepage-video-section our-story-with-text">
            <div className="video-box">
              <div className="video-body">
                <div className="video-thumbnail-box with-text">
                  <div className="container">
                    <div className="Video-content-box-with-text">
                      <div className="video-content-inner">
                        <h5 className="sub-heading">
                          Specialized in Food machines<br />
                          Sweet machines<br />
                          Baklava machines<br />
                        </h5>
                        <h1 className="homepage-video-title">Jardali Food Machines</h1>
                        <p>
                          Serving the Food Industry Since 1988
                          Since its inception in 1988, JFmachines has flourished into a distinguished emblem of excellence in the food service industry in Lebanon. We pride ourselves in offering high-quality food equipment and smallwares, and our illustrious journey is a testament to our strong and growing relationships with our customers, providing a wide range of reliable products that help them stay ahead.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="video-thumbnail-img video-thumbnail-banners-bottom-image"></div>
                </div>
              </div>
            </div>
          </section>

          <div className="container">
            <div data-content-region="home_below_ourstory_section">
              <div data-layout-id="a9989251-f060-47e5-bdc2-c67c7d7fee79">
                <div
                  data-sub-layout-container="a2b52a6d-a1dc-45c8-abb6-7ef30b751270"
                  data-layout-name="Layout"
                >
                  <style
                    data-container-styling="a2b52a6d-a1dc-45c8-abb6-7ef30b751270"
                    dangerouslySetInnerHTML={{
                      __html:
                        '\n    [data-sub-layout-container="a2b52a6d-a1dc-45c8-abb6-7ef30b751270"] {\n      box-sizing: border-box;\n      display: flex;\n      flex-wrap: wrap;\n      z-index: 0;\n      margin-top: 40px;\n      margin-bottom: 40px;\n      position: relative;\n    }\n    [data-sub-layout-container="a2b52a6d-a1dc-45c8-abb6-7ef30b751270"]:after {\n      background-position: center center;\n      background-size: cover;\n      z-index: auto;\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n    }\n  '
                    }}
                  />
                  <div data-sub-layout="c99628d4-423d-4378-a776-2b336536e1f3">
                    <style
                      data-column-styling="c99628d4-423d-4378-a776-2b336536e1f3"
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n      [data-sub-layout="c99628d4-423d-4378-a776-2b336536e1f3"] {\n        display: flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        flex-basis: 100%;\n        max-width: 100%;\n        z-index: 0;\n        justify-content: center;\n        position: relative;\n      }\n      [data-sub-layout="c99628d4-423d-4378-a776-2b336536e1f3"]:after {\n        background-position: center center;\n        background-size: cover;\n        z-index: auto;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n      }\n      @media only screen and (max-width: 700px) {\n        [data-sub-layout="c99628d4-423d-4378-a776-2b336536e1f3"] {\n          flex-basis: 100%;\n          max-width: 100%;\n        }\n      }\n    '
                      }}
                    />
                    <div
                      data-widget-id="45b5ed6b-b139-4bab-8b19-6c13fe5b5386"
                      data-placement-id="0a27a4a0-2e7f-44c1-abaf-e9ea1a885acd"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n    .sd-simple-text-45b5ed6b-b139-4bab-8b19-6c13fe5b5386 {\n      padding-top: 0px;\n      padding-right: 0px;\n      padding-bottom: 0px;\n      padding-left: 0px;\n\n      margin-top: 0px;\n      margin-right: 0px;\n      margin-bottom: 0px;\n      margin-left: 0px;\n\n    }\n\n    .sd-simple-text-45b5ed6b-b139-4bab-8b19-6c13fe5b5386 * {\n      margin: 0;\n      padding: 0;\n\n        color: rgba(0,0,0,1);\n        font-family: inherit;\n        font-weight: 600;\n        font-size: 46px;\n        min-height: 46px;\n\n    }\n\n    .sd-simple-text-45b5ed6b-b139-4bab-8b19-6c13fe5b5386 {\n        text-align: center;\n    }\n\n    #sd-simple-text-editable-45b5ed6b-b139-4bab-8b19-6c13fe5b5386 {\n      min-width: 14px;\n      line-height: 1.5;\n      display: inline-block;\n    }\n\n    #sd-simple-text-editable-45b5ed6b-b139-4bab-8b19-6c13fe5b5386[data-edit-mode="true"]:hover,\n    #sd-simple-text-editable-45b5ed6b-b139-4bab-8b19-6c13fe5b5386[data-edit-mode="true"]:active,\n    #sd-simple-text-editable-45b5ed6b-b139-4bab-8b19-6c13fe5b5386[data-edit-mode="true"]:focus {\n      outline: 1px dashed #3C64F4;\n    }\n\n    #sd-simple-text-editable-45b5ed6b-b139-4bab-8b19-6c13fe5b5386 strong,\n    #sd-simple-text-editable-45b5ed6b-b139-4bab-8b19-6c13fe5b5386 strong * {\n      font-weight: bold;\n    }\n'
                        }}
                      />
                      <div className="sd-simple-text-45b5ed6b-b139-4bab-8b19-6c13fe5b5386 ">
                        <div
                          id="sd-simple-text-editable-45b5ed6b-b139-4bab-8b19-6c13fe5b5386"
                          data-edit-mode=""
                        >
                          <p>Featured Categories</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
 




 <div
      data-sub-layout-container="dffc9806-886e-4e0c-950f-5303a5e8dcf0"
      data-layout-name="Layout"
    >
      <style
        data-container-styling="dffc9806-886e-4e0c-950f-5303a5e8dcf0"
        dangerouslySetInnerHTML={{
          __html: `
            [data-sub-layout-container="dffc9806-886e-4e0c-950f-5303a5e8dcf0"] {
              box-sizing: border-box;
              display: flex;
              flex-wrap: wrap;
              margin-top: 20px;
              margin-bottom: 40px;
              position: relative;
            }
          `,
        }}
      />
      {categories.map((category) => (
        <div
          key={category.id}
          data-sub-layout="a88b9418-752f-41d1-9095-bcb3b0b2a6b0"
        >
          <style
            dangerouslySetInnerHTML={{
              __html: `
                [data-sub-layout="a88b9418-752f-41d1-9095-bcb3b0b2a6b0"] {
                  flex-basis: 16.66%;
                  max-width: 16.66%;
                  padding: 20px;
                }
                @media only screen and (max-width: 700px) {
                  [data-sub-layout="a88b9418-752f-41d1-9095-bcb3b0b2a6b0"] {
                    flex-basis: 100%;
                    max-width: 100%;
                  }
                }
              `,
            }}
          />
          <div>
            <a href={`/machines?cat=${category.name}`} target="_blank" role="button">
              <div
                style={{
                  background: `url(${category.img[0]}) no-repeat center center`,
                  backgroundSize: 'contain',
                  height: '200px',
                }}
              >
                <img
                  src={category.img[0]}
                  alt={category.name}
                  style={{ display: 'none' }}
                />
              </div>
            </a>
            <p>{category.name}</p> 
          </div>
        </div>
      ))}
    </div>








              </div>
            </div>
          </div>



        </div>

      </main>

      <Footer />


    </>

  );
}
