const CursosSection = () => {
  return (
    <section id="cursos" className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20 px-6 text-center">
      <h2 className="text-4xl font-extrabold mb-6">🚀 Explora Cursos de Desarrollo</h2>
      <p className="text-lg mb-10 max-w-2xl mx-auto">
        Accede a miles de cursos en línea sobre programación, desarrollo web, apps, bases de datos y más. 
        Haz clic y explora todo lo que puedes aprender.
      </p>
      <a 
        href="https://www.udemy.com/courses/development/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold text-xl px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition"
      >
        🔍 Ir a Catálogo de Cursos
      </a>
    </section>
  );
};

export default CursosSection;