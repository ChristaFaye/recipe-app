import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <Foot>
            <NLink to="/">
                <FaFacebook size={30}/>
            </NLink> 
            <NLink to="/">
                <FaInstagramSquare size={30} />
            </NLink>
            <NLink to="/">
                <FaTwitter size={30} />
            </NLink> 
        </Foot>
       
    );
}


const Foot = styled.div`
    padding: 0.2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #400105;
    width: 100%;
`;

const NLink = styled(NavLink)`
    margin: 0.5rem;
    color: white;
`;
export default Footer;