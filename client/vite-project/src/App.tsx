import Auth from "./Pages/Auth/Auth";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Auth />
      </ThemeProvider>
  )
}

export default App
