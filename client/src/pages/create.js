import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState } from "react";

import SendIcon from "@mui/icons-material/Send";

export default function Create() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  const [details, setDetails] = useState("");
  const [detailsError, setDetailsError] = useState(false);

  const [gender, setGender] = useState("female");

  const [rating, setRating] = useState(3);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && details) {
      console.log(name, details, gender, rating);
      setNameError(false);
      setDetailsError(false);
    }
    if (name === "") {
      setNameError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }
  };
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Create a new customer
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Box pb={2}>
          <TextField
            label="Name"
            variant="standard"
            fullWidth
            required
            onChange={(e) => setName(e.target.value)}
            error={nameError}
          />
          <TextField
            label="Details"
            variant="standard"
            fullWidth
            required
            multiline
            rows={3}
            onChange={(e) => setDetails(e.target.value)}
            error={detailsError}
          />
          <RadioGroup
            row
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel
              value="others"
              control={<Radio />}
              label="Others"
            />
          </RadioGroup>
          <Rating
            value={rating}
            onChange={(e) => setRating(~~e.target.value)}
          />
        </Box>
        <Button type="submit" variant="contained" startIcon={<SendIcon />}>
          Submit
        </Button>
      </form>
    </Container>
  );
}
