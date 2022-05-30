import { Button, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import SendIcon from "@mui/icons-material/Send";

export default function Create() {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Create a new customer
      </Typography>
      <form noValidate autoComplete="off">
        <Box pb={2}>
          <TextField label="Name" variant="standard" fullWidth required />
          <TextField
            label="Details"
            variant="standard"
            fullWidth
            required
            multiline
            rows={3}
          />
        </Box>
        <Button type="submit" variant="contained" startIcon={<SendIcon />}>
          Submit
        </Button>
      </form>
    </Container>
  );
}
