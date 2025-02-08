// app/about-page/page.tsx
export default function About() {
  return (
    <div className="min-h-screen  py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main container for the page */}
        <div className="space-y-12">
          
          {/* Company Section */}
          <div className="border p-6 rounded-md shadow-md">
            <h2 className="text-3xl font-semibold text-gray-100 mb-4">About the Company</h2>
            <p className="text-lg text-yellow-500 mb-4">
              We are an innovative company focused on pushing the boundaries of technology. Our team is dedicated to building high-quality, scalable solutions in the fields of AI, Machine Learning, and software development. 
            </p>
            <p className="text-lg text-yellow-500">
              With a commitment to excellence, we help businesses leverage the power of technology to transform their operations and achieve their goals. Our focus is always on delivering value to our customers through cutting-edge solutions.
            </p>
          </div>

          {/* Author Section */}
          <div className="border p-6 rounded-md shadow-md">
            <h2 className="text-3xl font-semibold text-gray-100 mb-4">About the Author</h2>
            <p className="text-lg text-yellow-500 mb-4">
              Hello, I am John Doe, the founder and chief developer of this platform. With over 10 years of experience in the tech industry, I have a deep passion for AI, Machine Learning, and software development.
            </p>
            <p className="text-lg text-yellow-500 mb-4">
              I believe in continuous learning and sharing knowledge, and this platform is my way of helping others grow in the field. I have worked on multiple projects involving AI and Machine Learning, and my mission is to bring these advanced technologies to everyone.
            </p>
            <p className="text-lg text-yellow-500">
              When I’m not coding or writing, I enjoy teaching, reading books on personal development, and exploring new trends in technology.
            </p>
          </div>

          {/* Mission Section */}
          <div className="border p-6 rounded-md shadow-md">
            <h2 className="text-3xl font-semibold text-gray-100 mb-4">Our Mission</h2>
            <p className="text-lg text-yellow-500 mb-4">
              Our mission is to make AI and Machine Learning accessible to all. By providing easy-to-understand tutorials, real-world applications, and a hands-on approach, we aim to equip individuals with the skills they need to thrive in this rapidly evolving field.
            </p>
            <p className="text-lg text-yellow-500">
              We believe in the power of technology to drive positive change, and we are committed to creating resources that empower others to harness the potential of AI and ML.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
