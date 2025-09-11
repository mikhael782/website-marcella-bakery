import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ setScrollTarget }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    // untuk handle dari halaman lain jika mau ke halaman home dan scroll ke about
    const handleAboutClick = () => {
        if (location.pathname !== "/") {
            // kalau lagi di halaman lain, pindah ke halaman home dulu
            navigate("/", {replace: false});
            setScrollTarget("about");
        } else {
            setScrollTarget("about");
        }
    }

    // untuk handle dari halaman lain jika mau ke halaman home dan scroll ke categories
    const handleCategoriesClick = () => {
        if (location.pathname !== "/") {
            // kalau lagi di halaman lain, pindah ke halaman home dulu
            navigate("/", {replace: false});
            setScrollTarget("categories");
        } else {
            setScrollTarget("categories");
        }
    }

    // untuk handle dari halaman lain jika mau ke halaman home dan scroll ke menu
    const handleMenuClick = () => {
        if (location.pathname !== "/") {
            // kalau lagi di halaman lain, pindah ke halaman home dulu
            navigate("/", {replace: false});
            setScrollTarget("menu");
        } else {
            setScrollTarget("menu");
        }
    }

    // untuk handle dari halaman lain jika mau ke halaman home dan scroll ke promo
    const handlePromoClick = () => {
        if (location.pathname !== "/") {
            // kalau lagi di halaman lain, pindah ke halaman home dulu
            navigate("/", {replace: false});
            setScrollTarget("promo");
        } else {
            setScrollTarget("promo");
        }
    }

    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 py-2" style={{ fontFamily: '"Comic Sans MS", "Comic Neue", sans-serif' }}>
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-pink-500">
                    Marcella Bakery & Cake 🍰
                </h2>
                {/* Navbar */}
                <ul className="hidden md:flex space-x-5 text-black font-medium list-none">
                    <li className="hover:text-pink-500 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        <Link to="/" className="hover:text-pink-500">
                            Home
                        </Link>
                    </li>
                    <li className="hover:text-pink-500 cursor-pointer" onClick={handleAboutClick}>About</li>
                    <li className="hover:text-pink-500 cursor-pointer" onClick={handleCategoriesClick}>Categories</li>
                    <li className="hover:text-pink-500 cursor-pointer" onClick={handleMenuClick}>Menu</li>
                    <li className="hover:text-pink-500 cursor-pointer" onClick={handlePromoClick}>Promo</li>
                    <li className="hover:text-pink-500 cursor-pointer">Testimoni</li>
                    <li className="hover:text-pink-500 cursor-pointer">Contact</li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-pink-500 focus:outline-one"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28}/> : <Menu size={28}/>}
                </button>

                {/* Navbar Menu Mobile */}
                {isOpen && (
                    <div className="md:hidden bg-white shadow-md">
                        <ul className="flex flex-col space-y-3 py-4 px-6 text-black font-medium">
                            <li className="hover:text-pink-500 cursor-pointer" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setIsOpen(false); }}>
                                <Link to="/" className="hover:text-pink-500">Home</Link>
                            </li>
                            <li className="hover:text-pink-500 cursor-pointer" onClick={handleAboutClick}>About</li>
                            <li className="hover:text-pink-500 cursor-pointer" onClick={handleCategoriesClick}>Categories</li>
                            <li className="hover:text-pink-500 cursor-pointer" onClick={handleMenuClick}>Menu</li>
                            <li className="hover:text-pink-500 cursor-pointer">Testimoni</li>
                            <li className="hover:text-pink-500 cursor-pointer">Contact</li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}