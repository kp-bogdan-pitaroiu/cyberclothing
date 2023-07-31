import * as React from "react";
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { productInt } from "./Interface";


type DialogmodalProps = {
    isOpen: boolean;
    product?: productInt | null;
    closeHandler?: ()=> void;
    handleEditProduct?: (product: productInt)=>void;
}

const Dialogmodal: React.FC<DialogmodalProps> = ({isOpen, product, closeHandler, handleEditProduct}) => {
    const [name, setName] = React.useState(product?.name ? product?.name : "");
    const [price, setPrice] = React.useState(product?.price ? product?.price : 0);
    const [status, setStatus] = React.useState(product?.status ? product?.status : "");
    const [category, setCategory] = React.useState(product?.category ? product?.category : "");

    const closeModal = () => {
        closeHandler && closeHandler()
    }
    const saveProduct = () => {
        if (product) {
            let updatedProduct: productInt= {...product, name: name, price: price, status: status, category: category}
            handleEditProduct && product && handleEditProduct(updatedProduct);
            closeHandler && closeHandler();
        }
        
    }


  return (
    <div>
      <Dialog open={isOpen} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Physical Product</DialogTitle>
        <DialogContent>
          {/* Subcategory Name */}
          <TextField
          defaultValue={product?.category}
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
          {product && (
            <>
              <TextField
            
                margin="dense"
                id="image"
                label="Image"
                fullWidth
              />
              <TextField
              defaultValue={product?.name}
                margin="dense"
                id="Name"
                label="Name"
                fullWidth
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setName(event.target.value);
                  }}
              />
              <TextField
              defaultValue={product?.price}
                margin="dense"
                id="price"
                label="Price"
                fullWidth
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setPrice(parseInt(event.target.value));
                  }}
              />
              <TextField
              defaultValue={product?.status}
                margin="dense"
                id="status"
                label="Status"
                fullWidth
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setStatus(event.target.value);
                  }}
              />
              <TextField
              defaultValue={product?.category}
                margin="dense"
                id="category"
                label="Category"
                fullWidth
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setCategory(event.target.value);
                  }}
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={saveProduct} color="primary">
            Save
          </Button>
          <Button onClick={closeModal} color="primary">
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

export default Dialogmodal;
