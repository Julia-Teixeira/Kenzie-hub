import TechProvider from "./context/TechContext";
import UserProvider from "./context/UserContext";
import { Router } from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <main>
      <GlobalStyles />
      <UserProvider>
        <TechProvider>
          <Router />
        </TechProvider>
      </UserProvider>
    </main>
  );
}

export default App;
