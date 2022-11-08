import { Paper } from "@mantine/core";
import { DefaultHeader } from "../../components/Header";
import { HeroDots } from "../../components/Hero/HeroDots";
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import { BankCard } from "../../components/BankCard";

export function Home() {
  return (
    <div className="App">
      <Paper radius={0} style={{ minHeight: "100vh" }}>
        <Fullpage>
          <FullPageSections>

            <FullpageSection>
              <DefaultHeader />
              <HeroDots />
            </FullpageSection>

            <FullpageSection style={{ display: 'flex', placeItems: 'center', justifyContent: 'center' }}>
              <BankCard />
            </FullpageSection>

          </FullPageSections>
        </Fullpage>
      </Paper>
    </div>
  );
};
