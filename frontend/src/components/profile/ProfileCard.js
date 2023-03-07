import React, {useState, useEffect} from 'react';
import './ProfileCard.css';
import { useAuth0 } from '@auth0/auth0-react';
import axios from "axios";

const ProfileCard = () => {
    const { user } = useAuth0();

    const [chronotype, setChronotype] = useState("");

    const url = `https://group3backend-lukfolvarsky.onrender.com`;
    const auth0UserData = JSON.parse(window.localStorage.getItem('@@auth0spajs@@::SvoR32C9SM8Ze4yeGVnvWGcPt7NP8eLu::https://schedule-app.dev.com::openid profile email')).body.decodedToken.user;

    useEffect(()=>{
        const getChronoTypeData = async () => {
            const response = await axios.get(`${url}/usersInformation/users/chronotype/results?uid=${auth0UserData.sub}`);
            setChronotype(response.data[0].chrono_name);
        };
        getChronoTypeData();
    });

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
                    <li>My Chronotype: 
                        {chronotype === "Empty" ? 
                            <p style={{color: "red", fontSize: 20}}>Take the Quiz!</p> : 
                            <p>{chronotype}</p>
                        }
                    </li>
                </div>
                <hr className='divider' />
            </div>
        </div>
    )
}

export default ProfileCard;