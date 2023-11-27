import githubImg from "../assets/github.svg";
import linkedinImg from "../assets/linkedin.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/ezikiel103/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={linkedinImg} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Radex13"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src={githubImg} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
