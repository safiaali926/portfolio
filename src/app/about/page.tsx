import Image from "next/image";

export default function About() {
  return (
<main className="h-screen bg-gradient-to-r from-teal-100 to-white">
    {/*<Image src="/bg.jpg" alt="bg" width={1200} height={200} className="w-full"></Image>*/}
<div className="max-w-5xl items-center justify-center text-justify p-9">
   <h2 className="text-black font-bold">About me</h2>
    <p>Hi, I'm Safia Ali, a 22-year-old driven student of the prestigious Artificial Intelligence, Web 3.0, and Metaverse course initiated by Kamran Tessori, the Governor of Sindh, since February 2024.</p>

<br></br>
<p>I've developed a strong foundation in cutting-edge technologies, including Next.js, Tailwind CSS, TypeScript, JavaScript, HTML, and CSS. I'm now seeking an internship opportunity to apply my knowledge in a real-world setting, leveraging my passion for AI, Web 3.0, and Metaverse to drive innovation and growth.</p>
</div>

<div className=" text-black font-bold text-xl p-9">Skills</div>

<div className="grid grid-cols-4 place-items-center gap-x-3">

<div className="bg-white h-24 w-48 content-center px-5">
  <Image src="/next.svg" alt="bg" width={200} height={200} className=""></Image>
</div>

<div className="bg-white h-24 w-48 content-center px-3">
  <Image src="/tcss.png" alt="bg" width={200} height={200} className=""></Image>
</div>

<div className="bg-white h-24 w-48 content-center px-2">
  <Image src="/ts.png" alt="bg" width={200} height={200} className=""></Image>
</div>


<div className="bg-white h-24 w-48 content-center px-2">
  <Image src="/js.png" alt="bg" width={200} height={200} className=""></Image>
</div>

<div className="bg-white h-24 w-48 content-center px-5 mt-9">
  <Image src="/react.png" alt="bg" width={200} height={200} className=""></Image>
</div>


<div className="bg-white h-24 w-48 content-center px-7 mt-9">
  <Image src="/html.png" alt="bg" width={200} height={200} className=""></Image>
</div>


<div className="bg-white h-24 w-48 content-center px-7 mt-9">
  <Image src="/css.png" alt="bg" width={200} height={200} className=""></Image>
</div>


<div className="bg-white h-24 w-48 content-center px-7 mt-9">
  <Image src="/github.webp" alt="bg" width={200} height={200} className=""></Image>
</div>




</div>
    </main>
  );
}
