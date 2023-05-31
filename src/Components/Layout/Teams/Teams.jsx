import React, { useState } from "react";
import "./Teams.css";
import "./Geriatric-cancer.css"

const Teams = () => {
  const [type, settype] = useState("NF TEAM");
  const TeamsData = [
    {
      title: "NF TEAM",
      text: "",
    },
    {
      title: "Geriatric Disease Team",
      text: " (Coming soon)",
    },
    {
      title: "Cancer Team",
      text: " (Coming soon)",
    },
  ];

  // Geriatric disesea team modal popup js

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState(false);

  // Cancer team modal popup js

  const toggleModal1 = () => {
    setIsOpens(!isOpens);
  };
  const [isOpens, setIsOpens] = useState(false);

  return (
    <>
    <div className="teams-outline">
      <div className="teams-container">
        <button
          onClick={(e) => {
            settype("NF TEAM"),
              document
                .querySelector("#NfIHub-container")
                .scrollIntoView({ behavior: "smooth" });
          }}
          className={type == "NF TEAM" ? "teams-group-active" : "teams-group"}
        >
          NF TEAM
        </button>

        <button
        // onClick={() => {
        //   settype("Geriatric Disease Team"),
        //   {toggleModal};
        // }}
        onClick={toggleModal}

        className={
          type == "Geriatric Disease Team" ? "teams-group-active" : "teams-group"}>
            {/* <Geriatric/> */}
          Geriatric Disease Team <p>(Coming soon)</p>
         
        </button>

        
        
        <button
          // onClick={() => {
          //   settype("Cancer Team");
          // }}
          onClick={toggleModal1}
          className={
            type == "Cancer Team" ? "teams-group-active" : "teams-group"
          }
        >
          Cancer Team <p>(Coming soon)</p>
        </button>

         {/* MODAL POPUP FOR GERIATRIC TEAM*/}

         <div>
        {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="gdt-head">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
        <h1>Geriatric Disease Team </h1>
        <p>(Coming Soon)</p>
        </div>
            <p className="pxp1">Don’t see the condition you’re looking for? <br/>Let us know. We’ll be adding new social networks based on community feedback.</p>
        <form action="" method="post" className="gdt-form">
            <div className="input-form">
            <div className="input-row">
            <input name="" id="" placeholder="Your Name" required/>
            <input name="" id="" placeholder="Email" required/>
            </div>

            <div className="input-row">
            <input name="" id="" placeholder="Condition" required/>
            <input name="" id="" placeholder="Phone Number" required/>
            </div>
           
            <textarea name="" id="" placeholder="Your Message" required></textarea>
            </div>
            <p className="pxp2">indicates a required field</p>
            
            <button name="submit">Submit</button>
        </form>
           
          </div>
        </div>
      )}
    </div>

         {/* MODAL POPUP FOR CANCER TEAM */}

         <div>
        {isOpens && (
        <div className="modal">
          <div className="modal-content">
            <div className="gdt-head">
            <p className="close" onClick={toggleModal1}>
              &times;
            </p>
        <h1>Cancer Team </h1>
        <p>(Coming Soon)</p>
       
        </div>
            <p className="pxp1">Don’t see the condition you’re looking for? <br/>Let us know. We’ll be adding new social networks based on community feedback.</p>
        <form action="" method="post" className="gdt-form">
            <div className="input-form">
            <div className="input-row">
            <input name="" id="" placeholder="Your Name" required/>
            <input name="" id="" placeholder="Email" required/>
            </div>

            <div className="input-row">
            <input name="" id="" placeholder="Condition" required/>
            <input name="" id="" placeholder="Phone Number" required/>
            </div>
           
            <textarea name="" id="" placeholder="Your Message" required></textarea>
            </div>
            <p className="pxp2">indicates a required field</p>
            
            <button name="submit">Submit</button>
        </form>
           
          </div>
        </div>
      )}
    </div>
      </div>
    </div>
    </>
  );
};

export default Teams;

// {
//   /* {TeamsData.map((data) => (
//           <div className="teams-info">
//             <h2>{data.title}</h2>
//             <p>{data.text}</p>
//           </div>
//         ))} */
// }
