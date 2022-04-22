import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks, GiSushis, GiTacos } from "react-icons/gi";

function Category() {
    return(
        <List>
            <SLink to="/cuisine/italian">
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink>

            <SLink to="/cuisine/mexican">
                <GiTacos />
                <h4>Mexican</h4>
            </SLink>

            <SLink to="/cuisine/american">
                <FaHamburger />
                <h4>American</h4>
            </SLink>

            <SLink to="/cuisine/thai">
                <GiNoodles />
                <h4>Thai</h4>
            </SLink>

            <SLink to="/cuisine/japanese">
                <GiSushis />
                <h4>Japanese</h4>
            </SLink>

            <SLink to="/cuisine/chinese">
                <GiChopsticks />
                <h4>Chinese</h4>
            </SLink>
        </List>
    )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 0.5rem 0;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30%;
    margin-right: 1.5rem;
    text-decoration: none;
    text-shadow: 1px 2px #333;
    background-image: linear-gradient(80deg, #ebba34, #400105);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4 {
        color: #fff;
    }

    svg {
        fill: #fff;
        font-size: 1.75rem;
    }

    &.active {
        background-image: linear-gradient(to right, #f27121, #e94057);
    }


`;

export default Category;