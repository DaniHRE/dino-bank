import { Paper } from "@mantine/core";
import { HeaderFlat } from "./components/Header/HeaderFlat";

export function App() {
  return (
    <div className="App">
      <Paper p="sm" radius={0} style={{ minHeight: "100vh" }}>
        <HeaderFlat
          links={[
            {
              link: "#",
              label: "GitHub"
            },
            {
              link: '#',
              label: "Teste"
            }
          ]}
        />
      </Paper>
    </div>
  );
};
