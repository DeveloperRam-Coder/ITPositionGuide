"use client";

import { useState } from "react";
import Link from "next/link";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footor from "./components/Footor";

export default function Home() {
  const pages = [
    {
      title: "Go for Interview",
      description: "Learn About Interview",
      link: "/pages/interview",
    },
    {
      title: "Frontend Developer",
      description: "Learn frontend technologies",
      link: "/pages/frontend",
    },
    {
      title: "Backend Developer",
      description: "Explore backend development",
      link: "/pages/backend",
    },
    {
      title: "Full Stack Developer",
      description: "Become proficient in both frontend and backend",
      link: "/pages/full-stack",
    },
    {
      title: "Cloud Engineer",
      description: "Master cloud computing and services",
      link: "/pages/cloud-engineer",
    },
    {
      title: "Data Scientist",
      description: "Dive into data analysis and machine learning",
      link: "/pages/data-scientist",
    },
    {
      title: "Cybersecurity Analyst",
      description: "Protect networks and systems from attacks",
      link: "/pages/cybersecurity-analyst",
    },
    {
      title: "AI/ML Engineer",
      description:
        "Work on artificial intelligence and machine learning models",
      link: "/pages/ai-ml-engineer",
    },
    {
      title: "QA Engineer",
      description: "Ensure software quality through testing",
      link: "/pages/qa-engineer",
    },
    {
      title: "DevOps Engineer",
      description: "Automate and streamline development processes",
      link: "/pages/devops-engineer",
    },
    {
      title: "Technical Support Engineer",
      description: "Provide technical assistance and solutions",
      link: "/pages/technical-support-engineer",
    },
    {
      title: "UI/UX Designer",
      description: "Design user interfaces and enhance user experience",
      link: "/pages/ui-ux-designer",
    },
    {
      title: "Mobile App Developer",
      description: "Develop mobile applications for iOS and Android",
      link: "/pages/mobile-app-developer",
    },
    {
      title: "Software Engineer",
      description: "Develop and maintain software systems",
      link: "/pages/software-engineer",
    },
    {
      title: "Database Administrator",
      description: "Manage and optimize databases",
      link: "/pages/database-administrator",
    },
    {
      title: "Business Intelligence Analyst",
      description: "Analyze business data for decision making",
      link: "/pages/business-intelligence-analyst",
    },
    {
      title: "System Administrator",
      description: "Manage and maintain IT infrastructure",
      link: "/pages/system-administrator",
    },
    {
      title: "Network Engineer",
      description: "Design and manage networks for seamless communication",
      link: "/pages/network-engineer",
    },
    {
      title: "Game Developer",
      description: "Create interactive and engaging video games",
      link: "/pages/game-developer",
    },
    {
      title: "Embedded Systems Engineer",
      description: "Work with hardware and software integration",
      link: "/pages/embedded-systems-engineer",
    },
    {
      title: "Data Analyst",
      description: "Analyze and interpret data for business insights",
      link: "/pages/data-analyst",
    },
    {
      title: "Cloud Architect",
      description: "Design and build cloud-based solutions",
      link: "/pages/cloud-architect",
    },
    {
      title: "Security Engineer",
      description: "Ensure the safety and integrity of IT systems",
      link: "/pages/security-engineer",
    },
    {
      title: "Digital Marketing Specialist",
      description: "Promote brands and products through digital channels",
      link: "/pages/digital-marketing-specialist",
    },
    {
      title: "Product Manager",
      description: "Manage product development from concept to launch",
      link: "/pages/product-manager",
    },
    {
      title: "Technical Writer",
      description: "Create technical documentation and manuals",
      link: "/pages/technical-writer",
    },
    {
      title: "Scrum Master",
      description: "Lead agile teams and manage Scrum processes",
      link: "/pages/scrum-master",
    },
    {
      title: "SEO Specialist",
      description: "Optimize websites to rank higher in search engines",
      link: "/pages/seo-specialist",
    },
    {
      title: "Site Reliability Engineer",
      description: "Ensure reliability and uptime of systems",
      link: "/pages/site-reliability-engineer",
    },
    {
      title: "Hardware Engineer",
      description: "Design and develop hardware systems",
      link: "/pages/hardware-engineer",
    },
    {
      title: "DevSecOps Engineer",
      description: "Integrate security into DevOps processes",
      link: "/pages/devsecops-engineer",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  // Filter pages based on the search query
  const filteredPages = pages.filter(
    (page) =>
      page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <Header />

      {/* Search bar */}
      <div className="container mx-auto mt-8 px-4 sm:px-6 md:px-8 max-w-screen-xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">
          {/* Left side text */}
          <h1 className="bg-yellow-200 bg-opacity-5 backdrop-blur-sm text-black dark:text-white border rounded py-2 px-4 text-lg sm:text-xl">
            Find more positions
          </h1>

          {/* Search input */}
          <input
            type="text"
            placeholder="Search for a career..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-yellow-200 bg-opacity-5 backdrop-blur-sm sm:w-1/2 md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg text-base"
          />

          {/* Developer emojis */}
          <div className="flex flex-wrap justify-center sm:justify-start space-x-4">
            <span className="text-2xl">👨‍💻</span>
            <span className="text-2xl">🖥️</span>
            <span className="text-2xl">📱</span> {/* Mobile development */}
            <span className="text-2xl">🔍</span> {/* Search / Debugging */}
            <span className="text-2xl">⚙️</span> {/* Gear / Settings */}
            <span className="text-2xl">🌐</span> {/* Web development */}
            <span className="text-2xl">📝</span> {/* Writing / Documentation */}
            <span className="text-2xl">💾</span> {/* Database / Saving */}
            <span className="text-2xl">📈</span> {/* Analytics / Data */}
            <span className="text-2xl">🤖</span> {/* Robotics / AI */}
            <span className="text-2xl">🛠️</span> {/* Tools / Development */}
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto mt-8 px-4 sm:px-6 md:px-8 max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPages.length > 0 ? (
            filteredPages.map((page) => (
              <Link key={page.title} href={page.link}>
                <Card
                  title={page.title}
                  description={page.description}
                  link={page.link}
                />
              </Link>
            ))
          ) : (
            <p className="text-center col-span-full">
              No results found for "{searchQuery}"
            </p>
          )}
        </div>
      </div>

      <Footor />
    </>
  );
}
