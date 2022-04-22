import Pages from "./pages/Pages";
import Category from "./components/Category";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
// import style from "./css/style.css"
// import { GiKnifeFork } from "react-icons/gi"
import imageLogo from "./img/chef-hat.png"

function App() {
    return(
        <div className="App">
            <Router>
                <Nav>
                    <Logo to="/">
                        <img src={imageLogo} alt="Recétté" />
                        <h2>Recétté</h2>
                    </Logo>
                </Nav>
                <Category />
                <Pages />
                <Footer />
            </Router>
        </div>
    );
}

const Logo = styled(Link)`
    
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin: auto;
    padding: 1rem;

    img {
        width: 4rem;
        height: auto;
        margin: auto;
    }
    
    @font-face {
      font-family: "Water Brush";
      src: url('https://fonts.googleapis.com/css2?family=Water+Brush&display=swap') format("woff2");
    }

    h2 {
        font-family: "Water Brush";
        font-size: 4rem;
        letter-spacing: 0.2rem;
        margin-top: 0.9rem;
        color: #fff;
        // text-shadow: 3px 3px #333;
    }


`;

const Nav = styled.div`
    padding: 1rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    svg {
        font-size: 2rem;
        margin-right: 0.5rem;

    }
`;
export default App;
