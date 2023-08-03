import * as React from "react";
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

const SubcategoryPopup = ({ variant }: { variant: string }) => {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({name: "", price: "", status: "", category: ""});
  
  const addProduct = () => {

    const productsData = {
        name: formData.name,
        price: formData.price,
        status: formData.status,
        category: formData.category,
        products: products.map((item) => ({
            id: item.id,
            name: item.name,
            photo: item.image,
            quantity: item.quantity,
        })),
    };

    fetch("/api/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(productsData),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Product added:", data);
            setOpen(false);
        })
        .catch((error) => {
            console.error("Error placing order:", error);
        });
};

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const handleSave = async () => {
    try {
      const response = await fetch("api/products/json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Obiectul a fost adăugat cu succes în fișierul JSON.");
      } else {
        console.error("A apărut o eroare în timpul adăugării obiectului.");
      }
    } catch (error) {
      console.error("A apărut o eroare:", error);
    }

    handleClose();
  };
  
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        ADD SUB CATEGORY
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Physical Product</DialogTitle>
        <DialogContent>
          {/* Subcategory Name */}
          <TextField
            autoFocus
            margin="dense"
            id="subcategoryName"
            label="Subcategory Name"
            fullWidth
          />
          {/* Upload Image */}
          <TextField
            margin="dense"
            id="uploadImage"
            type="file"
            fullWidth
          />
          <TextField
            margin="dense"
            id="Name"
            label="Name"
            fullWidth
          />
          <TextField
            margin="dense"
            id="price"
            label="Price"
            fullWidth
          />
          <TextField
            margin="dense"
            id="status"
            label="Status"
            fullWidth
          />
          <TextField
            margin="dense"
            id="category"
            label="Category"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={addProduct} color="primary">
            Save
          </Button>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>         
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SubcategoryPopup;
