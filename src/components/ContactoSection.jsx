const ContactoSection = () => {
  const contactarAsesor = () => {
    const asesores = [
      'https://wa.me/573002549595',
      'https://wa.me/573026736193',
      'https://wa.me/573225951276'
    ];
    const elegido = Math.floor(Math.random() * asesores.length);
    window.open(asesores[elegido], '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center">
      <h2 className="text-4xl font-extrabold mb-4">📲 Contáctanos por WhatsApp</h2>
      <p className="text-lg mb-10">Nuestros asesores están listos para ayudarte a empezar hoy mismo.</p>
      <button 
        onClick={contactarAsesor}
        className="bg-yellow-300 text-indigo-900 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-400 transition text-lg"
      >
        Hablar con un asesor
      </button>
    </section>
  );
};

export default ContactoSection;