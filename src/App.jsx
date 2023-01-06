import { HelmetProvider } from "react-helmet-async";

// Components
import Header from "./components/header";
import Router from "./pages/Router";

// Styles
import "./App.module.scss";

function App() {
  return (
    <HelmetProvider>
      <Header />
      <Router />
    </HelmetProvider>
  );
}

export default App;
