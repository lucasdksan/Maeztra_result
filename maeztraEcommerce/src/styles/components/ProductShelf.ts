import styled from "styled-components";
import { fonts, colors } from "../themes";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 7.5px;

    a.image-content {
        margin-bottom: 10px;
        width: 100%;
        max-width: 300px;

        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }

    div.container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 320px;
        padding: 0 22px;

        div {
            &.line-colors {
                display: flex;
                width: 100%;
                align-items: center;
                justify-content: flex-start;
                margin-bottom: 8px;

                button {
                    box-sizing: border-box;
                    width: 27px;
                    height: 27px;
                    border: none;
                    border-radius: 4px;
                    margin-right: 8px;

                    &.active {
                        border: 1px solid ${colors.sub_grey};
                    }
                }
            }

            &.content {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;

                .line {
                    &-value {
                        font-family: ${fonts.font_1};
                        font-style: normal;
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 30px;
                        color: ${colors.sub_grey};
                    }

                    &-name {
                        font-family: ${fonts.font_1};
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 24px;
                        color: ${colors.sub_grey};
                        margin-bottom: 8px;
                    }

                    &-description {
                        font-family: ${fonts.font_1};
                        font-style: normal;
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 18px;
                        color: ${colors.sub_grey};
                        opacity: 0.5;
                        margin-bottom: 8px;
                    }
                }
            }    
        }

        button.add {
            width: 100%;
            height: 35px;
            background: ${colors.main_yellow};
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;

            font-family: ${fonts.font_1};
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: ${colors.main_white};
        }
    }
`;