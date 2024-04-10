import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal
          id={"custom-id"}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          onClose={onClose}
          body={<div>
           <h2>Customized body</h2> 
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, consequatur impedit. Nesciunt, dolore repellat itaque, accusantium tenetur aliquid ratione quidem necessitatibus veritatis quas rem consectetur nisi laboriosam odit quis culpa vel repudiandae ad? Laboriosam exercitationem voluptas velit molestiae optio ea, provident error magnam enim tempora suscipit eius molestias nulla iure laborum dignissimos recusandae adipisci fugit. Voluptatum adipisci aliquam, minus dolores, inventore repudiandae, assumenda repellendus incidunt est alias libero asperiores. Cupiditate atque rem quos </p>
            </div>}
        />
      )}
    </div>
  );
}