import Image from "next/image";
import Head from './component/Head'
import Footer from './component/Footer'

export default function Home() {
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
          style={{marginTop: "5em"}}
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
                          Specialized in Food machines<br/>
                          Sweet machines<br/>
                          Baklava machines<br/>
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
                      __html:
                        '\n    [data-sub-layout-container="dffc9806-886e-4e0c-950f-5303a5e8dcf0"] {\n      box-sizing: border-box;\n      display: flex;\n      flex-wrap: wrap;\n      z-index: 0;\n      margin-top: 20px;\n      margin-bottom: 40px;\n      position: relative;\n    }\n    [data-sub-layout-container="dffc9806-886e-4e0c-950f-5303a5e8dcf0"]:after {\n      background-position: center center;\n      background-size: cover;\n      z-index: auto;\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n    }\n  '
                    }}
                  />
                  <div data-sub-layout="a88b9418-752f-41d1-9095-bcb3b0b2a6b0">
                    <style
                      data-column-styling="a88b9418-752f-41d1-9095-bcb3b0b2a6b0"
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n      [data-sub-layout="a88b9418-752f-41d1-9095-bcb3b0b2a6b0"] {\n        display: flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        flex-basis: 16.66%;\n        max-width: 16.66%;\n        z-index: 0;\n        justify-content: center;\n        padding-top: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n        padding-left: 20px;\n        position: relative;\n      }\n      [data-sub-layout="a88b9418-752f-41d1-9095-bcb3b0b2a6b0"]:after {\n        background-position: center center;\n        background-size: cover;\n        z-index: auto;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n      }\n      @media only screen and (max-width: 700px) {\n        [data-sub-layout="a88b9418-752f-41d1-9095-bcb3b0b2a6b0"] {\n          flex-basis: 100%;\n          max-width: 100%;\n        }\n      }\n    '
                      }}
                    />
                    <div
                      data-widget-id="c7596a98-4b75-464b-a2f0-9ee39e0a5e0c"
                      data-placement-id="b8e1972e-a592-44bf-b082-3f55325ffe15"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n    #sd-image-c7596a98-4b75-464b-a2f0-9ee39e0a5e0c {\n        display: flex;\n        align-items: center;\n        background: url('https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/original/k/shawarma-machines__58222.original.jpg') no-repeat;\n        opacity: calc(100 / 100);\n\n            cursor: pointer;\n\n            background-size: contain;\n\n            height: auto;\n\n        background-position:\n                center\n                center\n;\n\n\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n\n        margin-top: 0px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n    }\n\n    #sd-image-c7596a98-4b75-464b-a2f0-9ee39e0a5e0c * {\n        margin: 0px;\n    }\n\n    #sd-image-c7596a98-4b75-464b-a2f0-9ee39e0a5e0c img {\n        width: auto;\n        opacity: 0;\n\n            height: auto;\n    }\n\n    @media only screen and (max-width: 700px) {\n        #sd-image-c7596a98-4b75-464b-a2f0-9ee39e0a5e0c {\n        }\n    }\n"
                        }}
                      />
                      <div>
                        <a href="/machines?filter=Shawarma Machines" role="button">
                          <div
                            id="sd-image-c7596a98-4b75-464b-a2f0-9ee39e0a5e0c"
                            data-edit-mode=""
                          >
                            <img
                              src="https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/original/k/shawarma-machines__58222.original.jpg"
                              alt="Shawarma Machines"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      data-widget-id="8aaaf1f7-5d4f-457c-a885-5a16723bc9b4"
                      data-placement-id="79601f4f-53ca-4816-85db-90204acc383a"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n    .sd-button-8aaaf1f7-5d4f-457c-a885-5a16723bc9b4 {\n        display: flex;\n        align-items: center;\n            justify-content: center;\n    }\n\n    .sd-button-8aaaf1f7-5d4f-457c-a885-5a16723bc9b4 .buttonLink > a {\n        text-decoration: none;\n        background-color: rgba(0,0,0,0);\n        border: 0px solid rgba(0,0,0,0);\n        border-radius: 0px;\n        color: rgba(212,104,0,1);\n        font-size: 18px;\n        font-family: inherit;\n        font-weight: 400;\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n        margin-top: 10px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n        text-align: center;\n        cursor: pointer;\n    }\n\n    .sd-button-8aaaf1f7-5d4f-457c-a885-5a16723bc9b4 .buttonLink > a:hover {\n        background-color: rgba(0,0,0,0);\n        border-color: rgba(0,0,0,0);\n        color: rgba(0,0,0,1);\n    }\n\n    @media only screen and (max-width: 700px) {\n        .sd-button-8aaaf1f7-5d4f-457c-a885-5a16723bc9b4 { }\n    }\n\n    #sd-simple-button-editable-8aaaf1f7-5d4f-457c-a885-5a16723bc9b4 {\n        min-width: 14px;\n        line-height: 1.5;\n        display: inline-block;\n    }\n\n    #sd-simple-button-editable-8aaaf1f7-5d4f-457c-a885-5a16723bc9b4 * {\n        margin: 0;\n        padding: 0;\n    }\n\n    #sd-simple-button-editable-8aaaf1f7-5d4f-457c-a885-5a16723bc9b4[data-edit-mode="true"]:hover,\n    #sd-simple-button-editable-8aaaf1f7-5d4f-457c-a885-5a16723bc9b4[data-edit-mode="true"]:active,\n    #sd-simple-button-editable-8aaaf1f7-5d4f-457c-a885-5a16723bc9b4[data-edit-mode="true"]:focus {\n        outline: 1px dashed #3C64F4;\n    }\n\n    #sd-simple-button-editable-8aaaf1f7-5d4f-457c-a885-5a16723bc9b4 strong,\n    #sd-simple-button-editable-8aaaf1f7-5d4f-457c-a885-5a16723bc9b4 strong * {\n        font-weight: bold;\n    }\n'
                        }}
                      />
                      <div className="sd-button-8aaaf1f7-5d4f-457c-a885-5a16723bc9b4">
                        <div className="buttonLink" role="button">
                          <a
                            href="/machines?filter=Shawarma Machines"
                            target="_top"
                            id="sd-simple-button-editable-8aaaf1f7-5d4f-457c-a885-5a16723bc9b4"
                            data-edit-mode=""
                          >
                            Shawarma Machines
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-sub-layout="210e1bc4-437c-417c-b8df-7b38588a7598">
                    <style
                      data-column-styling="210e1bc4-437c-417c-b8df-7b38588a7598"
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n      [data-sub-layout="210e1bc4-437c-417c-b8df-7b38588a7598"] {\n        display: flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        flex-basis: 16.66%;\n        max-width: 16.66%;\n        z-index: 0;\n        justify-content: center;\n        padding-top: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n        padding-left: 20px;\n        position: relative;\n      }\n      [data-sub-layout="210e1bc4-437c-417c-b8df-7b38588a7598"]:after {\n        background-position: center center;\n        background-size: cover;\n        z-index: auto;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n      }\n      @media only screen and (max-width: 700px) {\n        [data-sub-layout="210e1bc4-437c-417c-b8df-7b38588a7598"] {\n          flex-basis: 100%;\n          max-width: 100%;\n        }\n      }\n    '
                      }}
                    />
                    <div
                      data-widget-id="2d99ab48-9863-4316-96ae-e66b57aa7b3b"
                      data-placement-id="b6c09ee6-bb90-4918-9326-025e3e2dc96c"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n    #sd-image-2d99ab48-9863-4316-96ae-e66b57aa7b3b {\n        display: flex;\n        align-items: center;\n        background: url('https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/original/x/shawarma-knife__21189.original.jpg') no-repeat;\n        opacity: calc(100 / 100);\n\n            cursor: pointer;\n\n            background-size: contain;\n\n            height: auto;\n\n        background-position:\n                center\n                center\n;\n\n\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n\n        margin-top: 0px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n    }\n\n    #sd-image-2d99ab48-9863-4316-96ae-e66b57aa7b3b * {\n        margin: 0px;\n    }\n\n    #sd-image-2d99ab48-9863-4316-96ae-e66b57aa7b3b img {\n        width: auto;\n        opacity: 0;\n\n            height: auto;\n    }\n\n    @media only screen and (max-width: 700px) {\n        #sd-image-2d99ab48-9863-4316-96ae-e66b57aa7b3b {\n        }\n    }\n"
                        }}
                      />
                      <div>
                        <a href="http://localhost:3000/machines?filter=Shawarma%20Knife%20%26%20Meat%20Slicers" role="button">
                          <div
                            id="sd-image-2d99ab48-9863-4316-96ae-e66b57aa7b3b"
                            data-edit-mode=""
                          >
                            <img
                              src="https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/original/x/shawarma-knife__21189.original.jpg"
                              alt="Shawarma Knife & Meat Slicers"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      data-widget-id="b9feaf63-75fa-4399-b284-233275061c83"
                      data-placement-id="3bf24f0f-9913-42b1-aa61-ce03c230cf77"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n    .sd-button-b9feaf63-75fa-4399-b284-233275061c83 {\n        display: flex;\n        align-items: center;\n            justify-content: center;\n    }\n\n    .sd-button-b9feaf63-75fa-4399-b284-233275061c83 .buttonLink > a {\n        text-decoration: none;\n        background-color: rgba(0,0,0,0);\n        border: 0px solid rgba(0,0,0,0);\n        border-radius: 0px;\n        color: rgba(212,104,0,1);\n        font-size: 18px;\n        font-family: inherit;\n        font-weight: 400;\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n        margin-top: 10px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n        text-align: center;\n        cursor: pointer;\n    }\n\n    .sd-button-b9feaf63-75fa-4399-b284-233275061c83 .buttonLink > a:hover {\n        background-color: rgba(0,0,0,0);\n        border-color: rgba(0,0,0,0);\n        color: rgba(0,0,0,1);\n    }\n\n    @media only screen and (max-width: 700px) {\n        .sd-button-b9feaf63-75fa-4399-b284-233275061c83 { }\n    }\n\n    #sd-simple-button-editable-b9feaf63-75fa-4399-b284-233275061c83 {\n        min-width: 14px;\n        line-height: 1.5;\n        display: inline-block;\n    }\n\n    #sd-simple-button-editable-b9feaf63-75fa-4399-b284-233275061c83 * {\n        margin: 0;\n        padding: 0;\n    }\n\n    #sd-simple-button-editable-b9feaf63-75fa-4399-b284-233275061c83[data-edit-mode="true"]:hover,\n    #sd-simple-button-editable-b9feaf63-75fa-4399-b284-233275061c83[data-edit-mode="true"]:active,\n    #sd-simple-button-editable-b9feaf63-75fa-4399-b284-233275061c83[data-edit-mode="true"]:focus {\n        outline: 1px dashed #3C64F4;\n    }\n\n    #sd-simple-button-editable-b9feaf63-75fa-4399-b284-233275061c83 strong,\n    #sd-simple-button-editable-b9feaf63-75fa-4399-b284-233275061c83 strong * {\n        font-weight: bold;\n    }\n'
                        }}
                      />
                      <div className="sd-button-b9feaf63-75fa-4399-b284-233275061c83">
                        <div className="buttonLink" role="button">
                          <a
                            href="http://localhost:3000/machines?filter=Shawarma%20Knife%20%26%20Meat%20Slicers"
                            target="_top"
                            id="sd-simple-button-editable-b9feaf63-75fa-4399-b284-233275061c83"
                            data-edit-mode=""
                          >
                            Shawarma Knife &amp; Meat Slicers
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-sub-layout="5691d7db-7bc5-4636-ae40-ef5d5380fbc2">
                    <style
                      data-column-styling="5691d7db-7bc5-4636-ae40-ef5d5380fbc2"
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n      [data-sub-layout="5691d7db-7bc5-4636-ae40-ef5d5380fbc2"] {\n        display: flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        flex-basis: 16.66%;\n        max-width: 16.66%;\n        z-index: 0;\n        justify-content: center;\n        padding-top: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n        padding-left: 20px;\n        position: relative;\n      }\n      [data-sub-layout="5691d7db-7bc5-4636-ae40-ef5d5380fbc2"]:after {\n        background-position: center center;\n        background-size: cover;\n        z-index: auto;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n      }\n      @media only screen and (max-width: 700px) {\n        [data-sub-layout="5691d7db-7bc5-4636-ae40-ef5d5380fbc2"] {\n          flex-basis: 100%;\n          max-width: 100%;\n        }\n      }\n    '
                      }}
                    />
                    <div
                      data-widget-id="3dea85bc-542c-4254-8346-2b8cab99bd6d"
                      data-placement-id="dc0286ae-447d-4116-a171-2548aea9ba37"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n    #sd-image-3dea85bc-542c-4254-8346-2b8cab99bd6d {\n        display: flex;\n        align-items: center;\n        background: url('https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/original/i/pita-oven__25378.original.jpg') no-repeat;\n        opacity: calc(100 / 100);\n\n            cursor: pointer;\n\n            background-size: contain;\n\n            height: auto;\n\n        background-position:\n                center\n                center\n;\n\n\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n\n        margin-top: 0px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n    }\n\n    #sd-image-3dea85bc-542c-4254-8346-2b8cab99bd6d * {\n        margin: 0px;\n    }\n\n    #sd-image-3dea85bc-542c-4254-8346-2b8cab99bd6d img {\n        width: auto;\n        opacity: 0;\n\n            height: auto;\n    }\n\n    @media only screen and (max-width: 700px) {\n        #sd-image-3dea85bc-542c-4254-8346-2b8cab99bd6d {\n        }\n    }\n"
                        }}
                      />
                      <div>
                        <a href="/machines?filter=Pita%20Oven" role="button">
                          <div
                            id="sd-image-3dea85bc-542c-4254-8346-2b8cab99bd6d"
                            data-edit-mode=""
                          >
                            <img
                              src="https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/original/i/pita-oven__25378.original.jpg"
                              alt="Pita Oven"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      data-widget-id="f4d15c21-1ac3-4820-ad3c-2331d656bf35"
                      data-placement-id="92019572-5089-49bf-be8f-cbdd9411fc0a"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n    .sd-button-f4d15c21-1ac3-4820-ad3c-2331d656bf35 {\n        display: flex;\n        align-items: center;\n            justify-content: center;\n    }\n\n    .sd-button-f4d15c21-1ac3-4820-ad3c-2331d656bf35 .buttonLink > a {\n        text-decoration: none;\n        background-color: rgba(0,0,0,0);\n        border: 0px solid rgba(0,0,0,0);\n        border-radius: 0px;\n        color: rgba(212,104,0,1);\n        font-size: 18px;\n        font-family: inherit;\n        font-weight: 400;\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n        margin-top: 10px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n        text-align: center;\n        cursor: pointer;\n    }\n\n    .sd-button-f4d15c21-1ac3-4820-ad3c-2331d656bf35 .buttonLink > a:hover {\n        background-color: rgba(0,0,0,0);\n        border-color: rgba(0,0,0,0);\n        color: rgba(0,0,0,1);\n    }\n\n    @media only screen and (max-width: 700px) {\n        .sd-button-f4d15c21-1ac3-4820-ad3c-2331d656bf35 { }\n    }\n\n    #sd-simple-button-editable-f4d15c21-1ac3-4820-ad3c-2331d656bf35 {\n        min-width: 14px;\n        line-height: 1.5;\n        display: inline-block;\n    }\n\n    #sd-simple-button-editable-f4d15c21-1ac3-4820-ad3c-2331d656bf35 * {\n        margin: 0;\n        padding: 0;\n    }\n\n    #sd-simple-button-editable-f4d15c21-1ac3-4820-ad3c-2331d656bf35[data-edit-mode="true"]:hover,\n    #sd-simple-button-editable-f4d15c21-1ac3-4820-ad3c-2331d656bf35[data-edit-mode="true"]:active,\n    #sd-simple-button-editable-f4d15c21-1ac3-4820-ad3c-2331d656bf35[data-edit-mode="true"]:focus {\n        outline: 1px dashed #3C64F4;\n    }\n\n    #sd-simple-button-editable-f4d15c21-1ac3-4820-ad3c-2331d656bf35 strong,\n    #sd-simple-button-editable-f4d15c21-1ac3-4820-ad3c-2331d656bf35 strong * {\n        font-weight: bold;\n    }\n'
                        }}
                      />
                      <div className="sd-button-f4d15c21-1ac3-4820-ad3c-2331d656bf35">
                        <div className="buttonLink" role="button">
                          <a
                            href="/machines?filter=Pita%20Oven"
                            target="_top"
                            id="sd-simple-button-editable-f4d15c21-1ac3-4820-ad3c-2331d656bf35"
                            data-edit-mode=""
                          >
                            Pita Oven
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-sub-layout="4226ba96-aa8c-4ff0-bf67-f8444688f457">
                    <style
                      data-column-styling="4226ba96-aa8c-4ff0-bf67-f8444688f457"
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n      [data-sub-layout="4226ba96-aa8c-4ff0-bf67-f8444688f457"] {\n        display: flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        flex-basis: 16.66%;\n        max-width: 16.66%;\n        z-index: 0;\n        justify-content: center;\n        padding-top: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n        padding-left: 20px;\n        position: relative;\n      }\n      [data-sub-layout="4226ba96-aa8c-4ff0-bf67-f8444688f457"]:after {\n        background-position: center center;\n        background-size: cover;\n        z-index: auto;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n      }\n      @media only screen and (max-width: 700px) {\n        [data-sub-layout="4226ba96-aa8c-4ff0-bf67-f8444688f457"] {\n          flex-basis: 100%;\n          max-width: 100%;\n        }\n      }\n    '
                      }}
                    />
                    <div
                      data-widget-id="19858769-2524-4e35-9a47-0eb1249b8744"
                      data-placement-id="b739de08-3071-4b07-9b8e-3e84f3476e3c"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n    #sd-image-19858769-2524-4e35-9a47-0eb1249b8744 {\n        display: flex;\n        align-items: center;\n        background: url('https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/original/o/hummus-blender__28689.original.jpg') no-repeat;\n        opacity: calc(100 / 100);\n\n            cursor: pointer;\n\n            background-size: contain;\n\n            height: auto;\n\n        background-position:\n                center\n                center\n;\n\n\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n\n        margin-top: 0px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n    }\n\n    #sd-image-19858769-2524-4e35-9a47-0eb1249b8744 * {\n        margin: 0px;\n    }\n\n    #sd-image-19858769-2524-4e35-9a47-0eb1249b8744 img {\n        width: auto;\n        opacity: 0;\n\n            height: auto;\n    }\n\n    @media only screen and (max-width: 700px) {\n        #sd-image-19858769-2524-4e35-9a47-0eb1249b8744 {\n        }\n    }\n"
                        }}
                      />
                      <div>
                        <a href="/machines?filter=Hummus%20Blender" role="button">
                          <div
                            id="sd-image-19858769-2524-4e35-9a47-0eb1249b8744"
                            data-edit-mode=""
                          >
                            <img
                              src="https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/original/o/hummus-blender__28689.original.jpg"
                              alt="Hummus Blender"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      data-widget-id="322f8c55-520d-4c86-99db-440b10491407"
                      data-placement-id="2dc45dcb-001f-4d5b-b267-fe033d03ae53"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n    .sd-button-322f8c55-520d-4c86-99db-440b10491407 {\n        display: flex;\n        align-items: center;\n            justify-content: center;\n    }\n\n    .sd-button-322f8c55-520d-4c86-99db-440b10491407 .buttonLink > a {\n        text-decoration: none;\n        background-color: rgba(0,0,0,0);\n        border: 0px solid rgba(0,0,0,0);\n        border-radius: 0px;\n        color: rgba(212,104,0,1);\n        font-size: 18px;\n        font-family: inherit;\n        font-weight: 400;\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n        margin-top: 10px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n        text-align: center;\n        cursor: pointer;\n    }\n\n    .sd-button-322f8c55-520d-4c86-99db-440b10491407 .buttonLink > a:hover {\n        background-color: rgba(0,0,0,0);\n        border-color: rgba(0,0,0,0);\n        color: rgba(0,0,0,1);\n    }\n\n    @media only screen and (max-width: 700px) {\n        .sd-button-322f8c55-520d-4c86-99db-440b10491407 { }\n    }\n\n    #sd-simple-button-editable-322f8c55-520d-4c86-99db-440b10491407 {\n        min-width: 14px;\n        line-height: 1.5;\n        display: inline-block;\n    }\n\n    #sd-simple-button-editable-322f8c55-520d-4c86-99db-440b10491407 * {\n        margin: 0;\n        padding: 0;\n    }\n\n    #sd-simple-button-editable-322f8c55-520d-4c86-99db-440b10491407[data-edit-mode="true"]:hover,\n    #sd-simple-button-editable-322f8c55-520d-4c86-99db-440b10491407[data-edit-mode="true"]:active,\n    #sd-simple-button-editable-322f8c55-520d-4c86-99db-440b10491407[data-edit-mode="true"]:focus {\n        outline: 1px dashed #3C64F4;\n    }\n\n    #sd-simple-button-editable-322f8c55-520d-4c86-99db-440b10491407 strong,\n    #sd-simple-button-editable-322f8c55-520d-4c86-99db-440b10491407 strong * {\n        font-weight: bold;\n    }\n'
                        }}
                      />
                      <div className="sd-button-322f8c55-520d-4c86-99db-440b10491407">
                        <div className="buttonLink" role="button">
                          <a
                            href="/machines?filter=Hummus%20Blender"
                            target="_top"
                            id="sd-simple-button-editable-322f8c55-520d-4c86-99db-440b10491407"
                            data-edit-mode=""
                          >
                            Hummus Blender
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-sub-layout="21ad0609-15ea-4605-867f-64ea32707489">
                    <style
                      data-column-styling="21ad0609-15ea-4605-867f-64ea32707489"
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n      [data-sub-layout="21ad0609-15ea-4605-867f-64ea32707489"] {\n        display: flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        flex-basis: 16.66%;\n        max-width: 16.66%;\n        z-index: 0;\n        justify-content: center;\n        padding-top: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n        padding-left: 20px;\n        position: relative;\n      }\n      [data-sub-layout="21ad0609-15ea-4605-867f-64ea32707489"]:after {\n        background-position: center center;\n        background-size: cover;\n        z-index: auto;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n      }\n      @media only screen and (max-width: 700px) {\n        [data-sub-layout="21ad0609-15ea-4605-867f-64ea32707489"] {\n          flex-basis: 100%;\n          max-width: 100%;\n        }\n      }\n    '
                      }}
                    />
                    <div
                      data-widget-id="6fd233be-70a8-42d7-9195-8b55e0b1ef9b"
                      data-placement-id="03c72851-d532-441d-9d36-330438035a0c"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n    #sd-image-6fd233be-70a8-42d7-9195-8b55e0b1ef9b {\n        display: flex;\n        align-items: center;\n        background: url('https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/original/s/saj-machine__93052.original.jpg') no-repeat;\n        opacity: calc(100 / 100);\n\n            cursor: pointer;\n\n            background-size: contain;\n\n            height: auto;\n\n        background-position:\n                center\n                center\n;\n\n\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n\n        margin-top: 0px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n    }\n\n    #sd-image-6fd233be-70a8-42d7-9195-8b55e0b1ef9b * {\n        margin: 0px;\n    }\n\n    #sd-image-6fd233be-70a8-42d7-9195-8b55e0b1ef9b img {\n        width: auto;\n        opacity: 0;\n\n            height: auto;\n    }\n\n    @media only screen and (max-width: 700px) {\n        #sd-image-6fd233be-70a8-42d7-9195-8b55e0b1ef9b {\n        }\n    }\n"
                        }}
                      />
                      <div>
                        <a href="/machines?filter=Saj%20Machine" role="button">
                          <div
                            id="sd-image-6fd233be-70a8-42d7-9195-8b55e0b1ef9b"
                            data-edit-mode=""
                          >
                            <img
                              src="https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/original/s/saj-machine__93052.original.jpg"
                              alt="Saj Machine"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      data-widget-id="a7df50c2-d7f8-4188-bbe1-c2661a15e9c7"
                      data-placement-id="4d497128-94d3-471b-98c7-02bd5cbdd029"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n    .sd-button-a7df50c2-d7f8-4188-bbe1-c2661a15e9c7 {\n        display: flex;\n        align-items: center;\n            justify-content: center;\n    }\n\n    .sd-button-a7df50c2-d7f8-4188-bbe1-c2661a15e9c7 .buttonLink > a {\n        text-decoration: none;\n        background-color: rgba(0,0,0,0);\n        border: 0px solid rgba(0,0,0,0);\n        border-radius: 0px;\n        color: rgba(212,104,0,1);\n        font-size: 18px;\n        font-family: inherit;\n        font-weight: 400;\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n        margin-top: 10px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n        text-align: center;\n        cursor: pointer;\n    }\n\n    .sd-button-a7df50c2-d7f8-4188-bbe1-c2661a15e9c7 .buttonLink > a:hover {\n        background-color: rgba(0,0,0,0);\n        border-color: rgba(0,0,0,0);\n        color: rgba(0,0,0,1);\n    }\n\n    @media only screen and (max-width: 700px) {\n        .sd-button-a7df50c2-d7f8-4188-bbe1-c2661a15e9c7 { }\n    }\n\n    #sd-simple-button-editable-a7df50c2-d7f8-4188-bbe1-c2661a15e9c7 {\n        min-width: 14px;\n        line-height: 1.5;\n        display: inline-block;\n    }\n\n    #sd-simple-button-editable-a7df50c2-d7f8-4188-bbe1-c2661a15e9c7 * {\n        margin: 0;\n        padding: 0;\n    }\n\n    #sd-simple-button-editable-a7df50c2-d7f8-4188-bbe1-c2661a15e9c7[data-edit-mode="true"]:hover,\n    #sd-simple-button-editable-a7df50c2-d7f8-4188-bbe1-c2661a15e9c7[data-edit-mode="true"]:active,\n    #sd-simple-button-editable-a7df50c2-d7f8-4188-bbe1-c2661a15e9c7[data-edit-mode="true"]:focus {\n        outline: 1px dashed #3C64F4;\n    }\n\n    #sd-simple-button-editable-a7df50c2-d7f8-4188-bbe1-c2661a15e9c7 strong,\n    #sd-simple-button-editable-a7df50c2-d7f8-4188-bbe1-c2661a15e9c7 strong * {\n        font-weight: bold;\n    }\n'
                        }}
                      />
                      <div className="sd-button-a7df50c2-d7f8-4188-bbe1-c2661a15e9c7">
                        <div className="buttonLink" role="button">
                          <a
                            href="/machines?filter=Saj%20Machine"
                            target="_top"
                            id="sd-simple-button-editable-a7df50c2-d7f8-4188-bbe1-c2661a15e9c7"
                            data-edit-mode=""
                          >
                            Saj Machine
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-sub-layout="f0f851d9-4b94-4d40-9ec1-4619d5434c83">
                    <style
                      data-column-styling="f0f851d9-4b94-4d40-9ec1-4619d5434c83"
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n      [data-sub-layout="f0f851d9-4b94-4d40-9ec1-4619d5434c83"] {\n        display: flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        flex-basis: 16.66%;\n        max-width: 16.66%;\n        z-index: 0;\n        justify-content: center;\n        padding-top: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n        padding-left: 20px;\n        position: relative;\n      }\n      [data-sub-layout="f0f851d9-4b94-4d40-9ec1-4619d5434c83"]:after {\n        background-position: center center;\n        background-size: cover;\n        z-index: auto;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n      }\n      @media only screen and (max-width: 700px) {\n        [data-sub-layout="f0f851d9-4b94-4d40-9ec1-4619d5434c83"] {\n          flex-basis: 100%;\n          max-width: 100%;\n        }\n      }\n    '
                      }}
                    />
                    <div
                      data-widget-id="05d92561-9d4b-4144-b891-0f48e2641982"
                      data-placement-id="b8fc47eb-4bbc-457d-9031-0c421d8caf0f"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n    #sd-image-05d92561-9d4b-4144-b891-0f48e2641982 {\n        display: flex;\n        align-items: center;\n        background: url('https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/1280x1280/products/440/2847/36LAVA_3A_xxx__63253.1718341511.gif?c=2') no-repeat;\n        opacity: calc(100 / 100);\n\n            cursor: pointer;\n\n            background-size: contain;\n\n            height: auto;\n\n        background-position:\n                center\n                center\n;\n\n\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n\n        margin-top: 0px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n    }\n\n    #sd-image-05d92561-9d4b-4144-b891-0f48e2641982 * {\n        margin: 0px;\n    }\n\n    #sd-image-05d92561-9d4b-4144-b891-0f48e2641982 img {\n        width: auto;\n        opacity: 0;\n\n            height: auto;\n    }\n\n    @media only screen and (max-width: 700px) {\n        #sd-image-05d92561-9d4b-4144-b891-0f48e2641982 {\n        }\n    }\n"
                        }}
                      />
                      <div>
                        <a
                          href="/machines?filter=Kebab%20Char%20Broilers%20%26%20Griddles"
                          role="button"
                        >
                          <div
                            id="sd-image-05d92561-9d4b-4144-b891-0f48e2641982"
                            data-edit-mode=""
                          >
                            <img
                              src="https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/1280x1280/products/440/2847/36LAVA_3A_xxx__63253.1718341511.gif?c=2"
                              alt="Kebab Char Broilers & Griddles"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      data-widget-id="2ef561a9-f1d0-4dca-986d-4fad366f9758"
                      data-placement-id="025815d7-7e9e-4ef1-a850-6223d6c54783"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n    .sd-button-2ef561a9-f1d0-4dca-986d-4fad366f9758 {\n        display: flex;\n        align-items: center;\n            justify-content: center;\n    }\n\n    .sd-button-2ef561a9-f1d0-4dca-986d-4fad366f9758 .buttonLink > a {\n        text-decoration: none;\n        background-color: rgba(0,0,0,0);\n        border: 0px solid rgba(0,0,0,0);\n        border-radius: 0px;\n        color: rgba(212,104,0,1);\n        font-size: 18px;\n        font-family: inherit;\n        font-weight: 400;\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n        margin-top: 10px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n        text-align: center;\n        cursor: pointer;\n    }\n\n    .sd-button-2ef561a9-f1d0-4dca-986d-4fad366f9758 .buttonLink > a:hover {\n        background-color: rgba(0,0,0,0);\n        border-color: rgba(0,0,0,0);\n        color: rgba(0,0,0,1);\n    }\n\n    @media only screen and (max-width: 700px) {\n        .sd-button-2ef561a9-f1d0-4dca-986d-4fad366f9758 { }\n    }\n\n    #sd-simple-button-editable-2ef561a9-f1d0-4dca-986d-4fad366f9758 {\n        min-width: 14px;\n        line-height: 1.5;\n        display: inline-block;\n    }\n\n    #sd-simple-button-editable-2ef561a9-f1d0-4dca-986d-4fad366f9758 * {\n        margin: 0;\n        padding: 0;\n    }\n\n    #sd-simple-button-editable-2ef561a9-f1d0-4dca-986d-4fad366f9758[data-edit-mode="true"]:hover,\n    #sd-simple-button-editable-2ef561a9-f1d0-4dca-986d-4fad366f9758[data-edit-mode="true"]:active,\n    #sd-simple-button-editable-2ef561a9-f1d0-4dca-986d-4fad366f9758[data-edit-mode="true"]:focus {\n        outline: 1px dashed #3C64F4;\n    }\n\n    #sd-simple-button-editable-2ef561a9-f1d0-4dca-986d-4fad366f9758 strong,\n    #sd-simple-button-editable-2ef561a9-f1d0-4dca-986d-4fad366f9758 strong * {\n        font-weight: bold;\n    }\n'
                        }}
                      />
                      <div className="sd-button-2ef561a9-f1d0-4dca-986d-4fad366f9758">
                        <div className="buttonLink" role="button">
                          <a
                            href="/machines?filter=Kebab%20Char%20Broilers%20%26%20Griddles"
                            target="_top"
                            id="sd-simple-button-editable-2ef561a9-f1d0-4dca-986d-4fad366f9758"
                            data-edit-mode=""
                          >
                            Kebab Char Broilers &amp; Griddles
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-sub-layout-container="3c5933fe-ce1a-4e65-942f-b5e152442c60"
                  data-layout-name="Layout"
                >
                  <style
                    data-container-styling="3c5933fe-ce1a-4e65-942f-b5e152442c60"
                    dangerouslySetInnerHTML={{
                      __html:
                        '\n    [data-sub-layout-container="3c5933fe-ce1a-4e65-942f-b5e152442c60"] {\n      box-sizing: border-box;\n      display: flex;\n      flex-wrap: wrap;\n      z-index: 0;\n      margin-top: 20px;\n      margin-bottom: 40px;\n      position: relative;\n    }\n    [data-sub-layout-container="3c5933fe-ce1a-4e65-942f-b5e152442c60"]:after {\n      background-position: center center;\n      background-size: cover;\n      z-index: auto;\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n    }\n  '
                    }}
                  />
                  <div data-sub-layout="3b056c9d-ccd4-4950-afca-318b75ebae41">
                    <style
                      data-column-styling="3b056c9d-ccd4-4950-afca-318b75ebae41"
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n      [data-sub-layout="3b056c9d-ccd4-4950-afca-318b75ebae41"] {\n        display: flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        flex-basis: 16.66%;\n        max-width: 16.66%;\n        z-index: 0;\n        justify-content: flex-start;\n        padding-top: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n        padding-left: 20px;\n        position: relative;\n      }\n      [data-sub-layout="3b056c9d-ccd4-4950-afca-318b75ebae41"]:after {\n        background-position: center center;\n        background-size: cover;\n        z-index: auto;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n      }\n      @media only screen and (max-width: 700px) {\n        [data-sub-layout="3b056c9d-ccd4-4950-afca-318b75ebae41"] {\n          flex-basis: 100%;\n          max-width: 100%;\n        }\n      }\n    '
                      }}
                    />
                    <div
                      data-widget-id="b9ee53ed-369c-4c37-a45b-f310d18e9de1"
                      data-placement-id="40c55075-1240-4718-8533-cb0dcf28e677"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n    #sd-image-b9ee53ed-369c-4c37-a45b-f310d18e9de1 {\n        display: flex;\n        align-items: center;\n        background: url('https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/original/q/falafel-%26-meat-grinder__65571.original.jpg') no-repeat;\n        opacity: calc(100 / 100);\n\n            cursor: pointer;\n\n            background-size: contain;\n\n            height: auto;\n\n        background-position:\n                center\n                center\n;\n\n\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n\n        margin-top: 0px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n    }\n\n    #sd-image-b9ee53ed-369c-4c37-a45b-f310d18e9de1 * {\n        margin: 0px;\n    }\n\n    #sd-image-b9ee53ed-369c-4c37-a45b-f310d18e9de1 img {\n        width: auto;\n        opacity: 0;\n\n            height: auto;\n    }\n\n    @media only screen and (max-width: 700px) {\n        #sd-image-b9ee53ed-369c-4c37-a45b-f310d18e9de1 {\n        }\n    }\n"
                        }}
                      />
                      <div>
                        <a href="/machines?filter=Falafel%20%26%20Meat%20Grinder" role="button">
                          <div
                            id="sd-image-b9ee53ed-369c-4c37-a45b-f310d18e9de1"
                            data-edit-mode=""
                          >
                            <img
                              src="https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/original/q/falafel-%26-meat-grinder__65571.original.jpg"
                              alt="Shawarma Machines"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      data-widget-id="e8ef67ac-7f3c-4370-8e77-39b8f5c90de6"
                      data-placement-id="c5ecfcc7-a7dc-4547-911e-c5886db2cd2d"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n    .sd-button-e8ef67ac-7f3c-4370-8e77-39b8f5c90de6 {\n        display: flex;\n        align-items: center;\n            justify-content: center;\n    }\n\n    .sd-button-e8ef67ac-7f3c-4370-8e77-39b8f5c90de6 .buttonLink > a {\n        text-decoration: none;\n        background-color: rgba(0,0,0,0);\n        border: 0px solid rgba(0,0,0,0);\n        border-radius: 0px;\n        color: rgba(212,104,0,1);\n        font-size: 18px;\n        font-family: inherit;\n        font-weight: 400;\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n        margin-top: 10px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n        text-align: center;\n        cursor: pointer;\n    }\n\n    .sd-button-e8ef67ac-7f3c-4370-8e77-39b8f5c90de6 .buttonLink > a:hover {\n        background-color: rgba(0,0,0,0);\n        border-color: rgba(0,0,0,0);\n        color: rgba(0,0,0,1);\n    }\n\n    @media only screen and (max-width: 700px) {\n        .sd-button-e8ef67ac-7f3c-4370-8e77-39b8f5c90de6 { }\n    }\n\n    #sd-simple-button-editable-e8ef67ac-7f3c-4370-8e77-39b8f5c90de6 {\n        min-width: 14px;\n        line-height: 1.5;\n        display: inline-block;\n    }\n\n    #sd-simple-button-editable-e8ef67ac-7f3c-4370-8e77-39b8f5c90de6 * {\n        margin: 0;\n        padding: 0;\n    }\n\n    #sd-simple-button-editable-e8ef67ac-7f3c-4370-8e77-39b8f5c90de6[data-edit-mode="true"]:hover,\n    #sd-simple-button-editable-e8ef67ac-7f3c-4370-8e77-39b8f5c90de6[data-edit-mode="true"]:active,\n    #sd-simple-button-editable-e8ef67ac-7f3c-4370-8e77-39b8f5c90de6[data-edit-mode="true"]:focus {\n        outline: 1px dashed #3C64F4;\n    }\n\n    #sd-simple-button-editable-e8ef67ac-7f3c-4370-8e77-39b8f5c90de6 strong,\n    #sd-simple-button-editable-e8ef67ac-7f3c-4370-8e77-39b8f5c90de6 strong * {\n        font-weight: bold;\n    }\n'
                        }}
                      />
                      <div className="sd-button-e8ef67ac-7f3c-4370-8e77-39b8f5c90de6">
                        <div className="buttonLink" role="button">
                          <a
                            href="/machines?filter=Falafel%20%26%20Meat%20Grinder"
                            target="_top"
                            id="sd-simple-button-editable-e8ef67ac-7f3c-4370-8e77-39b8f5c90de6"
                            data-edit-mode=""
                          >
                            Falafel &amp; Meat Grinder
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-sub-layout="971efafd-2a82-4199-8d3c-87adbf11b75e">
                    <style
                      data-column-styling="971efafd-2a82-4199-8d3c-87adbf11b75e"
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n      [data-sub-layout="971efafd-2a82-4199-8d3c-87adbf11b75e"] {\n        display: flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        flex-basis: 16.66%;\n        max-width: 16.66%;\n        z-index: 0;\n        justify-content: flex-start;\n        padding-top: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n        padding-left: 20px;\n        position: relative;\n      }\n      [data-sub-layout="971efafd-2a82-4199-8d3c-87adbf11b75e"]:after {\n        background-position: center center;\n        background-size: cover;\n        z-index: auto;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n      }\n      @media only screen and (max-width: 700px) {\n        [data-sub-layout="971efafd-2a82-4199-8d3c-87adbf11b75e"] {\n          flex-basis: 100%;\n          max-width: 100%;\n        }\n      }\n    '
                      }}
                    />
                    <div
                      data-widget-id="b6c2754d-807a-42b6-9303-6c110567c902"
                      data-placement-id="6952046a-d3bd-4652-952a-706ca13f78bf"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n    #sd-image-b6c2754d-807a-42b6-9303-6c110567c902 {\n        display: flex;\n        align-items: center;\n        background: url('https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/original/t/dough-mixers__47422.original.jpg') no-repeat;\n        opacity: calc(100 / 100);\n\n            cursor: pointer;\n\n            background-size: contain;\n\n            height: auto;\n\n        background-position:\n                center\n                center\n;\n\n\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n\n        margin-top: 0px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n    }\n\n    #sd-image-b6c2754d-807a-42b6-9303-6c110567c902 * {\n        margin: 0px;\n    }\n\n    #sd-image-b6c2754d-807a-42b6-9303-6c110567c902 img {\n        width: auto;\n        opacity: 0;\n\n            height: auto;\n    }\n\n    @media only screen and (max-width: 700px) {\n        #sd-image-b6c2754d-807a-42b6-9303-6c110567c902 {\n        }\n    }\n"
                        }}
                      />
                      <div>
                        <a href="/machines?filter=Dough%20Mixers%20%26%20Rollers" role="button">
                          <div
                            id="sd-image-b6c2754d-807a-42b6-9303-6c110567c902"
                            data-edit-mode=""
                          >
                            <img
                              src="https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/original/t/dough-mixers__47422.original.jpg"
                              alt="Shawarma Knife & Meat Slicers"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      data-widget-id="79397375-83af-492c-afb7-bb671eb1c15a"
                      data-placement-id="97693be4-0229-472a-98ff-64bc43caedd8"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n    .sd-button-79397375-83af-492c-afb7-bb671eb1c15a {\n        display: flex;\n        align-items: center;\n            justify-content: center;\n    }\n\n    .sd-button-79397375-83af-492c-afb7-bb671eb1c15a .buttonLink > a {\n        text-decoration: none;\n        background-color: rgba(0,0,0,0);\n        border: 0px solid rgba(0,0,0,0);\n        border-radius: 0px;\n        color: rgba(212,104,0,1);\n        font-size: 18px;\n        font-family: inherit;\n        font-weight: 400;\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n        margin-top: 10px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n        text-align: center;\n        cursor: pointer;\n    }\n\n    .sd-button-79397375-83af-492c-afb7-bb671eb1c15a .buttonLink > a:hover {\n        background-color: rgba(0,0,0,0);\n        border-color: rgba(0,0,0,0);\n        color: rgba(0,0,0,1);\n    }\n\n    @media only screen and (max-width: 700px) {\n        .sd-button-79397375-83af-492c-afb7-bb671eb1c15a { }\n    }\n\n    #sd-simple-button-editable-79397375-83af-492c-afb7-bb671eb1c15a {\n        min-width: 14px;\n        line-height: 1.5;\n        display: inline-block;\n    }\n\n    #sd-simple-button-editable-79397375-83af-492c-afb7-bb671eb1c15a * {\n        margin: 0;\n        padding: 0;\n    }\n\n    #sd-simple-button-editable-79397375-83af-492c-afb7-bb671eb1c15a[data-edit-mode="true"]:hover,\n    #sd-simple-button-editable-79397375-83af-492c-afb7-bb671eb1c15a[data-edit-mode="true"]:active,\n    #sd-simple-button-editable-79397375-83af-492c-afb7-bb671eb1c15a[data-edit-mode="true"]:focus {\n        outline: 1px dashed #3C64F4;\n    }\n\n    #sd-simple-button-editable-79397375-83af-492c-afb7-bb671eb1c15a strong,\n    #sd-simple-button-editable-79397375-83af-492c-afb7-bb671eb1c15a strong * {\n        font-weight: bold;\n    }\n'
                        }}
                      />
                      <div className="sd-button-79397375-83af-492c-afb7-bb671eb1c15a">
                        <div className="buttonLink" role="button">
                          <a
                            href="/machines?filter=Dough%20Mixers%20%26%20Rollers"
                            target="_top"
                            id="sd-simple-button-editable-79397375-83af-492c-afb7-bb671eb1c15a"
                            data-edit-mode=""
                          >
                            Dough Mixers &amp; Rollers
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-sub-layout="c8290bce-c8ab-48a2-8d1d-413b244e8d88">
                    <style
                      data-column-styling="c8290bce-c8ab-48a2-8d1d-413b244e8d88"
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n      [data-sub-layout="c8290bce-c8ab-48a2-8d1d-413b244e8d88"] {\n        display: flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        flex-basis: 16.66%;\n        max-width: 16.66%;\n        z-index: 0;\n        justify-content: flex-start;\n        padding-top: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n        padding-left: 20px;\n        position: relative;\n      }\n      [data-sub-layout="c8290bce-c8ab-48a2-8d1d-413b244e8d88"]:after {\n        background-position: center center;\n        background-size: cover;\n        z-index: auto;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n      }\n      @media only screen and (max-width: 700px) {\n        [data-sub-layout="c8290bce-c8ab-48a2-8d1d-413b244e8d88"] {\n          flex-basis: 100%;\n          max-width: 100%;\n        }\n      }\n    '
                      }}
                    />
                    <div
                      data-widget-id="91e3700c-efc6-4511-ad4a-98ba47380623"
                      data-placement-id="db53ae38-d4f6-4b6f-b479-0f56c3cbaa97"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n    #sd-image-91e3700c-efc6-4511-ad4a-98ba47380623 {\n        display: flex;\n        align-items: center;\n        background: url('https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/original/image-manager/sg50ex-max.jpg') no-repeat;\n        opacity: calc(100 / 100);\n\n            cursor: pointer;\n\n            background-size: contain;\n\n            height: auto;\n\n        background-position:\n                center\n                center\n;\n\n\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n\n        margin-top: 0px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n    }\n\n    #sd-image-91e3700c-efc6-4511-ad4a-98ba47380623 * {\n        margin: 0px;\n    }\n\n    #sd-image-91e3700c-efc6-4511-ad4a-98ba47380623 img {\n        width: auto;\n        opacity: 0;\n\n            height: auto;\n    }\n\n    @media only screen and (max-width: 700px) {\n        #sd-image-91e3700c-efc6-4511-ad4a-98ba47380623 {\n        }\n    }\n"
                        }}
                      />
                      <div>
                        <a
                          href="/machines?filter=Automatic%20Salad%20Bar%20Chopper"
                          role="button"
                        >
                          <div
                            id="sd-image-91e3700c-efc6-4511-ad4a-98ba47380623"
                            data-edit-mode=""
                          >
                            <img
                              src="https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/original/image-manager/sg50ex-max.jpg"
                              alt="Pita Oven"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      data-widget-id="4a605474-7063-47a2-b444-d5ba350b045a"
                      data-placement-id="c50f2f14-44ed-4844-9ce5-616fc6814af6"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n    .sd-button-4a605474-7063-47a2-b444-d5ba350b045a {\n        display: flex;\n        align-items: center;\n            justify-content: center;\n    }\n\n    .sd-button-4a605474-7063-47a2-b444-d5ba350b045a .buttonLink > a {\n        text-decoration: none;\n        background-color: rgba(0,0,0,0);\n        border: 0px solid rgba(0,0,0,0);\n        border-radius: 0px;\n        color: rgba(212,104,0,1);\n        font-size: 18px;\n        font-family: inherit;\n        font-weight: 400;\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n        margin-top: 10px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n        text-align: center;\n        cursor: pointer;\n    }\n\n    .sd-button-4a605474-7063-47a2-b444-d5ba350b045a .buttonLink > a:hover {\n        background-color: rgba(0,0,0,0);\n        border-color: rgba(0,0,0,0);\n        color: rgba(0,0,0,1);\n    }\n\n    @media only screen and (max-width: 700px) {\n        .sd-button-4a605474-7063-47a2-b444-d5ba350b045a { }\n    }\n\n    #sd-simple-button-editable-4a605474-7063-47a2-b444-d5ba350b045a {\n        min-width: 14px;\n        line-height: 1.5;\n        display: inline-block;\n    }\n\n    #sd-simple-button-editable-4a605474-7063-47a2-b444-d5ba350b045a * {\n        margin: 0;\n        padding: 0;\n    }\n\n    #sd-simple-button-editable-4a605474-7063-47a2-b444-d5ba350b045a[data-edit-mode="true"]:hover,\n    #sd-simple-button-editable-4a605474-7063-47a2-b444-d5ba350b045a[data-edit-mode="true"]:active,\n    #sd-simple-button-editable-4a605474-7063-47a2-b444-d5ba350b045a[data-edit-mode="true"]:focus {\n        outline: 1px dashed #3C64F4;\n    }\n\n    #sd-simple-button-editable-4a605474-7063-47a2-b444-d5ba350b045a strong,\n    #sd-simple-button-editable-4a605474-7063-47a2-b444-d5ba350b045a strong * {\n        font-weight: bold;\n    }\n'
                        }}
                      />
                      <div className="sd-button-4a605474-7063-47a2-b444-d5ba350b045a">
                        <div className="buttonLink" role="button">
                          <a
                            href="/machines?filter=Automatic%20Salad%20Bar%20Chopper"
                            target="_top"
                            id="sd-simple-button-editable-4a605474-7063-47a2-b444-d5ba350b045a"
                            data-edit-mode=""
                          >
                            Automatic Salad Bar Chopper
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-sub-layout="2f5c2977-128b-4862-8273-016f3084b43e">
                    <style
                      data-column-styling="2f5c2977-128b-4862-8273-016f3084b43e"
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n      [data-sub-layout="2f5c2977-128b-4862-8273-016f3084b43e"] {\n        display: flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        flex-basis: 16.66%;\n        max-width: 16.66%;\n        z-index: 0;\n        justify-content: flex-start;\n        padding-top: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n        padding-left: 20px;\n        position: relative;\n      }\n      [data-sub-layout="2f5c2977-128b-4862-8273-016f3084b43e"]:after {\n        background-position: center center;\n        background-size: cover;\n        z-index: auto;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n      }\n      @media only screen and (max-width: 700px) {\n        [data-sub-layout="2f5c2977-128b-4862-8273-016f3084b43e"] {\n          flex-basis: 100%;\n          max-width: 100%;\n        }\n      }\n    '
                      }}
                    />
                    <div
                      data-widget-id="41d301cc-eedd-4e45-9fd1-1f519aa196db"
                      data-placement-id="1bcd0c1c-93f1-41d4-813d-9c0dc911b94b"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n    #sd-image-41d301cc-eedd-4e45-9fd1-1f519aa196db {\n        display: flex;\n        align-items: center;\n        background: url('https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/640w/products/461/2929/SG36_1__86214.1724360316.jpg?c=2') no-repeat;\n        opacity: calc(100 / 100);\n\n            cursor: pointer;\n\n            background-size: contain;\n\n            height: 110px;\n\n        background-position:\n                center\n                center\n;\n\n\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n\n        margin-top: 0px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n    }\n\n    #sd-image-41d301cc-eedd-4e45-9fd1-1f519aa196db * {\n        margin: 0px;\n    }\n\n    #sd-image-41d301cc-eedd-4e45-9fd1-1f519aa196db img {\n        width: auto;\n        opacity: 0;\n\n            height: 100%;\n    }\n\n    @media only screen and (max-width: 700px) {\n        #sd-image-41d301cc-eedd-4e45-9fd1-1f519aa196db {\n        }\n    }\n"
                        }}
                      />
                      <div>
                        <a href="/machines?filter=Gas%20Ranges" role="button">
                          <div
                            id="sd-image-41d301cc-eedd-4e45-9fd1-1f519aa196db"
                            data-edit-mode=""
                          >
                            <img
                              src="https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/640w/products/461/2929/SG36_1__86214.1724360316.jpg?c=2"
                              alt="Hummus Blender"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      data-widget-id="d5b1176a-172e-4e4c-877d-2cf6605c566d"
                      data-placement-id="e16f0f5c-d725-410e-b949-f6b01826b11f"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n    .sd-button-d5b1176a-172e-4e4c-877d-2cf6605c566d {\n        display: flex;\n        align-items: center;\n            justify-content: center;\n    }\n\n    .sd-button-d5b1176a-172e-4e4c-877d-2cf6605c566d .buttonLink > a {\n        text-decoration: none;\n        background-color: rgba(0,0,0,0);\n        border: 0px solid rgba(0,0,0,0);\n        border-radius: 0px;\n        color: rgba(212,104,0,1);\n        font-size: 18px;\n        font-family: inherit;\n        font-weight: 400;\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n        margin-top: 10px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n        text-align: center;\n        cursor: pointer;\n    }\n\n    .sd-button-d5b1176a-172e-4e4c-877d-2cf6605c566d .buttonLink > a:hover {\n        background-color: rgba(0,0,0,0);\n        border-color: rgba(0,0,0,0);\n        color: rgba(0,0,0,1);\n    }\n\n    @media only screen and (max-width: 700px) {\n        .sd-button-d5b1176a-172e-4e4c-877d-2cf6605c566d { }\n    }\n\n    #sd-simple-button-editable-d5b1176a-172e-4e4c-877d-2cf6605c566d {\n        min-width: 14px;\n        line-height: 1.5;\n        display: inline-block;\n    }\n\n    #sd-simple-button-editable-d5b1176a-172e-4e4c-877d-2cf6605c566d * {\n        margin: 0;\n        padding: 0;\n    }\n\n    #sd-simple-button-editable-d5b1176a-172e-4e4c-877d-2cf6605c566d[data-edit-mode="true"]:hover,\n    #sd-simple-button-editable-d5b1176a-172e-4e4c-877d-2cf6605c566d[data-edit-mode="true"]:active,\n    #sd-simple-button-editable-d5b1176a-172e-4e4c-877d-2cf6605c566d[data-edit-mode="true"]:focus {\n        outline: 1px dashed #3C64F4;\n    }\n\n    #sd-simple-button-editable-d5b1176a-172e-4e4c-877d-2cf6605c566d strong,\n    #sd-simple-button-editable-d5b1176a-172e-4e4c-877d-2cf6605c566d strong * {\n        font-weight: bold;\n    }\n'
                        }}
                      />
                      <div className="sd-button-d5b1176a-172e-4e4c-877d-2cf6605c566d">
                        <div className="buttonLink" role="button">
                          <a
                            href="/machines?filter=Gas%20Ranges"
                            target="_top"
                            id="sd-simple-button-editable-d5b1176a-172e-4e4c-877d-2cf6605c566d"
                            data-edit-mode=""
                          >
                            Gas Ranges
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-sub-layout="a1c34ee9-0d14-44af-8d2f-19fa089518e2">
                    <style
                      data-column-styling="a1c34ee9-0d14-44af-8d2f-19fa089518e2"
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n      [data-sub-layout="a1c34ee9-0d14-44af-8d2f-19fa089518e2"] {\n        display: flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        flex-basis: 16.66%;\n        max-width: 16.66%;\n        z-index: 0;\n        justify-content: flex-start;\n        padding-top: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n        padding-left: 20px;\n        position: relative;\n      }\n      [data-sub-layout="a1c34ee9-0d14-44af-8d2f-19fa089518e2"]:after {\n        background-position: center center;\n        background-size: cover;\n        z-index: auto;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n      }\n      @media only screen and (max-width: 700px) {\n        [data-sub-layout="a1c34ee9-0d14-44af-8d2f-19fa089518e2"] {\n          flex-basis: 100%;\n          max-width: 100%;\n        }\n      }\n    '
                      }}
                    />
                    <div
                      data-widget-id="242194a6-31df-4b5a-891d-e51feed9659b"
                      data-placement-id="aa23cdd5-6f9c-4bec-b3d3-b7af9aed0bb6"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n    #sd-image-242194a6-31df-4b5a-891d-e51feed9659b {\n        display: flex;\n        align-items: center;\n        background: url('https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/100x100/products/152/873/SG4218__73594.1511548939.jpg?c=2') no-repeat;\n        opacity: calc(100 / 100);\n\n            cursor: pointer;\n\n            background-size: contain;\n\n            height: auto;\n\n        background-position:\n                center\n                center\n;\n\n\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n\n        margin-top: 0px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n    }\n\n    #sd-image-242194a6-31df-4b5a-891d-e51feed9659b * {\n        margin: 0px;\n    }\n\n    #sd-image-242194a6-31df-4b5a-891d-e51feed9659b img {\n        width: auto;\n        opacity: 0;\n\n            height: auto;\n    }\n\n    @media only screen and (max-width: 700px) {\n        #sd-image-242194a6-31df-4b5a-891d-e51feed9659b {\n        }\n    }\n"
                        }}
                      />
                      <div>
                        <a
                          href="/machines?filter=Salad%20Bar%20Refrigeration%20%26%20Food%20Warmers"
                          role="button"
                        >
                          <div
                            id="sd-image-242194a6-31df-4b5a-891d-e51feed9659b"
                            data-edit-mode=""
                          >
                            <img
                              src="https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/100x100/products/152/873/SG4218__73594.1511548939.jpg?c=2"
                              alt="Saj Machine"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      data-widget-id="73aa2e71-1df6-4ccc-8db6-2490eb9c7617"
                      data-placement-id="46a6fd06-c044-4ed4-a525-e410403e953d"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n    .sd-button-73aa2e71-1df6-4ccc-8db6-2490eb9c7617 {\n        display: flex;\n        align-items: center;\n            justify-content: center;\n    }\n\n    .sd-button-73aa2e71-1df6-4ccc-8db6-2490eb9c7617 .buttonLink > a {\n        text-decoration: none;\n        background-color: rgba(0,0,0,0);\n        border: 0px solid rgba(0,0,0,0);\n        border-radius: 0px;\n        color: rgba(212,104,0,1);\n        font-size: 18px;\n        font-family: inherit;\n        font-weight: 400;\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n        margin-top: 10px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n        text-align: center;\n        cursor: pointer;\n    }\n\n    .sd-button-73aa2e71-1df6-4ccc-8db6-2490eb9c7617 .buttonLink > a:hover {\n        background-color: rgba(0,0,0,0);\n        border-color: rgba(0,0,0,0);\n        color: rgba(0,0,0,1);\n    }\n\n    @media only screen and (max-width: 700px) {\n        .sd-button-73aa2e71-1df6-4ccc-8db6-2490eb9c7617 { }\n    }\n\n    #sd-simple-button-editable-73aa2e71-1df6-4ccc-8db6-2490eb9c7617 {\n        min-width: 14px;\n        line-height: 1.5;\n        display: inline-block;\n    }\n\n    #sd-simple-button-editable-73aa2e71-1df6-4ccc-8db6-2490eb9c7617 * {\n        margin: 0;\n        padding: 0;\n    }\n\n    #sd-simple-button-editable-73aa2e71-1df6-4ccc-8db6-2490eb9c7617[data-edit-mode="true"]:hover,\n    #sd-simple-button-editable-73aa2e71-1df6-4ccc-8db6-2490eb9c7617[data-edit-mode="true"]:active,\n    #sd-simple-button-editable-73aa2e71-1df6-4ccc-8db6-2490eb9c7617[data-edit-mode="true"]:focus {\n        outline: 1px dashed #3C64F4;\n    }\n\n    #sd-simple-button-editable-73aa2e71-1df6-4ccc-8db6-2490eb9c7617 strong,\n    #sd-simple-button-editable-73aa2e71-1df6-4ccc-8db6-2490eb9c7617 strong * {\n        font-weight: bold;\n    }\n'
                        }}
                      />
                      <div className="sd-button-73aa2e71-1df6-4ccc-8db6-2490eb9c7617">
                        <div className="buttonLink" role="button">
                          <a
                            href="/machines?filter=Salad%20Bar%20Refrigeration%20%26%20Food%20Warmers"
                            target="_top"
                            id="sd-simple-button-editable-73aa2e71-1df6-4ccc-8db6-2490eb9c7617"
                            data-edit-mode=""
                          >
                            Salad Bar Refrigeration &amp; Food Warmers
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
                <div
                  data-sub-layout-container="c8ab5029-fd16-4422-bab5-d356963af409"
                  data-layout-name="Layout"
                >
                  <style
                    data-container-styling="c8ab5029-fd16-4422-bab5-d356963af409"
                    dangerouslySetInnerHTML={{
                      __html:
                        '\n    [data-sub-layout-container="c8ab5029-fd16-4422-bab5-d356963af409"] {\n      box-sizing: border-box;\n      display: flex;\n      flex-wrap: wrap;\n      z-index: 0;\n      margin-top: 20px;\n      margin-bottom: 40px;\n      position: relative;\n    }\n    [data-sub-layout-container="c8ab5029-fd16-4422-bab5-d356963af409"]:after {\n      background-position: center center;\n      background-size: cover;\n      z-index: auto;\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n    }\n  '
                    }}
                  />
                  <div data-sub-layout="2c9bb0e5-cdff-4d2f-874c-b4248ea5cc0d">
                    <style
                      data-column-styling="2c9bb0e5-cdff-4d2f-874c-b4248ea5cc0d"
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n      [data-sub-layout="2c9bb0e5-cdff-4d2f-874c-b4248ea5cc0d"] {\n        display: flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        flex-basis: 16.66%;\n        max-width: 16.66%;\n        z-index: 0;\n        justify-content: flex-start;\n        padding-top: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n        padding-left: 20px;\n        position: relative;\n      }\n      [data-sub-layout="2c9bb0e5-cdff-4d2f-874c-b4248ea5cc0d"]:after {\n        background-position: center center;\n        background-size: cover;\n        z-index: auto;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n      }\n      @media only screen and (max-width: 700px) {\n        [data-sub-layout="2c9bb0e5-cdff-4d2f-874c-b4248ea5cc0d"] {\n          flex-basis: 100%;\n          max-width: 100%;\n        }\n      }\n    '
                      }}
                    />
                    <div
                      data-widget-id="7d630631-1339-4a60-bcdd-d366c1259601"
                      data-placement-id="4c4074b5-5813-4547-8aa3-614d23b606bf"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n    #sd-image-7d630631-1339-4a60-bcdd-d366c1259601 {\n        display: flex;\n        align-items: center;\n        background: url('https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/original/d/kunafet__51639.original.jpg') no-repeat;\n        opacity: calc(100 / 100);\n\n            cursor: pointer;\n\n            background-size: contain;\n\n            height: auto;\n\n        background-position:\n                center\n                center\n;\n\n\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n\n        margin-top: 0px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n    }\n\n    #sd-image-7d630631-1339-4a60-bcdd-d366c1259601 * {\n        margin: 0px;\n    }\n\n    #sd-image-7d630631-1339-4a60-bcdd-d366c1259601 img {\n        width: auto;\n        opacity: 0;\n\n            height: auto;\n    }\n\n    @media only screen and (max-width: 700px) {\n        #sd-image-7d630631-1339-4a60-bcdd-d366c1259601 {\n        }\n    }\n"
                        }}
                      />
                      <div>
                        <a href="/machines?filter=Kunafet" role="button">
                          <div
                            id="sd-image-7d630631-1339-4a60-bcdd-d366c1259601"
                            data-edit-mode=""
                          >
                            <img
                              src="https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/original/d/kunafet__51639.original.jpg"
                              alt="Shawarma Machines"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      data-widget-id="128841ae-b1c8-4f13-82b3-849d3624ed68"
                      data-placement-id="144bd95e-46b3-4153-b929-e8640f58a256"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n    .sd-button-128841ae-b1c8-4f13-82b3-849d3624ed68 {\n        display: flex;\n        align-items: center;\n            justify-content: center;\n    }\n\n    .sd-button-128841ae-b1c8-4f13-82b3-849d3624ed68 .buttonLink > a {\n        text-decoration: none;\n        background-color: rgba(0,0,0,0);\n        border: 0px solid rgba(0,0,0,0);\n        border-radius: 0px;\n        color: rgba(212,104,0,1);\n        font-size: 18px;\n        font-family: inherit;\n        font-weight: 400;\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n        margin-top: 10px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n        text-align: center;\n        cursor: pointer;\n    }\n\n    .sd-button-128841ae-b1c8-4f13-82b3-849d3624ed68 .buttonLink > a:hover {\n        background-color: rgba(0,0,0,0);\n        border-color: rgba(0,0,0,0);\n        color: rgba(0,0,0,1);\n    }\n\n    @media only screen and (max-width: 700px) {\n        .sd-button-128841ae-b1c8-4f13-82b3-849d3624ed68 { }\n    }\n\n    #sd-simple-button-editable-128841ae-b1c8-4f13-82b3-849d3624ed68 {\n        min-width: 14px;\n        line-height: 1.5;\n        display: inline-block;\n    }\n\n    #sd-simple-button-editable-128841ae-b1c8-4f13-82b3-849d3624ed68 * {\n        margin: 0;\n        padding: 0;\n    }\n\n    #sd-simple-button-editable-128841ae-b1c8-4f13-82b3-849d3624ed68[data-edit-mode="true"]:hover,\n    #sd-simple-button-editable-128841ae-b1c8-4f13-82b3-849d3624ed68[data-edit-mode="true"]:active,\n    #sd-simple-button-editable-128841ae-b1c8-4f13-82b3-849d3624ed68[data-edit-mode="true"]:focus {\n        outline: 1px dashed #3C64F4;\n    }\n\n    #sd-simple-button-editable-128841ae-b1c8-4f13-82b3-849d3624ed68 strong,\n    #sd-simple-button-editable-128841ae-b1c8-4f13-82b3-849d3624ed68 strong * {\n        font-weight: bold;\n    }\n'
                        }}
                      />
                      <div className="sd-button-128841ae-b1c8-4f13-82b3-849d3624ed68">
                        <div className="buttonLink" role="button">
                          <a
                            href="/machines?filter=Kunafet"
                            target="_top"
                            id="sd-simple-button-editable-128841ae-b1c8-4f13-82b3-849d3624ed68"
                            data-edit-mode=""
                          >
                            Kunafet
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-sub-layout="7953528f-50b2-47fc-8ba2-8e27619bac3c">
                    <style
                      data-column-styling="7953528f-50b2-47fc-8ba2-8e27619bac3c"
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n      [data-sub-layout="7953528f-50b2-47fc-8ba2-8e27619bac3c"] {\n        display: flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        flex-basis: 16.66%;\n        max-width: 16.66%;\n        z-index: 0;\n        justify-content: flex-start;\n        padding-top: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n        padding-left: 20px;\n        position: relative;\n      }\n      [data-sub-layout="7953528f-50b2-47fc-8ba2-8e27619bac3c"]:after {\n        background-position: center center;\n        background-size: cover;\n        z-index: auto;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n      }\n      @media only screen and (max-width: 700px) {\n        [data-sub-layout="7953528f-50b2-47fc-8ba2-8e27619bac3c"] {\n          flex-basis: 100%;\n          max-width: 100%;\n        }\n      }\n    '
                      }}
                    />
                    <div
                      data-widget-id="4ad888ef-8923-4dd7-9efc-aca52072da62"
                      data-placement-id="57df2930-3ad4-4cee-b8e5-e1491aba55cd"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n    #sd-image-4ad888ef-8923-4dd7-9efc-aca52072da62 {\n        display: flex;\n        align-items: center;\n        background: url('https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/original/n/gelato-%26-middle-eastern-booza__75131.original.jpg') no-repeat;\n        opacity: calc(100 / 100);\n\n            cursor: pointer;\n\n            background-size: contain;\n\n            height: auto;\n\n        background-position:\n                center\n                center\n;\n\n\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n\n        margin-top: 0px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n    }\n\n    #sd-image-4ad888ef-8923-4dd7-9efc-aca52072da62 * {\n        margin: 0px;\n    }\n\n    #sd-image-4ad888ef-8923-4dd7-9efc-aca52072da62 img {\n        width: auto;\n        opacity: 0;\n\n            height: auto;\n    }\n\n    @media only screen and (max-width: 700px) {\n        #sd-image-4ad888ef-8923-4dd7-9efc-aca52072da62 {\n        }\n    }\n"
                        }}
                      />
                      <div>
                        <a
                          href="/machines?filter=Gelato%20%26%20Middle%20Eastern%20Booza"
                          role="button"
                        >
                          <div
                            id="sd-image-4ad888ef-8923-4dd7-9efc-aca52072da62"
                            data-edit-mode=""
                          >
                            <img
                              src="https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/original/n/gelato-%26-middle-eastern-booza__75131.original.jpg"
                              alt="Shawarma Knife & Meat Slicers"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      data-widget-id="705ce4ca-b8fe-4b1b-83f8-1923bcfebdaa"
                      data-placement-id="c855dd53-af9e-4669-b906-b393d35d7630"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n    .sd-button-705ce4ca-b8fe-4b1b-83f8-1923bcfebdaa {\n        display: flex;\n        align-items: center;\n            justify-content: center;\n    }\n\n    .sd-button-705ce4ca-b8fe-4b1b-83f8-1923bcfebdaa .buttonLink > a {\n        text-decoration: none;\n        background-color: rgba(0,0,0,0);\n        border: 0px solid rgba(0,0,0,0);\n        border-radius: 0px;\n        color: rgba(212,104,0,1);\n        font-size: 18px;\n        font-family: inherit;\n        font-weight: 400;\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n        margin-top: 10px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n        text-align: center;\n        cursor: pointer;\n    }\n\n    .sd-button-705ce4ca-b8fe-4b1b-83f8-1923bcfebdaa .buttonLink > a:hover {\n        background-color: rgba(0,0,0,0);\n        border-color: rgba(0,0,0,0);\n        color: rgba(0,0,0,1);\n    }\n\n    @media only screen and (max-width: 700px) {\n        .sd-button-705ce4ca-b8fe-4b1b-83f8-1923bcfebdaa { }\n    }\n\n    #sd-simple-button-editable-705ce4ca-b8fe-4b1b-83f8-1923bcfebdaa {\n        min-width: 14px;\n        line-height: 1.5;\n        display: inline-block;\n    }\n\n    #sd-simple-button-editable-705ce4ca-b8fe-4b1b-83f8-1923bcfebdaa * {\n        margin: 0;\n        padding: 0;\n    }\n\n    #sd-simple-button-editable-705ce4ca-b8fe-4b1b-83f8-1923bcfebdaa[data-edit-mode="true"]:hover,\n    #sd-simple-button-editable-705ce4ca-b8fe-4b1b-83f8-1923bcfebdaa[data-edit-mode="true"]:active,\n    #sd-simple-button-editable-705ce4ca-b8fe-4b1b-83f8-1923bcfebdaa[data-edit-mode="true"]:focus {\n        outline: 1px dashed #3C64F4;\n    }\n\n    #sd-simple-button-editable-705ce4ca-b8fe-4b1b-83f8-1923bcfebdaa strong,\n    #sd-simple-button-editable-705ce4ca-b8fe-4b1b-83f8-1923bcfebdaa strong * {\n        font-weight: bold;\n    }\n'
                        }}
                      />
                      <div className="sd-button-705ce4ca-b8fe-4b1b-83f8-1923bcfebdaa">
                        <div className="buttonLink" role="button">
                          <a
                            href="/machines?filter=Gelato%20%26%20Middle%20Eastern%20Booza"
                            target="_top"
                            id="sd-simple-button-editable-705ce4ca-b8fe-4b1b-83f8-1923bcfebdaa"
                            data-edit-mode=""
                          >
                            Gelato &amp; Middle Eastern Booza
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-sub-layout="777262f4-3270-43c6-a9f1-6d8205b631df">
                    <style
                      data-column-styling="777262f4-3270-43c6-a9f1-6d8205b631df"
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n      [data-sub-layout="777262f4-3270-43c6-a9f1-6d8205b631df"] {\n        display: flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        flex-basis: 16.66%;\n        max-width: 16.66%;\n        z-index: 0;\n        justify-content: flex-start;\n        padding-top: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n        padding-left: 20px;\n        position: relative;\n      }\n      [data-sub-layout="777262f4-3270-43c6-a9f1-6d8205b631df"]:after {\n        background-position: center center;\n        background-size: cover;\n        z-index: auto;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n      }\n      @media only screen and (max-width: 700px) {\n        [data-sub-layout="777262f4-3270-43c6-a9f1-6d8205b631df"] {\n          flex-basis: 100%;\n          max-width: 100%;\n        }\n      }\n    '
                      }}
                    />
                    <div
                      data-widget-id="633e6dfa-6430-4ad1-a8e6-ebe6e33f5589"
                      data-placement-id="ca636713-221c-4c65-8f5d-04d29d96fea2"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n    #sd-image-633e6dfa-6430-4ad1-a8e6-ebe6e33f5589 {\n        display: flex;\n        align-items: center;\n        background: url('https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/original/d/coffee-%26-espresso-machines__43499.original.jpg') no-repeat;\n        opacity: calc(100 / 100);\n\n            cursor: pointer;\n\n            background-size: contain;\n\n            height: auto;\n\n        background-position:\n                center\n                center\n;\n\n\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n\n        margin-top: 0px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n    }\n\n    #sd-image-633e6dfa-6430-4ad1-a8e6-ebe6e33f5589 * {\n        margin: 0px;\n    }\n\n    #sd-image-633e6dfa-6430-4ad1-a8e6-ebe6e33f5589 img {\n        width: auto;\n        opacity: 0;\n\n            height: auto;\n    }\n\n    @media only screen and (max-width: 700px) {\n        #sd-image-633e6dfa-6430-4ad1-a8e6-ebe6e33f5589 {\n        }\n    }\n"
                        }}
                      />
                      <div>
                        <a href="/machines?filter=Coffee%20%26%20Espresso%20Machines" role="button">
                          <div
                            id="sd-image-633e6dfa-6430-4ad1-a8e6-ebe6e33f5589"
                            data-edit-mode=""
                          >
                            <img
                              src="https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/original/d/coffee-%26-espresso-machines__43499.original.jpg"
                              alt="Pita Oven"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      data-widget-id="4d40ef53-58c3-4055-ac41-5be15790db01"
                      data-placement-id="1d005325-8726-4091-a6ef-a50d93122be5"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n    .sd-button-4d40ef53-58c3-4055-ac41-5be15790db01 {\n        display: flex;\n        align-items: center;\n            justify-content: center;\n    }\n\n    .sd-button-4d40ef53-58c3-4055-ac41-5be15790db01 .buttonLink > a {\n        text-decoration: none;\n        background-color: rgba(0,0,0,0);\n        border: 0px solid rgba(0,0,0,0);\n        border-radius: 0px;\n        color: rgba(212,104,0,1);\n        font-size: 18px;\n        font-family: inherit;\n        font-weight: 400;\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n        margin-top: 10px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n        text-align: center;\n        cursor: pointer;\n    }\n\n    .sd-button-4d40ef53-58c3-4055-ac41-5be15790db01 .buttonLink > a:hover {\n        background-color: rgba(0,0,0,0);\n        border-color: rgba(0,0,0,0);\n        color: rgba(0,0,0,1);\n    }\n\n    @media only screen and (max-width: 700px) {\n        .sd-button-4d40ef53-58c3-4055-ac41-5be15790db01 { }\n    }\n\n    #sd-simple-button-editable-4d40ef53-58c3-4055-ac41-5be15790db01 {\n        min-width: 14px;\n        line-height: 1.5;\n        display: inline-block;\n    }\n\n    #sd-simple-button-editable-4d40ef53-58c3-4055-ac41-5be15790db01 * {\n        margin: 0;\n        padding: 0;\n    }\n\n    #sd-simple-button-editable-4d40ef53-58c3-4055-ac41-5be15790db01[data-edit-mode="true"]:hover,\n    #sd-simple-button-editable-4d40ef53-58c3-4055-ac41-5be15790db01[data-edit-mode="true"]:active,\n    #sd-simple-button-editable-4d40ef53-58c3-4055-ac41-5be15790db01[data-edit-mode="true"]:focus {\n        outline: 1px dashed #3C64F4;\n    }\n\n    #sd-simple-button-editable-4d40ef53-58c3-4055-ac41-5be15790db01 strong,\n    #sd-simple-button-editable-4d40ef53-58c3-4055-ac41-5be15790db01 strong * {\n        font-weight: bold;\n    }\n'
                        }}
                      />
                      <div className="sd-button-4d40ef53-58c3-4055-ac41-5be15790db01">
                        <div className="buttonLink" role="button">
                          <a
                            href="/machines?filter=Coffee%20%26%20Espresso%20Machines"
                            target="_top"
                            id="sd-simple-button-editable-4d40ef53-58c3-4055-ac41-5be15790db01"
                            data-edit-mode=""
                          >
                            Coffee &amp; Espresso Machines
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> 
                  <div data-sub-layout="346a3ff0-eb7a-440f-b904-dac71fbf0f82">
                    <style
                      data-column-styling="346a3ff0-eb7a-440f-b904-dac71fbf0f82"
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n      [data-sub-layout="346a3ff0-eb7a-440f-b904-dac71fbf0f82"] {\n        display: flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        flex-basis: 16.66%;\n        max-width: 16.66%;\n        z-index: 0;\n        justify-content: flex-start;\n        padding-top: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n        padding-left: 20px;\n        position: relative;\n      }\n      [data-sub-layout="346a3ff0-eb7a-440f-b904-dac71fbf0f82"]:after {\n        background-position: center center;\n        background-size: cover;\n        z-index: auto;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n      }\n      @media only screen and (max-width: 700px) {\n        [data-sub-layout="346a3ff0-eb7a-440f-b904-dac71fbf0f82"] {\n          flex-basis: 100%;\n          max-width: 100%;\n        }\n      }\n    '
                      }}
                    />
                    <div
                      data-widget-id="6b3f837c-525c-401d-9ab7-eb196b0b55fc"
                      data-placement-id="8577002d-d1ee-488f-b1c9-0a15d992e313"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n    #sd-image-6b3f837c-525c-401d-9ab7-eb196b0b55fc {\n        display: flex;\n        align-items: center;\n        background: url('https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/original/t/shawarma-accessories__43102.original.jpg') no-repeat;\n        opacity: calc(100 / 100);\n\n            cursor: pointer;\n\n            background-size: contain;\n\n            height: auto;\n\n        background-position:\n                center\n                center\n;\n\n\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n\n        margin-top: 0px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n    }\n\n    #sd-image-6b3f837c-525c-401d-9ab7-eb196b0b55fc * {\n        margin: 0px;\n    }\n\n    #sd-image-6b3f837c-525c-401d-9ab7-eb196b0b55fc img {\n        width: auto;\n        opacity: 0;\n\n            height: auto;\n    }\n\n    @media only screen and (max-width: 700px) {\n        #sd-image-6b3f837c-525c-401d-9ab7-eb196b0b55fc {\n        }\n    }\n"
                        }}
                      />
                      <div>
                        <a href="machines?filter=Accessories" role="button">
                          <div
                            id="sd-image-6b3f837c-525c-401d-9ab7-eb196b0b55fc"
                            data-edit-mode=""
                          >
                            <img
                              src="https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/original/t/shawarma-accessories__43102.original.jpg"
                              alt="Saj Machine"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      data-widget-id="463e05f7-29db-48e3-b28a-1c1daf73caba"
                      data-placement-id="93042401-b128-4de2-80f6-bc294a3a83d4"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n    .sd-button-463e05f7-29db-48e3-b28a-1c1daf73caba {\n        display: flex;\n        align-items: center;\n            justify-content: center;\n    }\n\n    .sd-button-463e05f7-29db-48e3-b28a-1c1daf73caba .buttonLink > a {\n        text-decoration: none;\n        background-color: rgba(0,0,0,0);\n        border: 0px solid rgba(0,0,0,0);\n        border-radius: 0px;\n        color: rgba(212,104,0,1);\n        font-size: 18px;\n        font-family: inherit;\n        font-weight: 400;\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n        margin-top: 10px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n        text-align: center;\n        cursor: pointer;\n    }\n\n    .sd-button-463e05f7-29db-48e3-b28a-1c1daf73caba .buttonLink > a:hover {\n        background-color: rgba(0,0,0,0);\n        border-color: rgba(0,0,0,0);\n        color: rgba(0,0,0,1);\n    }\n\n    @media only screen and (max-width: 700px) {\n        .sd-button-463e05f7-29db-48e3-b28a-1c1daf73caba { }\n    }\n\n    #sd-simple-button-editable-463e05f7-29db-48e3-b28a-1c1daf73caba {\n        min-width: 14px;\n        line-height: 1.5;\n        display: inline-block;\n    }\n\n    #sd-simple-button-editable-463e05f7-29db-48e3-b28a-1c1daf73caba * {\n        margin: 0;\n        padding: 0;\n    }\n\n    #sd-simple-button-editable-463e05f7-29db-48e3-b28a-1c1daf73caba[data-edit-mode="true"]:hover,\n    #sd-simple-button-editable-463e05f7-29db-48e3-b28a-1c1daf73caba[data-edit-mode="true"]:active,\n    #sd-simple-button-editable-463e05f7-29db-48e3-b28a-1c1daf73caba[data-edit-mode="true"]:focus {\n        outline: 1px dashed #3C64F4;\n    }\n\n    #sd-simple-button-editable-463e05f7-29db-48e3-b28a-1c1daf73caba strong,\n    #sd-simple-button-editable-463e05f7-29db-48e3-b28a-1c1daf73caba strong * {\n        font-weight: bold;\n    }\n'
                        }}
                      />
                      <div className="sd-button-463e05f7-29db-48e3-b28a-1c1daf73caba">
                        <div className="buttonLink" role="button">
                          <a
                            href="machines?filter=Accessories"
                            target="_top"
                            id="sd-simple-button-editable-463e05f7-29db-48e3-b28a-1c1daf73caba"
                            data-edit-mode=""
                          >
                            Accessories
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-sub-layout="d916ca9d-3ccc-49fd-be15-8bae04732902">
                    <style
                      data-column-styling="d916ca9d-3ccc-49fd-be15-8bae04732902"
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n      [data-sub-layout="d916ca9d-3ccc-49fd-be15-8bae04732902"] {\n        display: flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        flex-basis: 16.66%;\n        max-width: 16.66%;\n        z-index: 0;\n        justify-content: flex-start;\n        padding-top: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n        padding-left: 20px;\n        position: relative;\n      }\n      [data-sub-layout="d916ca9d-3ccc-49fd-be15-8bae04732902"]:after {\n        background-position: center center;\n        background-size: cover;\n        z-index: auto;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n      }\n      @media only screen and (max-width: 700px) {\n        [data-sub-layout="d916ca9d-3ccc-49fd-be15-8bae04732902"] {\n          flex-basis: 100%;\n          max-width: 100%;\n        }\n      }\n    '
                      }}
                    />
                    <div
                      data-widget-id="0e14179a-640a-483f-982d-e7148634425d"
                      data-placement-id="07fb65df-41bf-4d9c-b17d-919e00b78d4c"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n    #sd-image-0e14179a-640a-483f-982d-e7148634425d {\n        display: flex;\n        align-items: center;\n        background: url('https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/original/x/shawarma-raw-meat-slicer1__60996_category.original.jpg') no-repeat;\n        opacity: calc(100 / 100);\n\n            cursor: pointer;\n\n            background-size: contain;\n\n            height: 110px;\n\n        background-position:\n                center\n                center\n;\n\n\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n\n        margin-top: 0px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n    }\n\n    #sd-image-0e14179a-640a-483f-982d-e7148634425d * {\n        margin: 0px;\n    }\n\n    #sd-image-0e14179a-640a-483f-982d-e7148634425d img {\n        width: auto;\n        opacity: 0;\n\n            height: 100%;\n    }\n\n    @media only screen and (max-width: 700px) {\n        #sd-image-0e14179a-640a-483f-982d-e7148634425d {\n        }\n    }\n"
                        }}
                      />
                      <div>
                        <a href="/machines?filter=Shawarma%20Meat%20Slicer" role="button">
                          <div
                            id="sd-image-0e14179a-640a-483f-982d-e7148634425d"
                            data-edit-mode=""
                          >
                            <img
                              src="https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/original/x/shawarma-raw-meat-slicer1__60996_category.original.jpg"
                              alt="Kebab Char Broilers & Griddles"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      data-widget-id="ba07432b-0908-49bd-af54-4802aa3c86a1"
                      data-placement-id="0ce70c1a-7435-4988-a191-6b741c16f153"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n    .sd-button-ba07432b-0908-49bd-af54-4802aa3c86a1 {\n        display: flex;\n        align-items: center;\n            justify-content: center;\n    }\n\n    .sd-button-ba07432b-0908-49bd-af54-4802aa3c86a1 .buttonLink > a {\n        text-decoration: none;\n        background-color: rgba(0,0,0,0);\n        border: 0px solid rgba(0,0,0,0);\n        border-radius: 0px;\n        color: rgba(212,104,0,1);\n        font-size: 18px;\n        font-family: inherit;\n        font-weight: 400;\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n        margin-top: 10px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n        text-align: center;\n        cursor: pointer;\n    }\n\n    .sd-button-ba07432b-0908-49bd-af54-4802aa3c86a1 .buttonLink > a:hover {\n        background-color: rgba(0,0,0,0);\n        border-color: rgba(0,0,0,0);\n        color: rgba(0,0,0,1);\n    }\n\n    @media only screen and (max-width: 700px) {\n        .sd-button-ba07432b-0908-49bd-af54-4802aa3c86a1 { }\n    }\n\n    #sd-simple-button-editable-ba07432b-0908-49bd-af54-4802aa3c86a1 {\n        min-width: 14px;\n        line-height: 1.5;\n        display: inline-block;\n    }\n\n    #sd-simple-button-editable-ba07432b-0908-49bd-af54-4802aa3c86a1 * {\n        margin: 0;\n        padding: 0;\n    }\n\n    #sd-simple-button-editable-ba07432b-0908-49bd-af54-4802aa3c86a1[data-edit-mode="true"]:hover,\n    #sd-simple-button-editable-ba07432b-0908-49bd-af54-4802aa3c86a1[data-edit-mode="true"]:active,\n    #sd-simple-button-editable-ba07432b-0908-49bd-af54-4802aa3c86a1[data-edit-mode="true"]:focus {\n        outline: 1px dashed #3C64F4;\n    }\n\n    #sd-simple-button-editable-ba07432b-0908-49bd-af54-4802aa3c86a1 strong,\n    #sd-simple-button-editable-ba07432b-0908-49bd-af54-4802aa3c86a1 strong * {\n        font-weight: bold;\n    }\n'
                        }}
                      />
                      <div className="sd-button-ba07432b-0908-49bd-af54-4802aa3c86a1">
                        <div className="buttonLink" role="button">
                          <a
                            href="/machines?filter=Shawarma%20Meat%20Slicer"
                            target="_top"
                            id="sd-simple-button-editable-ba07432b-0908-49bd-af54-4802aa3c86a1"
                            data-edit-mode=""
                          >
                            Shawarma Meat Slicer
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-sub-layout-container="b29cbdcb-fb99-494b-a7cc-26a803bf1422"
                  data-layout-name="Layout"
                >
                  <style
                    data-container-styling="b29cbdcb-fb99-494b-a7cc-26a803bf1422"
                    dangerouslySetInnerHTML={{
                      __html:
                        '\n    [data-sub-layout-container="b29cbdcb-fb99-494b-a7cc-26a803bf1422"] {\n      box-sizing: border-box;\n      display: flex;\n      flex-wrap: wrap;\n      z-index: 0;\n      margin-top: 20px;\n      margin-bottom: 100px;\n      position: relative;\n    }\n    [data-sub-layout-container="b29cbdcb-fb99-494b-a7cc-26a803bf1422"]:after {\n      background-position: center center;\n      background-size: cover;\n      z-index: auto;\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n    }\n  '
                    }}
                  />
                  <div data-sub-layout="4cd8cfa2-8a60-492e-9d3f-c5cf21410b09">
                    <style
                      data-column-styling="4cd8cfa2-8a60-492e-9d3f-c5cf21410b09"
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n      [data-sub-layout="4cd8cfa2-8a60-492e-9d3f-c5cf21410b09"] {\n        display: flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        flex-basis: 16.66%;\n        max-width: 16.66%;\n        z-index: 0;\n        justify-content: center;\n        padding-top: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n        padding-left: 20px;\n        position: relative;\n      }\n      [data-sub-layout="4cd8cfa2-8a60-492e-9d3f-c5cf21410b09"]:after {\n        background-position: center center;\n        background-size: cover;\n        z-index: auto;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n      }\n      @media only screen and (max-width: 700px) {\n        [data-sub-layout="4cd8cfa2-8a60-492e-9d3f-c5cf21410b09"] {\n          flex-basis: 100%;\n          max-width: 100%;\n        }\n      }\n    '
                      }}
                    />
                    <div
                      data-widget-id="76adc5ee-d5f8-496d-89dd-66c3c622cd49"
                      data-placement-id="8ee06f17-db6e-40c6-9cd6-f4dfc27ef8ff"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n    #sd-image-76adc5ee-d5f8-496d-89dd-66c3c622cd49 {\n        display: flex;\n        align-items: center;\n        background: url('https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/original/p/sg-cr3g__79324_category.original.jpg') no-repeat;\n        opacity: calc(100 / 100);\n\n            cursor: pointer;\n\n            background-size: contain;\n\n            height: 110px;\n\n        background-position:\n                center\n                center\n;\n\n\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n\n        margin-top: 0px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n    }\n\n    #sd-image-76adc5ee-d5f8-496d-89dd-66c3c622cd49 * {\n        margin: 0px;\n    }\n\n    #sd-image-76adc5ee-d5f8-496d-89dd-66c3c622cd49 img {\n        width: auto;\n        opacity: 0;\n\n            height: 100%;\n    }\n\n    @media only screen and (max-width: 700px) {\n        #sd-image-76adc5ee-d5f8-496d-89dd-66c3c622cd49 {\n        }\n    }\n"
                        }}
                      />
                      <div>
                        <a href="/machines?filter=Rotisserie%20Chicken" role="button">
                          <div
                            id="sd-image-76adc5ee-d5f8-496d-89dd-66c3c622cd49"
                            data-edit-mode=""
                          >
                            <img
                              src="https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/original/p/sg-cr3g__79324_category.original.jpg"
                              alt="Kebab Char Broilers & Griddles"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      data-widget-id="88c85c48-d4cc-4277-b61a-db929ccfc529"
                      data-placement-id="aeb019e2-2221-41cc-9210-5ea8cca44e5f"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n    .sd-button-88c85c48-d4cc-4277-b61a-db929ccfc529 {\n        display: flex;\n        align-items: center;\n            justify-content: center;\n    }\n\n    .sd-button-88c85c48-d4cc-4277-b61a-db929ccfc529 .buttonLink > a {\n        text-decoration: none;\n        background-color: rgba(0,0,0,0);\n        border: 0px solid rgba(0,0,0,0);\n        border-radius: 0px;\n        color: rgba(212,104,0,1);\n        font-size: 18px;\n        font-family: inherit;\n        font-weight: 400;\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n        margin-top: 10px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n        text-align: center;\n        cursor: pointer;\n    }\n\n    .sd-button-88c85c48-d4cc-4277-b61a-db929ccfc529 .buttonLink > a:hover {\n        background-color: rgba(0,0,0,0);\n        border-color: rgba(0,0,0,0);\n        color: rgba(0,0,0,1);\n    }\n\n    @media only screen and (max-width: 700px) {\n        .sd-button-88c85c48-d4cc-4277-b61a-db929ccfc529 { }\n    }\n\n    #sd-simple-button-editable-88c85c48-d4cc-4277-b61a-db929ccfc529 {\n        min-width: 14px;\n        line-height: 1.5;\n        display: inline-block;\n    }\n\n    #sd-simple-button-editable-88c85c48-d4cc-4277-b61a-db929ccfc529 * {\n        margin: 0;\n        padding: 0;\n    }\n\n    #sd-simple-button-editable-88c85c48-d4cc-4277-b61a-db929ccfc529[data-edit-mode="true"]:hover,\n    #sd-simple-button-editable-88c85c48-d4cc-4277-b61a-db929ccfc529[data-edit-mode="true"]:active,\n    #sd-simple-button-editable-88c85c48-d4cc-4277-b61a-db929ccfc529[data-edit-mode="true"]:focus {\n        outline: 1px dashed #3C64F4;\n    }\n\n    #sd-simple-button-editable-88c85c48-d4cc-4277-b61a-db929ccfc529 strong,\n    #sd-simple-button-editable-88c85c48-d4cc-4277-b61a-db929ccfc529 strong * {\n        font-weight: bold;\n    }\n'
                        }}
                      />
                      <div className="sd-button-88c85c48-d4cc-4277-b61a-db929ccfc529">
                        <div className="buttonLink" role="button">
                          <a
                            href="/machines?filter=Rotisserie%20Chicken"
                            target="_top"
                            id="sd-simple-button-editable-88c85c48-d4cc-4277-b61a-db929ccfc529"
                            data-edit-mode=""
                          >
                            Rotisserie Chicken
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-sub-layout="cc9c6fb9-6cd3-4d18-9cf1-24fac0fe2c18">
                    <style
                      data-column-styling="cc9c6fb9-6cd3-4d18-9cf1-24fac0fe2c18"
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n      [data-sub-layout="cc9c6fb9-6cd3-4d18-9cf1-24fac0fe2c18"] {\n        display: flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        flex-basis: 16.66%;\n        max-width: 16.66%;\n        z-index: 0;\n        justify-content: center;\n        padding-top: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n        padding-left: 20px;\n        position: relative;\n      }\n      [data-sub-layout="cc9c6fb9-6cd3-4d18-9cf1-24fac0fe2c18"]:after {\n        background-position: center center;\n        background-size: cover;\n        z-index: auto;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n      }\n      @media only screen and (max-width: 700px) {\n        [data-sub-layout="cc9c6fb9-6cd3-4d18-9cf1-24fac0fe2c18"] {\n          flex-basis: 100%;\n          max-width: 100%;\n        }\n      }\n    '
                      }}
                    />
                    <div
                      data-widget-id="3a29f738-430b-4f9c-b0b3-5ae785d9b0a3"
                      data-placement-id="ec13f065-4b7a-4c3b-83f5-8fa367a2fd5b"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n    #sd-image-3a29f738-430b-4f9c-b0b3-5ae785d9b0a3 {\n        display: flex;\n        align-items: center;\n        background: url('https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/640w/products/453/2898/FR-40E__17155.1721678841.jpg?c=2') no-repeat;\n        opacity: calc(100 / 100);\n\n            cursor: pointer;\n\n            background-size: contain;\n\n            height: 110px;\n\n        background-position:\n                center\n                center\n;\n\n\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n\n        margin-top: 0px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n    }\n\n    #sd-image-3a29f738-430b-4f9c-b0b3-5ae785d9b0a3 * {\n        margin: 0px;\n    }\n\n    #sd-image-3a29f738-430b-4f9c-b0b3-5ae785d9b0a3 img {\n        width: auto;\n        opacity: 0;\n\n            height: 100%;\n    }\n\n    @media only screen and (max-width: 700px) {\n        #sd-image-3a29f738-430b-4f9c-b0b3-5ae785d9b0a3 {\n        }\n    }\n"
                        }}
                      />
                      <div>
                        <a href="/machines?filter=Fryers" role="button">
                          <div
                            id="sd-image-3a29f738-430b-4f9c-b0b3-5ae785d9b0a3"
                            data-edit-mode=""
                          >
                            <img
                              src="https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/640w/products/453/2898/FR-40E__17155.1721678841.jpg?c=2"
                              alt="Kebab Char Broilers & Griddles"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      data-widget-id="54a81285-97e5-43d5-8a91-f0538965dc3f"
                      data-placement-id="e60bcb2e-5868-490a-8e3f-760942b77380"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n    .sd-button-54a81285-97e5-43d5-8a91-f0538965dc3f {\n        display: flex;\n        align-items: center;\n            justify-content: center;\n    }\n\n    .sd-button-54a81285-97e5-43d5-8a91-f0538965dc3f .buttonLink > a {\n        text-decoration: none;\n        background-color: rgba(0,0,0,0);\n        border: 0px solid rgba(0,0,0,0);\n        border-radius: 0px;\n        color: rgba(212,104,0,1);\n        font-size: 18px;\n        font-family: inherit;\n        font-weight: 400;\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n        margin-top: 10px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n        text-align: center;\n        cursor: pointer;\n    }\n\n    .sd-button-54a81285-97e5-43d5-8a91-f0538965dc3f .buttonLink > a:hover {\n        background-color: rgba(0,0,0,0);\n        border-color: rgba(0,0,0,0);\n        color: rgba(0,0,0,1);\n    }\n\n    @media only screen and (max-width: 700px) {\n        .sd-button-54a81285-97e5-43d5-8a91-f0538965dc3f { }\n    }\n\n    #sd-simple-button-editable-54a81285-97e5-43d5-8a91-f0538965dc3f {\n        min-width: 14px;\n        line-height: 1.5;\n        display: inline-block;\n    }\n\n    #sd-simple-button-editable-54a81285-97e5-43d5-8a91-f0538965dc3f * {\n        margin: 0;\n        padding: 0;\n    }\n\n    #sd-simple-button-editable-54a81285-97e5-43d5-8a91-f0538965dc3f[data-edit-mode="true"]:hover,\n    #sd-simple-button-editable-54a81285-97e5-43d5-8a91-f0538965dc3f[data-edit-mode="true"]:active,\n    #sd-simple-button-editable-54a81285-97e5-43d5-8a91-f0538965dc3f[data-edit-mode="true"]:focus {\n        outline: 1px dashed #3C64F4;\n    }\n\n    #sd-simple-button-editable-54a81285-97e5-43d5-8a91-f0538965dc3f strong,\n    #sd-simple-button-editable-54a81285-97e5-43d5-8a91-f0538965dc3f strong * {\n        font-weight: bold;\n    }\n'
                        }}
                      />
                      <div className="sd-button-54a81285-97e5-43d5-8a91-f0538965dc3f">
                        <div className="buttonLink" role="button">
                          <a
                            href="/machines?filter=Fryers"
                            target="_top"
                            id="sd-simple-button-editable-54a81285-97e5-43d5-8a91-f0538965dc3f"
                            data-edit-mode=""
                          >
                            Fryers
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-sub-layout="af3e0421-94c9-42fe-92da-78053a89eddb">
                    <style
                      data-column-styling="af3e0421-94c9-42fe-92da-78053a89eddb"
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n      [data-sub-layout="af3e0421-94c9-42fe-92da-78053a89eddb"] {\n        display: flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        flex-basis: 16.66%;\n        max-width: 16.66%;\n        z-index: 0;\n        justify-content: center;\n        padding-top: 20px;\n        padding-right: 20px;\n        padding-bottom: 20px;\n        padding-left: 20px;\n        position: relative;\n      }\n      [data-sub-layout="af3e0421-94c9-42fe-92da-78053a89eddb"]:after {\n        background-position: center center;\n        background-size: cover;\n        z-index: auto;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n      }\n      @media only screen and (max-width: 700px) {\n        [data-sub-layout="af3e0421-94c9-42fe-92da-78053a89eddb"] {\n          flex-basis: 100%;\n          max-width: 100%;\n        }\n      }\n    '
                      }}
                    />
                    <div
                      data-widget-id="f6d4b597-5625-4438-9e8f-580b7ba2a20f"
                      data-placement-id="4538648f-4a21-41bc-a057-1dc77315e89a"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n    #sd-image-f6d4b597-5625-4438-9e8f-580b7ba2a20f {\n        display: flex;\n        align-items: center;\n        background: url('https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/500x659/products/269/1817/AutoKebob2__21822.1660936128.jpg?c=2') no-repeat;\n        opacity: calc(100 / 100);\n\n            cursor: pointer;\n\n            background-size: contain;\n\n            height: 110px;\n\n        background-position:\n                center\n                center\n;\n\n\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n\n        margin-top: 0px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n    }\n\n    #sd-image-f6d4b597-5625-4438-9e8f-580b7ba2a20f * {\n        margin: 0px;\n    }\n\n    #sd-image-f6d4b597-5625-4438-9e8f-580b7ba2a20f img {\n        width: auto;\n        opacity: 0;\n\n            height: 100%;\n    }\n\n    @media only screen and (max-width: 700px) {\n        #sd-image-f6d4b597-5625-4438-9e8f-580b7ba2a20f {\n        }\n    }\n"
                        }}
                      />
                      <div>
                        <a
                          href="/machines?filter=Automatic%20Kebab%20Encrusted"
                          role="button"
                        >
                          <div
                            id="sd-image-f6d4b597-5625-4438-9e8f-580b7ba2a20f"
                            data-edit-mode=""
                          >
                            <img
                              src="https://cdn11.bigcommerce.com/s-1g6otlwo/images/stencil/500x659/products/269/1817/AutoKebob2__21822.1660936128.jpg?c=2"
                              alt="Kebab Char Broilers & Griddles"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      data-widget-id="7fbe9474-47e6-45d5-8c44-b01d987897b8"
                      data-placement-id="3885a89a-08cd-48b9-9bb0-7b13bdb5f488"
                      data-placement-status="ACTIVE"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n    .sd-button-7fbe9474-47e6-45d5-8c44-b01d987897b8 {\n        display: flex;\n        align-items: center;\n            justify-content: center;\n    }\n\n    .sd-button-7fbe9474-47e6-45d5-8c44-b01d987897b8 .buttonLink > a {\n        text-decoration: none;\n        background-color: rgba(0,0,0,0);\n        border: 0px solid rgba(0,0,0,0);\n        border-radius: 0px;\n        color: rgba(212,104,0,1);\n        font-size: 18px;\n        font-family: inherit;\n        font-weight: 400;\n        padding-top: 0px;\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: 0px;\n        margin-top: 10px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n        text-align: center;\n        cursor: pointer;\n    }\n\n    .sd-button-7fbe9474-47e6-45d5-8c44-b01d987897b8 .buttonLink > a:hover {\n        background-color: rgba(0,0,0,0);\n        border-color: rgba(0,0,0,0);\n        color: rgba(0,0,0,1);\n    }\n\n    @media only screen and (max-width: 700px) {\n        .sd-button-7fbe9474-47e6-45d5-8c44-b01d987897b8 { }\n    }\n\n    #sd-simple-button-editable-7fbe9474-47e6-45d5-8c44-b01d987897b8 {\n        min-width: 14px;\n        line-height: 1.5;\n        display: inline-block;\n    }\n\n    #sd-simple-button-editable-7fbe9474-47e6-45d5-8c44-b01d987897b8 * {\n        margin: 0;\n        padding: 0;\n    }\n\n    #sd-simple-button-editable-7fbe9474-47e6-45d5-8c44-b01d987897b8[data-edit-mode="true"]:hover,\n    #sd-simple-button-editable-7fbe9474-47e6-45d5-8c44-b01d987897b8[data-edit-mode="true"]:active,\n    #sd-simple-button-editable-7fbe9474-47e6-45d5-8c44-b01d987897b8[data-edit-mode="true"]:focus {\n        outline: 1px dashed #3C64F4;\n    }\n\n    #sd-simple-button-editable-7fbe9474-47e6-45d5-8c44-b01d987897b8 strong,\n    #sd-simple-button-editable-7fbe9474-47e6-45d5-8c44-b01d987897b8 strong * {\n        font-weight: bold;\n    }\n'
                        }}
                      />
                      <div className="sd-button-7fbe9474-47e6-45d5-8c44-b01d987897b8">
                        <div className="buttonLink" role="button">
                          <a
                            href="/machines?filter=Automatic%20Kebab%20Encrusted"
                            target="_top"
                            id="sd-simple-button-editable-7fbe9474-47e6-45d5-8c44-b01d987897b8"
                            data-edit-mode=""
                          >
                            Automatic Kebab Encrusted
                            <br />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> 
                  <div data-sub-layout="59b83dfd-8e13-45f7-8c61-66c599676616">
                    <style
                      data-column-styling="59b83dfd-8e13-45f7-8c61-66c599676616"
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n      [data-sub-layout="59b83dfd-8e13-45f7-8c61-66c599676616"] {\n        display: flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        flex-basis: 16.66%;\n        max-width: 16.66%;\n        z-index: 0;\n        justify-content: center;\n        padding-right: 10.5px;\n        padding-left: 10.5px;\n        position: relative;\n      }\n      [data-sub-layout="59b83dfd-8e13-45f7-8c61-66c599676616"]:after {\n        background-position: center center;\n        background-size: cover;\n        z-index: auto;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n      }\n      @media only screen and (max-width: 700px) {\n        [data-sub-layout="59b83dfd-8e13-45f7-8c61-66c599676616"] {\n          flex-basis: 100%;\n          max-width: 100%;\n        }\n      }\n    '
                      }}
                    />
                  </div>
                  <div data-sub-layout="f21fd7ce-4c14-4dde-a771-46a0366ad28a">
                    <style
                      data-column-styling="f21fd7ce-4c14-4dde-a771-46a0366ad28a"
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n      [data-sub-layout="f21fd7ce-4c14-4dde-a771-46a0366ad28a"] {\n        display: flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        flex-basis: 16.66%;\n        max-width: 16.66%;\n        z-index: 0;\n        justify-content: center;\n        padding-right: 10.5px;\n        padding-left: 10.5px;\n        position: relative;\n      }\n      [data-sub-layout="f21fd7ce-4c14-4dde-a771-46a0366ad28a"]:after {\n        background-position: center center;\n        background-size: cover;\n        z-index: auto;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n      }\n      @media only screen and (max-width: 700px) {\n        [data-sub-layout="f21fd7ce-4c14-4dde-a771-46a0366ad28a"] {\n          flex-basis: 100%;\n          max-width: 100%;\n        }\n      }\n    '
                      }}
                    />
                  </div>
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
