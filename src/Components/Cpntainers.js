import { Container, Typography } from '@mui/material'
import React from 'react'

const Cpntainers = () => {
  return (
    <div style={{marginTop:"100px"}}>
        <Container sx={{background:"yellow"}} maxWidth="xs">
            <Typography variant='body2'>
                this is xs
            </Typography>
        </Container>
        <br />
        <Container sx={{background:"yellow"}} maxWidth="sm">
            <Typography variant='body2'>
                this is sm
            </Typography>
        </Container>
        <br />
        <Container sx={{background:"yellow"}} maxWidth="md">
            <Typography variant='body2'>
                this is md
            </Typography>
        </Container>
        <br />
        <Container sx={{background:"yellow"}} maxWidth="lg">
            <Typography variant='body2'>
                this is lg
            </Typography>
        </Container>
        <br />
        <Container sx={{background:"yellow"}} maxWidth="xl">
            <Typography variant='body2'>
                this is xl
            </Typography>
        </Container>
    </div>
  )
}

export default Cpntainers