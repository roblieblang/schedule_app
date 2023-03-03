import React from 'react';
import './ProfileCard.css';
import { useAuth0 } from '@auth0/auth0-react';

const ProfileCard = () => {
    const { user } = useAuth0();

    if (!user) {
      return null;
    }

    return (
        <div>
            <div className='card1'>
                <div className='image1-wrap'>
                    <img src={user.picture} alt=''/>
                </div>
                <p className='username'>{user.name}</p>
                <div className='text1-wrapper'>
                    <li>Age:</li>
                    <li>Occupation: </li>
                    <li>My Chronotype: </li>
                </div>
                <hr className='divider' />
            </div>
        </div>
    )
}

export default ProfileCard;