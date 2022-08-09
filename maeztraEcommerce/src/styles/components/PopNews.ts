import styled from 'styled-components';
import { colors, fonts } from "../themes";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    background-color: ${colors.main_shadown};
    display: none;
    align-items: center;
    justify-content: center;

    &.active {
        display: flex;
        opacity: 1;
        visibility: visible;
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        div {
            &.header {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-end;

                span {
                    font-family: ${fonts.font_3};
                    font-style: normal;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 20px;
                    text-transform: uppercase;
                    color: ${colors.main_white};

                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 25px;
                    width: 50px;
                }
            }

            &.body {
                background-color: ${colors.main_white};
                padding: 24px 20px;
                max-width: 280px;

                div {
                    &.area {
                        &-left {
                            display: none;

                            img {

                            }
                        }

                        &-right {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;

                            div {
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                justify-content: center;

                                &.first-block {
                                    margin-bottom: 13px;

                                    img {
                                        margin-bottom: 18px;
                                    }

                                    span {
                                        font-family: ${fonts.font_1};
                                        font-style: normal;
                                        font-weight: 400;
                                        font-size: 12px;
                                        line-height: 20px;
                                        text-transform: uppercase;
                                        color: ${colors.sub_grey_3};
                                    }
                                }

                                &.second-block {
                                    margin-bottom: 26px;

                                    span {
                                        font-family: ${fonts.font_1};
                                        font-style: normal;
                                        font-weight: 400;
                                        font-size: 16px;
                                        line-height: 23px;
                                        color: ${colors.sub_grey_2};
                                    }

                                    strong {
                                        font-family: ${fonts.font_3};
                                        font-style: normal;
                                        font-weight: 700;
                                        font-size: 16px;
                                        line-height: 23px;
                                        color: ${colors.sub_grey_2};
                                    }
                                }
                            }

                            form {
                                display: flex;
                                width: 100%;

                                fieldset {
                                    display: flex;
                                    flex-direction: column;
                                    align-items: center;
                                    justify-content: center;
                                    width: 100%;

                                    input {
                                        background: ${colors.main_white};
                                        border: 1px solid ${colors.sub_grey_4};
                                        border-radius: 5px;
                                        padding: 10px 6px;
                                        width: 100%;

                                        font-family: ${fonts.font_1};
                                        font-style: normal;
                                        font-weight: 400;
                                        font-size: 12px;
                                        line-height: 20px;
                                        color: ${colors.sub_grey_2};
                                        margin-bottom: 12px;
                                    }

                                    button {
                                        background: ${colors.main_yellow};
                                        border-radius: 10px;
                                        height: 40px;
                                        width: 100%;

                                        span {
                                            font-family: ${fonts.font_1};
                                            font-style: normal;
                                            font-weight: 700;
                                            font-size: 12px;
                                            line-height: 20px;
                                            text-transform: uppercase;
                                            color: ${colors.main_white};
                                            margin-right: 8px;
                                            height: 40px;
                                        }

                                        img {
                                            
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;