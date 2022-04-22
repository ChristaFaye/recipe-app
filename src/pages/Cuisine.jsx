import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState} from "react";

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);

        const recipes = await data.json();
        setCuisine(recipes.results);
    };

    useEffect(() => {
        getCuisine(params.type);
        console.log(params.type);
    }, [params.type]);


    return <Grid>
        {cuisine.map((item) => {
            return (
                <Card key={item.id}>
                     <Link to={"/recipe/" + item.id}>
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                     </Link>
                </Card>
                )
        })}
    </Grid>
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 2rem;
    text-align: center;
    margin: 3rem 4rem;
`;

const Card = styled.div`
    img {
        border-radius: 3rem;
        width: 80%;
    }

    a {
        text-decoration: none;

    }

    h3 {
        text-align: center;
        font-size: 1.1rem;
        color: brown;
    }
`;

export default Cuisine;