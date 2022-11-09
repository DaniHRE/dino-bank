import './home.scss';
import Hover from 'react-3d-hover';
import { Paper } from "@mantine/core";
import { DefaultHeader } from "../../components/Header";
import { HeroDots } from "../../components/Hero/HeroDots";
import App from '../../components/NewBankCard/App';
import Card from '../../components/NewBankCard/screens/MainScreen/components/card';
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
                {/* <BankCard /> */}
                <App />
                {/* <Hover scale={1.05} speed={1500} perspective={900} >
                  <Card
                    cardHolder={'FULL NAME'}
                    cardNumber={'0000 0000 0000 0000'}
                    cardMonth={'00'}
                    cardYear={'0000'}
                    cardCvv={'000'}
                  />
                </Hover> */}
              </div>
            </FullpageSection>

          </FullPageSections>
        </Fullpage>
      </Paper>
    </div>
  );
};
