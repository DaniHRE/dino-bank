import { Button, Container, Paper } from "@mantine/core";
import { HeaderDefault } from "../../components/Headers/HeaderDefault";
import { useStyles } from './style';
import { useNavigate } from "react-router-dom";
import { FeatureSections } from "../../components/FeatureSection";

export function Home() {
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <div className="App">
      <Paper radius={0} style={{ minHeight: "100vh" }}>
        <HeaderDefault />
        <Container className={classes.root} >
          <FeatureSections />
          <Button
            mt={50}
            radius={10}
            variant="light"
            size="xl"
            gradient={{ from: 'blue', to: 'cyan' }}
            onClick={() => navigate('/register')}
            className={classes.button}
          >
            Check this out
          </Button>
        </Container>
      </Paper>
    </div >
  );
};
