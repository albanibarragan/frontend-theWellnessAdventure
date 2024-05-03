import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const PlanesPrincipal = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="planes" id="planes">
        <section class="text-white body-font">
          <div class="bg-white container px-5 py-24 mx-auto ">
            <div class=" flex flex-wrap -m-4">
              <div class="p-4 lg:w-1/3 ">
                <div class="h-full bg-blue-500 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative ">

                  <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-100 mb-3">
                    PLAN PRO INICIAL
                  </h1>

                  <div class="  p-8 ">
                    <h2 class="font-medium title-font tracking-widest text-gray-100 mb-4 text-sm text-center sm:text-left">
                      $25"Mensual"
                    </h2>
                    <hr />
                    <h2 class="font-medium title-font tracking-widest text-gray-100 mb-4 text-sm text-center sm:text-left">
                      ¿Qué contiene?
                    </h2>
                    <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">

                      <a>
                        <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                            class="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Mejorar la flexibilidad y equilibrio
                      </a>
                      <a>
                        <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                            class="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Te permite pasar un tiempo diferente
                      </a>
                      <a>
                        <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                            class="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Fomenta la relajacion y el bienestar emocional
                      </a>
                    </nav>
                  </div>
                  <div class="flex justify-center">
                    <button
                      onClick={onClick}
                      class="flex items-center text-white bg-gray-400 border-0 py-2 px-4 focus:outline-none hover:bg-gray-500 rounded"
                    >
                      ¿Comenzamos?
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                  <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4 bg-blue-800">
                    <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/3">
                <div class="h-full  bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative bg-gray-950">
                  <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-100 mb-3">
                    PLAN INICIAL
                  </h1>

                  <div class="  p-8 ">
                    <h2 class="font-medium title-font tracking-widest text-gray-100 mb-4 text-sm text-center sm:text-left">
                      $15 "Mensual"
                    </h2>
                    <hr />
                    <h2 class="font-medium title-font tracking-widest text-gray-100 mb-4 text-sm text-center sm:text-left">
                      ¿Qué contiene?
                    </h2>
                    <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                      <a>
                        <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                            class="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Estimula la coordinación y el equilibrio
                      </a>
                      <a>
                        <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                            class="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Fomenta una alimentación saludable y socialización
                      </a>
                      <a>
                        <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                            class="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Programa en la parte de relajación de los residentes, para una mejor tranquilidad y estilo de vida
                      </a>
                    </nav>
                  </div>

                  <div class="flex justify-center">
                    <button
                      onClick={onClick}
                      class="flex items-center text-white bg-gray-400 border-0 py-2 px-4 focus:outline-none hover:bg-gray-500 rounded"
                    >
                      ¿Comenzamos?
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                  <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4 bg-blue-800">
                    <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>

              <div class="p-4 lg:w-1/3">
                <div class="h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative bg-blue-500">
                  <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-100 mb-3">
                    PLAN INICIAL BIENESTAR ESCENCIAL
                  </h1>

                  <div class="  p-8 ">
                    <h2 class="font-medium title-font tracking-widest text-gray-100 mb-4 text-sm text-center sm:text-left">
                      $20 "Mensual"
                    </h2>
                    <hr />
                    <h2 class="font-medium title-font tracking-widest text-gray-100 mb-4 text-sm text-center sm:text-left">
                      ¿Qué contiene?
                    </h2>
                    <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                      <a>
                        <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                            class="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Fortalece los músculos y las articulaciones
                      </a>
                      <a>
                        <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                            class="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Mejora la resistencia cardiovascular
                      </a>
                      <a>
                        <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                            class="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Estimula la creatividad y el contacto con la naturaleza
                      </a>

                    </nav>
                  </div>

                  <div class="flex justify-center">
                    <button
                      onClick={onClick}
                      class="flex items-center text-white bg-gray-400 border-0 py-2 px-4 focus:outline-none hover:bg-gray-500 rounded"
                    >
                      ¿Comenzamos?
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>

                  <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4 bg-blue-800">
                    <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PlanesPrincipal;
