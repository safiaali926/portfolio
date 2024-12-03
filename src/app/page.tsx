'use client';

import React from "react";
import Image from "next/image";

export default function Home() {
  const steps = [
    {
      id: 1,
      title: "Share Your Vision",
      description:
        "Reach out to share your project needs. Whether it's a brand-new web application or improving an existing one, let's discuss your vision, goals, and requirements. I'm here to listen and guide you.",
      color: "text-teal-400",
      borderColor: "border-teal-400",
    },
    {
      id: 2,
      title: "Get a Custom Plan",
      description:
        "After understanding your needs, I'll prepare a personalized development plan, complete with timelines, milestones, and actionable steps. You'll have a clear idea of how your web app will take shape.",
      color: "text-teal-500",
      borderColor: "border-teal-500",
    },
    {
      id: 3,
      title: "Launch Your Web Application",
      description:
        "From development to testing and deployment, I'll handle it all. Regular updates ensure you're involved at every step, and the final product will be responsive, efficient, and tailored to your audience.",
      color: "text-teal-600",
      borderColor: "border-teal-600",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-r from-teal-100 to-white">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 p-9 gap-6 items-center">
        <div>
          <h1 className="text-2xl font-bold">Innovative Code, Exceptional Design, <br /> Outstanding Results!</h1>
          <h2 className="text-justify pt-3 pr-4">
            Hello! I'm Safia Ali, a passionate developer skilled in Next.js, HTML, JavaScript, TypeScript, CSS, and Tailwind CSS, specializing in creating seamless, high-performance web applications.
          </h2>
          <button className="bg-teal-300 px-4 py-2 rounded hover:bg-teal-500 mt-3 text-md">Hire Me</button>
        </div>
        <div className="flex justify-center">
          <Image src="/profile.jpg" alt="profile" width={300} height={300} className="border-4 rounded-full border-teal-200" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 p-9 bg-black text-white gap-6">
        <div className="text-center">
          <h2 className="text-xl">Projects Developed</h2>
          <h2 className="text-teal-300 font-bold text-6xl md:text-8xl pt-7">15+</h2>
        </div>
        <div className="text-center">
          <h2 className="text-xl">Years of Experience</h2>
          <h2 className="text-teal-300 font-bold text-6xl md:text-8xl pt-7">2+</h2>
        </div>
        <div className="text-center">
          <h2 className="text-xl">Reviews</h2>
          <h2 className="text-teal-300 font-bold text-6xl md:text-8xl pt-7">20+</h2>
        </div>
      </div>

      {/* Hire Me Steps Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Hire Me as your <span className="text-teal-500">Software Developer</span> in 3 Easy Steps Now!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.id} className={`border-2 rounded-lg p-6 bg-white shadow-md ${step.borderColor}`}>
                <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${step.color} mb-4 mx-auto`}>
                  <span className={`text-lg font-bold ${step.color}`}>{step.id}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
