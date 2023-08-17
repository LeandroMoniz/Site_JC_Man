import { BrowserRouter } from 'react-router-dom';

import Router from "./Routes/Routes";
import GlobalStyle from './Styles/GlobalStyles';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </div>
  );
}

export default App;
