import { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useParams } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import WhyChooseUs from "./Components/WhyChooseUs";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import Menu from "./Components/Menu";
import Preview from "./Components/Preview";
import Promo from "./Components/Promo";
import PromoProducts from "./Components/PromoProducts";
import Footer from "./Components/Footer";

// Wrapper biar Products remount tiap ganti categoryId
function ProductsWrapper() {
  const { categoryId } = useParams();
  return <Products key={categoryId} />;
}

function AppContent() {
  const aboutRef = useRef(null);
  const categoriesRef = useRef(null);
  const menuRef = useRef(null);
  const promoRef = useRef(null);
  const [scrollTarget, setScrollTarget] = useState(null);
  const location = useLocation();

  // efek untuk scroll setelah page load
  useEffect(() => {
    if (scrollTarget === "about" && aboutRef.current) {
      const yOffset = -64; // tinggi navbar
      const y = aboutRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setScrollTarget(null);
    }

    if (scrollTarget === "categories" && categoriesRef.current) {
      const yOffset = -64;
      const y = categoriesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setScrollTarget(null);
    }

    if (scrollTarget === "menu" && menuRef.current) {
      const yOffset = -64;
      const y = menuRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setScrollTarget(null);
    }

    if (scrollTarget === "promo" && promoRef.current) {
      const yOffset = -64;
      const y = promoRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setScrollTarget(null);
    }
  }, [location.pathname, scrollTarget]);

  return (
    <>
      <Navbar setScrollTarget={setScrollTarget} />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About ref={aboutRef} />
              <WhyChooseUs/>
              <Categories ref={categoriesRef} />
              <Menu ref={menuRef} />
              <Promo ref={promoRef}/>
            </>
          }
        />
        {/* ✅ Pakai wrapper biar Products remount tiap ganti kategori */}
        <Route path="/products/:categoryId" element={<ProductsWrapper />} />
        <Route path="/preview/:id" element={<Preview />} />
         <Route path="/promo_products/:id" element={<PromoProducts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}