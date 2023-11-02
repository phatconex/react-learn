import React from "react";
import styled, { css } from "styled-components";

const StyleCard = styled.div`
    display: flex;
    align-items: flex-start;
    background-color: #fdebe0;
    ${(props) =>
        props.secondary &&
        css`
            background-color: transparent;
            border: 2px solid #fdebe0;
        `};
    padding: 22px;
    border-radius: 16px;
    position: relative;
    margin-bottom: 35px;
    .card-icon {
        background-color: #f8dbcb;
        margin-right: 16px;
        padding: 8px 12px;
        border-radius: 5px;
    }
    .card-content {
        h3 {
            font-weight: 600;
        }
    }
    .card-close {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 12px;
        ${(props) =>
            props.close ||
            css`
                display: none;
            `};
    }
    .card-button {
        ${(props) =>
            props.btn ||
            css`
                display: none;
            `};
        ${(props) =>
            props.flexBtn &&
            css`
                display: flex;
                gap: 20px;
            `};
        a {
            text-decoration: none;
            text-align: center;
            padding: 8px 20px;
            display: block;
            width: 100%;
            color: #000;
            border: 2px solid #f4dfd3;
            border-radius: 10px;
            margin-top: 10px;
        }
    }
`;

const WidgetItem = (props) => {
    return (
        <StyleCard
            secondary={props.secondary}
            close={props.close}
            flexBtn={props.flexBtn}
            btn={props.btn}
        >
            <div className="card-icon">
                <i class={props.icon}></i>
            </div>
            <div className="card-content">
                <h3>{props.title}</h3>
                <p>Complete registration of your business profile to start work.</p>
                <div className="card-button">
                    <a href="">
                        <i class="fa-solid fa-plus"></i> Join company
                    </a>
                    <a href="">
                        <i class="fa-solid fa-circle-plus"></i> Create a company
                    </a>
                </div>
            </div>
            <div className="card-close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        </StyleCard>
    );
};

export default WidgetItem;
