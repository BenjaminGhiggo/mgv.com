import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';

export default function Contactanos() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <motion.div 
        className="bg-gradient-to-br from-magnavoz-dark via-magnavoz-light to-magnavoz-green py-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white flex items-center gap-3">
            <MapPin className="h-8 w-8" />
            Contáctanos
          </h1>
          <p className="mt-4 text-xl text-white">
            Estamos aquí para ayudarte con tus necesidades de comunicación
          </p>
        </div>
      </motion.div>

      {/* Contact Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl backdrop-blur-lg bg-gradient-to-br from-white/40 via-white/30 to-white/20 p-8 shadow-xl border border-white/20"
          >
            <h2 className="text-2xl font-bold text-magnavoz-dark flex items-center gap-3">
              <Phone className="h-6 w-6 text-magnavoz-light" />
              Información de Contacto
            </h2>
            <p className="mt-4 text-lg text-magnavoz-dark">
              Contáctanos por cualquiera de estos medios o llena el formulario.
            </p>

            <div className="mt-8 space-y-6">
              <motion.div 
                className="flex items-center p-4 rounded-xl backdrop-blur-lg bg-gradient-to-br from-white/40 via-white/30 to-white/20 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <Phone className="h-6 w-6 text-magnavoz-light" />
                <span className="ml-4 text-magnavoz-dark">+51 967 016 138</span>
              </motion.div>
              <motion.div 
                className="flex items-center p-4 rounded-xl backdrop-blur-lg bg-gradient-to-br from-white/40 via-white/30 to-white/20 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <Mail className="h-6 w-6 text-magnavoz-light" />
                <span className="ml-4 text-magnavoz-dark">noc@magnavoz.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center p-4 rounded-xl backdrop-blur-lg bg-gradient-to-br from-white/40 via-white/30 to-white/20 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <MapPin className="h-6 w-6 text-magnavoz-light" />
                <span className="ml-4 text-magnavoz-dark">
                  Santiago de Surco, Lima, Perú
                </span>
              </motion.div>
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-semibold text-magnavoz-dark flex items-center gap-3">
                <Clock className="h-5 w-5 text-magnavoz-light" />
                Horario de Atención
              </h3>
              <div className="mt-4 space-y-2 text-magnavoz-dark">
                <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p>Sábados: 9:00 AM - 1:00 PM</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-12">
              <div className="relative w-full h-0 pb-[75%] rounded-xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.9994405325683!2d-76.9928168253646!3d-12.112190443121461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7f062511137%3A0x6e6ef18326309334!2smagnavoz!5e0!3m2!1ses-419!2spe!4v1744696959974!5m2!1ses-419!2spe"
                  className="absolute top-0 left-0 w-full h-full rounded-xl border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <motion.div 
                className="rounded-2xl backdrop-blur-lg bg-gradient-to-br from-white/40 via-white/30 to-white/20 p-8 shadow-xl border border-white/20 text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-magnavoz-green">¡Mensaje Enviado!</h3>
                <p className="mt-4 text-magnavoz-dark">
                  Gracias por contactarnos. Nos pondremos en contacto contigo pronto.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl backdrop-blur-lg bg-gradient-to-br from-white/40 via-white/30 to-white/20 p-8 shadow-xl border border-white/20">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="transition-all duration-300"
                >
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-magnavoz-dark"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    required
                    className="mt-1 block w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-2 text-magnavoz-dark shadow-sm focus:border-magnavoz-light focus:outline-none focus:ring-magnavoz-light transition-colors duration-300"
                    value={formData.nombre}
                    onChange={(e) =>
                      setFormData({ ...formData, nombre: e.target.value })
                    }
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="transition-all duration-300"
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-magnavoz-dark"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-2 text-magnavoz-dark shadow-sm focus:border-magnavoz-light focus:outline-none focus:ring-magnavoz-light transition-colors duration-300"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="transition-all duration-300"
                >
                  <label
                    htmlFor="telefono"
                    className="block text-sm font-medium text-magnavoz-dark"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    className="mt-1 block w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-2 text-magnavoz-dark shadow-sm focus:border-magnavoz-light focus:outline-none focus:ring-magnavoz-light transition-colors duration-300"
                    value={formData.telefono}
                    onChange={(e) =>
                      setFormData({ ...formData, telefono: e.target.value })
                    }
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="transition-all duration-300"
                >
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-medium text-magnavoz-dark"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-2 text-magnavoz-dark shadow-sm focus:border-magnavoz-light focus:outline-none focus:ring-magnavoz-light transition-colors duration-300"
                    value={formData.mensaje}
                    onChange={(e) =>
                      setFormData({ ...formData, mensaje: e.target.value })
                    }
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full rounded-xl bg-gradient-to-r from-magnavoz-dark to-magnavoz-light px-4 py-3 text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-magnavoz-light focus:ring-offset-2 transition-all duration-300"
                >
                  Enviar Mensaje
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}