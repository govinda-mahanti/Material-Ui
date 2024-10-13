import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

const ListComp = () => {
    const coueces=["react","node js","mern"]
  return (
    <div style={{marginTop:"70px"}}>
        <List sx={{width:250, background:'gray'}}>
            {coueces.map((coueces)=>(
            <ListItem>
                <ListItemButton>{'>'}</ListItemButton>
                <ListItemText primary={coueces}/>
            </ListItem>


            ))}

        </List>
    </div>
  )
}

export default ListComp