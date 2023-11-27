import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

// Importa todas las imágenes de la carpeta assets de manera dinámica
const importAll = (context) =>
  context.keys().reduce((acc, key) => {
    acc[key.replace("./", "")] = context(key);
    return acc;
  }, {});
//La linea 10 completa a la 5 con el formato y la direccion de las img
const images = importAll(require.context("../assets", false, /\.(jpeg)$/));

const container = {
  //funciona para animaciones escalonadas para los hijos
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, page }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          <a href={page} target="_blank" rel="noopener noreferrer">
            {description}
          </a>
        </p>
      </div>
      <img src={images[`${projectTitle}.jpeg`]} alt={projectTitle} />
    </motion.div>
    //aca en la linea 38 es como se tiene complementar para mostrar las imagenes
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-blue">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          I excel in projects that involve technologies such as JavaScript,
          React, Node.js, MongoDB, SQL, Socket.io, and Tailwind CSS. From
          crafting interactive interfaces with React to efficiently managing
          data with databases like MongoDB and SQL, my experience spans various
          technological domains. Additionally, I have effectively applied
          technologies like Socket.io and Tailwind CSS to optimize real-time
          communication and enhance the user experience.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={container}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-yellow text-black
              max-w-[400px] max-h-[400px] text-2xl font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="GamerHub"
            description="GamerHub, an innovative social network for gamers, connects gaming enthusiasts based on their preferences, enabling real-time invitations and communication. The platform brings gamers together for personalized gaming experiences, fostering interaction through instant chats and invitations."
            page="https://gamerhub-thol.onrender.com"
          />
          <Project
            title="TodoApp"
            description="A simple and interactive to-do list application that allows you to easily save and organize your tasks. The perfect solution for efficiently keeping track of your important to-dos."
            page="https://radex13.github.io/lista-de-tareas/"
          />

          {/* ROW 2 */}

          <Project
            title="Contact Agenda"
            description="A streamlined contact management application with a powerful database for effortless contact storage. This intuitive system incorporates advanced REGEX-based data validation during input, ensuring precision. With comprehensive editing and deletion capabilities, it offers an effective solution for organized and accessible contact management."
            page="https://radex13.github.io"
          />
          <Project
            title="Country Search"
            description="A web application designed for exploring countries, featuring a straightforward page layout to practice filter techniques and API integration. Users can search for countries, retrieve information including climate and latitude"
            page="https://radex13.github.io/Buscador-de-paises/"
          />

          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
