import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {
    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)

        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData);
    };

    
    useEffect(() => {
        fetchDetails();
    }, 
    // eslint-disable-next-line
    [params.name]);
    

    return(
        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title} />
            </div>

            <Info>
                <Button className={activeTab === "instructions" ? "active" : ""} onClick={() => setActiveTab("instructions")}>
                    Instructions
                </Button>

                <Button className={activeTab === "ingredients" ? "active" : ""} onClick={() => setActiveTab("ingredients")}>
                    Ingredients
                </Button>

                {activeTab === "instructions" && (
                    <div>
                        <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
                        <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
                    </div>
                )}

                {activeTab === "ingredients" && (
                    <ul>
                        
                        {details.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))};
                    </ul>
                )}
            </Info>
        </DetailWrapper>
    ); 
}


const DetailWrapper = styled.div`
    margin: 10rem 10rem;
    display: flex;

    .active {
        background-image: linear-gradient(35deg, #494949, #333);
        color: #fff;
    }

    h2 {
        margin-bottom: 2rem;
    }

    ul {
        margin-top: 2rem;
    }

    li {
        font-size: 1.25rem;
        line-height: 2;
    }

    p {
        font-size: 1rem;
        margin: 0.5rem;
        // text-align: justify;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    margin-bottom: 1rem;
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
    margin-right: 2rem;
    font-weight: bold;
`;

const Info = styled.div`
    margin-left: 10rem;
`;

export default Recipe;