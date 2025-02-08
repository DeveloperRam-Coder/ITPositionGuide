import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  link: string;
}

export default function Card({ title, description, link }: CardProps) {
  return (
    <div className="bg-yellow-200 bg-opacity-5 backdrop-blur-sm text-white shadow-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out border border-yellow-200 dark:border-yellow-500 flex flex-col justify-between h-full rounded-lg hover:scale-105 hover:rotate-3">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="mb-4">{description}</p>
      <Link href={link} legacyBehavior>
        <a className="text-white font-medium hover:underline mt-auto">
          Explore {title}
        </a>
      </Link>
    </div>
  );
}
