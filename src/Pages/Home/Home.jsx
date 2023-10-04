import { useLoaderData } from "react-router-dom";
import Header from "../SharedPages/Header/Header";
import LeftSideNav from "../SharedPages/LeftSideNav/LeftSideNav";
import Navbar from "../SharedPages/Navbar/Navbar";
import RightSideNav from "../SharedPages/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {

    const news = useLoaderData();

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2">
                    <h2 className="text-2xl font-semibold">Dragon News Home</h2>
                    {
                        news.map(singleNews => <NewsCard
                        key={singleNews._id}
                        singleNews={singleNews}
                        ></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;