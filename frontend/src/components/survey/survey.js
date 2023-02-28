import React from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRadio, MDBRow } from "mdb-react-ui-kit";
import { useState } from 'react';
import "./survey.css";



export default function Card() {

    var chronotype;

    const [Lion, setLion] = useState(0);

    const CounterLion = () => {
       setLion (Lion+1);   
    }

    const decLion = () => {
      setLion (Lion-1);   
   }


    const [Dolphin, setDolphin] = useState(0);

    const CounterDolphin = () => {
       setDolphin (Dolphin+1);   
    }


    const [Wolf, setWolf] = useState(0);

    const CounterWolf = () => {
       setWolf(Wolf+1);   
    }

    const decWolf = () => {
      setWolf (Wolf-1);   
   }


    const [Bear, setBear] = useState(0);

    const CounterBear = () => {
       setBear (Bear+1);   
    }


    if ( Bear > Dolphin && Bear > Wolf && Bear > Lion) {
      chronotype = 'Bear';
    }

     if (Wolf > Bear && Wolf > Dolphin && Wolf > Lion) {
      chronotype = 'Wolf';

    }

    if (Dolphin > Bear && Dolphin > Wolf && Dolphin > Lion) {
      chronotype = 'Dolphin';

    }

    if (Lion > Bear && Lion > Wolf && Lion > Dolphin){
      chronotype = 'Lion';
    }


    
  return (

  
        <MDBContainer>
            <body className="bodyClass">

                <h1>Chronotype Quiz</h1>
                <br></br>

              <form>
                
                <p> Do you have energy in the morning?</p>
                <MDBRadio
                  className="MDBRadio1"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  label="Yes"
                />
                <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  label="No"
                />

                <br></br>

                <p> Are you the type to sleep late?</p>
                <MDBRadio
                  name="q2"
                  id="q2o1"
                  label="Yes"
                  onClick={CounterWolf}
                
                />
                <MDBRadio
                  name="q2"
                  id="q2o2"
                  label="No"
                  onClick={CounterLion}
                />

                <br></br>

                <p>Are you sporadically productive through out the day?</p>
                <MDBRadio
                name="q3"
                id="q3o1"
                label="Yes"
                onClick={CounterDolphin}
                />
                <MDBRadio
                name="q3"
                id="q3o2"
                label="No"
                />

                <br></br>

                <p>Do you like to collaborate with others?</p>
                <MDBRadio
                name="q3"
                id="q3o1"
                label="Yes"
                onClick={CounterBear}
                />
                <MDBRadio
                name="q3"
                id="q3o2"
                label="No"
                onClick={CounterWolf}
                />

                <br></br>

                <p>Do you consider yourself introverted or extroverted?</p>
                <MDBRadio
                name="q4"
                id="q4o1"
                label="Introverted"
                onClick={CounterWolf}
                />
                <MDBRadio
                name="q4"
                id="q4o2"
                label="Extroverted"
                onClick={CounterBear}
                />

                <br></br>

                <p> Do you have breakfast in the morning?</p>
                <MDBRadio
                name="q5"
                id="q5o1"
                label="Yes"
                onClick={CounterLion}
                />
                <MDBRadio
                name="q5"
                id="q5o2"
                label="No"
                />


                <br></br>

                <p> Do you consider yourself to be a perfectionist?</p>
                <MDBRadio
                name="q6"
                id="q6o1"
                label="Yes"
                onClick={CounterDolphin}
                />
                <MDBRadio
                name="q6"
                id="q6o2"
                label="No"
                />


                <br></br>

                <p> Do you wake up feeling fully rested?</p>
                <MDBRadio
                name="q7"
                id="q7o1"
                label="Yes"
                onClick={CounterLion}
      
                />
                <MDBRadio
                name="q7"
                id="q7o2"
                label="No"
                onClick={CounterDolphin}
                />


                <br></br>

                
                <p> When are you most productive? </p>
               
                <MDBRadio
                name="q8"
                id="q8o1"
                label="Between 8 AM and 12 PM"
                onClick={CounterLion}
              
                />
                <MDBRadio
                name="q8"
                id="q8o2"
                label="Between 10 AM and 2 PM"
                onClick={CounterBear}
                />
                 <MDBRadio
                name="q8"
                id="q8o3"
                label="Between 5 PM and 12 AM"
                onClick={CounterWolf}
                />
                  <MDBRadio
                name="q8"
                id="q8o4"
                label="Between 3 PM and 9 PM"
                onClick={CounterDolphin}
                />

            <br></br>

            <p> What time do you go to bed?  </p>
               
               <MDBRadio
               name="q9"
               id="q9o1"
               label="Around 10PM"
               onClick={CounterLion}
               
               />
               <MDBRadio
               name="q9"
               id="q9o2"
               label="Between 10 AM and 2 PM"
               onClick={CounterBear}
               />
                <MDBRadio
               name="q9"
               id="q9o3"
               label="Around 11:30PM"
               onClick={CounterDolphin}
               />
                 <MDBRadio
               name="q9"
               id="q9o4"
               label="Midnight"
               onClick={CounterWolf}
               />

            <br></br>


            <p>  What time do you wake up?  </p>
               
               <MDBRadio
               name="q10"
               id="q10o1"
               label="With the Sun"
               onClick={CounterBear}
              
               />
               <MDBRadio
               name="q10"
               id="q10o2"
               label="Aroud 6AM"
               onClick={CounterLion}
               />
                <MDBRadio
               name="q10"
               id="q10o3"
               label="Around 8AM"
               onClick={CounterDolphin}
               />
                 <MDBRadio
               name="q10"
               id="q10o4"
               label="Later than most people"
               onClick={CounterWolf}
               />

              </form>

              <br></br>

              <div> {chronotype}!</div>;
             
                <MDBBtn>Submit</MDBBtn>
              </body>
        </MDBContainer>
      );
    
    
}