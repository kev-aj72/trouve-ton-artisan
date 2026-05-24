import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Erreur404 from './pages/erreur404';
import Details from './pages/detailsArtisan';
import Artisans from './pages/artisans';
import Construction from './pages/construction';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/artisans" element={<Artisans />}></Route>
          <Route path="/categorie/:categorie" element={<Artisans />} />
          <Route path="/artisans/:id" element={<Details />}></Route>
          <Route path="/mentions-legales" element={<Construction />}> </Route>
          <Route path="/donnees-personnelles" element={<Construction />}></Route>
          <Route path="/accessibilite" element={<Construction />}></Route>
          <Route path="/cookies" element={<Construction />}></Route>
          <Route path="*" element={<Erreur404 />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      
  );
}

export default App;
