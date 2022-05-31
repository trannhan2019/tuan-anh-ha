import { useContext } from "react";
import { Container, Grid, Typography } from "@mui/material";

import CustomerCard from "../components/CustomerCard";
import CustomerContext from "../context/CustomerContext";

export default function Home() {
  const { customers } = useContext(CustomerContext);
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        App to manage customers
      </Typography>
      <Grid container p={5} spacing={5}>
        {customers &&
          customers.map((cus) => (
            <Grid key={cus.id} item xs={4}>
              <CustomerCard cus={cus} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
