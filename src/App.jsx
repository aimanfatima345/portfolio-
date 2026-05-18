import { motion } from "framer-motion";
import chat from "./assets/chat.jpg";
import quran from "./assets/alquran.jpg";
import expense from "./assets/expense.jpg";

// import { img } from "framer-motion/client";

const projects = [
  {
    title: "Expense Tracker App",
    img:chat,
    description:
      "Flutter app for tracking income and expenses with Firebase authentication and charts.",
  },
  {
    title: "Al Quran App",
    img:quran,
    description:
      "Quran reading app with audio recitation, bookmarks, prayer timings, zikr counter and tasbeeh features.",
  },
  {
    title: "ChatBot App",
    img:chat,
    description:
      "AI-powered chatbot app with natural language processing and seamless integration.",
  },
];

export default function App() {
  return (
    <div className="bg-slate-950 text-white">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold z-10"
        >
          Fatima Zaheer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-xl text-gray-300 z-10 max-w-2xl"
        >
          Flutter Mobile App Developer | BS Computer Science Student |
          Passionate about creating modern mobile applications and user experiences.
        </motion.p>

        <motion.a
          whileHover={{ scale: 1.1 }}
          href="#projects"
          className="mt-8 bg-cyan-500 px-6 py-3 rounded-full font-semibold"
        >
          View My Projects
        </motion.a>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold mb-10 text-cyan-400">
          About Me
        </h2>

        <p className="text-gray-300 leading-8 text-lg">
          I am a passionate Flutter developer currently studying Bachelor of
          Computer Science (5th Semester). I enjoy building beautiful mobile
          applications using Flutter, Firebase and modern UI technologies.
          I have worked on multiple academic and personal projects including
          Quran apps, fitness apps and expense tracking systems.
        </p>
      </section>

      {/* EDUCATION */}
      <section className="py-20 px-6 md:px-20 bg-slate-900">
        <h2 className="text-4xl font-bold mb-10 text-cyan-400">
          Education
        </h2>

        <div className="space-y-8">

          <div className="border-l-4 border-cyan-500 pl-6">
            <h3 className="text-2xl font-semibold">
              Bachelor of Computer Science
            </h3>
            <p className="text-gray-400">
              5th Semester
            </p>
          </div>

          <div className="border-l-4 border-cyan-500 pl-6">
            <h3 className="text-2xl font-semibold">
              Intermediate
            </h3>
            <p className="text-gray-400">
              Completed
            </p>
          </div>

          <div className="border-l-4 border-cyan-500 pl-6">
            <h3 className="text-2xl font-semibold">
              Matriculation
            </h3>
            <p className="text-gray-400">
              Completed
            </p>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
     <section id="projects" className="py-20 px-6 md:px-20">
  <h2 className="text-4xl font-bold mb-12 text-cyan-400">
    Mobile App Projects
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    {projects.map((project, index) => (
      <div
        key={index}
        className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
      >
        {/* IMAGE */}
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-48 object-cover"
        />

        {/* CONTENT */}
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-3">
            {project.title}
          </h3>

          <p className="text-gray-400">
            {project.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>
      {/* CONTACT */}
      <section className="py-20 px-6 md:px-20 bg-slate-900 text-center">

        <h2 className="text-4xl font-bold mb-8 text-cyan-400">
          Contact
        </h2>

        <p className="text-gray-300 text-lg">
          Email: fatimazahra8726@gmail.com
        </p>

        <p className="text-gray-300 text-lg mt-2">
          GitHub: https://github.com/aimanfatima345
        </p>

      </section>

    </div>
  );
}