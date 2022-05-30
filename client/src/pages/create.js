import { Button, TextField, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';

import SendIcon from '@mui/icons-material/Send';

export default function Create() {
  const [name, setName] = React.useState('');
  const [nameError, setNameError] = React.useState(false);

  const [details, setDetails] = React.useState('');
  const [detailsError, setDetailsError] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && details) {
      console.log(name, details);
      setNameError(false);
      setDetailsError(false);
    }
    if (name === '') {
      setNameError(true);
    }
    if (details === '') {
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
        </Box>
        <Button
          type="submit"
          variant="contained"
          startIcon={<SendIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
