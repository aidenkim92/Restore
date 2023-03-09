import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import BasketSummary from "./BasketSummary";
import { useAppSelector } from "../../app/store/configureStore";
import BasketTable from "./BasketTable";
import { Link } from "react-router-dom";

export default function BasketPage() {
  const { basket } = useAppSelector((state) => state.basket);

  if (!basket)
    return (
      <Container
        component={Paper}
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 4,
          mt: 30,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" textAlign="center">
            Your basket is empty
            <Typography>&nbsp;</Typography>
            <Typography variant="h6" textAlign="center">
              please add an item...
            </Typography>
            <Button
              component={Link}
              to="/catalog"
              variant="contained"
              size="large"
              fullWidth
            >
              Go back to Catalog
            </Button>
          </Typography>
        </Grid>
      </Container>
    );

  return (
    <>
      {basket.items && basket.items.length > 0 ? (
        <>
          <BasketTable items={basket.items} />
          <Grid container>
            <Grid item xs={6} />
            <Grid item xs={6}>
              <BasketSummary />
              <Button
            component={Link}
            to="/checkout"
            variant="contained"
            size="large"
            fullWidth
          >
            Checkout
          </Button> 
            </Grid>
          </Grid>
        </>
      ) : (
        <Container
          component={Paper}
          maxWidth="sm"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 4,
            mt: 30,
          }}
        >
          <Grid item xs={12}>
            <Typography variant="h3" textAlign="center">
              Your basket is empty
              <Typography>&nbsp;</Typography>
              <Typography variant="h6" textAlign="center">
                please add an item...
              </Typography>
              <Button
                component={Link}
                to="/catalog"
                variant="contained"
                size="large"
                fullWidth
              >
                Go back to Catalog
              </Button>
            </Typography>
          </Grid>
        </Container>
      )}
    </>
  );
}
