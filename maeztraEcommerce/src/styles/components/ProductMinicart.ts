import styled from 'styled-components';
import { fonts, colors } from "../themes";

type bgProps = {
    bg?: string;
};

export const Container = styled.div<bgProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    div.container {
        display: flex;

        img {
            width: 65px;
            height: auto;
            margin: 5px 0px;
            margin-right: 10px;
        }

        .content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            margin-right: 20px;

            span {
                font-family: ${fonts.font_1};
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 18px;
                color: ${colors.main_black};

                &.color {
                    background-color: ${props => props.bg ? props.bg : ""};
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                }
            }

            strong {
                font-family: ${fonts.font_1};
                font-size: 14px;
                line-height: 21px;
                color: ${colors.sub_grey};
                text-transform: uppercase;
            }
        }
    }

    button {
        width: 20px;
        height: 20px;

        img {
            width: 100%;
            height: 100%;
        }
    }
`;