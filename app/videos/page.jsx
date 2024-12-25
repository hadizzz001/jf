'use client'

import Image from "next/image";
import Head from '../component/Head'
import Footer from '../component/Footer'
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

export default function Home() {

    const [videos, setVideos] = useState([]);






    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetch('/api/products');
                const data = await response.json();
                setVideos(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        }

        fetchCategories();
    }, []);

console.log("videos", videos);



    return (
        <>
            <Head />
            <div data-content-region="header_bottom--global" />
            <main
                className="body default-page"
                id="main-content"
                role="main"
            >
                <div data-content-region="home_below_menu" />

                <div data-content-region="home_below_carousel" />
                <div className="main full">
                    <div className="container">
                        <div data-content-region="home_above_banner_section" />
                    </div>
                    <div className="homepage-banner-section"></div>





                    <div data-content-region="home_below_featured_categories">
                        <div data-layout-id="bab4c8b2-99fe-46dd-8dd2-78ca3410d24b">
                            <div
                                data-sub-layout-container="a847f06b-c4b9-4745-88a0-f09b1ebaafaa"
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    padding: "0 100px",
                                    marginBottom: "100px",
                                    justifyContent: "center",
                                    gap: "20px",
                                }}
                            >
                                <style
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            '\n    .sd-simple-text-45b5ed6b-b139-4bab-8b19-6c13fe5b5386 {\n      padding-top: 0px;\n      padding-right: 0px;\n      padding-bottom: 0px;\n      padding-left: 0px;\n\n      margin-top: 0px;\n      margin-right: 0px;\n      margin-bottom: 0px;\n      margin-left: 0px;\n\n    }\n\n    .sd-simple-text-45b5ed6b-b139-4bab-8b19-6c13fe5b5386 * {\n      margin: 0;\n      padding: 0;\n\n        color: rgba(0,0,0,1);\n        font-family: inherit;\n        font-weight: 600;\n        font-size: 46px;\n        min-height: 46px;\n\n    }\n\n    .sd-simple-text-45b5ed6b-b139-4bab-8b19-6c13fe5b5386 {\n        text-align: center;\n    }\n\n    #sd-simple-text-editable-45b5ed6b-b139-4bab-8b19-6c13fe5b5386 {\n      min-width: 14px;\n      line-height: 1.5;\n      display: inline-block;\n    }\n\n    #sd-simple-text-editable-45b5ed6b-b139-4bab-8b19-6c13fe5b5386[data-edit-mode="true"]:hover,\n    #sd-simple-text-editable-45b5ed6b-b139-4bab-8b19-6c13fe5b5386[data-edit-mode="true"]:active,\n    #sd-simple-text-editable-45b5ed6b-b139-4bab-8b19-6c13fe5b5386[data-edit-mode="true"]:focus {\n      outline: 1px dashed #3C64F4;\n    }\n\n    #sd-simple-text-editable-45b5ed6b-b139-4bab-8b19-6c13fe5b5386 strong,\n    #sd-simple-text-editable-45b5ed6b-b139-4bab-8b19-6c13fe5b5386 strong * {\n      font-weight: bold;\n    }\n'
                                    }}
                                />
                                <div style={{ marginTop: '5em' }} className="sd-simple-text-45b5ed6b-b139-4bab-8b19-6c13fe5b5386 ">


                                    <div
                                        id="sd-simple-text-editable-45b5ed6b-b139-4bab-8b19-6c13fe5b5386"
                                        data-edit-mode=""
                                    >
                                        <p>Our Videos</p>
                                    </div>
                                </div>
                                <div
    id="sd-product-set-container"
    style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)", // Four videos per row
        gap: "20px",
        width: "100%",
    }}
>
    {videos
        .filter((product) => product.videoLink) // Filter out empty or null video links
        .map((product) => (
            <div
                key={product.id}
                style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "60%", // 4:2 aspect ratio (2:1)
                }}
            >
                <ReactPlayer
                    url={product.videoLink}
                    width="100%"
                    height="100%"
                    style={{ position: "absolute", top: 0, left: 0 }}
                    controls
                />
            </div>
        ))}
</div>



                            </div>
                        </div>
                    </div>
                    <div
                        data-sub-layout-container="fd7ecfff-34ad-47c5-b5a6-02494fdb9e7e"
                        data-layout-name="Layout"
                    >
                        <style
                            data-container-styling="fd7ecfff-34ad-47c5-b5a6-02494fdb9e7e"
                            dangerouslySetInnerHTML={{
                                __html:
                                    '\n    [data-sub-layout-container="fd7ecfff-34ad-47c5-b5a6-02494fdb9e7e"] {\n      box-sizing: border-box;\n      display: flex;\n      flex-wrap: wrap;\n      z-index: 0;\n      margin-top: 40px;\n      margin-bottom: 100px;\n      position: relative;\n    }\n    [data-sub-layout-container="fd7ecfff-34ad-47c5-b5a6-02494fdb9e7e"]:after {\n      background-position: center center;\n      background-size: cover;\n      z-index: auto;\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n    }\n  '
                            }}
                        />
                        <div data-sub-layout="8cd30e66-e410-4856-8701-e54768ddcc26">
                            <style
                                data-column-styling="8cd30e66-e410-4856-8701-e54768ddcc26"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        '\n      [data-sub-layout="8cd30e66-e410-4856-8701-e54768ddcc26"] {\n        display: flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        flex-basis: 100%;\n        max-width: 100%;\n        z-index: 0;\n        justify-content: center;\n        padding-right: 10.5px;\n        padding-left: 10.5px;\n        position: relative;\n      }\n      [data-sub-layout="8cd30e66-e410-4856-8701-e54768ddcc26"]:after {\n        background-position: center center;\n        background-size: cover;\n        z-index: auto;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n      }\n      @media only screen and (max-width: 700px) {\n        [data-sub-layout="8cd30e66-e410-4856-8701-e54768ddcc26"] {\n          flex-basis: 100%;\n          max-width: 100%;\n        }\n      }\n    '
                                }}
                            />
                            <div
                                data-widget-id="a94a68de-3d61-4e19-a4a2-dccfdf4e3e7e"
                                data-placement-id="12a05188-b33b-40bc-82dd-24a9bf769e0f"
                                data-placement-status="ACTIVE"
                            >
                                <style
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            '\n    .sd-button-a94a68de-3d61-4e19-a4a2-dccfdf4e3e7e {\n        display: flex;\n        align-items: center;\n            justify-content: center;\n    }\n\n    .sd-button-a94a68de-3d61-4e19-a4a2-dccfdf4e3e7e .buttonLink > a {\n        text-decoration: none;\n        background-color: rgba(212,104,0,1);\n        border: 1px solid rgba(212,104,0,1);\n        border-radius: 0px;\n        color: #FFFFFF;\n        font-size: 16px;\n        font-family: inherit;\n        font-weight: 400;\n        padding-top: 8px;\n        padding-right: 24px;\n        padding-bottom: 8px;\n        padding-left: 24px;\n        margin-top: 0px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-left: 0px;\n        text-align: center;\n        cursor: pointer;\n    }\n\n    .sd-button-a94a68de-3d61-4e19-a4a2-dccfdf4e3e7e .buttonLink > a:hover {\n        background-color: rgba(0,0,0,0);\n        border-color: rgba(212,104,0,1);\n        color: rgba(212,104,0,1);\n    }\n\n    @media only screen and (max-width: 700px) {\n        .sd-button-a94a68de-3d61-4e19-a4a2-dccfdf4e3e7e { }\n    }\n\n    #sd-simple-button-editable-a94a68de-3d61-4e19-a4a2-dccfdf4e3e7e {\n        min-width: 14px;\n        line-height: 1.5;\n        display: inline-block;\n    }\n\n    #sd-simple-button-editable-a94a68de-3d61-4e19-a4a2-dccfdf4e3e7e * {\n        margin: 0;\n        padding: 0;\n    }\n\n    #sd-simple-button-editable-a94a68de-3d61-4e19-a4a2-dccfdf4e3e7e[data-edit-mode="true"]:hover,\n    #sd-simple-button-editable-a94a68de-3d61-4e19-a4a2-dccfdf4e3e7e[data-edit-mode="true"]:active,\n    #sd-simple-button-editable-a94a68de-3d61-4e19-a4a2-dccfdf4e3e7e[data-edit-mode="true"]:focus {\n        outline: 1px dashed #3C64F4;\n    }\n\n    #sd-simple-button-editable-a94a68de-3d61-4e19-a4a2-dccfdf4e3e7e strong,\n    #sd-simple-button-editable-a94a68de-3d61-4e19-a4a2-dccfdf4e3e7e strong * {\n        font-weight: bold;\n    }\n'
                                    }}
                                />

                            </div>
                        </div>
                    </div>





                </div>

            </main>

            <Footer />


        </>

    );
}
