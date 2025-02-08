"use client";
import ColorfulCard from "@/app/components/ColorfulCard";
import Link from "next/link";
import { useState } from "react";

// Define the type for questions and answers
interface InterviewItem {
  id: number;
  question: string;
  answer: string;
}

// Store the data
const questionsAndAnswers: InterviewItem[] = [
  {
    id: 2,
    question: "Tell me about yourself.",
    answer:
      "I am a software developer with over 2 years of experience specializing in MERN and MEAN stack development. I am passionate about creating efficient solutions, and I enjoy mentoring junior developers and contributing to open-source projects.",
  },
  {
    id: 2,
    question: "What is your greatest strength?",
    answer:
      "My greatest strength is my problem-solving ability. I can quickly analyze a situation, break down the problem into smaller steps, and come up with efficient solutions.",
  },
  {
    id: 3,
    question: "What is your greatest weakness?",
    answer:
      "My greatest weakness is that I can sometimes be a perfectionist, which leads me to spend extra time fine-tuning details. However, I am working on balancing perfection with productivity.",
  },
  {
    id: 4,
    question: "Why should we hire you?",
    answer:
      "You should hire me because I bring a combination of technical expertise, a collaborative mindset, and a strong drive to exceed expectations in every project I work on.",
  },
  {
    id: 5,
    question: "Why do you want to work here?",
    answer:
      "I admire your company’s innovative projects and positive work culture. I believe my skills align with your needs, and I am excited to contribute to your success.",
  },
  {
    id: 6,
    question: "Tell me about a time you showed leadership.",
    answer:
      "In my previous role, I led a team of developers to successfully deliver a complex project within a tight deadline by delegating tasks effectively and ensuring constant communication.",
  },
  {
    id: 7,
    question: "Tell me about a time you were successful on a team.",
    answer:
      "I worked with my team to develop an employee management system. We collaborated effectively, dividing tasks and conducting regular reviews to ensure timely completion.",
  },
  {
    id: 8,
    question: "What would your co-workers say about you?",
    answer:
      "My co-workers would describe me as a dependable and proactive teammate who is always ready to help and take ownership of tasks.",
  },
  {
    id: 9,
    question: "Why do you want to leave your current role?",
    answer:
      "I am seeking new challenges and opportunities to grow professionally. I want to work on more innovative projects and further develop my skills.",
  },
  {
    id: 10,
    question: "Describe your most challenging project.",
    answer:
      "One of my most challenging projects was optimizing the performance of a large-scale web application. It required in-depth debugging, analyzing bottlenecks, and implementing scalable solutions, which significantly improved the application’s speed.",
  },
  {
    id: 11,
    question:
      "Tell me about something you’ve accomplished that you are proud of.",
    answer:
      "I am proud of developing a task management app that streamlined workflows for a team of 50 users, increasing their productivity by 30%.",
  },
  {
    id: 12,
    question: "Can you explain your employment gap?",
    answer:
      "During my employment gap, I took time to enhance my skills by completing certifications in advanced web development and contributing to open-source projects.",
  },
  {
    id: 13,
    question: "What are your salary expectations?",
    answer:
      "I am open to discussing a fair compensation package that aligns with my skills, experience, and the role's responsibilities.",
  },
  {
    id: 14,
    question: "What do you like to do outside of work?",
    answer:
      "Outside of work, I enjoy playing cricket, reading motivational books, and working on side projects to explore new technologies.",
  },
  {
    id: 15,
    question: "Tell me about a time you had to manage conflicting priorities.",
    answer:
      "I managed conflicting priorities by creating a detailed schedule and prioritizing tasks based on their urgency and impact. This approach helped me meet deadlines without compromising quality.",
  },
  {
    id: 16,
    question: "Where do you see yourself in 5 years?",
    answer:
      "In 5 years, I see myself taking on more leadership responsibilities, mentoring junior developers, and contributing to innovative projects that make a significant impact.",
  },
  {
    id: 17,
    question: "Describe your leadership style.",
    answer:
      "My leadership style is collaborative and supportive. I believe in empowering my team, fostering open communication, and guiding them to achieve their best.",
  },
  {
    id: 18,
    question: "Tell me about a time you failed or made a mistake.",
    answer:
      "I once underestimated the time required for a feature implementation, causing a delay in the project. I learned to better assess timelines and communicate updates effectively.",
  },
  {
    id: 19,
    question: "Tell me about a time you worked with a difficult person.",
    answer:
      "I worked with a challenging colleague by focusing on clear communication and finding common ground. This helped us collaborate effectively despite our differences.",
  },
  {
    id: 20,
    question: "Tell me about a time you had to persuade someone.",
    answer:
      "I persuaded a client to adopt a modern tech stack by presenting a detailed analysis of the long-term benefits, including scalability and cost efficiency.",
  },
  {
    id: 21,
    question: "Tell me about a time you disagreed with someone.",
    answer:
      "I resolved a disagreement with a teammate by listening to their perspective, sharing my viewpoint, and finding a compromise that benefited the project.",
  },
  {
    id: 22,
    question: "Tell me about a time you created a goal and achieved it.",
    answer:
      "I set a goal to learn Docker within a month and applied my knowledge to containerize an application, which improved deployment efficiency.",
  },
  {
    id: 23,
    question: "Tell me about a time you surpassed people’s expectations.",
    answer:
      "I delivered a project a week ahead of schedule with additional features that impressed both the client and my manager.",
  },
  {
    id: 24,
    question: "Tell me about a time you had to handle pressure.",
    answer:
      "During a high-stakes deadline, I stayed organized, prioritized tasks, and maintained clear communication with my team to successfully complete the project.",
  },
  {
    id: 25,
    question: "Tell me about a time you had to learn something quickly.",
    answer:
      "I quickly learned a new JavaScript library for a project by studying its documentation and applying it to small practice tasks, which helped me deliver the project on time.",
  },
  {
    id: 26,
    question: "Do you have any questions for me?",
    answer:
      "Yes, I would like to know more about the team I’d be working with and the key goals for this position in the next 6 months.",
  },
];

// Component implementation
export default function Interview() {
  // Define the type for visibleAnswers
  const [visibleAnswers, setVisibleAnswers] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleAnswer = (index: number) => {
    setVisibleAnswers((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Answer copied to clipboard!");
  };

  return (
    <>
      <Link href="/" passHref>
        <span className="mt-4 text-3xl cursor-pointer hover:text-blue-700 transition-colors">
          🏠 {/* Home emoji */}
        </span>
      </Link>

      <div className="p-4 shadow-md rounded-md">
        {/* <h1 className="text-2xl font-semibold text-white">
          Interview Questions
        </h1> */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {questionsAndAnswers.map((item, index) => (
            <ColorfulCard
              key={index}
              title=""
              content={
                <>
                  <p className="text-lg text-white">{item.question}</p>
                  <button
                    onClick={() => toggleAnswer(index)}
                    className="mt-2 text-sm text-white hover:underline"
                  >
                    {visibleAnswers[index] ? "Hide Answer" : "Show Answer"}
                  </button>
                  {visibleAnswers[index] && (
                    <div className="mt-2 border p-2 rounded">
                      <p className="text-white">{item.answer}</p>
                      <button
                        onClick={() => copyToClipboard(item.answer)}
                        className="mt-2 px-4 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                      >
                        Copy Answer
                      </button>
                    </div>
                  )}
                </>
              }
              colorClass="backdrop-blur-md"
            />
          ))}
        </div>
      </div>
    </>
  );
}
