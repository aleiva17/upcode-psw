
const Header = ():JSX.Element => {
  return(
    <header className="flex justify-around bg-[#f3f3f3] items-center p-3 border-b-2 border-black">
      <a href="/">
        <img className="h-10" src="upcode.png" alt="UPCode Logo" />
      </a>
      <a href="/login" className="px-4 py-2 bg-yellow-400 hover:bg-yellow-300 duration-150 hover:text-gray-900 font-bold rounded-md">Entrar</a>
    </header>
  )
}

export default Header