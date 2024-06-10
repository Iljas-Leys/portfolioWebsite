import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { Main } from './pages/main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Kempenbloei } from './pages/kempenbloei';
import { DesktopNavigation } from './components/desktopNavigation';
import { MobileNavigation } from './components/mobileNavigation';
import { Portfolio } from './pages/portfolio';
import { Ai } from './pages/ai';

function App() {
  return (
      <div style={{ display: 'flex' }}>
        <div className="d-none d-md-block" style={{ position: 'fixed', top: 0, left: 0, height: '100%', width: '300px', overflow: 'hidden' }}>
          <DesktopNavigation />
        </div>
        <div className="d-block d-md-none" style={{ position: 'fixed', top: 0, left: 0 }}>
          <MobileNavigation />
        </div>
        <div id="mainContent" style={{ flexGrow: 1, height: '100vh', overflowY: 'auto', zIndex: 1 }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="kempenbloei" element={<Kempenbloei />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="ai" element={<Ai />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
  );
}

export default App
