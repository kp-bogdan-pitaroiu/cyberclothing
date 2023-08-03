import * as React from "react";
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@mui/material";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

const SubcategoryPopup = ({ variant }: { variant: string }) => {
  const [open, setOpen] = React.useState(false);
  const [secondDialogOpen, setSecondDialogOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSecondDialogOpen = () => {
    setSecondDialogOpen(true);
  };

  const handleSecondDialogClose = () => {
    setSecondDialogOpen(false);
  };

  console.log(variant);

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        ADD SUB CATEGORY
      </Button>
      <Button className={styles.creion} onClick={handleSecondDialogOpen}>
        <CreateOutlinedIcon />
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Physical Product</DialogTitle>
        <DialogContent>
          {/* Subcategory Name */}
          <TextField               // aici trebuie sa modific
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
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Second Dialog */}
      <Dialog open={secondDialogOpen} onClose={handleSecondDialogClose} aria-labelledby="second-dialog-title">
        <DialogTitle id="second-dialog-title">Add Product Details</DialogTitle>
        <DialogContent>
          {/* Image */}
       {/*    <TextField
            autoFocus
            margin="dense"
            id="image"
            label="Image"
            fullWidth
          /> */}
          {/* Product Name */}
          <TextField
            margin="dense"
            id="productName"
            label="Product Name"
            fullWidth
          />
          {/* Price */}
          <TextField
            margin="dense"
            id="price"
            label="Price"
            fullWidth
          />
          {/* Status */}
          <TextField
            margin="dense"
            id="status"
            label="Status"
            fullWidth
          />
          {/* Category */}
          <TextField
            margin="dense"
            id="category"
            label="Category"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSecondDialogClose} color="primary">
            Save
          </Button>
          <Button onClick={handleSecondDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SubcategoryPopup;
