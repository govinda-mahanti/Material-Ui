import React,{useState} from 'react'
import { Box, Button, Link, Modal, Typography, Grid } from "@mui/material"
const Models = () => {
  const [open, setOpen]=useState(false)
  return (
    <div style={{marginTop:"70px"}}>
      <Button onClick={()=>setOpen(true)}>Open Model</Button>
      <Modal open={open} onClose={()=>setOpen(false)}>
        <Box position="absolute" top="50%" left="50%">

        <Typography>This is Model</Typography>
        <Button variant='contained' onClick={()=>setOpen(false)}>cancel</Button>

        </Box>
      </Modal>
      <Link variant='h4' color='secondary' href="https://www.youtube.com/watch?v=0euw01oikEw&t=5464s" underline='always'>
      Nav Link
      </Link>

      <Grid container >
        <Grid item xs={4} sx={{background:"red"}}>
            Content A
        </Grid>
        <Grid item xs={8} sx={{background:"yellow"}}>
            Content B
        </Grid>
      </Grid>
    </div>
  )
}

export default Models