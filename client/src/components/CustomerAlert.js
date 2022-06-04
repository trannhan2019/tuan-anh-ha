import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';

export default function CustomerAlert({ open, handleClose }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={1500}
      onClose={handleClose}
    >
      <Alert severity="success">Create new Customer success!</Alert>
    </Snackbar>
  );
}
