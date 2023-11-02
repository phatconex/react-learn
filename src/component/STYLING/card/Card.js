import React from "react";
import styled, { css } from "styled-components";

const CardNews = styled.div`
    position: relative;
    width: calc(100% / 3 - 20px);
`;
const CardImg = styled.img`
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 20px;
`;
const CardContent = styled.div`
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
    position: relative;
    z-index: 99;
    width: 90%;
    margin: -50px auto 0;
    border-radius: 20px;
`;
const CardTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const CardAvatar = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    img {
        border-radius: 30px;
        width: 30px;
        height: 30px;
    }
    h4 {
        font-weight: normal;
        color: #999;
        font-size: 13px;
    }
`;
const CardBot = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    margin-top: 15px;
    h3 {
        font-weight: 600;
        font-size: 18px;
    }
`;
const CardAmount = styled.p`
    text-align: right;
    font-size: 15px;
    font-weight: ${(props) => props.fontWeight || 500};
    ${(props) =>
        props.secondary &&
        css`
            color: red;
        `};
`;
const Card = (props) => {
    return (
        <CardNews>
            <CardImg src={props.img} alt="" />
            <CardContent>
                <CardTop>
                    <CardAvatar>
                        <img
                            src="https://cdn.dribbble.com/users/2400293/avatars/small/d96fe84e413ef11b9a219a84158a739a.jpg?1573205144"
                            alt=""
                        />
                        <h4>Rachelizmarvel</h4>
                    </CardAvatar>
                    <p>256</p>
                </CardTop>
                <CardBot>
                    <h3>{props.title}</h3>
                    <CardAmount secondary={props.secondary} fontWeight={"800"}>
                        {props.price}
                    </CardAmount>
                </CardBot>
            </CardContent>
        </CardNews>
    );
};

export default Card;
