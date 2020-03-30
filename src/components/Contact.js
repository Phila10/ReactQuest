import React from 'react';

function Contact() {
    const name = 'DJ KHALED';
    const online = true;
    <div className="Contact">
        <img src="https://randomuser.me/api/portraits/men/13.jpg"/>
        <div>
        <h4>{name}</h4>
        <p>{online ? 'Online':'Offline'}</p>
        </div>
    </div>
}







export default Contact;