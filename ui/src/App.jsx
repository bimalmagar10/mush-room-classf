import "@mantine/core/styles.css";
import "./App.css";
import { Chip } from "@mantine/core";

import { MantineProvider } from "@mantine/core";
import Home from "./components/Home";

function App() {
  return (
    <MantineProvider>
      <Home />
    </MantineProvider>
  );
}

export default App;
