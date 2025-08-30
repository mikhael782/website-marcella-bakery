export default function Navbar({ onAboutClick, onMenuClick }) {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 py-2">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <h2 className="text-xl font-bold text-pink-500">
                Marcella Bakery & Cake 🍰
            </h2>
            {/* Navbar */}
            <ul className="flex space-x-5 text-black font-medium list-none">
                <li className="hover:text-pink-500 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    Home
                </li>
                <li className="hover:text-pink-500 cursor-pointer" onClick={onAboutClick}>About</li>
                <li className="hover:text-pink-500 cursor-pointer" onClick={onMenuClick}>Menu</li>
                <li className="hover:text-pink-500 cursor-pointer">Contact</li>
            </ul>
        </div>
    </nav>
  );
}