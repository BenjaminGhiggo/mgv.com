import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src="/multimedia/03/logo-MAGNAVOZ-blanco_Mesa-de-trabajo-1-copia-2.png"
              alt="Magnavoz"
              className="h-12 mb-4"
            />
            <p className="text-gray-400">
              Soluciones de comunicación innovadoras para empresas modernas.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre-magnavoz" className="text-gray-400 hover:text-white">
                  Sobre Magnavoz
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-400 hover:text-white">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/contactanos" className="text-gray-400 hover:text-white">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <img
                  src="/multimedia/03/Iconos-redes-02.png"
                  alt="Facebook"
                  className="h-6 w-6"
                />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <img
                  src="/multimedia/03/Iconos-redes-03.png"
                  alt="Twitter"
                  className="h-6 w-6"
                />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <img
                  src="/multimedia/03/Iconos-redes-04.png"
                  alt="Instagram"
                  className="h-6 w-6"
                />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <img
                  src="/multimedia/03/Iconos-redes-05.png"
                  alt="LinkedIn"
                  className="h-6 w-6"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Magnavoz. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}