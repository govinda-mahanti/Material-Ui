import React,{useState} from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
const Cards = () => {
    const [open , setOpen]=useState(false);
  return (
    <div style={{marginTop:"70px"}}>
      <Card sx={{width:"300px"}}>
        <CardMedia
          component={"img"}
          height="140"
          image="https://images.unsplash.com/photo-1727200451619-1c7b5b4dca49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"
          alt="test image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            web design
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            natus quibusdam iusto voluptatibus temporibus tenetur delectus
            sapiente voluptates acc
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary" onClick={()=>setOpen(true)}>
            Delete
          </Button>
        </CardActions>
      </Card>
      <Dialog open={open} onClose={()=>setOpen(false)}>
        <DialogTitle>Are you sure</DialogTitle>
        <DialogContent>
            <DialogContentText>
                are you sur the delete
            </DialogContentText>
        </DialogContent>
        <DialogActions>
             <Button onClick={()=>setOpen(false)}>Cancel</Button>
             <Button>Delete</Button>

        </DialogActions>

      </Dialog>
    </div>
  );
};

export default Cards;
