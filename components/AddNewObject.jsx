import React, { useState } from "react";
import {SubcategoryPopup} from "./popupbutton";

const AddObjectForm = () => {
  const [formData, setFormData] = useState({
    id:"",     
    name: "",
    price: "",
    status: "",
    category: "",
    description: "",
    photo: "",
    vendorId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("./products.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      .then((response) => response.json())
      .then((data) => {
          console.log("Order placed:", data);
          setOpen(false);
      })
      .catch((error) => {
          console.error("Error placing order:", error);
      });

      /* if (response.ok) {
        console.log("Obiectul a fost adăugat cu succes în fișierul JSON.");
      } else {
        console.error("A apărut o eroare în timpul adăugării obiectului.");
      }
    } catch (error) {
      console.error("A apărut o eroare:", error);
    } */
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nume obiect"
      />
      
      <DialogActions>

      <SubcategoryPopup variant="table"/>
          {/* <Button onClick={handleClose} color="primary">
            Save
          </Button>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>    */}      
        </DialogActions>
    </form>
  );
};

export default AddObjectForm;
