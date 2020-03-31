import React from 'react'
import Contact from './Contact'


const users = [
    {
      name: 'AUXENCE WAOUW',
      avatar: 'http://physiquedereve.fr/wp-content/uploads/2015/06/johnny-depp-visage-portrait-beau-gosse.jpg',
      online: false
    },
    {
      name: 'DJ KHAAAALED',
      avatar: 'https://randomuser.me/api/portraits/women/42.jpg',
      online: true
    },
    {
      name: 'Kim jong-un',
      avatar: 'https://www.chine-nouvelle.com/jdd/public/documents/cc/olive/20100615-patapouf.1.jpg',
      online: true
    },
    {
      name: 'Borock abomo',
      avatar: 'https://scantlessscank.files.wordpress.com/2012/03/funny-barack-obama-white-man-1.jpg?w=640',
      online: false
    },
    {
      name: 'Constiped',
      avatar: 'https://risibank.fr/cache/stickers/d1206/120664-full.png',
      online: true
    }
  ];
  const ContactList = () => (
      <div> {users.map(ok => (<Contact name={ok.name} avatar={ok.avatar} online={ok.online} key={ok.name}/>))}</div>
  )

export default ContactList;