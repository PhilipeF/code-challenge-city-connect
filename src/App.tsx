import { Container } from "react-bootstrap";
import { AppRouter } from "./router";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from "./components";

// import "~bootstrap/scss/bootstrap";

function App() {
  return (
    <Container>
      <AppRouter />
      <GlobalStyle/>
    </Container>
  );
}
export default App;
