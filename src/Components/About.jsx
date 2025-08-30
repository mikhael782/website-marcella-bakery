import React, { forwardRef }  from "react";
import { motion } from "framer-motion";

{/* About Us */}
const About = forwardRef((props, ref) => {
    return (
        <motion.section
            ref = {ref}
            initial = {{ opacity: 0, y: 50 }}
            whileInView = {{ opacity: 1, y: 0 }}
            viewport = {{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="py-2 scroll-mt-10"
        >
            <section ref={ref} className="py-16 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row itmes-center md:items-start gap-8 px-4">
                    {/* Foto kiri */}
                    <div className="md:w-1/2">
                        <img
                            src="/img/bg_hero/bg_image.jpg"
                            alt="image"
                            style={{ width: "595px", height: "350px" }}
                            className="rounded-lg shadow-lg object-cover"
                        />
                    </div>
                
                    {/* Teks Kanan */}
                    <div className="md:w-1/2 text-justify md:text-justify px-4 md:px-0">
                        <h2 className="text-3xl font-bold text-pink-500 mb-1">About Us</h2>
                        <p className="text-gray-600">
                            Didirikan pada tahun 2018 oleh Ibu Marcella Susy, Marcella Bakery & Cake 
                            telah berkembang menjadi tempat favorit bagi pecinta roti dan kue di kota Jakarta. 
                            Dengan dedikasi terhadap kualitas dan cita rasa, setiap produk dibuat dengan 
                            penuh cinta dan perhatian, mulai dari pemilihan bahan hingga proses pembakaran. <br/>
                            Marcella Bakery & Cake menghadirkan roti, kue, dan pastry segar setiap hari.
                            Kami menggunakan bahan berkualitas terbaik untuk memastikan setiap gigitan
                            memberikan rasa yang tak terlupakan. <br/>
                            Kami percaya bahwa setiap kue dan roti yang dibuat memiliki cerita tersendiri, 
                            dan kami selalu berusaha menghadirkan pengalaman kuliner yang hangat dan 
                            menyenangkan bagi setiap pelanggan. Nikmati momen manis bersama keluarga dan 
                            teman di Marcella Bakery & Cake!
                        </p>
                    </div>
                </div>
            </section>
        </motion.section>
    );
});

export default About;