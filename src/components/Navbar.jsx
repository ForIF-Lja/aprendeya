const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-700">AprendeYa</h1>
        <ul className="hidden md:flex space-x-6 text-gray-700 font-semibold">
          <li>
            <button 
              onClick={() => scrollToSection('info')} 
              className="hover:text-indigo-600"
            >
              ¿Qué es?
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('cursos')} 
              className="hover:text-indigo-600"
            >
              Cursos
            </button>
          </li>
          <li>
            <a href="/instalacion" className="hover:text-indigo-600">
              Instalación
            </a>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('testimonios')} 
              className="hover:text-indigo-600"
            >
              Testimonios
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contacto')} 
              className="hover:text-indigo-600"
            >
              Contacto
            </button>
          </li>
        </ul>
        <button 
          onClick={() => scrollToSection('contacto')} 
          className="md:hidden bg-indigo-600 text-white px-4 py-2 rounded-lg"
        >
          Contáctanos
        </button>
      </div>
    </nav>
  );
};

export default Navbar;