import { useEffect, useState } from "react";
import { Link, Route, Routes, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Influencer from "./pages/Influencer";
import NoPage from "./pages/NoPage";

import "./App.css";

export default function App() {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <div className="App bg-gray-950 min-h-screen flex flex-col">
      <header class="sticky top-0 bg-gray-950 md:border-amber-500">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="home"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span class="self-center text-2xl font-semibold font-logo whitespace-nowrap text-white">
              TRIOSSE
            </span>
          </Link>

          <div class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              data-dropdown-toggle="language-dropdown-menu"
              class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/13/United-kingdom_flag_icon_round.svg"
                class="w-5 h-5 rounded-full me-2 object-cover"
                alt="Flowbite Logo"
              />
              English (UK)
            </button>

            <div
              class="hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
              id="language-dropdown-menu"
            ></div>

            <button
              onClick={() => setToggleNav(!toggleNav)}
              data-collapse-toggle="navbar-language"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-language"
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
          </div>

          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              toggleNav ? "block" : "hidden"
            } ease-in-out duration-300`}
            id="navbar-language"
          >
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-900 md:bg-transparent border-gray-700 text-white">
              <li>
                <NavLink
                  to="home"
                  onClick={() => {
                    setToggleNav(false);
                  }}
                  class={`block py-2 px-3 md:p-0 md:hover:bg-transparent md:hover:text-blue-500 hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700`}
                  className={({ isActive }) => [
                    isActive
                      ? "md:text-blue-500 bg-blue-700 block py-2 px-3 md:p-0 md:bg-transparent rounded"
                      : "text-white block py-2 px-3 md:p-0 md:hover:bg-transparent md:hover:text-blue-500 hover:bg-gray-700 rounded",
                  ]}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="products"
                  onClick={() => {
                    setToggleNav(false);
                  }}
                  class={`block py-2 px-3 md:p-0 rounded md:hover:bg-transparent md:hover:text-blue-500 hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700`}
                  className={({ isActive }) => [
                    isActive
                      ? "md:text-blue-500 bg-blue-700 block py-2 px-3 md:p-0 md:bg-transparent rounded"
                      : "text-white block py-2 px-3 md:p-0 md:hover:bg-transparent md:hover:text-blue-500 hover:bg-gray-700 rounded",
                  ]}
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about-us"
                  onClick={() => {
                    setToggleNav(false);
                  }}
                  class={`block py-2 px-3 md:p-0 rounded md:hover:bg-transparent md:hover:text-blue-500 hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700`}
                  className={({ isActive }) => [
                    isActive
                      ? "md:text-blue-500 bg-blue-700 block py-2 px-3 md:p-0 md:bg-transparent rounded"
                      : "text-white block py-2 px-3 md:p-0 md:hover:bg-transparent md:hover:text-blue-500 hover:bg-gray-700 rounded",
                  ]}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="influencer-program"
                  onClick={() => {
                    setToggleNav(false);
                  }}
                  class={`block py-2 px-3 md:p-0 rounded md:hover:bg-transparent md:hover:text-blue-500 hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700`}
                  className={({ isActive }) => [
                    isActive
                      ? "md:text-blue-500 bg-blue-700 block py-2 px-3 md:p-0 md:bg-transparent rounded"
                      : "text-white block py-2 px-3 md:p-0 md:hover:bg-transparent md:hover:text-blue-500 hover:bg-gray-700 rounded",
                  ]}
                >
                  Influencer Program
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/influencer-program" element={<Influencer />} />
        <Route path="*" element={<NoPage />} />
      </Routes>

      <footer class="p-4 md:p-8 lg:p-10 bg-gray-950 border-t border-gray-900 mt-auto">
        <div class="mx-auto max-w-screen-xl text-center">
          <div class="md:flex md:justify-between">
            <div class="flex items-center justify-center gap-2">
              <a
                href="#"
                class="flex justify-center items-center text-2xl font-semibold font-logo text-gray-900 dark:text-white"
              >
                TRIOSSE
              </a>
              <p class="text-white bg-blue-700 rounded-sm px-0.5 font-logo text-sm">
                Beta
              </p>
            </div>
            <p class="mb-6 md:my-6 text-gray-500 dark:text-gray-400">
              The Intrinsic Evolution to Beauty.
            </p>
          </div>

          <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
              <Link
                to="home"
                onClick={() => {
                  setToggleNav(false);
                }}
                class="mr-4 hover:underline md:mr-6 "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="products"
                onClick={() => {
                  setToggleNav(false);
                }}
                class="mr-4 hover:underline md:mr-6"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="about-us"
                onClick={() => {
                  setToggleNav(false);
                }}
                class="mr-4 hover:underline md:mr-6 "
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="influencer-program"
                onClick={() => {
                  setToggleNav(false);
                }}
                class="mr-4 hover:underline md:mr-6"
              >
                Influencer Program
              </Link>
            </li>
          </ul>

          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a href="https://triose.com" class="hover:underline">
                {" "}
                TRIOSSE™
              </a>
              . All Rights Reserved.
            </span>
            <div class="flex mt-4 space-x-6 justify-center sm:mt-0">
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/triossecosmetics/"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://x.com/triossebeauty"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/@triosse"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-youtube w-5 h-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/triosse/"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-linkedin w-5 h-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
