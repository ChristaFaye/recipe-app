import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";


function Veggie() {
    const [Veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, []);

    const getVeggie = async () => {
        //localstorage
        const check = localStorage.getItem("veggie");

        if (check) {
            setVeggie(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`);
        
            const data = await api.json();

            localStorage.setItem("veggie", JSON.stringify(data.recipes));
            setVeggie(data.recipes);
            console.log(data.recipes);
        }
    };
    return(
        <div>
            <Wrapper>
                <h3>Vegetarian Recipes</h3>

                <Splide
                    options={{
                        perPage: 4,
                        drag: "free",
                        gap: "5rem",
                    }}
                >
                    {Veggie.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <Link to={"/recipe/" + recipe.id}>
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.title} />
                                        <Gradient />
                                    </Link>
                                </Card>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </Wrapper>
        </div>
    );
}

const Wrapper = styled.div`
    margin: 4rem 5rem;
    text-align: center;

    h3 {
        text-transform: uppercase;
        color: #401403;
    }
`;

const Card = styled.div`
    min-height: 15rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 0);
        color: #fff;
        background-color: rgba(208, 8, 36, 0.4);
        width: 100%;
        text-align: center;
        font-weight: bold;
        font-size: 0.8rem;
        height: 15%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        border-radius: 2rem;
        position: absolute;
        left:0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Gradient = styled.div`
    z-index: 5;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
`;

export default Veggie;