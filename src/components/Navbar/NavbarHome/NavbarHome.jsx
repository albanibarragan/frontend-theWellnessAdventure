import Logo from "../../../assets/fotos/logo.jpg";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {ProtectPage} from "../../../AuthValidation";
import {supabaseClient} from "../../../Supabase";
import { useNavigate } from "react-router-dom";

const NavbarHome = () => {

  const navigate = useNavigate()
  const [user, SetUser] = useState(false)
  const [activePlan, setActivePlan] = useState(false)

  const getUserActivePlan = async(userId) => {
    const { data, error } = await supabaseClient.from("Plan_users").select("id_plan").eq("id-user", userId).eq("Estatus", true) 
    console.log(data)
    if (error) {
      console.log(error)
      return
    } else if (data.length > 0) setActivePlan(true)
  }

  const logout = () => {
    
    sessionStorage.removeItem("Sesion")
    navigate("/")
  }

  useEffect(() => {

    if (!user) {
      ProtectPage().then(data => {
        SetUser(data.user)
      })
    }
    if (!activePlan) {
      console.log("ah bueno y tentonces")
      getUserActivePlan(user.id_user)
    }

  }, [activePlan, user])
  
  return (
    <>
      <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            href="https://flowbite.com"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} alt="logo" class="w-85 h-20 rounded-lg" />
          </Link>
          <button
            data-collapse-toggle="mega-menu-full"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu-full"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            id="mega-menu-full"
            class="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1"
          >
            <ul class="flex flex-col p-4  md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/home"
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  INICIO
                </Link>
              </li>

              <li>
                <Link
                  to="/plans"
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  PLANES
                </Link>
              </li>
              <li className={activePlan ? "hidden" : ""}>
                <Link
                  to="/order"
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  RESGISTRARME A UN PLAN
                </Link>
              </li>
              <li>
                <Link
                  to="/userplans"
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  MIS PLANES
                </Link>
              </li>

              <li>
                <Link
                  to="/editProfile"
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  PERFIL
                </Link>
              </li>
              <li>
                <Link
                  onClick={logout}
                  to="/login"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  SALIR
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarHome;