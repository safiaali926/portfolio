import Image from "next/image";

export default function About() {
  return (
    <main className="h-auto bg-gradient-to-r from-teal-100 to-white">
      {/* About Section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="max-w-5xl items-center justify-center text-justify p-9">
        <h2 className="text-black font-bold text-2xl">About me</h2>
        <p>Hi, I'm Safia Ali, a 22-year-old driven student of the prestigious Artificial Intelligence, Web 3.0, and Metaverse course initiated by Kamran Tessori, the Governor of Sindh, since February 2024.</p>

        <br />
        <p>I've developed a strong foundation in cutting-edge technologies, including Next.js, Tailwind CSS, TypeScript, JavaScript, HTML, and CSS. I'm now seeking an internship opportunity to apply my knowledge in a real-world setting, leveraging my passion for AI, Web 3.0, and Metaverse to drive innovation and growth.</p>
      </div>

      <div className="place-items-center justify-center"> <Image src="/ab.png" alt="Next.js" width={500} height={500} className="object-contain p-4" /></div>
      </div>

      {/* Skills Section */}
      <div className="text-black font-bold text-xl p-9">Skills</div>

      {/* Skill Icons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-9">
        {/* Skill 1 */}
        <div className="bg-white h-24 w-48 flex items-center justify-center">
          <Image src="/next.svg" alt="Next.js" width={200} height={200} className="object-contain p-4" />
        </div>

        {/* Skill 2 */}
        <div className="bg-white h-24 w-48 flex items-center justify-center">
          <Image src="/tcss.png" alt="Tailwind CSS" width={200} height={200} className="object-contain p-2" />
        </div>

        {/* Skill 3 */}
        <div className="bg-white h-24 w-48 flex items-center justify-center">
          <Image src="/ts.png" alt="TypeScript" width={200} height={200} className="object-contain" />
        </div>

        {/* Skill 4 */}
        <div className="bg-white h-24 w-48 flex items-center justify-center">
          <Image src="/js.png" alt="JavaScript" width={200} height={200} className="object-contain" />
        </div>

        {/* Skill 5 */}
        <div className="bg-white h-24 w-48 flex items-center justify-center mt-9">
          <Image src="/react.png" alt="React" width={200} height={200} className="object-contain p-4" />
        </div>

        {/* Skill 6 */}
        <div className="bg-white h-24 w-48 flex items-center justify-center mt-9">
          <Image src="/html.png" alt="HTML" width={200} height={200} className="object-contain p-4" />
        </div>

        {/* Skill 7 */}
        <div className="bg-white h-24 w-48 flex items-center justify-center mt-9">
          <Image src="/css.png" alt="CSS" width={200} height={200} className="object-contain p-4" />
        </div>

        {/* Skill 8 */}
        <div className="bg-white h-24 w-48 flex items-center justify-center mt-9">
          <Image src="/github.webp" alt="GitHub" width={200} height={200} className="object-contain p-4" />
        </div>


         {/* Skill 9 */}
         <div className="bg-white h-24 w-48 flex items-center justify-center mt-9">
          <Image src="/python.png" alt="Python" width={200} height={200} className="object-contain p-4" />
        </div>

        {/* Skill 10 */}
        <div className="bg-white h-24 w-48 flex items-center justify-center mt-9">
          <Image src="/streamlit.png" alt="Streamlit" width={200} height={200} className="object-contain p-4" />
        </div>

      </div>
    </main>
  );
}
