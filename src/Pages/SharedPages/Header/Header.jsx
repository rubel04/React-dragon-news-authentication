import logo from "../..//../assets/logo.png";
import moment from 'moment';

const Header = () => {
  return (
    <div className="text-center">
        <img className="mx-auto mt-10 mb-3" src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p className="text-xl mt-3">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
