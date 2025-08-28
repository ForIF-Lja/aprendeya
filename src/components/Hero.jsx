const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="hero text-white text-center py-32 px-4 mt-16">
      <h1 className="text-6xl font-extrabold mb-4 leading-tight">🚀 AprendeYa</h1>
      <p className="text-2xl max-w-3xl mx-auto mb-4">Cursos como Udemy, pero más económicos</p>
      <p className="text-lg">
        Planes desde <span className="font-bold text-yellow-300">$20.000</span> mensuales. 
        Aprende lo que quieras, cuando quieras.
      </p>
      <button 
        onClick={() => scrollToSection('contacto')} 
        className="mt-6 inline-block bg-yellow-300 text-indigo-800 font-bold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition"
      >
        Habla con un asesor
      </button>
    </header>
  );
};

export default Hero;