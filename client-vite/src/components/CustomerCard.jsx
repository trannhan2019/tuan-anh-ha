import { useContext } from 'react';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import CustomerContext from '../context/CustomerContext';
import CustomerModal from './CustomerModal';

export default function CustomerCard({ cus }) {
  const { deleteCustomer } = useContext(CustomerContext);

  const stringAvatar = (name) => {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  };

  return (
    <Card>
      <Avatar sx={{ bgcolor: 'green' }} {...stringAvatar(cus.name)} />
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
        <CustomerModal cus={cus} />
      </CardContent>
    </Card>
  );
}
