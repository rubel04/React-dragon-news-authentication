import Header from "../SharedPages/Header/Header";
import LeftSideNav from "../SharedPages/LeftSideNav/LeftSideNav";
import Navbar from "../SharedPages/Navbar/Navbar";
import RightSideNav from "../SharedPages/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2 border">
                    <h2 className="text-4xl">News comming soon</h2>
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;