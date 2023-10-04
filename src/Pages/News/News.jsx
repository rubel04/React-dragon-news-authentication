import { useParams } from "react-router-dom";
import Header from "../SharedPages/Header/Header";
import RightSideNav from "../SharedPages/RightSideNav/RightSideNav";
import Navbar from "../SharedPages/Navbar/Navbar";

const News = () => {
    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-2xl font-semibold">Dragon News</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;