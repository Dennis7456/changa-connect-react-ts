import React from "react";
const Contact = () => {
  return (
    <>
    <div className="container mx-auto">
      <div className="text-lg p-4 text-justify">Have questions, feedback, or need assistance? We're here to help!</div>
      <div className="text-lg p-4 text-justify">Customer Support:</div>
      <div className="text-justify p-4">
        <p><strong>Email:</strong> support@changconnect.com</p>
        <p><strong>Phone:</strong> +254733789935</p>
      </div>
      <div className="text-lg text-justify p-4">Business Inquiries:</div>
      <div className="text-justify p-4">
        <p><strong>Email:</strong> business@changconnect.com</p>
        <p><strong>Phone:</strong> +254733776935</p>
      </div>
      <div className="text-lg text-justify p-4">Business Address:</div>
      <div className="text-justify p-4">
        <p>Changa Connect Headquarters,
123 Networking Street,
</p>
<p>Nairobi, Kenya.</p>
      </div>
      <div className="text-lg text-justify p-4">Connect With Us:</div>
      <div className="text-justify p-4 flex justify-around items-center">
        <a className="pr- bg-primary rounded-sm px-3  text-on-primary" href="#">LinkedIn</a>
        <a className="pr-4 bg-primary rounded-sm px-3 text-on-primary" href="#">Twitter</a>
        <a className="pr-4 bg-primary rounded-sm px-3 text-on-primary" href="#">Facebook</a>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className="pb-4 text-secondary">Feel free to reach out to us. Your feedback is valuable, and we look forward to hearing from you!</p>
    </div>
</>
  )
};

export default Contact;