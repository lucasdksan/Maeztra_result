import styled from "styled-components";
import { colors, fonts } from "../themes";

export const Container = styled.div`
    width: 100%;
    height: 24px;
    background-color: ${colors.sub_grey};
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        font-family: ${fonts.font_1};
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 18px;
        color: ${colors.main_white};
    }
`;
