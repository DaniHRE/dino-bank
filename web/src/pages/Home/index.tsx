import './home.scss';
import { Paper, Text } from "@mantine/core";
import { DefaultHeader } from "../../components/Header";
import { HeroDots } from "../../components/Hero/HeroDots";
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import { useStyles } from './style';
import { CardSection } from '../CardSection';

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
              <CardSection />
            </FullpageSection>

          </FullPageSections>
        </Fullpage>
      </Paper>
    </div>
  );
};
