import { HelmetProvider } from "react-helmet-async";

// Components
import Header from "./components/header";
import Router from "./pages/Router";

// Styles
import "./styles/Global.module.scss";

// Helpers
import ScrollToTop from "./helpers/scrollToTop";

function App() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <Header />
      <Router />
    </HelmetProvider>
  );
}

export default App;
