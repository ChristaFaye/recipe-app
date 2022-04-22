import styled from "styled-components";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <Foot>
            <p>Copyright | Christa Faye Reyes © 2022 | </p>
            <NLink>
                <FaFacebook size={20}/>
            </NLink>
            
            <NLink>
                <FaInstagramSquare size={20} />
            </NLink>
            
            <NLink>
                <FaTwitter size={20} />
            </NLink>
            
        </Foot>
       
    );
}


const Foot = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #400105;
    width: 100%;

    p {
        color: #fff;
    }
`;

const NLink = styled.div`
    margin-left: 0.5rem;
    color: #fff;
`;

export default Footer;
