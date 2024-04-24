


 export const Navbar = () => {
  return (

<header className ="text-gray-100 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <a href="/">
	<figure class="w-full flex justify-start pt-4 pl-4">
		<img src="./src/assets/images/photo_5175141197897902978_x.jpg" alt="logo" class="w-100 h-32 rounded-lg" />
	</figure>
</a>

    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base   justify-center">
      <a className="mr-10  hover:text-gray-900">Inicio</a>
      <a className="mr-10 hover:text-gray-900">Conocenos</a>
      <button className="text-lg inline-flex items-center bg-green-900 border-0 py-1 px-3 focus:outline-none hover:bg-gray-900 rounded text-base mt-4 md:mt-0">Comenzamos?
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </nav>
   
  </div>
</header>
  )
}


export default Navbar;