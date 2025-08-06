import "./Options.css";
import { useNavigate } from "react-router-dom";

function Options() {
  const navigate = useNavigate();

  return (
    <div className="footer">
      <div className="buttom-home">
        <button onClick={() => navigate("/")}>
          <img src="home.png" alt="home" className="home" />
        </button>
      </div>
      <div className="buttom-analystics">
        <button onClick={() => navigate("/profile")}>
          <img src="profile.png" alt="home" className="home" />
        </button>
      </div>
      <div className="buttom-add">
        <button onClick={() => navigate("/addfood")}>
          <img src="add.png" alt="home" className="home" />
        </button>
      </div>
      <div className="buttom-profile">
        <button onClick={() => navigate("/analystics")}>
          <img src="analystics.png" alt="home" className="home" />
        </button>
      </div>
      <div className="buttom-saved">
        <button onClick={() => navigate("/saved")}>
          <img src="saved.png" alt="home" className="home" />
        </button>
      </div>
    </div>
  );
}

export default Options;
