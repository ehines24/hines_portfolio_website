import './Socials.css';
import github from "./github-mark.png"
import linkedin from "./LI-In-Bug.png";

function Socials() {
  return (
    <div class="SocialBox">
      <a href='https://www.linkedin.com/in/edward-g-hines/'><img alt="LinkedIn logo that navigates the user to Edward Hines' LinkedIn page" src={linkedin} class="SocialLogo"/></a>     
      <a href='https://www.github.com/ehines24/'><img alt="GitHub logo that navigates the user to Edward Hines' GitHub page" src={github} class="SocialLogo"/></a>
    </div>
  );
}

export default Socials;
