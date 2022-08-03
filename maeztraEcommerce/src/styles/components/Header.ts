import { fonts } from './../themes/fonts';
import styled from "styled-components";
import { colors } from "../themes";

export const Container = styled.header`
    display: flex;
    position: fixed;
    top: 24px;
    left: 0;
    right: 0;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 88px;
    background-color: ${colors.main_white};
    padding: 0px 16px;
`;

export const FistLine = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    .left-area {
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            margin-right: 19px;
            height: 32px;
            width: 32px;

            img {
                height: 100%;
                width: auto;
            }
        }
        
        .area-logo {    
            height: 88px;

            img {
                width: auto;
                height: 100%;
            }
        }

        .area-search {
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;

            position: fixed;
            overflow: hidden;
            
            top: -100px;
            opacity: 0;
            visibility: hidden;
            z-index: 0;
            transition: all .2s ease;
            background-color: ${colors.main_white};

            &.active {
                opacity: 1;
                top: 112px;
                left: 0;
                visibility: visible;
                z-index: 1;
                transition: all .1s ease;
            }
            
            form {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                width: 100%;

                fieldset {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    width: 100%;
                    padding: 0 20px;
                    
                    input {
                        height: 40px;
                        background: ${colors.sub_grey_5};
                        border-radius: 10px 0px 0px 10px;
                        padding: 0 24px;
                        flex: 1;

                        font-family: ${fonts.font_1};
                        font-style: normal;
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 18px;
                        display: flex;
                        align-items: center;
                        color: ${colors.sub_grey};
                    }

                    button {
                        height: 40px;
                        background-color: ${colors.main_yellow};
                        border-radius: 0 10px 10px 0;
                        span {
                            display: flex;
                            width: 100%;
                            height: 100%;
                            align-items: center;
                            justify-content: center;
                            padding: 5px 15px;
                            font-family: ${fonts.font_1};
                            font-style: normal;
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 21px;
                            color: ${colors.main_white};
                        }
                    }
                }
            }
        }
    }

    .right-area {
        display: flex;
        align-items: center;

        span {
            display: flex;
            width: 32px;
            height: 32px;

            img {
                height: 100%;
                width: auto;
            }

            &.search-button {
                margin-right: 15px;
            }
        }
    }
`;

export const SecondLine = styled.div`

`;