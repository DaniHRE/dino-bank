import { Paper } from "@mantine/core";
import { HeaderLinks } from "./components/Header/HeaderLinks";

export function App() {
  return (
    <div className="App">
      <Paper p="sm" radius={0} style={{ minHeight: "100vh" }}>
        <HeaderLinks
          links={[
            {
              link: "#",
              label: "GitHub",
              links: [
                { link: "https://github.com/danihre", label: "Profile" },
                { link: "https://github.com", label: "Home" }],
            },
            {
              link: '#',
              label: "Teste",
              links: [{ link: "https://google.com", label: "Profile" }],
            }
          ]}
        />
      </Paper>
    </div>
  );
};
