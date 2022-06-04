import { useContext } from 'react';
import {
  Box,
  Container,
  CssBaseline,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

import InboxIcon from '@mui/icons-material/Inbox';

import { styled } from '@mui/system';

import CustomerCard from '../components/CustomerCard';
import CustomerContext from '../context/CustomerContext';

export default function Home() {
  const { customers } = useContext(CustomerContext);

  const MyDiv = styled('div')({
    backgroundColor: 'aliceblue',
    padding: 10,
    borderRadius: 15,
  });
  const MyTypography = styled(Typography)({
    backgroundColor: '#52A388',
    color: 'white',
    textAlign: 'center',
    padding: 5,
    fontSize: '20px',
  });
  return (
    <Container>
      <CssBaseline />
      <Typography variant="h3" align="center" gutterBottom>
        App to manage customers
      </Typography>
      <MyTypography variant="h1">
        This is an app using Material UI 5
      </MyTypography>
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
                  <MyDiv>
                    <CustomerCard cus={cus} />
                  </MyDiv>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
