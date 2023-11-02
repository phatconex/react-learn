import React from "react";
import Card from "./Card";
import styled from "styled-components";

const StyleCardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 50px;
    gap: 20px;
`;
const CardList = () => {
    const listCard = [
        {
            id: 1,
            name: "A dreamy illustration",
            img: "https://cdn.dribbble.com/userupload/7969334/file/original-20647a6066bc8644551c9684b1768235.png",
            price: "120000 PSL",
        },
        {
            id: 2,
            name: "The astronaut gazes",
            img: "https://cdn.dribbble.com/userupload/7868671/file/original-6cca4e236a0cecb01ed12c1fefda2142.png",
            price: "220000 PSL",
            special: true,
        },
        {
            id: 3,
            name: "A fresh bus stop",
            img: "https://cdn.dribbble.com/userupload/6962718/file/original-41768847cfe004f977079e01f4c4969c.png?resize=1200x900",
            price: "530000 PSL",
        },
    ];
    return (
        <StyleCardList>
            {listCard.map((item) => (
                <Card
                    secondary={item.special}
                    title={item.name}
                    img={item.img}
                    price={item.price}
                ></Card>
            ))}
        </StyleCardList>
    );
};

export default CardList;
