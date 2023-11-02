import React from "react";
import WidgetItem from "./WidgetItem";
import styled from "styled-components";

const StyleList = styled.div`
    width: 50%;
    margin: 30px auto;
`;

const WidgetList = () => {
    return (
        <StyleList>
            <WidgetItem title="Almost done!" icon="fa-regular fa-heart"></WidgetItem>
            <WidgetItem
                icon="fa-regular fa-thumbs-up"
                title="Congrats!"
                flexBtn={true}
                btn={true}
            ></WidgetItem>
            <WidgetItem
                title="Loading data.."
                secondary={true}
                icon="fa-regular fa-file-lines"
                close={true}
                btn={true}
            ></WidgetItem>
        </StyleList>
    );
};

export default WidgetList;
