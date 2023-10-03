import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZonePic1 from '../../../assets/qZone1.png'
import qZonePic2 from '../../../assets/qZone2.png'
import qZonePic3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4  mb-6">
        <h2 className="text-3xl font-bold mb-6">Login With</h2>
        <button className="btn btn-outline mb-3 w-full">
          <FaGoogle></FaGoogle>
          Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Login with Github
        </button>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-3xl font-medium mb-3">Find Us On</h2>
        <a
          className="p-4 flex items-center text-lg border rounded-t-lg"
          href=""
        >
          <FaFacebook className="mr-2"></FaFacebook>
          Facebook
        </a>
        <a className="p-4 flex items-center text-lg border-x" href="">
          <FaTwitter className="mr-2"></FaTwitter>
          Twitter
        </a>
        <a
          className="p-4 flex items-center text-lg border rounded-b-lg"
          href=""
        >
          <FaInstagram className="mr-2"></FaInstagram>
          Instagram
        </a>
      </div>
      {/* Q zone */}
      <div className="p-4 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">Q Zone</h2>
        <img src={qZonePic1} alt="" />
        <img src={qZonePic2} alt="" />
        <img src={qZonePic3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
