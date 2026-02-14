import React from "react";
import Image from "next/image";

/**
 * NextJS Resume Page (app directory / pages)
 * - Tailwind CSS required in the project
 * - Place this file as /app/resume/page.tsx or in /pages/resume.tsx
 *
 * Enhanced with professional gradient adjustments and improved color consistency
 */

export default function ResumePage() {
  return (
    <main className="min-h-screen py-10 text-gray-800 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-5xl p-6 mx-auto">
        <header className="flex flex-col items-center gap-6 md:flex-row">
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold leading-tight">Faysal Chowdhury</h1>
            <p className="mt-1 text-gray-600 dark:text-gray-300">Web Developer • Laravel / WordPress / Frontend / Backend</p>
            <div className="flex flex-wrap gap-3 mt-4">
              {/* Enhanced Gradient - More cohesive and professional */}
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 text-sm text-white transition-all duration-200 border border-transparent rounded-full shadow bg-gradient-to-r from-indigo-700 to-indigo-500 hover:from-indigo-800 hover:to-indigo-600">
                Contact
              </a>
              <a href="#portfolio" className="inline-flex items-center gap-2 px-4 py-2 text-sm text-indigo-700 transition-colors border border-indigo-100 rounded-full dark:text-indigo-300 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-900">
                Portfolio
              </a>
              <a href="#experience" className="inline-flex items-center gap-2 px-4 py-2 text-sm transition-colors border rounded-full hover:bg-gray-50 dark:hover:bg-gray-800">
                Experience
              </a>
              <a href="#education" className="inline-flex items-center gap-2 px-4 py-2 text-sm transition-colors border rounded-full hover:bg-gray-50 dark:hover:bg-gray-800">
                Education
              </a>
            </div>
          </div>
          <div className="w-40 text-center">
            <div className="w-32 h-32 mx-auto overflow-hidden rounded-full shadow-lg ring-4 ring-white dark:ring-gray-800">
              <img src="/image/Faysal.jpg" alt="avatar" className="object-cover w-full h-full"/>
            </div>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">Bangladesh • Open to opportunities</p>
            {/* <div className="flex justify-center gap-2 mt-3">
              <a href="#download" className="px-3 py-1 text-xs transition-colors border rounded-full hover:bg-gray-50 dark:hover:bg-gray-800">
                Download
              </a>
            </div> */}
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-3">
          <section className="space-y-6 lg:col-span-2">
            <article className="p-6 bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-start justify-between">
                <h2 className="text-2xl font-semibold">Profile</h2>
                <div className="text-sm text-gray-500 dark:text-gray-400">Updated • 2025</div>
              </div>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-200">
                Creative and dependable web developer with strong experience in building modern websites and web apps using Laravel, WordPress, and modern frontend technologies.
                Skilled in responsive design, UI/UX, and delivering production-ready code.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 text-sm text-indigo-700 border border-indigo-100 rounded-full bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800">
                  PHP
                </span>
                <span className="px-3 py-1 text-sm text-indigo-700 border border-indigo-100 rounded-full bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 text-sm text-indigo-700 border border-indigo-100 rounded-full bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800">
                  Laravel
                </span>
                <span className="px-3 py-1 text-sm text-indigo-700 border border-indigo-100 rounded-full bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800">
                  WordPress
                </span>
                <span className="px-3 py-1 text-sm text-indigo-700 border border-indigo-100 rounded-full bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800">
                  MySQL
                </span>
              </div>
            </article>

            <article id="experience" className="p-6 bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <h3 className="text-xl font-semibold">Work Experience</h3>
              <div className="mt-4 space-y-4">
                <div className="flex gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-indigo-700 to-indigo-500 mt-2"></div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">23/05/2023 — 09/06/2023</div>
                    <div className="font-semibold">Web Developer(Contractual)</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Freelance / Remote</div>
                      <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">
                        Built online property listing website that needs a modern and user-
                        friendly website. I designed and developed a responsive WordPress website, optimizing it for both desktop and mobile devices.
                      </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-indigo-700 to-indigo-500 mt-2"></div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">2017 — 2018</div>
                    <div className="font-semibold">Web Developer & Designer</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Agency</div>
                      <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">
                        Full stack web developer responsible for end-to-end web app development.
                        Designing and developing visually appealing and user-friendly websites and
                        web applications. Collaborating with cross-functional teams to gather project
                        requirements and ensure alignment with client objectives.
                      </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-indigo-700 to-indigo-500 mt-2"></div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">2014 — 2016</div>
                    <div className="font-semibold">IT & Web Developer</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Agency</div>
                      <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">
                        Providing daily operational support and system administration for IT system
                        infrastructure. Developing an official eCommerce website within official requirements.
                      </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-indigo-700 to-indigo-500 mt-2"></div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">2010 — 2013</div>
                    <div className="font-semibold">Web Developer</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Agency</div>
                      <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">
                        Full stack web developer responsible for end-to-end web app development.
                        Designing and developing visually appealing and user-friendly websites and web
                        applications. Collaborating with cross-functional teams to gather project
                        requirements and ensure alignment with client objectives.
                      </p>
                  </div>
                </div>
              </div>
            </article>

            <article id="education" className="p-6 bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <h3 className="text-xl font-semibold">Education</h3>
              <div className="mt-4 space-y-4">
                <div className="flex gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-indigo-700 to-indigo-500 mt-2"></div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">2017</div>
                    <div className="font-semibold">Bachelor of Science in Computer Science</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Asian University of Bangladesh</div>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">Graduated with honors. Focused on software engineering, web technologies, and database management systems.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-indigo-700 to-indigo-500 mt-2"></div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">2010</div>
                    <div className="font-semibold">Diploma In Computer Technology</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Coputer Technology • Bangladesh Institute of Information Technology (BIIT)</div>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">Completed with focus on Coputer Technology, Mathematics, Physics, and Chemistry. Developed strong analytical and problem-solving skills.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-indigo-700 to-indigo-500 mt-2"></div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">2004</div>
                    <div className="font-semibold">Secondary School Certificate</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Science • Baliher High School</div>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">Passed with excellent results. Developed foundation in computer science and mathematics.</p>
                  </div>
                </div>
              </div>
            </article>

            <article id="portfolio" className="p-6 bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <h3 className="text-xl font-semibold">Portfolio</h3>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                
                {/* Project 1 */}
                <a className="block overflow-hidden transition-all duration-200 bg-white border border-gray-200 rounded-lg group dark:border-gray-700 hover:shadow-lg dark:bg-gray-800" href="https://estateflow.kesug.com" target="_blank" rel="noreferrer">
                  <div className="relative w-full overflow-hidden bg-gray-100 aspect-video dark:bg-gray-900">
                    <Image 
                      src="/image/Projects/EstateFlow.png" // Change to your actual file name
                      alt="Estateflow (Real Estate)"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="font-semibold text-indigo-600 dark:text-indigo-400">Estateflow (Real Estate)</div>
                    <div className="mt-1 text-sm text-gray-500">Wordpress</div>
                  </div>
                </a>

                {/* Project 2 */}
                <a className="block overflow-hidden transition-all duration-200 bg-white border border-gray-200 rounded-lg group dark:border-gray-700 hover:shadow-lg dark:bg-gray-800" href="https://woodmart.wuaze.com/" target="_blank" rel="noreferrer">
                  <div className="relative w-full overflow-hidden bg-gray-100 aspect-video dark:bg-gray-900">
                    <Image 
                      src="/image/Projects/Woodmart.png" // Change to your actual file name
                      alt="Woodmart (Furniture Store)"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="font-semibold text-indigo-600 dark:text-indigo-400">Woodmart (Furniture Store)</div>
                    <div className="mt-1 text-sm text-gray-500">Wordpress</div>
                  </div>
                </a>

                    
                {/* Project 3 */}
                <a className="block overflow-hidden transition-all duration-200 bg-white border border-gray-200 rounded-lg group dark:border-gray-700 hover:shadow-lg dark:bg-gray-800" href="http://mymart.nichesite.org" target="_blank" rel="noreferrer">
                  <div className="relative w-full overflow-hidden bg-gray-100 aspect-video dark:bg-gray-900">
                    <Image 
                      src="/image/Projects/Mymart.png" // Change to your actual file name
                      alt="SaaS Landing Page"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="font-semibold text-indigo-600 dark:text-indigo-400">Mymart (Vegetarian Store)</div>
                    <div className="mt-1 text-sm text-gray-500">Wordpress</div>
                  </div>
                </a>

                    {/* Project 4 */}
                <a className="block overflow-hidden transition-all duration-200 bg-white border border-gray-200 rounded-lg group dark:border-gray-700 hover:shadow-lg dark:bg-gray-800" href="https://github.com/faysalchowdhuryeng-spec/filakit" target="_blank" rel="noreferrer">
                  <div className="relative w-full overflow-hidden bg-gray-100 aspect-video dark:bg-gray-900">
                    <Image 
                      src="/image/Projects/main_dashboard.jpg" // Change to your actual file name
                      alt="Portfolio Builder"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="font-semibold text-indigo-600 dark:text-indigo-400">Filakit (Filament Tenant Kit)</div>
                    <div className="mt-1 text-sm text-gray-500">Laravel</div>
                  </div>
                </a>

                {/* Project 5 */}
                <a className="block overflow-hidden transition-all duration-200 bg-white border border-gray-200 rounded-lg group dark:border-gray-700 hover:shadow-lg dark:bg-gray-800" href="http://carclaro.infinityfreeapp.com" target="_blank" rel="noreferrer">
                  <div className="relative w-full overflow-hidden bg-gray-100 aspect-video dark:bg-gray-900">
                    <Image 
                      src="/image/Projects/listing.png" // Change to your actual file name
                      alt="ListingPro (Classified Ads)"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="font-semibold text-indigo-600 dark:text-indigo-400">ListingPro (Classified Ads)</div>
                    <div className="mt-1 text-sm text-gray-500">Wordpress</div>
                  </div>
                </a>

                    
                {/* Project 6 */}
                <a className="block overflow-hidden transition-all duration-200 bg-white border border-gray-200 rounded-lg group dark:border-gray-700 hover:shadow-lg dark:bg-gray-800" href="https://tripvibe.lovestoblog.com/" target="_blank" rel="noreferrer">
                  <div className="relative w-full overflow-hidden bg-gray-100 aspect-video dark:bg-gray-900">
                    <Image 
                      src="/image/Projects/tripvibe.jpg" // Change to your actual file name
                      alt="SaaS Landing Page"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="font-semibold text-indigo-600 dark:text-indigo-400">Tripvibe</div>
                    <div className="mt-1 text-sm text-gray-500">Wordpress</div>
                  </div>
                </a>

                {/* Project 7 */}
                <a className="block overflow-hidden transition-all duration-200 bg-white border border-gray-200 rounded-lg group dark:border-gray-700 hover:shadow-lg dark:bg-gray-800" href="#" target="_blank" rel="noreferrer">
                  <div className="relative w-full overflow-hidden bg-gray-100 aspect-video dark:bg-gray-900">
                    <Image 
                      src="/image/Projects/gardenServicesthmb.jpg" // Change to your actual file name
                      alt="Portfolio Builder"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="font-semibold text-indigo-600 dark:text-indigo-400">Clenning Services (Client's Demo)</div>
                    <div className="mt-1 text-sm text-gray-500">Wordpress</div>
                  </div>
                </a>

                    
                {/* Project 8 */}
                <a className="block overflow-hidden transition-all duration-200 bg-white border border-gray-200 rounded-lg group dark:border-gray-700 hover:shadow-lg dark:bg-gray-800" href="https://eastendlogistics.com/" target="_blank" rel="noreferrer">
                  <div className="relative w-full overflow-hidden bg-gray-100 aspect-video dark:bg-gray-900">
                    <Image 
                      src="/image/Projects/est_end_logistics.jpg" // Change to your actual file name
                      alt="SaaS Landing Page"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="font-semibold text-indigo-600 dark:text-indigo-400">East End Logistics</div>
                    <div className="mt-1 text-sm text-gray-500">Wordpress</div>
                  </div>
                </a>

                {/* Project 9 */}
                <a className="block overflow-hidden transition-all duration-200 bg-white border border-gray-200 rounded-lg group dark:border-gray-700 hover:shadow-lg dark:bg-gray-800" href="https://www.harleystreetgynaecology.com/" target="_blank" rel="noreferrer">
                  <div className="relative w-full overflow-hidden bg-gray-100 aspect-video dark:bg-gray-900">
                    <Image 
                      src="/image/Projects/harleystreetgynaecology.jpg" // Change to your actual file name
                      alt="Portfolio Builder"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="font-semibold text-indigo-600 dark:text-indigo-400">Harleystreet Gynaecology</div>
                    <div className="mt-1 text-sm text-gray-500">Laravel</div>
                  </div>
                </a>

                    {/* Project 10 */}
                <a className="block overflow-hidden transition-all duration-200 bg-white border border-gray-200 rounded-lg group dark:border-gray-700 hover:shadow-lg dark:bg-gray-800" href="https://dev-shopnexa.pantheonsite.io/" target="_blank" rel="noreferrer">
                  <div className="relative w-full overflow-hidden bg-gray-100 aspect-video dark:bg-gray-900">
                    <Image 
                      src="/image/Projects/ShopNexa.jpg" // Change to your actual file name
                      alt="Portfolio Builder"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="font-semibold text-indigo-600 dark:text-indigo-400">Shop Nexa Medical Store (Sandbox Env)</div>
                    <div className="mt-1 text-sm text-gray-500">Wordpress</div>
                  </div>
                </a>

                    {/* Project 11 */}
                <a className="block overflow-hidden transition-all duration-200 bg-white border border-gray-200 rounded-lg group dark:border-gray-700 hover:shadow-lg dark:bg-gray-800" href="https://dev-mydemosite10.pantheonsite.io/" target="_blank" rel="noreferrer">
                  <div className="relative w-full overflow-hidden bg-gray-100 aspect-video dark:bg-gray-900">
                    <Image 
                      src="/image/Projects/FreshFork.jpg" // Change to your actual file name
                      alt="Portfolio Builder"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="font-semibold text-indigo-600 dark:text-indigo-400">Fresh Fork Restaurant (Sandbox Env)</div>
                    <div className="mt-1 text-sm text-gray-500">Wordpress</div>
                  </div>
                </a>

                    {/* Project 12 */}
                <a className="block overflow-hidden transition-all duration-200 bg-white border border-gray-200 rounded-lg group dark:border-gray-700 hover:shadow-lg dark:bg-gray-800" href="#" target="_blank" rel="noreferrer">
                  <div className="relative w-full overflow-hidden bg-gray-100 aspect-video dark:bg-gray-900">
                    <Image 
                      src="/image/Projects/Vertex.jpg" // Change to your actual file name
                      alt="Portfolio Builder"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="font-semibold text-indigo-600 dark:text-indigo-400">Vertex Propertise</div>
                    <div className="mt-1 text-sm text-gray-500">Wordpress</div>
                  </div>
                </a>

                    {/* Project 13 */}
                <a className="block overflow-hidden transition-all duration-200 bg-white border border-gray-200 rounded-lg group dark:border-gray-700 hover:shadow-lg dark:bg-gray-800" href="https://brunswickelectrical.com.au/" target="_blank" rel="noreferrer">
                  <div className="relative w-full overflow-hidden bg-gray-100 aspect-video dark:bg-gray-900">
                    <Image 
                      src="/image/Projects/Electrician Brunswick.png" // Change to your actual file name
                      alt="Portfolio Builder"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="font-semibold text-indigo-600 dark:text-indigo-400">Eastoe Electrical</div>
                    <div className="mt-1 text-sm text-gray-500">Wordpress</div>
                  </div>
                </a>

                    {/* Project 14 */}
                <a className="block overflow-hidden transition-all duration-200 bg-white border border-gray-200 rounded-lg group dark:border-gray-700 hover:shadow-lg dark:bg-gray-800" href="https://othervisionltd.com/" target="_blank" rel="noreferrer">
                  <div className="relative w-full overflow-hidden bg-gray-100 aspect-video dark:bg-gray-900">
                    <Image 
                      src="/image/Projects/Other Vision.png" // Change to your actual file name
                      alt="Portfolio Builder"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="font-semibold text-indigo-600 dark:text-indigo-400">Other Vision ltd.</div>
                    <div className="mt-1 text-sm text-gray-500">Wordpress</div>
                  </div>
                </a>

              </div>
            </article>

            <article id="skills" className="p-6 bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <h3 className="text-xl font-semibold">Skills & Tools</h3>
              <div className="grid grid-cols-2 gap-3 mt-4 sm:grid-cols-3">
                <div>
                  <div className="text-sm font-medium">HTML / CSS</div>
                  <div className="w-full h-2 mt-2 overflow-hidden bg-gray-200 rounded dark:bg-gray-700">
                    <div style={{width: '95%'}} className="h-2 bg-gradient-to-r from-indigo-700 to-indigo-500"></div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium">JavaScript</div>
                  <div className="w-full h-2 mt-2 overflow-hidden bg-gray-200 rounded dark:bg-gray-700">
                    <div style={{width: '50%'}} className="h-2 bg-gradient-to-r from-indigo-700 to-indigo-500"></div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium">PHP</div>
                  <div className="w-full h-2 mt-2 overflow-hidden bg-gray-200 rounded dark:bg-gray-700">
                    <div style={{width: '88%'}} className="h-2 bg-gradient-to-r from-indigo-700 to-indigo-500"></div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium">Laravel</div>
                  <div className="w-full h-2 mt-2 overflow-hidden bg-gray-200 rounded dark:bg-gray-700">
                    <div style={{width: '80%'}} className="h-2 bg-gradient-to-r from-indigo-700 to-indigo-500"></div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium">WordPress</div>
                  <div className="w-full h-2 mt-2 overflow-hidden bg-gray-200 rounded dark:bg-gray-700">
                    <div style={{width: '90%'}} className="h-2 bg-gradient-to-r from-indigo-700 to-indigo-500"></div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium">Mysql Database</div>
                  <div className="w-full h-2 mt-2 overflow-hidden bg-gray-200 rounded dark:bg-gray-700">
                    <div style={{width: '80%'}} className="h-2 bg-gradient-to-r from-indigo-700 to-indigo-500"></div>
                  </div>
                </div>
              </div>
            </article>
          </section>

          <aside className="space-y-6">
            <div id="contact" className="p-6 bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <h4 className="text-lg font-semibold">Contact</h4>
              <div className="mt-3 text-sm">
                <div><strong>Email:</strong> <a href="mailto:faysalchowdhury.eng@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">faysalchowdhury.eng@gmail.com</a></div>
                <div className="mt-2"><strong>Phone:</strong> +880-1717496692</div>
                <div className="mt-2"><strong>Location:</strong> Naogaon, Bangladesh</div>
              </div>
              <div className="flex gap-3 mt-4">
                <a href="https://github.com/faysalchowdhuryeng-spec" className="px-3 py-2 text-sm transition-colors border border-gray-200 rounded dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:border-indigo-200 dark:hover:border-indigo-800">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/faysal-chowdhury/" className="px-3 py-2 text-sm transition-colors border border-gray-200 rounded dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:border-indigo-200 dark:hover:border-indigo-800">
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="p-6 bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <h4 className="text-lg font-semibold">Resume</h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Download a printable PDF version of this resume.</p>
              <div className="flex gap-2 mt-4">
                <a id="download" href="/Faysal_Chowdhury.pdf" download className="px-4 py-2 text-white transition-all duration-200 rounded shadow bg-gradient-to-r from-indigo-700 to-indigo-500 hover:from-indigo-800 hover:to-indigo-600">
                  Download Resume
                </a>
                <a href="#" className="px-4 py-2 transition-colors border border-gray-200 rounded dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                  Print
                </a>
              </div>
            </div>

            <div className="p-6 bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">Portfolio Site</a></li>
                <li><a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">Projects</a></li>
                <li><a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">Contact Form</a></li>
              </ul>
            </div>

            {/* <div className="p-6 bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <h4 className="text-lg font-semibold">Certifications</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-700 to-indigo-500"></div>
                  <span>Laravel Certified Developer</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-700 to-indigo-500"></div>
                  <span>Google Mobile Web Specialist</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-700 to-indigo-500"></div>
                  <span>AWS Cloud Practitioner</span>
                </li>
              </ul>
            </div>  */}
          </aside>
        </div>

        <footer className="mt-8 text-sm text-center text-gray-500 dark:text-gray-400">
          © 2025 Faysal Chowdhury — Built with Tailwind CSS
        </footer>
      </div>
    </main>
  );
}