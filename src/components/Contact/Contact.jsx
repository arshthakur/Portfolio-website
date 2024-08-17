import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import location_icon from "../../assets/location_icon.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "34d99a8b-c6f4-4994-a3d9-08f3caa06a03");

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
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            As a fresher, I am actively seeking job opportunities where I can
            contribute my knowledge and grow within a dynamic team.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>harshthakur0047@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91-7078738138</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Dehradun, Uttarakhand(248001)</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" name="email" placeholder="enter your email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="enter your message"></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
