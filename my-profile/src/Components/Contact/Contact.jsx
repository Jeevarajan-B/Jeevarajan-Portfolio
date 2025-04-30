import React from 'react'
import './Contact.css'
import mail_ing from '../../assets/massage.png'
import call_ing from '../../assets/call.png'
import location_ing from '../../assets/location.png'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8faef3aa-f955-40af-a455-2eabad10ef43");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Message submitted successfully");
      event.target.reset(); // optional: clears the form after submission
      console.log("Success", res);
    } else {
      alert("Message submission failed. Please try again.");
    }
  };

  return (
    <div id='contact' className="contact">
        <div className="contact-title">
            <h1>Get in Touch</h1>
        </div>
        <div className="contact-selection">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>"Feel free to contact me anytime — I'm always happy to connect!"</p>
                <div className="contact-details">
                     <div className="detail-item">
                     <img src={mail_ing} alt="Email" />
                     <span>jeevaraj2604@gmail.com</span>
                     </div>
                     <div className="detail-item">
                     <img src={call_ing} alt="Call" />
                     <span>+91 753-995-0262</span>
                     </div>
                     <div className="detail-item">
                     <img src={location_ing} alt="Location" />
                     <span>Coimbatore, Tamil Nadu, India</span>
                     </div>
                </div>


            </div>
            <form onSubmit={onSubmit} className="contact-right">
                 <label>Your Name</label>
                 <input type="text" placeholder="Enter your name" name="name" required/>
                 <label>Your E-mail</label>
                 <input type="email" placeholder="Enter your e-mail" name="email" required/>
                 <label>Write your message here</label>
                 <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>
             <button type="submit" className="button-submit">Submit now</button>          
           </form>        
          </div>
      
      
     
    </div>
    
    
  )
}

export default Contact