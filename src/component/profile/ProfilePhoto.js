import React from 'react';
import {Image } from 'react-bootstrap';
import personIcon from '../profile/person.jpg'

function ProfilePhoto({profilePhoto}) {
  return (
    <div>
            <Image src={personIcon} roundedCircle style={{width:"40%",margin:"1em"}} />
        
  </div>
  );
}

export default ProfilePhoto;