import { Paper } from "@mantine/core";
import { ResponsiveHeader } from "./components/ResponsiveHeader";

export function App() {
  return (
    <div className="App">
      <Paper p="md" radius={0} style={{ minHeight: "100vh" }}>
        <ResponsiveHeader
          links={[
            {
              link: "https://github.com",
              label: "GitHub",
              links: [{ link: "https://github.com/danihre", label: "Profile" }],
            },
          ]}
        />
      </Paper>
    </div>
  );
};
