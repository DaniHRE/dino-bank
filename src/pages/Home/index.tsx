import { Paper } from "@mantine/core";
import { DefaultHeader } from "../../components/Header";
import { HeroDots } from "../../components/Hero/HeroDots";

export function Home() {
  return (
    <div className="App">
      <Paper radius={0} style={{ minHeight: "100vh" }}>
        <DefaultHeader />
        <HeroDots />
      </Paper>
    </div>
  );
};
