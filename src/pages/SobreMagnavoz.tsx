import { Award, Building2, Target, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SobreMagnavoz() {
  const values = [
    {
      icon: Target,
      title: 'Innovación',
      description: 'Buscamos constantemente nuevas formas de mejorar nuestros servicios',
    },
    {
      icon: Users,
      title: 'Compromiso',
      description: 'Nos dedicamos al éxito de nuestros clientes',
    },
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Mantenemos los más altos estándares de calidad',
    },
    {
      icon: Building2,
      title: 'Confiabilidad',
      description: 'Garantizamos la estabilidad de nuestros servicios',
    },
  ];

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-magnavoz-dark via-magnavoz-light to-magnavoz-green py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Sobre Magnavoz</h1>
          <p className="mt-4 text-xl text-white">
            Liderando la innovación en comunicaciones empresariales desde hace más de una década
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-2xl backdrop-blur-lg bg-gradient-to-br from-white/40 via-white/30 to-white/20 p-8 shadow-xl border border-white/20"
          >
            <h2 className="text-3xl font-bold text-magnavoz-dark">Nuestra Historia</h2>
            <p className="mt-4 text-lg text-magnavoz-dark/80">
              Magnavoz nació con la visión de transformar la manera en que las empresas se comunican
              con sus clientes. A lo largo de los años, hemos evolucionado constantemente,
              incorporando las últimas tecnologías y mejores prácticas en nuestras soluciones.
            </p>
            <p className="mt-4 text-lg text-magnavoz-dark/80">
              Hoy, nos enorgullece ser líderes en el mercado de soluciones IVR y servicios de
              comunicación empresarial, sirviendo a clientes de diversos sectores y tamaños.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
              alt="Equipo Magnavoz"
              className="rounded-2xl shadow-xl h-full w-full object-cover"
            />
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mt-24">
          <h2 className="text-center text-3xl font-bold text-magnavoz-dark">Nuestros Valores</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center rounded-2xl backdrop-blur-lg bg-gradient-to-br from-white/40 via-white/30 to-white/20 p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="rounded-xl bg-gradient-to-br from-magnavoz-dark to-magnavoz-light p-3">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-magnavoz-dark">{value.title}</h3>
                <p className="mt-2 text-center text-magnavoz-dark/80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}