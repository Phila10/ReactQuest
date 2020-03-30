import React from 'react';
import './Contact.css'

function Contact() {
    const name = 'Auxence trop bo <3';
    const online = true;
    return (
    <div className="Contact">
        <img className="avatar" src="https://randomuser.me/api/portraits/men/13.jpg"/>
        <div>    
        <h4 className="name">{name}</h4>
        <div className="status">
          <div className={online ? "status-online" : "status-offline"}></div>
          <p className="status-text">{online ? "online" : "offline"}</p>
        </div>
        </div>
    </div>)
}
export default Contact;