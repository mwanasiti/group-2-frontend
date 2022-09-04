import React from 'react'
import "../asset/Contact.css"

const Contact = () => {
  return (
    <div class="container">
      <div class="form">
        <div class="contact-info">
          <h3 class="title">CONTACT US</h3>
          <p class="text">Let's get in touch</p>

          <div class="info">
            <div class="information">
              {/* <img src="img/location.png" class="icon" alt="" />{" "} */}
              <a href="//#">
                <i class="fab fa-street"></i>
              </a>
              <p> Tom Mboya St, Nairobi</p>
            </div>
            <div class="information">
              {/* <img class="icon" alt="" /> how do i import icons? */}
              <p>smartstudent@gmail.com</p>
            </div>
            <div class="information">
              {/* <img src="img/phone.png" class="icon" alt="" />{" "} */}
              {/* how do i import icons? */}
              <p>+254 798675289</p>
            </div>
          </div>

          <div class="social-media">
            <p>Connect with us :
              @Start324student.com
            </p>
            <div class="social-icons">
              <a href="/#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="/#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="/#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="/#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        </div>
      </div>
   
  );
};
export default Contact;