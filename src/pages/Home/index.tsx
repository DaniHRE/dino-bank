import { Paper } from "@mantine/core";
import { HeaderFlat } from "../../components/Header/HeaderFlat";
import { HeroDots } from "../../components/Hero/HeroDots";

export function Home() {
  return (
    <div className="App">
      <Paper radius={0} style={{ minHeight: "100vh" }}>
        <HeaderFlat
          links={[
            {
              link: "https://github.com/google",
              label: "How it works"
            }
          ]}
        />
        <HeroDots />
      </Paper>
    </div>
  );
};
