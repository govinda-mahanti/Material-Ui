import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

const Form = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
    courses: "",
    gender: "",
  });

  // Corrected handleChange function
  const handleChanget = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          value={inputs.name}
          onChange={handleChanget}
          placeholder="Enter Name"
          type="text"
          variant="outlined"
          sx={{ margin: "30px" }}
        />
        <br />
        <TextField
          name="email"
          value={inputs.email}
          onChange={handleChanget}
          placeholder="Enter Email"
          type="email"
          variant="outlined"
          sx={{ margin: "30px" }}
        />
        <br />
        <TextField
          name="password"
          value={inputs.password}
          onChange={handleChanget}
          placeholder="Enter password"
          type="password"
          variant="outlined"
          sx={{ margin: "30px" }}
        />
        <br />
        <FormGroup sx={{ margin: "20px" }}>
          <FormControlLabel
            label="I agree T&C"
            control={
              <Checkbox
                onChange={() =>
                  setInputs((prevState) => ({
                    ...prevState,
                    terms: !inputs.terms,
                  }))
                }
              />
            }
          />
        </FormGroup>
        <br />
        <FormControl fullWidth>
          <InputLabel id="menu">Cources</InputLabel>
          <Select
            labelId="menu"
            id="menu_list"
            label="cources"
            value={inputs.courses}
            onChange={handleChanget}
            name="courses"
          >
            <MenuItem value={"mongodb"}>MongoDb</MenuItem>
            <MenuItem value={"express"}>Express</MenuItem>

            <MenuItem value={"node"}>Node</MenuItem>
            <MenuItem value={"react"}>React</MenuItem>
          </Select>
        </FormControl>
        <br />
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup name="gender" onChange={handleChanget}>
            <FormControlLabel value={"male"} label="male" control={<Radio />} />
            <FormControlLabel
              value={"female"}
              label="female"
              control={<Radio />}
            />
            <FormControlLabel
              value={"other"}
              label="other"
              control={<Radio />}
            />
          </RadioGroup>
        </FormControl>
        <br />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </>
  );
};

export default Form;
