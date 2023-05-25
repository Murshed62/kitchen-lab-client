import Banner from '../../Banner/Banner';
import RecipeDetails from '../../RecipeDetails/RecipeDetails';
import Contact from '../../Contact/Contact';
import Carousel from '../../Carousel/Carousel';
import useTitle from '../../../hooks/useTitle';


const Home = () => {
    useTitle('Home');
    
    return (
        <div>
            <Banner></Banner>
            <RecipeDetails></RecipeDetails>
            <Carousel></Carousel>
            <Contact></Contact>
        </div>
    );
};

export default Home;