import { useEffect, useState } from 'react'

const Instalacion = () => {
  const [navegador, setNavegador] = useState('')
  const [navegadorNombre, setNavegadorNombre] = useState('')
  const [navegadorIcono, setNavegadorIcono] = useState('')
  const [navegadorCompatible, setNavegadorCompatible] = useState(true)

  useEffect(() => {
    detectarNavegador()
  }, [])

  const detectarNavegador = async () => {
    const userAgent = navigator.userAgent
    let key = '', nombre = '', icono = ''

    if (/Edg/.test(userAgent)) {
      key = 'edge'
      nombre = 'Microsoft Edge'
      icono = '🔷'
    } else if (navigator.brave && typeof navigator.brave.isBrave === 'function') {
      try {
        const isBrave = await navigator.brave.isBrave()
        if (isBrave) {
          key = 'brave'
          nombre = 'Brave'
          icono = '🦁'
        }
      } catch (e) {
        // ignore
      }
    }
    
    if (!key && /Chrome/.test(userAgent) && /Google Inc/.test(navigator.vendor)) {
      key = 'chrome'
      nombre = 'Google Chrome'
      icono = '🟢'
    }

    if (!key) {
      setNavegadorCompatible(false)
      return
    }

    setNavegador(key)
    setNavegadorNombre(nombre)
    setNavegadorIcono(icono)
  }

  const abrirExtensiones = () => {
    const urls = {
      chrome: 'chrome://extensions/',
      edge: 'edge://extensions/',
      brave: 'brave://extensions/'
    }
    
    const mensajes = {
      chrome: 'Para Chrome:\n1. Copia esta dirección: chrome://extensions/\n2. Pégala en la barra de direcciones\n3. Presiona Enter',
      edge: 'Para Microsoft Edge:\n1. Copia esta dirección: edge://extensions/\n2. Pégala en la barra de direcciones\n3. Presiona Enter',
      brave: 'Para Brave:\n1. Copia esta dirección: brave://extensions/\n2. Pégala en la barra de direcciones\n3. Presiona Enter'
    }

    const url = urls[navegador] || ''
    const mensaje = mensajes[navegador] || 'Navegador no compatible'
    
    alert(mensaje)
    
    if (url) {
      navigator.clipboard?.writeText(url)
    }
  }

  const contactarAsesor = () => {
    const asesores = [
      'https://wa.me/573002549595',
      'https://wa.me/573026736193',
      'https://wa.me/573225951276'
    ]
    const elegido = Math.floor(Math.random() * asesores.length)
    window.open(asesores[elegido], '_blank')
  }

  const irAUdemy = () => {
    window.open('https://www.udemy.com/', '_blank')
  }

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* NAVBAR */}
      <nav className="bg-white shadow-md py-4 px-6 fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-indigo-700">AprendeYa</a>
          <ul className="hidden md:flex space-x-6 text-gray-700 font-semibold">
            <li><a href="/" className="hover:text-indigo-600">Inicio</a></li>
            <li><a href="/#info" className="hover:text-indigo-600">¿Qué es?</a></li>
            <li><a href="/#cursos" className="hover:text-indigo-600">Cursos</a></li>
            <li><a href="/#contacto" className="hover:text-indigo-600">Contacto</a></li>
          </ul>
          <a href="/#contacto" className="md:hidden bg-indigo-600 text-white px-4 py-2 rounded-lg">Contáctanos</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero text-white text-center py-20 px-4 mt-16">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">🔧 Instalación de Extensión</h1>
        <p className="text-xl max-w-3xl mx-auto mb-4">Sigue estos sencillos pasos para instalar nuestra extensión</p>
        <p className="text-lg">Solo te tomará unos minutos y podrás empezar a usar AprendeYa</p>
      </header>

      {/* DETECTOR DE NAVEGADOR */}
      <section className="max-w-4xl mx-auto my-10 px-6">
        {!navegadorCompatible ? (
          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <h3 className="text-lg font-bold text-red-800">Navegador no compatible</h3>
                <p className="text-red-700">Esta extensión solo está disponible para Chrome, Edge o Brave.</p>
                <p className="text-red-600 text-sm mt-2">Por favor, usa uno de estos navegadores para continuar.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{navegadorIcono}</span>
              <div>
                <h3 className="text-lg font-bold text-blue-800">Navegador detectado</h3>
                <p className="text-blue-700">{navegadorNombre} - ¡Compatible! ✅</p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* PASOS DE INSTALACIÓN */}
      <section className="max-w-4xl mx-auto my-20 px-6">
        <div className="space-y-12">
          {/* PASO 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-indigo-500 card">
            <div className="flex items-start gap-6">
              <div className="step-number">1</div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-indigo-700">Descargar el archivo ZIP</h2>
                <p className="text-gray-600 mb-6">Primero, descarga el archivo ZIP de la extensión haciendo clic en el botón de abajo.</p>
                <div className="mb-6">
                  <button className="bg-indigo-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-indigo-700 transition text-lg shadow-lg flex items-center gap-3">
                    <span>📦</span> Descargar ZIP
                  </button>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <p className="text-blue-800 font-semibold">💡 Consejo:</p>
                  <p className="text-blue-700">Guarda el archivo en una carpeta fácil de encontrar, como tu Escritorio.</p>
                </div>
              </div>
            </div>
          </div>

          {/* PASO 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-purple-500 card">
            <div className="flex items-start gap-6">
              <div className="step-number">2</div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-purple-700">Abrir configuración de extensiones</h2>
                <p className="text-gray-600 mb-6">Accede a la página de extensiones de tu navegador. Puedes hacerlo manualmente o usar nuestro botón automático.</p>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
                  <div className="text-gray-400 text-sm">🌐 [Video de configuración de extensiones]</div>
                  <div className="text-gray-500 text-xs mt-2">Video: Página de extensiones del navegador</div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={abrirExtensiones}
                    className="bg-purple-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-purple-700 transition flex items-center justify-center gap-2"
                  >
                    <span>🚀</span> Abrir configuración de extensiones
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* PASO 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-green-500 card">
            <div className="flex items-start gap-6">
              <div className="step-number">3</div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-green-700">Activar modo desarrollador</h2>
                <p className="text-gray-600 mb-6">En la página de extensiones, activa el interruptor de "Modo de desarrollador" que se encuentra en la esquina superior derecha.</p>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-4">
                  <div className="text-gray-400 text-sm">⚙️ [Video del modo desarrollador]</div>
                  <div className="text-gray-500 text-xs mt-2">Video: Interruptor de modo desarrollador activado</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <p className="text-green-800 font-semibold">✅ Importante:</p>
                  <p className="text-green-700">Una vez activado, aparecerán nuevas opciones incluyendo "Cargar extensión sin empaquetar".</p>
                </div>
              </div>
            </div>
          </div>

          {/* PASO 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-yellow-500 card">
            <div className="flex items-start gap-6">
              <div className="step-number">4</div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-yellow-700">Cargar extensión desempaquetada</h2>
                <p className="text-gray-600 mb-6">Haz clic en "Cargar extensión sin empaquetar" y selecciona la carpeta descomprimida del ZIP que descargaste en el paso 1.</p>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-4">
                  <div className="text-gray-400 text-sm">📂 [Video de selección de carpeta]</div>
                  <div className="text-gray-500 text-xs mt-2">Video: Selector de carpeta con extensión descomprimida</div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-yellow-800 font-semibold">🎉 ¡Listo!</p>
                  <p className="text-yellow-700">Una vez selecciones la carpeta, la extensión se instalará automáticamente y aparecerá en tu lista de extensiones.</p>
                </div>
              </div>
            </div>
          </div>

          {/* PASO 5 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-purple-500 card">
            <div className="flex items-start gap-6">
              <div className="step-number">5</div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-purple-700">¡Ve a Udemy y comienza a aprender!</h2>
                <p className="text-gray-600 mb-6">Con la extensión instalada, ahora puedes acceder a todos los cursos de Udemy y usar AprendeYa para mejorar tu experiencia de aprendizaje.</p>
                <div className="mb-6">
                  <button 
                    onClick={irAUdemy}
                    className="bg-purple-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-purple-700 transition text-lg shadow-lg flex items-center gap-3"
                  >
                    <span>🎓</span> Ir a Udemy
                  </button>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                  <p className="text-purple-800 font-semibold">🚀 ¡Felicidades!</p>
                  <p className="text-purple-700">Ya tienes todo listo para usar AprendeYa. La extensión te ayudará automáticamente mientras estudias en Udemy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE AYUDA */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-extrabold mb-4">¿Necesitas ayuda?</h2>
        <p className="text-lg mb-8">Si tienes problemas con la instalación, nuestros asesores están listos para ayudarte.</p>
        <button 
          onClick={contactarAsesor}
          className="bg-yellow-300 text-indigo-900 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-400 transition text-lg"
        >
          💬 Contactar Soporte
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-10">
        <p>&copy; 2025 AprendeYa. Todos los derechos reservados.</p>
        <p className="mt-2">
          <a href="/" className="text-indigo-400 hover:text-indigo-300">← Volver al inicio</a>
        </p>
      </footer>
    </div>
  )
}

export default Instalacion