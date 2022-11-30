import { Button, Group, Paper, Stack } from "@mantine/core";
import { HeaderDefault } from "../../components/Headers/HeaderDefault";
import { HeroDots } from "../../components/Hero/HeroDots";
import { Card } from "react-pay-card";
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import { useStyles } from './style';
import { useNavigate } from "react-router-dom";

export function Home() {
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <div className="App">
      <Paper radius={0} style={{ minHeight: "100vh" }}>
        <Fullpage>
          <FullPageSections>

            <FullpageSection>
              <HeaderDefault />
              <HeroDots />
            </FullpageSection>

            <FullpageSection>
              <Stack align="center"  justify="center" className={classes.card}>
                <Card
                  cardCvv='000'
                  cardHolder='JOHN DOE'
                  cardMonth='12'
                  cardYear='2026'
                  cardNumber='0000 0000 0000 0000'
                />
                <Button
                  mt={50}
                  radius={10}
                  variant="light"
                  size="xl"
                  gradient={{ from: 'blue', to: 'cyan' }}
                  onClick={() => navigate('/register')}
                >
                  Create your free account
                </Button>
              </Stack>
            </FullpageSection>

          </FullPageSections>
        </Fullpage>
      </Paper>
    </div>
  );
};
