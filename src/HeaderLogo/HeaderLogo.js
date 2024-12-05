import './HeaderLogo.css';
import profile from "./headshot.jpg";

function HeaderLogo() {
  return (
    <div className="HeaderLogo">
      <div className="Logo"><img src={profile}  alt='Image of Edward Hines, dressed professionally, smile on face, wearing a blue shirt against a blue background.'/>
    </div>
            <div className="header">Edward Hines</div> 
    </div>
  );
}

export default HeaderLogo;
