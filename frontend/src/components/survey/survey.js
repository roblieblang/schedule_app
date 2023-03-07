import React from "react";
import { MDBContainer, MDBRadio } from "mdb-react-ui-kit";
import { useState, useEffect } from 'react';
// import SubmitSurvey from "../buttons/SurveySubmitButton";
import "./survey.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//import { Container } from "@mui/system";

export default function Card() {

  const chronoMap = {
    "Bear" : 1, 
    "Dolphin": 2, 
    "Wolf": 3,
    "Lion": 4
  };

  const url = `https://group3backend-lukfolvarsky.onrender.com`; 
  // const url = `https://group3backend-lukfolvarsky.onrender.com/usersInformation/users/exists?uid=`;
  const auth0UserData = JSON.parse(window.localStorage.getItem('@@auth0spajs@@::SvoR32C9SM8Ze4yeGVnvWGcPt7NP8eLu::https://schedule-app.dev.com::openid profile email')).body.decodedToken.user;

  const updateChronotype = async () => {
      await axios.put(`${url}/usersInformation/update/user/chronotype`, 
        {
          "uid": auth0UserData.sub,
          "chrono_id": chronoMap[chronotypeResult],
        }
      );
  };



  const navigate = useNavigate();

  const [Lion, setLion] = useState(0);
  const [Dolphin, setDolphin] = useState(0);
  const [Wolf, setWolf] = useState(0);
  const [Bear, setBear] = useState(0);

  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [chronotypeResult, setChronotypeResult] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (Bear >= Dolphin && Bear >= Wolf && Bear >= Lion) {
      setChronotypeResult('Bear');
    } else if (Wolf >= Bear && Wolf >= Dolphin && Wolf >= Lion) {
      setChronotypeResult('Wolf');
    } else if (Dolphin >= Bear && Dolphin >= Wolf && Dolphin >= Lion) {
      setChronotypeResult('Dolphin');
    } else if (Lion >= Bear && Lion >= Wolf && Lion >= Dolphin) {
      setChronotypeResult('Lion');
    }

    // console.log("flag 2");
  };

  useEffect(() => {
    if (chronotypeResult) {
      console.log(chronotypeResult);
      updateChronotype();
      navigate('/mychronotype');
    }
  }, [chronotypeResult]);

  return (
    <MDBContainer>
      <body className="bodyClass">
        <h1>Chronotype Quiz</h1>
        <br></br>
        <form onSubmit={handleFormSubmit}>
          <br></br>
          <label> Enter Name:</label>
          <br></br>
          <input
            className="normal"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <br></br>
          <br></br>

          <label> Enter Occupation:</label>
          <br></br>
          <input
            type="text"
            required
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />

          <br></br>
          <br></br>

          <p> Do you have energy in the morning?</p>
          <MDBRadio
            name="flexRadioDefault"
            id="flexRadioDefault1"
            label="Yes"
            onClick={() => setWolf(Wolf + 1)}
          />
          <MDBRadio
            name="flexRadioDefault"
            id="flexRadioDefault2"
            label="No"
            onClick={() => setLion(Lion + 1)}
          />

          <br></br>

          <p>Are you sporadically productive through out the day?</p>
          <MDBRadio
            name="q3"
            id="q3o1"
            label="Yes"
            onClick={() => setDolphin(Dolphin + 1)}
          />
          <MDBRadio
            name="q3"
            id="q3o2"
            label="No"
            onClick={() => setBear(Bear + 1)}
          />
          <br></br>
          <p>Do you consider yourself introverted or extroverted?</p>
          <MDBRadio
            name="q4"
            id="q4o1"
            label="Introverted"
            onClick={() => setWolf(Wolf + 1)}
          />
          <MDBRadio
            name="q4"
            id="q4o2"
            label="Extroverted"
            onClick={() => setBear(Bear + 1)}
          />
          <br></br>
          <p> Do you wake up feeling fully rested?</p>
          <MDBRadio
            name="q7"
            id="q7o1"
            label="Yes"
            onClick={() => setLion(Lion + 1)}
          />
          <MDBRadio
            name="q7"
            id="q7o2"
            label="No"
            onClick={() => setDolphin(Dolphin + 1)}
          />
          <br></br>
          <p> When are you most productive? </p>
          <MDBRadio
            name="q8"
            id="q8o1"
            label="Between 8 AM and 12 PM"
            onClick={() => setLion(Lion + 1)}
          />
          <MDBRadio
            name="q8"
            id="q8o2"
            label="Between 10 AM and 2 PM"
            onClick={() => setBear(Bear + 1)}
          />
          <MDBRadio
            name="q8"
            id="q8o3"
            label="Between 5 PM and 12 AM"
            onClick={() => setWolf(Wolf + 1)}
          />
          <MDBRadio
            name="q8"
            id="q8o4"
            label="Between 3 PM and 9 PM"
            onClick={() => setDolphin(Dolphin + 1)}
          />
          <br></br>
          <p> What time do you go to bed? </p>
          <MDBRadio
            name="q9"
            id="q9o1"
            label="Around 9PM"
            onClick={() => setLion(Lion + 1)}
          />
          <MDBRadio
            name="q9"
            id="q9o2"
            label="Between 10PM"
            onClick={() => setBear(Bear + 1)}
          />
          <MDBRadio
            name="q9"
            id="q9o3"
            label="Around 11:30PM"
            onClick={() => setDolphin(Dolphin + 1)}
          />
          <MDBRadio
            name="q9"
            id="q9o4"
            label="Midnight"
            onClick={() => setWolf(Wolf + 1)}
          />
          <br></br>
          <p> What time do you wake up? </p>
          <MDBRadio
            name="q10"
            id="q10o1"
            label="With the Sun"
            onClick={() => setBear(Bear + 1)}
          />
          <MDBRadio
            name="q10"
            id="q10o2"
            label="Aroud 6AM"
            onClick={() => setLion(Lion + 1)}
          />
          <MDBRadio
            name="q10"
            id="q10o3"
            label="Around 8AM"
            onClick={() => setDolphin(Dolphin + 1)}
          />
          <MDBRadio
            name="q10"
            id="q10o4"
            label="Later than most people"
            onClick={() => setWolf(Wolf + 1)}
          />
          <br></br>
          <div className="buttonClass11">
            <button onClick={handleFormSubmit} type="submit">Submit Quiz</button>
          </div>
          <br></br>
        </form>
      </body>
    </MDBContainer>
  );
}