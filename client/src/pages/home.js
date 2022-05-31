import { useContext } from 'react';
import {
  Box,
  Container,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

import InboxIcon from '@mui/icons-material/Inbox';

import CustomerCard from '../components/CustomerCard';
import CustomerContext from '../context/CustomerContext';

export default function Home() {
  const { customers } = useContext(CustomerContext);
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        App to manage customers
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <Drawer variant="permanent" anchor="left">
            <List>
              <ListItem component="a" href="/create">
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Create new customer" />
              </ListItem>
            </List>
          </Drawer>
        </Box>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container p={5} spacing={5}>
            {customers &&
              customers.map((cus) => (
                <Grid key={cus.id} item xs={4}>
                  <CustomerCard cus={cus} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
