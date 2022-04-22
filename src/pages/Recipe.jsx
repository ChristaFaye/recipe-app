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
    margin: 5rem 5rem;
    display: flex;
    text-align: justify;
    justify-content: center;

    .active {
        background-color: #400105;
        color: #fff;
    }

    h2 {
        margin-bottom: 2rem;
    }

    ul {
        margin: 2rem 2rem;
    }

    li {
        font-size: 1rem;
        line-height: 1.2;
        margin: 1rem 2rem;
        
    }
    

    p {
        margin-top: 1rem;
        font-size: 1rem;
        color: #333;
        font-family: Calibri;
    }
`;

const Button = styled.button`
    padding: 1em 2rem;
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