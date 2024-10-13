import "./App.css";
import { AppBar, Tabs, Tab, Toolbar, Typography } from "@mui/material";
import Form from "./Components/Form";
import React, { useState } from "react";
import Cards from "./Components/Cards";
import Models from "./Components/Models";
import Cpntainers from "./Components/Cpntainers";
import ListComp from "./Components/ListComp";
import Accord from "./Components/Accord";
import DrawerMenu from "./Components/DrawerMenu";
import Rresponsivegrid from "./Components/Rresponsivegrid";

function App() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h4">Logo</Typography>
          {/* <Button variant="contained" color="success" sx={{marginLeft:"auto"}}>SingIn</Button> */}

          <Tabs
            sx={{ marginLeft: "auto" }}
            value={value}
            onChange={(e, val) => setValue(val)}
            textColor="inheri"
            indicatorColor="secondary"
          >
            <Tab label="home" />
            <Tab label="About" />
            <Tab label="Contact" />
          </Tabs>
        </Toolbar>
      </AppBar>
      {/* <Form /> */}
      {/* <Cards/> */}
      {/* <Models/> */}
      {/* <Cpntainers/> */}
      {/* <ListComp/> */}
      {/* <Accord/> */}
      <DrawerMenu/>
      <Rresponsivegrid/>
    </div>
  );
}

export default App;


  /* <Typography variant='h3' component={"h3"} sx={{color: "red"}}>my name is govinda</Typography>
      <h1>hello</h1>
      <Button variant='contained' color='success' sx={{margin:"30px"}}>Click me</Button>
      <Button variant='text' disabled>Click me</Button>
      <Button variant='outlined' onClick={()=>alert('alert')}>Click me</Button>


      <input type="text" placeholder='name'/>

      <TextField
      type='text'
      placeholder='name'
      variant='standard' 
      sx={{margin: '30px'}}
      />
      <TextField
      type='text'
      placeholder='name'
      variant='outlined'
      sx={{margin: '30px'}}
      />
      
      <TextField
      type='text'
      placeholder='name'
      variant='filled'
      sx={{margin: '30px'}}
      /> */

