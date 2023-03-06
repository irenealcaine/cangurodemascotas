import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import Legal from "./pages/Legal";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/legal' exact element={<Legal />} />
          <Route path='/cookies' exact element={<Cookies />} />
          <Route path='/privacy' exact element={<Privacy />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
