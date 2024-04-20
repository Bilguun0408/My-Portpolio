import React from 'react';
import './contact.css'
import theme from '../../img/themePattern.svg'
import mail from '../../img/mail logo.svg'
import call from '../../img/call_icon.svg'
import location from '../../img/location_icon.svg'



const Contact = () => {

      const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "81842f1c-e39d-46d3-a47a-76be2211b4bb");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        }).then((res) => res.json());

        if (res.success) {
          alert(res.message)
        }
      };


  return (
    <div id='contact' className='contact'>
          <div className="contact-title">
              <h1>Get in touch</h1>
              <img src={theme} alt="" />
          </div>
          <div className="contact-section">
              <div className="contact-left">
                  <h1>Let's talk</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, doloremque.</p>
                  <div className="contact-details">
                      <div className="contact-detail">
                          <img src={mail} alt="" />
                          <p>mandahb150@gmail.com</p>
                      </div>

                      <div className="contact-detail">
                          <img src={call} alt="" width={50}/>
                          <p>85322402</p>
                      </div>

                      <div className="contact-detail">
                          <img src={location} alt="" width={50} />
                          <p>Ulaanbator Mongolia</p>
                      </div>
                  </div>
              </div>
              <form onSubmit={onSubmit} className="contact-right">
                  <label htmlFor="">Your Name</label>
                  <input type="text" placeholder='Enter your name' name='name' />
                  <label htmlFor="">Your Email</label>
                  <input type="email" placeholder='Enter your email' name='email' />
                  <label htmlFor="">Write your message here</label>
                  <textarea name="message" rows="8" placeholder='Enter your message'>
                  </textarea>
                      <button type='submit' className="contact-submit">Submit now</button>
              </form>
          </div>
    </div>
  );
};
export default Contact;
