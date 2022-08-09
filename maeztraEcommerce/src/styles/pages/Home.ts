import styled from "styled-components";
import { colors, fonts } from "../themes";

export const Container = styled.main`
    padding: 0px 30px 40px 30px;
    margin-top: 112px;

    section {
        &.last-banner {
            width: 100%;

            div {
                &.content {
                    &-text {
                        display: flex;
                        flex-direction: column;
                        margin-bottom: 25px;

                        span {
                            font-family: ${fonts.font_1};
                            font-style: normal;
                            font-weight: 700;
                            font-size: 24px;
                            line-height: 37px;
                            color: ${colors.main_black};
                            margin-bottom: 18px;
                        }

                        p {
                            font-family: ${fonts.font_1};
                            font-style: normal;
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 21px;
                            max-width: 95%;
                            color: ${colors.main_black};
                        }
                    }

                    &-banner {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        img {
                            width: 100%;
                            height: auto;
                            object-fit: contain;
                        }
                    }
                }
            }
        }
    }

`;