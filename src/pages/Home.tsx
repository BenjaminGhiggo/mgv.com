import { ArrowRight, MessageSquare, Phone, Radio, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Suspense, lazy } from 'react';

// Lazy load video component
const LazyVideo = lazy(() => import('../components/LazyVideo'));

export default function Home() {
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Suspense fallback={<div className="w-full h-full bg-magnavoz-dark animate-pulse" />}>
            <LazyVideo
              src="/multimedia/03/video-magnavoz2.mp4"
              className="h-full w-full object-cover"
            />
          </Suspense>
          <div className="absolute inset-0 bg-gradient-to-br from-magnavoz-dark/90 to-magnavoz-light/90" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/multimedia/03/logo-MAGNAVOZ-blanco_Mesa-de-trabajo-1-copia-2.png"
              alt="Magnavoz Logo"
              className="h-24 mb-8"
              loading="lazy"
              decoding="async"
            />
            <h1 className="text-4xl font-bold tracking-tight text-magnavoz-background sm:text-5xl lg:text-6xl">
              Soluciones de comunicación inteligente
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-magnavoz-background">
              Somos una empresa que nace de la alianza de empresarios con más de 20 años de experiencia en la industria de las Telecomunicaciones.
              Creemos firmemente que la calidad es la base para la confianza y el crecimiento, y por eso nos esforzamos día a día para brindar el mejor servicio.
            </p>
            <div className="mt-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contactanos"
                  className="inline-flex items-center rounded-md border border-transparent bg-gradient-to-r from-magnavoz-green to-magnavoz-greenLight px-6 py-3 text-base font-medium text-magnavoz-background shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Contáctanos
                  <ArrowRight className="ml-3 -mr-1 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="h-8 w-8 text-magnavoz-background animate-bounce" />
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-magnavoz-background py-24" ref={featuresRef}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-magnavoz-dark sm:text-4xl flex items-center justify-center gap-3">
              <Phone className="h-8 w-8 text-magnavoz-dark" />
              Nuestros Servicios Principales
            </h2>
            <p className="mt-4 text-lg text-magnavoz-dark">
              Soluciones completas para optimizar la comunicación de tu empresa
            </p>
          </motion.div>

          <motion.div
            className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
          >
            {[
              {
                title: 'Voice - IVR',
                description: 'Sistemas de respuesta de voz interactiva personalizados para tu negocio.',
                video: '/multimedia/04/Proyecto-IVR.mp4'
              },
              {
                title: 'SMS - Masivo',
                description: 'Alcance masivo con mensajes personalizados para tus clientes.',
                video: '/multimedia/12/Proyecto-SMS-MASIVO.mp4'
              },
              {
                title: 'Voice - VoIP',
                description: 'Soluciones avanzadas de telefonía IP para comunicaciones empresariales.',
                video: '/multimedia/voice-voip/voice-voip.mp4'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-magnavoz-gray"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <Suspense fallback={<div className="w-full h-48 bg-magnavoz-gray/20 animate-pulse rounded-lg" />}>
                  <LazyVideo
                    src={service.video}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                </Suspense>
                <h3 className="mt-6 text-xl font-semibold text-magnavoz-dark">{service.title}</h3>
                <p className="mt-2 text-center text-magnavoz-dark">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}