import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import items from "../data/menu.json";

const Menu = forwardRef((props, ref) => {
    const navigate = useNavigate();

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="py-2 bg-pink-200 rounded-4xl scroll-mt-10"
        >
            <section
                className="py-16"
                style={{ fontFamily: '"Comic Sans MS", "Comic Neue", sans-serif' }}
            >
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-pink-500 mb-6">Our Menu</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                        {items.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-gray-50 rounded-2xl shadow-lg p-4 cursor-pointer"
                                initial={{ opacity: 0, y: 50 }}   // ✅ animasi taruh di child
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
                                <h3 className="text-xl font-medium text-gray-800 mb-1">
                                    {item.name}
                                </h3>
                                <p className="text-pink-500 font-medium mb-1">{item.price}</p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => navigate(`/preview/${item.id}`)}
                                    className="mt-2 px-4 py-1 bg-pink-500 text-white rounded-lg cursor-pointer"
                                >
                                    Preview
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.section>
    );
});

export default Menu;