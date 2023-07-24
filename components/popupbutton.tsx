import * as React from "react";
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

const SubcategoryPopup = ({ variant }: { variant: string }) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      {variant === "pencil" ? (
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          <EditIcon />
        </Button>
      ) : (
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          ADD SUB CATEGORY
        </Button>
      )}

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
            label="Upload Image"
            type="file"
            fullWidth
          />

          {/* Camp aditional cad este apelata "pencil" */}
          {variant === "pencil" && (
            <>
              <TextField
                margin="dense"
                id="image"
                label="Image"
                fullWidth
              />
              <TextField
                margin="dense"
                id="productName"
                label="Product Name"
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
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          {/* {variant === "pencil" && showAdditionalFields && (
            <Button onClick={handleHideAdditionalFields} color="primary">
            </Button>
          )} */}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SubcategoryPopup;
