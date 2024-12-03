import { useGSAP } from '@gsap/react';
import React from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/all';
import $ from 'jquery';

export const Card = () => {
    // gsap

    useGSAP(()=>{
        $(function () {
            let cards = gsap.utils.toArray(".card-wrapper");
    
            let stickDistance = 0;
    
            let firstCardST = ScrollTrigger.create({
                trigger: cards[0],
                start: "center center"
            });
    
            let lastCardST = ScrollTrigger.create({
                trigger: cards[cards.length - 1],
                start: "bottom bottom"
            });
    
            cards.forEach((card, index) => {
                var scale = 1 - (cards.length - index) * 0.025;
                let scaleDown = gsap.to(card, {
                    scale: scale,
                    "transform-origin": '"50% ' + (lastCardST.start + stickDistance) + '"'
                });
    
                ScrollTrigger.create({
                    trigger: card,
                    start: "center center",
                    end: () => lastCardST.start + stickDistance,
                    pin: true,
                    pinSpacing: false,
                    ease: "none",
                    animation: scaleDown,
                    toggleActions: "restart none none reverse"
                });
            });
        });
    
    })
    return (
        <div>

            {/* <div class="card-wrapper">
                <div class="card-contents"><img src="https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2" />
                    <div class="card-description">
                        <h1>Venice</h1>
                        <p>The City of Bridges</p>
                    </div>
                </div>
            </div>
            <div class="card-wrapper">
                <div class="card-contents"><img src="https://images.pexels.com/photos/4916695/pexels-photo-4916695.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2" />
                    <div class="card-description">
                        <h1>Milan</h1>
                        <p>The Little Madonna</p>
                    </div>
                </div>
            </div>
            <div class="card-wrapper">
                <div class="card-contents"><img src="https://images.pexels.com/photos/16054007/pexels-photo-16054007/free-photo-of-facade-of-the-trattoria-antico-fattore-in-florence-italy.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600" />
                    <div class="card-description">
                        <h1>Florence</h1>
                        <p>The City of Lillies</p>
                    </div>
                </div>
            </div>
            <div class="card-wrapper">
                <div class="card-contents"><img src="https://images.pexels.com/photos/2676602/pexels-photo-2676602.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2" />
                    <div class="card-description">
                        <h1>Rome</h1>
                        <p>The Eternal City</p>
                    </div>
                </div>
            </div>
            <div class="spacer"></div> */}
        </div>
    )
}
