
const Footer = ():JSX.Element => {
  return (
    <footer className="bg-[#0c0c0c] flex flex-col justify-center items-center gap-8 text-white p-8">
      <div className="flex justify-around gap-4">
        <div className="md:w-1/3">
          <img className="w-10 mb-4" src="./upc-logo-2.png" alt="Logo UPC" />
          <p>Plataforma financiada por la facultad de Ciencias de la Computación de la Universidad Peruana de Ciencias Aplicadas.</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold">Contacto</p>
          <div className="flex flex-wrap gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <p>Prolongación Primavera 2390, Lima 15023</p>
          </div>
          <div className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <p>upcode@upc.edu.pe</p>
          </div>
        </div>
      </div>
      <div>
        <p>&copy;2022 Todos los derechos reservados | Hecho con &#10084; por estudiantes de UPC.</p>
      </div>
    </footer>
  )
}

export default Footer