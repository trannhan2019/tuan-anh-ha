import { useContext } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import CustomerContext from '../context/CustomerContext';

export default function CustomerCard({ cus }) {
  const { deleteCustomer } = useContext(CustomerContext);
  return (
    <Card>
      <CardHeader
        title={cus.name}
        action={
          <IconButton onClick={() => deleteCustomer(cus.id)}>
            <DeleteIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography paragraph align="justify">
          {cus.details}
        </Typography>
      </CardContent>
    </Card>
  );
}
