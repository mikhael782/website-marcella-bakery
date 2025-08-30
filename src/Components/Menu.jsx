import React, { forwardRef } from "react";
import items from "../data/menu.json";
import { motion } from "framer-motion";

const Menu = forwardRef((props, ref) => {
    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="py-2 bg-pink-200 rounded-4xl scroll-mt-10"
        >
            <div className="max-w-7xl mx-auto text-center py-16">
                <h2 className="text-3xl font-bold text-pink-500 mb-10">Our Menu</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white rounded-2xl shadow-lg p-4 cursor-pointer"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
                            whileTap={{ scale: 0.5, transition: { duration: 0.05 } }}
                            onHoverStart={() => console.log(`Hover started on ${item.name}`)}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                            <p className="text-pink-500 font-medium">{item.price}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
});

export default Menu;