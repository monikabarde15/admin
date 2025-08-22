import { motion } from "framer-motion";
import { useState } from "react";

const Dashboard = () => {
  const courses = [
    {
      title: "Integration of 3D Elements",
      desc: "The integration of 3D elements in web design is gaining popularity",
      img: "https://framerusercontent.com/images/gc7oCo9l14bX1RxNBWTSeCDo.jpg?scale-down-to=4096",
      author: "Emily Johnson",
      lessons: 22,
      level: "Beginner",
      price: "99$",
    },
    {
      title: "Dark Mode Design Trends",
      desc: "We look at how Dark Mode has become a dominant trend in design",
      img: "https://framerusercontent.com/images/ErwgiAQGhqflp1GJT5ZZf2Xodw.jpg",
      author: "James Parker",
      lessons: 10,
      level: "Moderate",
      price: "70$",
    },
    {
      title: "Design with focus on UX",
      desc: "Explore the world of design with focus on User Experience (UX).",
      img: "https://framerusercontent.com/images/Keb83B5i5hdplot7lsGMz8vTprI.jpg?scale-down-to=4096",
      author: "Charlotte Evans",
      lessons: 15,
      level: "Intermediate",
      price: "89$",
    },
    {
      title: "Innovative tools for Web Design",
      desc: "Exploration into dashboard template for e-courses",
      img: "https://framerusercontent.com/images/y9hfOMzgE8lW3evQ50EwkL1BV3U.jpg?scale-down-to=4096",
      author: "William Hughes",
      lessons: 18,
      level: "Advanced",
      price: "80$",
    },
  ];

  const apps = [
    { name: "Framer", tag: "No Code Platform" },
    { name: "Figma", tag: "Design Platform" },
    { name: "Notion", tag: "Documentation" },
    { name: "Lemon Squeezy", tag: "Payment Platform" },
    { name: "Slack", tag: "Collaboration" },
    { name: "ChatGPT", tag: "OpenAI" },
  ];

  const faqs = [
    "What are iCourses?",
    "How do I enroll in iCourses?",
    "Are iCourses accredited?",
    "What subjects are available in iCourses?",
    "Are iCourses self-paced?",
    "How long do iCourses last?",
    "What technology do I need for iCourses?",
    "Are iCourses free?",
  ];

  const [openFaq, setOpenFaq] = useState(null);

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // ek-ek karke animate hoga
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8 space-y-12">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="text-4xl font-extrabold text-gray-800"
      >
        Welcome to iCourses
      </motion.h1>
      <p className="text-gray-600">
        The Ultimate Guide to Web Design and Development
      </p>

      {/* Courses */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Latest iCourses</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl shadow p-4 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <motion.img
                src={course.img}
                alt={course.title}
                className="w-full h-40 object-cover rounded-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="mt-4">
                <h3 className="font-semibold text-lg">{course.title}</h3>
                <p className="text-sm text-gray-500">{course.desc}</p>
                <div className="mt-2 text-sm text-gray-600">
                  by {course.author} | Lessons: {course.lessons} | Level:{" "}
                  {course.level}
                </div>
                <div className="mt-2 font-bold text-indigo-600">
                  {course.price}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Apps */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Apps</h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {apps.map((app, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-white rounded-xl shadow p-4 hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-semibold">{app.name}</h3>
              <p className="text-sm text-gray-500">{app.tag}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <motion.div
          className="space-y-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {faqs.map((q, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              className="bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-md transition"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{q}</span>
                <span className="text-indigo-600 font-bold">
                  {openFaq === idx ? "-" : "+"}
                </span>
              </div>
              {openFaq === idx && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-sm text-gray-500"
                >
                  This is a sample answer for "{q}".
                </motion.p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Dashboard;
