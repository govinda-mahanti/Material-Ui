import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Accord = () => {
  const coueces = ["react", "node js", "mern", "express js"];

  return (
    <div style={{ marginTop: "70px" }}>
      <Accordion>
        <AccordionSummary expandIcon={"<"}>
          <Typography variant="h6">what is mern stack</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            tempore eveniet magnam facilis dolor beatae numquam debitis suscipit
            laboriosam, cumque perspiciatis. Eius voluptatibus, repellat cum
            veniam quo tempore excepturi voluptates.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* auto complete */}
      <Autocomplete
        sx={{ width: 200 }}
        options={coueces}
        renderInput={(params) => (
          <TextField {...params} label="select a cource" />
        )}
      />
    </div>
  );
};

export default Accord;
