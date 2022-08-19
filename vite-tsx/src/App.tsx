import "./App.css";
import { ResponsiveHeader } from "./components/ResponsiveHeader";

export const App = () => {
  return (
    <div className="App">
      <ResponsiveHeader
        links={[
          {
            link: "https://github.com",
            label: "GitHub",
            links: [{ link: "https://github.com/danihre", label: "Profile" }],
          },
        ]}
      />
    </div>
  );
};
