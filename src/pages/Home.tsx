import Navbar from "../components/Navbar/Navbar";
import RecipesBox from "../components/Home/RecipesBox";
import PageAnimationWrapper from "../components/wrappers/PageAnimationWrapper";
const Home = () => {
  return (
    <PageAnimationWrapper>
      <Navbar />
      <RecipesBox />
    </PageAnimationWrapper>
  );
};

export default Home;
