import { Button, Grid } from '@mui/material'
import React from 'react'

const Rresponsivegrid = () => {
  return (
    <div>
      <Grid container >
        <Grid item xs={4} sx={{background:"red"}}>
            Content A
        </Grid>
        <Grid item xs={8} sx={{background:"yellow"}}>
            Content B
        </Grid>
      </Grid>
      <Button>click</Button>
    </div>
  )
}

export default Rresponsivegrid
