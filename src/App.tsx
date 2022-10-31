import Header from "./layout/Header"

import Footer from "./layout/Footer"

const App = ():JSX.Element => {
  return(
    <div className="grid min-h-screen w-full grid-cols-1 grid-rows-[auto_1fr_auto]">
      <Header />
      <main>
        <section className="min-h-screen flex flex-col justify-center items-center bg-about bg-cover bg-center gap-8 text-white">
          <h2 className="text-3xl md:text-6xl font-bold text-center">Mejora tus habilidades de programación</h2>
          <p className="text-center">UPCode es una plataforma exclusiva para los y las estudiantes de UPC que busquen mejorar la lógica de programación mediante la resolución de ejercicios de algoritmia.</p>
          <a href="/login" className="px-4 py-2 bg-yellow-400 hover:bg-yellow-300 duration-150 hover:text-gray-900 font-bold rounded-md">Ir a la aplicación</a>
        </section>
        <section className="flex flex-col justify-center items-center bg-slate-900 gap-8 text-white px-4 py-8">
          <h2 className="text-3xl md:text-6xl font-bold text-center">Explora nuestra lista de problemas</h2>
          <div className="flex justify-center flex-wrap gap-8">
            <div className="bg-white flex flex-col items-center justify-center rounded-xl px-4 py-6 text-black max-w-sm gap-4">
              <h3 className="text-center font-bold text-2xl">Variedad</h3>
              <img className="w-3/5" src="variedad.png" alt="Icono variedad" />
              <p className="text-center">Tenemos una amplia variedad de problemas de diferentes temas desde manejo básico de arreglos, manipulación de bits hasta grafos y programación dinámica.</p>
            </div>
            <div className="bg-white flex flex-col items-center justify-center rounded-xl px-4 py-6 text-black max-w-sm gap-4">
              <h3 className="text-center font-bold text-2xl">Dificultad</h3>
              <img className="w-3/5" src="climbing.png" alt="Icono variedad" />
              <p className="text-center">Contamos con problemas para todas las dificultades. De este modo, siempre podrás aprender algo independientemente de tu nivel.</p>
            </div>
            <div className="bg-white flex flex-col items-center justify-center rounded-xl px-4 py-6 text-black max-w-sm gap-4">
              <h3 className="text-center font-bold text-2xl">Calidad</h3>
              <img className="w-3/5" src="quality.png" alt="Icono variedad" />
              <p className="text-center">Los problemas son planteados por profesores expertos en el tema y pasan a través de un proceso de validación para asegurarnos que estén alineados a nuestro estándar.</p>
            </div>
          </div>
          <p className="text-center">Además, todos nuestros problemas cuentan con un solucionario que te permitirán aprender en caso de no saber cómo resolverlos.</p>
        </section>
        <section className="flex flex-col justify-center items-center bg-slate-900 gap-8 text-white px-4 py-8">
          <h2 className="text-3xl md:text-6xl font-bold text-center">Mejora tu nivel compitiendo</h2>
          <div className="flex items-center bg-white rounded-2xl shadow-xl px-4 py-8 text-black">
            <img className="h-48" src="ranking.png" alt="Logo ranking" />
            <div className="text-center w-64">
              <p>Creemos que la mejor forma de motivarse a mejorar es mediante la competencia.</p>
              <br />
              <p>Por eso, tenemos incluido un sistema de ranking en base a la cantidad de problemas resultos para que sepas cómo vas progresando.</p>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center bg-slate-900 gap-8 text-white px-4 py-8">
          <h2 className="text-3xl md:text-6xl font-bold text-center">El mejor editor de código integrado</h2>
          <div className="text-center max-w-[1080px]">
            <p>Actualmente damos soporte al lenguaje de programación C++ 17. No obstante, ya estamos trabajando para traer otros 13 lenguajes que puedas utilizar.</p>
            <p>Desde UPCode somos concientes que todo se centra en el desarrollador. Por eso, hemos creado el mejor editor de texto integrado para que tengas la mejor experiencia al momento de escribir una solución en tu lenguaje de programación favorito.</p>
          </div>
          <img src="code.png" alt="Editor de código" />
          <a href="/login" className="px-4 py-2 bg-yellow-400 hover:bg-yellow-300 duration-150 hover:text-gray-900 font-bold rounded-md">Ir a la aplicación</a>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App