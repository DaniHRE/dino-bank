import { Paper } from "@mantine/core";
import { DefaultHeader } from "../../components/Header";
import { HeroDots } from "../../components/Hero/HeroDots";
import { Card } from "react-pay-card";
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import { useStyles } from './style';

export function Home() {
  const { classes } = useStyles();

  return (
    <div className="App">
      <Paper radius={0} style={{ minHeight: "100vh" }}>
        <Fullpage>
          <FullPageSections>

            <FullpageSection>
              <DefaultHeader />
              <HeroDots />
            </FullpageSection>

            <FullpageSection>
              <div className={ classes.card }>
                <Card
                  cardCvv='000'
                  cardHolder='JOHN DOE'
                  cardMonth='12'
                  cardYear='2026'
                  cardNumber='0000 0000 0000 0000'
                />
              </div>
            </FullpageSection>

          </FullPageSections>
        </Fullpage>
      </Paper>
    </div>
  );
};
