import './home.scss';
import { Paper } from "@mantine/core";
import { BankCard } from '../../components/BankCard';
import { DefaultHeader } from "../../components/Header";
import { HeroDots } from "../../components/Hero/HeroDots";
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';

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

            <FullpageSection>
              <div
                style={{
                  height: '100vh',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <BankCard />
              </div>
            </FullpageSection>

          </FullPageSections>
        </Fullpage>
      </Paper>
    </div>
  );
};
