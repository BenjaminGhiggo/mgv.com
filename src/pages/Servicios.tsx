import { MessageSquare, Phone, Radio, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Servicios() {
  const services = [
    {
      title: 'Voice - IVR',
      description:
        'Sistema de respuesta de voz interactiva que permite automatizar la atención al cliente con mensajes personalizados y opciones de menú intuitivas.',
      icon: Phone,
      features: [
        'Ofrecemos experiencias diferentes en la comunicación, generando audios con tu voz y que sea escuchada por millones de personas.',
        'Enviamos audios personalizados a todos tus clientes, independientemente del País donde se encuentre.',
        'Brindamos a tu empresa enrutamiento tanto las llamadas salientes y press one con call back.',
        'Te apoyamos a crear una experiencia de voz atractiva que puedas escalar y modificar rápidamente con una amplia gama de opciones y recursos de personalización',
      ],
      video: '/multimedia/04/Proyecto-IVR.mp4',
    },
    {
      title: 'Campañas de SMS - Masivo',
      description:
        'Alcance a miles de clientes simultáneamente con mensajes de voz personalizados para campañas de marketing, cobros o información importante.',
      icon: Radio,
      features: [
        'Autenticación y verificación: Proteja a sus clientes de fraude implementando el doble factor de autenticación 2FA y ofrezca mejores servicios de verificación.',
        'Notificaciones: Envía alertas personalizadas, recordatorios, notificaciones de citas, entregas y mucho más con nuestra plataforma de mensajería.',
        'Mensajes promocionales: Aumente las tasas de conversación y eleve las campañas de Marketing con promociones especiales, descuentos y más.',
        'Mensajes transaccionales: Los mensajes transaccionales son ideales para informar a los clientes sobre información valiosa o crítica que necesitan saber sobre sus productos o servicios.',
      ],
      video: '/multimedia/12/Proyecto-SMS-MASIVO.mp4',
    },
    {
      title: 'Voice - VoIP',
      description:
        'Soluciones avanzadas de telefonía IP para comunicaciones empresariales locales e internacionales con la mejor calidad y eficiencia.',
      icon: Wifi,
      features: [
        'Brindamos terminación de voz sobre IP local e internacional a través de nuestros socios estratégicos a nivel mundial que nos aportan sus rutas más confiables y la eficiencia de costos.',
        'Con nuestro sistema de Contatabilidad MZ, el cual incluye componentes como el enmascaramiento, número de salidas random (aleatorios), discriminación de DID, entre otros puntos importantes de nuestro sistema, el cual esta dirigido a aumentar la rentabilidad de su empresa, gracias al nivel de contacto que hemos logrado establecer en nuestros clientes actuales.',
        'Establecemos interconexiones con una excelente calidad en la voz, la cual ha ayudado a la utilización en nuestros clientes de los BOT de audio.',
      ],
      video: '/multimedia/voice-voip/voice-voip.mp4',
    },
    {
      title: 'Atención al Cliente',
      description:
        'Mejore la experiencia de sus clientes con nuestras soluciones integrales de atención y soporte.',
      icon: MessageSquare,
      features: [
        'Soporte 24/7',
        'Múltiples canales',
        'Gestión de tickets',
        'Satisfacción garantizada',
      ],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-magnavoz-dark via-magnavoz-light to-magnavoz-green py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Nuestros Servicios</h1>
          <p className="mt-4 text-xl text-white">
            Soluciones integrales de comunicación para tu empresa
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl backdrop-blur-lg bg-gradient-to-br from-white/40 via-white/30 to-white/20 p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center">
                      <div className="rounded-xl bg-gradient-to-br from-magnavoz-dark to-magnavoz-light p-3">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="ml-4 text-2xl font-bold text-magnavoz-dark">{service.title}</h3>
                    </div>
                    <p className="mt-4 text-magnavoz-dark/80">{service.description}</p>
                    <ul className="mt-8 space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-magnavoz-dark to-magnavoz-light"></div>
                          <span className="ml-4 text-magnavoz-dark/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8"
                  >
                    <Link
                      to="/contactanos"
                      className="inline-flex items-center rounded-xl bg-gradient-to-r from-magnavoz-dark to-magnavoz-light px-6 py-3 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Solicitar Demostración
                    </Link>
                  </motion.div>
                </div>
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl bg-magnavoz-dark/5">
                  {service.video ? (
                    <video
                      className="w-full h-full object-contain"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                    >
                      <source src={service.video} type="video/mp4" />
                    </video>
                  ) : service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain p-4"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <service.icon className="h-24 w-24 text-magnavoz-dark/20" />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-magnavoz-dark">
            ¿Listo para mejorar la comunicación de tu empresa?
          </h2>
          <p className="mt-4 text-lg text-magnavoz-dark/80">
            Contáctanos hoy mismo para una consulta personalizada
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contactanos"
              className="mt-8 inline-flex items-center rounded-xl bg-gradient-to-r from-magnavoz-dark to-magnavoz-light px-6 py-3 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Solicitar Información
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}