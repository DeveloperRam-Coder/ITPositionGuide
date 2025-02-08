export default function Header() {
  return (
    <header className="bg-yellow-200 bg-opacity-5 backdrop-blur-sm text-white py-4 px-4 mx-auto w-[82%] text-left shadow-md mt-10 border border-yellow-200 dark:border-yellow-500 rounded-lg">
      {/* Flex container for the row */}
      <div className="flex flex-col sm:flex-row sm:space-x-6">
        <img
          src="/boy.png"
          alt="Logo"
          className="w-24 h-24"
          style={{ height: "150px", width: "fit-content" }}
        />
        {/* Vertical divider */}
        <div className="border-l-2 border-yellow-200 dark:border-yellow-500 hidden sm:block"></div>

        {/* First Card for h1 and h2 */}
        <div className="p-2 rounded-lg sm:w-1/2 w-full">
          <h1 className="text-1xl sm:text-4xl mt-5 ">Welcome, Job Seekers</h1>
          <h2 className="text-1xl sm:text-4xl mt-5 ">Get Started Today!</h2>
        </div>

        {/* Vertical divider */}
        <div className="border-l-2 border-yellow-200 dark:border-yellow-500 hidden sm:block"></div>

        {/* Second Card for p */}
        <div className="p-2 rounded-lg sm:w-1/2 w-full">
          <p className="text-xl sm:text-2xl mt-5">
            Begin your journey to a rewarding career in tech by exploring the
            many job opportunities available to you.
          </p>
        </div>
      </div>
    </header>
  );
}
