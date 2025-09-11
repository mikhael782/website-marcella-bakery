import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import items from "../data/menu.json";

const Products = () => {
    const { categoryId } = useParams();
    const navigate = useNavigate();

    const categories = [
        { title: "Bolu", value: "bolu" },
        { title: "Bread", value: "bread" },
        { title: "Brownies", value: "brownies" },
        { title: "Cake", value: "cake" },
        { title: "Cookies", value: "cookies" },
        { title: "Pastries", value: "pastries" },
        { title: "Traditional Food", value: "traditional-food" }
    ];

    const [filtered, setFiltered] = useState([]);

    // update data tiap kali ganti categoryId
    useEffect(() => {
        if (categoryId) {
            const result = items.filter(
                (item) => item.category.toLowerCase() === categoryId.toLowerCase()
            );
            setFiltered(result);
        }
    }, [categoryId]);

    const currentCategory = categories.find(
        (cat) => cat.value.toLowerCase() === categoryId.toLowerCase()
    );

    return (
        <div className="max-w-7xl mx-auto py-16 px-4" style={{ fontFamily: '"Comic Sans MS", cursive, sans-serif' }}>
            <h2 className="text-xl font-bold text-pink-500 mt-7 mb-6 capitalize">
                {currentCategory ? currentCategory.title : categoryId} Products
            </h2>

            {/* Tabs */}
            <div className="flex justify-center gap-8 mb-10">
                {categories.map((cat, idx) => {
                    const active = cat.value.toLowerCase() === categoryId.toLowerCase();
                    return (
                        <motion.button
                            key={idx}
                            onClick={() => navigate(`/products/${cat.value.toLowerCase()}`)}
                            className={`relative pb-2 text-lg transition-all cursor-pointer ${
                                active ? "text-pink-500 font-bold": "text-gray-500 hover:text-pink-400" }`}
                        >
                            {cat.title}
                            {active && (
                                <motion.div
                                    layoutId="underline"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    className="absolute left-0 right-0 -bottom-1 h-0.5 bg-pink-500 rounded"
                                />
                            )}
                        </motion.button>
                    );
                })}
            </div>

            {/* Product List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                {filtered.length > 0 ? (
                    filtered.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-gray-50 rounded-lg shadow p-4"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            //whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-52 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                            <p className="text-pink-500 mb-1">{item.price}</p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate(`/preview/${item.id}`)}
                                className="mt-2 px-4 py-1 bg-pink-500 text-white rounded-lg cursor-pointer"
                            >
                                Preview
                            </motion.button>
                        </motion.div>
                    ))
                    ) : (
                    <p className="text-gray-500 mb-30">
                        No products available in this category.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Products;