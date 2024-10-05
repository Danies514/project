import { useState } from "react";

export default function About() {
  const [currentAccordionPage, setCurrentAccordionPage] = useState(0);

  console.log(currentAccordionPage);

  return (
    <div className="About">
      <section class="bg-gray-950">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Vision
            </h2>
            <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              We envision a world free from insecurities. That’s why we’re
              excited to offer a collection of premium products crafted from
              trusted ingredients, designed to help you achieve a radiant,
              healthy complexion.
            </p>
          </div>
          <div class="grid mb-8 lg:mb-12 lg:grid-cols-2 border rounded-lg border-gray-100">
            <figure class="flex flex-col justify-center items-center p-8 text-center border-b border-gray-200 md:p-12 lg:border-r bg-slate-950 dark:border-gray-700 rounded-t-lg lg:rounded-tl-lg">
              <figcaption class="flex justify-center items-center space-x-3">
                <div
                  class="w-9 h-9 rounded-md bg-lime-400 flex items-center justify-center"
                  alt="profile picture"
                >
                  <svg
                    class="w-5 h-5 fill-lime-950"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5l88 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0-72 0s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440l0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z" />
                  </svg>
                </div>{" "}
                <div class="py-4 space-y-0.5 font-medium dark:text-white text-left">
                  <div>Natural</div>
                </div>
              </figcaption>
              <blockquote class="mx-auto max-w-2xl text-gray-500 dark:text-gray-400">
                <p class="my-4">
                  Natural ingredients are known to be kind to the skin and
                  planet. That's why we've implemented a nature-first approach
                  when formulating out products.
                </p>
              </blockquote>
            </figure>
            <figure class="flex flex-col justify-center items-center p-8 text-center border-b border-gray-200 md:p-12 lg:border-r bg-slate-950 dark:border-gray-700 lg:rounded-tr-lg">
              <figcaption class="flex justify-center items-center space-x-3">
                <div
                  class="w-9 h-9 rounded-md bg-yellow-400 flex items-center justify-center"
                  alt="profile picture"
                >
                  <svg
                    class="w-5 h-5 fill-yellow-950"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M288 0L160 0 128 0C110.3 0 96 14.3 96 32s14.3 32 32 32l0 132.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6C0 480.9 31.1 512 69.4 512l309.2 0c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5L320 64c17.7 0 32-14.3 32-32s-14.3-32-32-32L288 0zM192 196.8L192 64l64 0 0 132.8c0 23.7 6.6 46.9 19 67.1L309.5 320l-171 0L173 263.9c12.4-20.2 19-43.4 19-67.1z" />
                  </svg>{" "}
                </div>{" "}
                <div class="py-4 space-y-0.5 font-medium dark:text-white text-left">
                  <div>Clean</div>
                </div>
              </figcaption>
              <blockquote class="mx-auto max-w-2xl text-gray-500 dark:text-gray-400">
                <p class="my-4">
                  We are dedicated to clean formulations for all our products.
                  We exclude harmful and potentially harmful ingredients to
                  ensure our products are safe to use.
                </p>
              </blockquote>
            </figure>
            <figure class="flex flex-col justify-center items-center p-8 text-center border-b border-gray-200 md:p-12 lg:border-r bg-slate-950 dark:border-gray-700 lg:rounded-bl-lg">
              <figcaption class="flex justify-center items-center space-x-3">
                <div
                  class="w-9 h-9 rounded-md bg-purple-400 flex items-center justify-center"
                  alt="profile picture"
                >
                  <svg
                    class="w-5 h-5 fill-purple-950"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M116.7 33.8c4.5-6.1 11.7-9.8 19.3-9.8l240 0c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152zm38.5 39.8c-3.3 2.5-4.2 7-2.1 10.5l57.4 95.6L63.3 192c-4.1 .3-7.3 3.8-7.3 8s3.2 7.6 7.3 8l192 16c.4 0 .9 0 1.3 0l192-16c4.1-.3 7.3-3.8 7.3-8s-3.2-7.6-7.3-8L301.5 179.8l57.4-95.6c2.1-3.5 1.2-8.1-2.1-10.5s-7.9-2-10.7 1L256 172.2 165.9 74.6c-2.8-3-7.4-3.4-10.7-1z" />
                  </svg>
                </div>{" "}
                <div class="py-4 space-y-0.5 font-medium dark:text-white text-left">
                  <div>Premium</div>
                </div>
              </figcaption>
              <blockquote class="mx-auto max-w-2xl text-gray-500 dark:text-gray-400">
                <p class="my-4">
                  Sourcing the highest quality ingredients with results-driven
                  performance allows our customers to acheive their desired
                  outcome more effeciently and effectively.
                </p>
              </blockquote>
            </figure>
            <figure class="flex flex-col justify-center items-center p-8 text-cente border-b border-gray-200 md:p-12 lg:border-r bg-slate-950 dark:border-gray-700  rounded-b-lg lg:rounded-br-lg">
              <figcaption class="flex justify-center items-center space-x-3">
                <div
                  class="w-9 h-9 rounded-md bg-cyan-400 flex items-center justify-center"
                  alt="profile picture"
                >
                  <svg
                    class="w-5 h-5 fill-cyan-950"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5l0 39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9l0 39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7l0-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1L257 256c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                  </svg>
                </div>
                <div class="py-4 space-y-0.5 font-medium dark:text-white text-left">
                  <div>Sustainable</div>
                </div>
              </figcaption>
              <blockquote class="mx-auto max-w-2xl text-gray-500 dark:text-gray-400">
                <p class="my-4">
                  Sustainability isn't a second thought for us; our products and
                  packaging are thoughtfully designed to minimise environmental
                  impact, promoting a healthier planet.
                </p>
              </blockquote>
            </figure>
          </div>

          <div class="w-full border border-gray-100 rounded bg-slate-950">
            <ul
              class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg dark:border-gray-700 dark:text-gray-400 bg-slate-950"
              id="defaultTab"
              data-tabs-toggle="#defaultTabContent"
              role="tablist"
            >
              <li class="me-2">
                <button
                  onClick={() => setCurrentAccordionPage(0)}
                  id="about-tab"
                  data-tabs-target="#about"
                  type="button"
                  role="tab"
                  aria-controls="about"
                  aria-selected="true"
                  className={`inline-block p-4 ${
                    currentAccordionPage == 0
                      ? "text-blue-500"
                      : "text-gray-500"
                  } hover:bg-gray-100 bg-slate-950 dark:hover:bg-gray-700 rounded-tl-md`}
                >
                  Sourcing
                </button>
              </li>
              <li class="me-2">
                <button
                  onClick={() => setCurrentAccordionPage(1)}
                  id="services-tab"
                  data-tabs-target="#services"
                  type="button"
                  role="tab"
                  aria-controls="services"
                  aria-selected="false"
                  className={`inline-block p-4 ${
                    currentAccordionPage == 1
                      ? "text-blue-500"
                      : "text-gray-500"
                  } hover:bg-gray-100 bg-slate-950 dark:hover:bg-gray-700`}
                >
                  Sustainability
                </button>
              </li>
              <li class="me-2">
                <button
                  onClick={() => setCurrentAccordionPage(2)}
                  id="statistics-tab"
                  data-tabs-target="#statistics"
                  type="button"
                  role="tab"
                  aria-controls="statistics"
                  aria-selected="false"
                  className={`inline-block p-4 ${
                    currentAccordionPage == 2
                      ? "text-blue-500"
                      : "text-gray-500"
                  } hover:bg-gray-100 bg-slate-950 dark:hover:bg-gray-700`}
                >
                  Our Commitments
                </button>
              </li>
            </ul>
            <div id="defaultTabContent">
              <div
                className={`${
                  currentAccordionPage == 0 ? "block" : "hidden"
                } p-8 bg-white rounded-lg md:p-8 dark:bg-transparent`}
                id="about"
                role="tabpanel"
                aria-labelledby="about-tab"
              >
                <h2 class="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  Responsible Sourcing
                </h2>
                <p class="mb-3 text-gray-500 dark:text-gray-400 text-left">
                  Our careful sourcing process guarantees that our customers get
                  only the highest quality ingredients. We conduct thorough
                  research on our formulations and never use ingredients that
                  could pose health risks, allowing our customers to use our
                  products with complete confidence.
                </p>
              </div>
              <div
                className={`${
                  currentAccordionPage == 1 ? "block" : "hidden"
                } p-8 bg-white rounded-lg md:p-8 dark:bg-transparent`}
                id="services"
                role="tabpanel"
                aria-labelledby="services-tab"
              >
                <h2 class="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  Striving For Sustainability
                </h2>
                <p class="mb-3 text-gray-500 dark:text-gray-400 text-left">
                  We’re committed to a sustainable future, from the ingredients
                  we use in our products to the packaging that protects them.
                  We’re making every effort to achieve this by refining our
                  internal processes, such as optimizing our logistics routes
                  and using paper-based materials in our packaging to reduce
                  single-use plastics.
                </p>
              </div>
              <div
                className={`${
                  currentAccordionPage == 2 ? "block" : "hidden"
                } p-8 bg-white rounded-lg md:p-8 dark:bg-transparent`}
                id="statistics"
                role="tabpanel"
                aria-labelledby="statistics-tab"
              >
                <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  Our Commitment to Sustainable Beauty
                </h2>
                {/* <!-- List --> */}
                <ul
                  role="list"
                  class="space-y-4 text-gray-500 dark:text-gray-400"
                >
                  <li class="flex space-x-2 rtl:space-x-reverse items-center">
                    <svg
                      class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span class="leading-tight">
                      Sustainable Sourcing of Ingredients
                    </span>
                  </li>
                  <li class="flex space-x-2 rtl:space-x-reverse items-center">
                    <svg
                      class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span class="leading-tight">
                      Environmentally Friendly Packaging
                    </span>
                  </li>
                  <li class="flex space-x-2 rtl:space-x-reverse items-center">
                    <svg
                      class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span class="leading-tight">
                      Minimising Our Carbon Footprint
                    </span>
                  </li>
                  <li class="flex space-x-2 rtl:space-x-reverse items-center">
                    <svg
                      class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span class="leading-tight">
                      Transparency and Accountability
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
