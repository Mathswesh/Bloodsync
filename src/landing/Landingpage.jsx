import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/landingpagedesign.css'
import { motion, useScroll } from "framer-motion"
import { Blank } from '../Blank';
import landingbg1 from '../landing/landingpagebg1.png'
function Component() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div style={{ scaleX: scrollYProgress }} />  
  )
}
export const Landingpage = () => {
    return (
        <div>
            <div class="content">
                <div class="section">
                    <div class="landingpageGetstartedWrap">
                        <div class="landingpageGetstarted">
                            <div className="landingpageData1">
                                LET'S DONATE BLOOD
                            </div>
                            <div className="landingpageData2">
                            This website functions as a dedicated platform for scheduling blood donation appointments at hospitals. It is designed to facilitate the donation process by allowing users to seamlessly book a convenient time to donate blood. 
                            </div>
                        </div>
                    </div>
                </div>
                <Blank/>
                <div class="section">
                
                    <div className="landingpagecard1">
                        <div class="landingpagecard">
                            <p class="heading">Popular this month</p>
                            <p>Powered By</p>
                            <p></p>
                        </div>
                    </div>
                    <div className="landingpagecard1">
                        <div class="landingpagecard">
                            <p class="heading">Popular this month</p>
                            <p>Powered By</p>
                            <p></p>
                        </div>
                    </div>
                    <div className="landingpagecard1">
                        <div class="landingpagecard">
                            <p class="heading">Popular this month</p>
                            <p>Powered By</p>
                            <p></p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="landingbg1">
                <img src={landingbg1} alt="" />
            </div>
            <Blank/>
        </div>
    )
}
