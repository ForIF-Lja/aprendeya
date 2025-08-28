const InfoSection = () => {
  return (
    <section id="info" className="max-w-6xl mx-auto my-20 px-6 grid md:grid-cols-2 gap-10">
      <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-indigo-500 card">
        <h2 className="text-3xl font-bold mb-4 text-indigo-700">¿Qué es AprendeYa?</h2>
        <p className="text-gray-600 mb-4">AprendeYa es tu puerta a miles de cursos online en áreas como:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>🎨 Diseño gráfico y edición</li>
          <li>💻 Programación y tecnología</li>
          <li>📈 Marketing digital y redes</li>
          <li>📚 Educación, idiomas y más</li>
        </ul>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-purple-500 card">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">¿Por qué elegirnos?</h2>
        <ul className="space-y-3 text-gray-700">
          <li>✅ Acceso ilimitado con una sola mensualidad</li>
          <li>💰 Planes accesibles desde solo <strong>$20.000</strong></li>
          <li>💬 Soporte y guía por WhatsApp</li>
          <li>🎓 Contenido actualizado, sin límites</li>
        </ul>
      </div>
    </section>
  );
};

export default InfoSection;