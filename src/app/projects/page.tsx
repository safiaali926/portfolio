import Image from "next/image"; 
import Link from "next/link";

export default function Project() {
  return (
    <main className="h-auto bg-gradient-to-r from-teal-100 to-white">
      <h2 className="text-black font-bold text-xl pt-9 px-9">My Projects</h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-9 place-items-center">
       
         {/* Project Item 7 */}
         <div className="h-72 w-full sm:w-80 bg-white flex flex-col items-center justify-center m-4 rounded-lg shadow-md">
          <div className="h-48 w-64 relative overflow-hidden mt-3">
            <Image
              src="/hekto.jpeg"
              alt="bg"
              layout="fill"
              objectFit="cover"
              className="border-2 bg-white border-black rounded-xl"
            />
          </div>
          <h3 className="pt-5 hover:text-gray-600">
            <Link href="https://hackathon-ecommerce-phi.vercel.app/">E-Commerce Furniture Website</Link>
          </h3>
        </div>

 {/* Project Item 8 */}
 <div className="h-72 w-full sm:w-80 bg-white flex flex-col items-center justify-center m-4 rounded-lg shadow-md">
          <div className="h-48 w-64 relative overflow-hidden mt-3">
            <Image
              src="/Shiceria.jpeg"
              alt="bg"
              layout="fill"
              objectFit="cover"
              className="border-2 bg-white border-black rounded-xl"
            />
          </div>
          <h3 className="pt-5 hover:text-gray-600">
            <Link href="https://shiceria-shoe.vercel.app/">Shiceria - Shoe Website</Link>
          </h3>
        </div>

{/* Project Item 10 */}
<div className="h-72 w-full sm:w-80 bg-white flex flex-col items-center justify-center m-4 rounded-lg shadow-md">
          <div className="h-48 w-64 relative overflow-hidden mt-3">
            <Image
              src="/passwordapp.jpeg"
              alt="bg"
              layout="fill"
              objectFit="cover"
              className="border-2 bg-white border-black rounded-xl"
            />
          </div>
          <h3 className="pt-5 hover:text-gray-600">
            <Link href="https://safiaali926-password-strength-meter-main-mx18lj.streamlit.app/">Password Strength Meter</Link>
          </h3>
        </div>

        {/* Project Item 11 */}
<div className="h-72 w-full sm:w-80 bg-white flex flex-col items-center justify-center m-4 rounded-lg shadow-md">
          <div className="h-48 w-64 relative overflow-hidden mt-3">
            <Image
              src="/portfolio.jpeg"
              alt="bg"
              layout="fill"
              objectFit="cover"
              className="border-2 bg-white border-black rounded-xl"
            />
          </div>
          <h3 className="pt-5 hover:text-gray-600">
            <Link href="https://portfolio21-chi.vercel.app/">Profile Website</Link>
          </h3>
        </div>

        {/* Project Item 2 */}
        <div className="h-72 w-full sm:w-80 bg-white flex flex-col items-center justify-center m-4 rounded-lg shadow-md">
          <div className="h-48 w-64 relative overflow-hidden mt-3">
            <Image
              src="/todo.png"
              alt="bg"
              layout="fill"
              objectFit="cover"
              className="border-2 bg-white border-black rounded-xl"
            />
          </div>
          <h3 className="pt-5 hover:text-gray-600">
            <Link href="https://github.com/safiaali926/Todo-List">Todo-List</Link>
          </h3>
        </div>

        {/* Project Item 3 */}
        <div className="h-72 w-full sm:w-80 bg-white flex flex-col items-center justify-center m-4 rounded-lg shadow-md">
          <div className="h-48 w-64 relative overflow-hidden mt-3">
            <Image
              src="/cli.jpg"
              alt="bg"
              layout="fill"
              objectFit="cover"
              className="border-2 bg-white border-black rounded-xl"
            />
          </div>
          <h3 className="pt-5 hover:text-gray-600">
            <Link href="https://github.com/safiaali926/CLI-Number-Guessing">CLI Number Guessing Game</Link>
          </h3>
        </div>

        {/* Project Item 4 */}
        <div className="h-72 w-full sm:w-80 bg-white flex flex-col items-center justify-center m-4 rounded-lg shadow-md">
          <div className="h-48 w-64 relative overflow-hidden mt-3">
            <Image
              src="/CC.webp"
              alt="bg"
              layout="fill"
              objectFit="cover"
              className="border-2 bg-white border-black rounded-xl"
            />
          </div>
          <h3 className="pt-5 hover:text-gray-600">
            <Link href="https://github.com/safiaali926/Currency-Converter">Currency Converter</Link>
          </h3>
        </div>

        {/* Project Item 5 */}
        <div className="h-72 w-full sm:w-80 bg-white flex flex-col items-center justify-center m-4 rounded-lg shadow-md">
          <div className="h-48 w-64 relative overflow-hidden mt-3">
            <Image
              src="/wdc.webp"
              alt="bg"
              layout="fill"
              objectFit="cover"
              className="border-2 bg-white border-black rounded-xl"
            />
          </div>
          <h3 className="pt-5 hover:text-gray-600">
            <Link href="https://github.com/safiaali926/Word-Counter">Word Counter</Link>
          </h3>
        </div>

        {/* Project Item 6 */}
        <div className="h-72 w-full sm:w-80 bg-white flex flex-col items-center justify-center m-4 rounded-lg shadow-md">
          <div className="h-48 w-64 relative overflow-hidden mt-3">
            <Image
              src="/atm.avif"
              alt="bg"
              layout="fill"
              objectFit="cover"
              className="border-2 bg-white border-black rounded-xl"
            />
          </div>
          <h3 className="pt-5 hover:text-gray-600">
            <Link href="https://github.com/safiaali926/ATM-">ATM Machine</Link>
          </h3>
        </div>
 {/* Project Item 1 */}
        <div className="h-72 w-full sm:w-80 bg-white flex flex-col items-center justify-center m-4 rounded-lg shadow-md">
          <div className="h-48 w-64 relative overflow-hidden mt-3">
            <Image
              src="/p1.jpeg"
              alt="bg"
              layout="fill"
              objectFit="cover"
              className="border-2 bg-white border-black rounded-xl"
            />
          </div>
          <h3 className="pt-5 hover:text-gray-600">
            <Link href="https://food-website-olive-three.vercel.app/">E-commerce Food Website</Link>
          </h3>
        </div>
      </div>
    </main>
  );
}
