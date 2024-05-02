// App.js
import React from 'react';
import { BrowserRouter  } from 'react-router-dom';
import { Routes  } from 'react-router-dom';
import { Route  } from 'react-router-dom';
import ChromeRoseGold from './ChromeRoseGold';
import LemonGreen from './LemonGreen';
import PaleBlue from './PaleBlue';
import PearlLavender from './PearlLavender';
import PearlLemonChiffon from './PearlLemonChiffon';
import Navbar from './Navbar';
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path="/" element={<ChromeRoseGold/>} />
          <Route path="/pg2" element={<PearlLavender/>} />
          <Route path="/pg3" element={<PaleBlue/>} />
          <Route path="/pg4" element={<LemonGreen/>} />
          <Route path="/pg5" element={<PearlLemonChiffon/>} />

        </Routes>
    </BrowserRouter>
  );
};

export default App;