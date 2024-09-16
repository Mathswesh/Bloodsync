import React from 'react'
import '../assets/css/footerdesign.css'
export const Footer = () => {
  return (
    <div>
      <footer class="footer" id="contact">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>company</h4>
              <ul>
                <li><a href="#">about us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">privacy policy</a></li>
                <li><a href="#">Disclaimer</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>get help</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Update Profile</a></li>
                <li><a href="#">Appointment status</a></li>
                <li><a href="#">payment option</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-telegram"></i></a>
                <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="footercopyright">Copyright © 2024, All Right Reserved Bloodsync</div>
      </footer>
    </div>
  )
}
