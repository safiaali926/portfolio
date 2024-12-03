import Image from "next/image";
import Link from "next/link";


function Footer() {
    return (<>
  <footer className="bg-gray-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 md:p-6 lg:p-8">
  <div>
    <Image src="/wlogo.png" alt="image" width={250} height={250} className="mx-auto md:mx-0 mt-7"></Image>
    <p className="mt-7 px-2 text-center text-white md:text-justify">Hi, I'm Safia Ali, a passionate web developer! Let's connect and discuss how I can bring your ideas to life. Contact me to get started!</p>
    
  </div>

  <div>
    <p className="mt-7 font-bold text-center text-teal-400 md:text-left">Subscribe to Our Newsletter!</p>
    <form action="#" className="mt-6">
      <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
        <div className="relative w-full">
          <label className="email hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
          </div>
          <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" placeholder="Enter your email" type="email" id="email" />
        </div>
        <div>
          <button type="submit" className="mx-1 py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg bg-teal-400 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 dark:bg-teal-400 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Subscribe</button>
        </div>
      </div>
      <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-400 newsletter-form-footer dark:text-gray-200">We care about the protection of your data. <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
    </form>

  </div>

  <div className="">
    <h1 className="mt-8 font-bold text-teal-400 text-center md:text-left">Quick Links</h1>
    <ul className="flex text-white flex-col items-center md:items-start">
      <li><Link href="/" className="hover:text-teal-400 rounded-2xl px-4 ">Home</Link></li>
      <li><Link href="/about" className="hover:text-teal-400 rounded-2xl px-4 ">About</Link></li>
      <li><Link href="/projects" className="hover:text-teal-400  rounded-2xl px-4 ">Projects</Link></li>
      <li><Link href="/contact" className="hover:text-teal-400  rounded-2xl px-4 ">Contact</Link></li>
    </ul>
  </div>

  <div>
    <h1 className="mt-8 font-bold text-center text-teal-400 md:text-left">Social Media Links</h1>
    <ul className=" text-white flex flex-col items-center md:items-start">
      <li><Link href="https://www.linkedin.com/in/safia-ali-012314215/" className=" hover:text-teal-400 rounded-2xl px-4 ">Linkedin</Link></li>
      <li><Link href="https://github.com/safiaali926" className=" hover:text-teal-400 rounded-2xl px-4 ">Github</Link></li>
    </ul>
  </div>
</footer>

<div className="bg-gray-900 text-white text-sm p-4 text-center">
  <ul className="flex flex-col lg:flex-row gap-y-2 lg:gap-x-9 justify-center">
    <li>Safia Ali Portfolio Copyright 2024, All Rights Reserved.</li>
    
  </ul>
</div>

   </>
   
   
   
   
    )
}

export default Footer;