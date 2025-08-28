const TestimoniosSection = () => {
  const testimonios = [
    {
      texto: "¡Súper completo! Con solo $20 mil accedí a cursos de Excel, Photoshop y Python.",
      autor: "Camila R. (Medellín)"
    },
    {
      texto: "La mejor alternativa a Udemy en Colombia. Acceso fácil y asesoría directa.",
      autor: "Jorge M. (Bogotá)"
    },
    {
      texto: "Los asesores fueron muy atentos. Me uní el mismo día y ya estoy aprendiendo.",
      autor: "Natalia F. (Cali)"
    }
  ];

  return (
    <section id="testimonios" className="bg-indigo-50 py-20">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold text-indigo-700 mb-8">💬 Lo que dicen nuestros estudiantes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md card">
              <p className="italic text-gray-700 mb-4">"{testimonio.texto}"</p>
              <p className="font-bold text-indigo-700">— {testimonio.autor}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniosSection;