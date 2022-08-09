import styled from 'styled-components';
import { colors, fonts } from "../themes";

export const Container = styled.div`
    position: fixed;
    overflow: hidden;
    top: 0;
    left: -100vw;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    z-index: 0;
    transition: all .2s ease-in-out;

    &.active {
        opacity: 1;
        left: 0;
        visibility: visible;
        z-index: 5002;
        transition: all .1s ease-in-out;
    }

    div.ecn-lightbox-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        height: 100%;
        background: ${colors.main_white};
        padding: 0;
        max-width: 420px;
        width: 100%;
        overflow-y: hidden;
        box-shadow: -3px 0 10px 0 rgb(0 0 0 / 8%);

        div.header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: 10px 15px;

            span {
                &.close-btn {
                    font-family: ${fonts.font_1};
                    font-style: normal;
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 24px;
                    color: ${colors.sub_grey};
                }

                &.title {
                    font-family: ${fonts.font_1};
                    font-style: normal;
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 37px;
                    display: flex;
                    align-items: center;
                    text-align: center;
                    text-transform: uppercase;
                    color: ${colors.sub_grey};
                }
                
                &.counter {
                    background-color: ${colors.main_yellow};
                    color: ${colors.main_white};
                    width: 20px;
                    height: 20px;
                    margin: 0;
                    line-height: 20px;
                    border-radius: 100%;
                    padding: 2px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 11px;
                    font-weight: 400;
                    letter-spacing: .45px;
                    text-transform: uppercase;
                }
            }
        }

        div.main {
            flex: 1;
            padding: 10px 15px;

            div.content-products {
                overflow-y: scroll;
            }
        }

        div.footer {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 10px 15px;

            section {
                width: 100%;

                &.calculation-area {
                    
                    margin-bottom: 15px;

                    div {
                        &.sub-total ,
                        &.total,
                        &.shipping-area {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            width: 100%;

                            span {
                                font-family: ${fonts.font_1};
                                font-style: normal;
                                font-weight: 400;
                                font-size: 14px;
                                line-height: 21px;
                                color: ${colors.sub_grey};
                                text-transform: uppercase;
                            }

                            strong {
                                font-family: ${fonts.font_1};
                                font-size: 14px;
                                line-height: 21px;
                            }
                        }

                        &.sub-total,
                        &.shipping-area {
                            margin-bottom: 10px;
                        }

                        &.shipping-area {
                            form {
                                fieldset {
                                    display: flex;

                                    input {
                                        border: 1px solid ${colors.sub_grey_4};
                                        width: 125px;
                                        color: ${colors.main_black};
                                        font-family: ${fonts.font_1};
                                        font-size: 12px;
                                        font-weight: 500;
                                        letter-spacing: 2.04px;
                                        padding: 0 10px;
                                    }

                                    button {
                                        font-family: ${fonts.font_1};
                                        font-style: normal;
                                        font-weight: 400;
                                        font-size: 14px;
                                        line-height: 21px;
                                        color: ${colors.main_white};
                                        background-color: ${colors.main_yellow};
                                        padding: 0 5px;
                                    }
                                }
                            }
                        }
                    }
                }

                &.button-area {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    button {
                        flex: 1;
                        height: 40px;

                        &.checkout,
                        &.more {
                            font-family: ${fonts.font_1};
                            font-style: normal;
                            font-weight: 400;
                            font-size: 12px;
                            line-height: 21px;
                            text-transform: uppercase;
                        }

                        &.more {
                            margin-right: 5px;
                            color: ${colors.main_black};
                            border: 1px solid ${colors.main_black};
                            background-color: ${colors.main_white};
                        }

                        &.checkout {
                            margin-left: 5px; 
                            color: ${colors.main_white};
                            background-color: ${colors.main_yellow};
                        }
                    }
                }
            }
        }
    }
`;
