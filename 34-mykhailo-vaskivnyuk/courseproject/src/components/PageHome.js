import React from "react";
import { Test1Connected, Test2Connected } from "./Test";
import ContentHeader from "./ContentHeader";
// import { urlencoded } from "express";

class PageHome extends React.Component {

    render() {
        return (
            <React.Fragment>
                <ContentHeader title="Головна" />
				<div className="row" style={{backgroundImage: "url('../src/imgs/Sayt_IZI.jpg')",
											backgroundSize: "100%",
											minHeight: "300px",
											marginBottom: "70px"}}>
					<span></span>
				</div>
            </React.Fragment>
    )};
}

export default PageHome;

{/* <rs-slide data-key="rs-391" data-title="Slide" data-thumb="//justin.ua/wp-content/uploads/2020/02/Sayt_IZI-100x50.jpg" data-anim="ei:d;eo:d;s:600;r:0;t:fade;sl:d;" data-originalindex="1" data-origindex="0" data-description="" style="overflow: hidden; height: 100%; width: 100%; z-index: 18; visibility: hidden; opacity: 0;" data-sba="" data-scroll-based="false" data-owidth="1920" data-oheight="620" data-ntrid="0" class="active-rs-slide"><rs-sbg-px style="background-color: rgba(255, 255, 255, 0);"><rs-sbg-wrap data-owidth="1920" data-oheight="620" style="transform-origin: 50% 50% 0px; opacity: 1; visibility: inherit; top: 0px; left: 0px;"><!--Runtime Modification - Img tag is Still Available for SEO Goals in Source - <img src="https://justin.ua/wp-content/plugins/lazy-load/images/1x1.trans.gif" data-lazy-src="//justin.ua/wp-content/uploads/2020/02/Sayt_IZI.jpg" title="Sayt_IZI" width="1920" height="620" data-bg="p:center top;f:100% 100%;" class="rev-slidebg" data-no-retina="">--><rs-sbg data-lazyload="//justin.ua/wp-content/uploads/2020/02/Sayt_IZI.jpg" src="https://justin.ua/wp-content/plugins/lazy-load/images/1x1.trans.gif" class="" data-bgcolor="transparent" style="background-color: transparent; background-repeat: no-repeat; background-image: url(&quot;//justin.ua/wp-content/uploads/2020/02/Sayt_IZI.jpg&quot;); background-size: 100% 100%; background-position: center top; width: 100%; height: 100%; opacity: 1; top: 0px; left: 0px; visibility: inherit; z-index: 20;"></rs-sbg></rs-sbg-wrap></rs-sbg-px>
							<noscript><img src="//justin.ua/wp-content/uploads/2020/02/Sayt_IZI.jpg" title="Sayt_IZI" width="1920" height="620" data-bg="p:center top;f:100% 100%;" class="rev-slidebg" data-no-retina></noscript>
<!--
							--><rs-layer-wrap class="rs-parallax-wrap rs-forcehidden" style="position: absolute; display: block; pointer-events: none; left: 155px; top: 100px; z-index: 5; visibility: hidden;"><rs-loop-wrap style="position:absolute;display:block;"><rs-mask-wrap style="position: absolute; display: block; visibility: visible; overflow: visible;"><rs-layer id="slider-55-slide-391-layer-6" data-type="text" data-color="#ffffff" data-rsp_ch="on" data-xy="x:100px;y:100px;" data-text="w:normal;l:22;a:inherit;" data-frame_0="tp:600;" data-frame_1="tp:600;sR:10;" data-frame_999="o:0;tp:600;st:w;sR:8690.0006103516;" style="z-index: 5; font-family: &quot;Open Sans&quot;; visibility: hidden; text-align: inherit; line-height: 22px; letter-spacing: 0px; font-weight: 400; font-size: 20px; border-color: rgb(34, 34, 34); border-style: none; margin: 0px; border-radius: 0px; padding: 0px; color: rgb(255, 255, 255); text-decoration: none; white-space: nowrap; width: auto; height: auto; min-height: 0px; min-width: 0px; max-height: none; max-width: none; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="rs-layer" data-idcheck="true" data-stylerecorder="true" data-initialised="true"> 
							</rs-layer></rs-mask-wrap></rs-loop-wrap></rs-layer-wrap><!--

							--><rs-layer-wrap class="rs-parallax-wrap rs-forcehidden" style="position: absolute; display: block; pointer-events: none; left: -135px; top: -13px; z-index: 6; visibility: hidden;"><rs-loop-wrap style="position:absolute;display:block;"><rs-mask-wrap style="position: absolute; display: block; visibility: visible; overflow: visible;"><rs-layer id="slider-55-slide-391-layer-8" data-type="text" data-color="#ffffff" data-rsp_ch="on" data-xy="x:-190px;y:-13px;" data-text="l:22;a:inherit;" data-dim="w:1627px;h:541px;" data-actions="o:click;a:simplelink;target:_blank;url:https://justin.ua/novyny/justin-dostavlyatyme-tovary-z-izi/;" data-frame_0="tp:600;" data-frame_1="tp:600;sR:10;" data-frame_999="o:0;tp:600;st:w;sR:8690.0006103516;" style="z-index: 6; font-family: &quot;Open Sans&quot;; visibility: hidden; text-align: inherit; line-height: 22px; letter-spacing: 0px; font-weight: 400; font-size: 20px; border-color: rgb(34, 34, 34); border-style: none; margin: 0px; border-radius: 0px; padding: 0px; color: rgb(255, 255, 255); text-decoration: none; white-space: nowrap; width: 1627px; height: 541px; min-height: 0px; min-width: 0px; max-height: none; max-width: none; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="rs-layer rs-waction" data-idcheck="true" data-stylerecorder="true" data-initialised="true"> 
							</rs-layer></rs-mask-wrap></rs-loop-wrap></rs-layer-wrap><!--
-->						</rs-slide> */}