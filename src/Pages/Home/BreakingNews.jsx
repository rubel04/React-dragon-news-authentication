import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-secondary">Breaking News</button>
      <Marquee className="" pauseOnHover={true} speed={100}>
       <Link className="mr-3 px-2 font-bold text-red-500" to='/'> I can be a React component, multiple React components....</Link>
       <Link className="mr-3 px-2 font-bold text-red-500" to='/'> I can be a React component, multiple React components....</Link>
       <Link className="mr-3 px-2 font-bold text-red-500" to='/'> I can be a React component, multiple React components....</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
