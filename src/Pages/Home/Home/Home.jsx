import { Helmet } from "react-helmet-async";
import Chef from "../../Chef/Chef";
import ChefRecommends from "../../ChefRecommends/ChefRecommends";
import Contact from "../../Contact/Contact";
import Featured from "../../Featured/Featured";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Tesimonials from "../Tesimonials/Tesimonials";

const Home = () => {
    return (
        <div>
              <Helmet>
                    <title>Bistro Boss | Home</title>
                  </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Chef></Chef>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <ChefRecommends></ChefRecommends>
            <Featured></Featured>
            <Tesimonials></Tesimonials>
        </div>
    );
};

export default Home;