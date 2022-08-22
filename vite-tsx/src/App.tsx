import { Paper } from "@mantine/core";
import { HeaderFlat } from "./components/Header/HeaderFlat";
import { HeroContent } from "./components/Hero/HeroContent";

export function App() {
  return (
    <div className="App">
      <Paper radius={0} style={{ minHeight: "100vh" }}>
        <HeaderFlat
          links={[
            {
              link: "https://github.com/google",
              label: "GitHub"
            },
            {
              link: '#',
              label: "Teste",
            }
          ]}
        />
        <HeroContent />
      </Paper>
    </div>
  );
};
