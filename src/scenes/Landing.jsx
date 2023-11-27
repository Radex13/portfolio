import useMediaQuery from "../hooks/useMediaQuery";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { motion } from "framer-motion";
import profile from "../assets/profile-image.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* IMAGE SECTION */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div
            //diseña un borde para colocarlo detras de la imagen y darle un color azul
            className="relative z-0 ml-20 before:absolute before:-top-12 before:-left-20 before:rounded-t-[250px]
            before:w-full before:max-w-[250px] md:before:max-w-[280px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                max-w-250px] md:max-w-[350px]"
              src={profile}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                max-w-[300px] md:max-w-[500px]"
            src={profile}
          />
        )}
      </div>

      {/* MAIN SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          //este div crea un div con animacion en movimiento con estas caracteristicas de iniciar oculto mientras se ve se hace visible 1 vez por un amount de 0.5 quiere decir que al 50% tiene que estar visible en la pantalla
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-5xl font-playfair z-10 text-center md:text-start">
            Ezequiel {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20
                xs:before:content-brush before:max-h-[5rem] before:absolute before:-left-[40px]
                before:-top-[140px] before:z-[-1]"
            >
              Vásquez
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Hello, I appreciate the opportunity to introduce myself as a Junior
            Fullstack Developer with proficiency in JavaScript, React, MongoDB,
            and SQL. My expertise lies in developing dynamic and responsive web
            applications, where I leverage my skills in both frontend and
            backend technologies to create seamless user experiences.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                hover:bg-blue hover_text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div
              className="bg-deep-blue hover:text-red transition duration-500 w-full
                  h-full flex items-center justify-center font-playfair px-10"
            >
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
