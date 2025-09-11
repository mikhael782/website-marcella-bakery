import { motion } from "framer-motion";
import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import categories from "../data/categories.json";

const Categories = forwardRef((props, ref) => {
    const navigate = useNavigate();

    return (
        // className="py-2 bg-pink-200 rounded-4xl scroll-mt-10"
        <div ref={ref}>
            <section
                className="max-w-7xl mx-auto py-16 px-4 text-center"
                style={{ fontFamily: '"Comic Sans MS", sans-serif' }}
            >
                <h2 className="text-2xl font-bold text-pink-500">Choose Your Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.id}
                            className="relative h-56 rounded-lg overflow-hidden cursor-pointer shadow-lg"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            onClick={() => navigate(`/products/${cat.id}`)}
                        >
                            <img
                                src={cat.image}
                                alt={cat.title}
                                className="w-full h-full object-cover"
                            />
                            {/* overlay transparan */}
                            <div className="absolute inset-0 bg-black/30 z-10"></div>
                            {/* text di atas overlay */}
                            <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold drop-shadow z-20">
                                {cat.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
});

export default Categories;