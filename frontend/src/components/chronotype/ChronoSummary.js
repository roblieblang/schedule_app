import React, {useEffect, useState} from 'react';
import './MyChronotype.css';
import axios from "axios";

export default function ChronoSummary () {
  const [userChronotype, setUserChronotype] = useState("");

  const url = `http:///localhost:3301`; 
  const auth0UserData = JSON.parse(window.localStorage.getItem('@@auth0spajs@@::SvoR32C9SM8Ze4yeGVnvWGcPt7NP8eLu::https://schedule-app.dev.com::openid profile email')).body.decodedToken.user;

  const getChronoType = async () => {
    const response = await axios.get(`${url}/usersInformation/users/chronotype/results?uid=${auth0UserData.sub}`);
    // console.log(response[0])
    setUserChronotype(response.data[0]);
  }

  useEffect(() => {
    const userChronotype = getChronoType();
    setUserChronotype(userChronotype);
  }, []);

  function setChronotypeImage(chronotype) {
    // Change to the actual image paths. Should probably be stored in our images folder. 
    let imagePath = "";
    switch(chronotype) {
      case "Wolf":
        imagePath = "Wolf";
        break;
      case "Dolphin":
        imagePath = "Dolphin";
        break;
      case "Lion":
        imagePath = "Lion";
        break;
      case "Bear":
        imagePath = "https://cdn-icons-png.flaticon.com/512/523/523444.png";
        break;
      default:
        imagePath = "placeholder";
    }
    return imagePath;
  };

  return (
    <div>
      <h2 className="title">My Chronotype</h2>
      <div className="summary">
        <div className="image-wrapper">
          <h3 className="image-title">
            {userChronotype.chrono_name === "Empty"  ?  
              <h3>Take the Quiz!</h3> : 
              <h3>{userChronotype.chrono_name}</h3>
            }
          </h3>
          <img src={setChronotypeImage(userChronotype.chrono_name)} alt={userChronotype.chrono_name} />
        </div>
        <hr className="divider" />
        <div className="summary-wrapper">
          <h4 className="summary-title">Summary </h4>
          <p className="summary-text">
          {userChronotype.summary}
          </p>
        </div>
      </div>
    </div>
  );
};

// export default ChronoSummary;