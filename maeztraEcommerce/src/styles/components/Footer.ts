import styled from "styled-components";
import { colors, fonts } from "../themes";

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${colors.sub_grey};
    width: 100%;
    padding: 24px 55px;
    right: 0;
    left: 0;
    bottom: 0;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;

        &.networks,
        &.pay-meths {
            margin-bottom: 30px;
            img {
                margin: 0px 12px;

                &:last-child {
                    margin-right: 0px;
                }

                &:first-child {
                    margin-left: 0px;
                }
            }

            a {
                margin: 0px 12px;

                &:last-child {
                    margin-right: 0px;
                }

                &:first-child {
                    margin-left: 0px;
                }

                img {
                    margin: 0;
                }
            }
        }

        &.refe {
            display: flex;
            align-items: center;
            justify-content: space-between;

            span {
                font-family: ${fonts.font_4};
                font-style: normal;
                font-weight: 400;
                font-size: 10px;
                line-height: 14px;
                color: ${colors.main_white};

                display: flex;
                flex-direction: column;

                img {
                    margin-top: 4px;
                    height: 30px;
                    width: auto;
                }
            }
        }
    }
`;

export const MoreInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    padding: 40px 30px;

    section {
        width: 100%;
        transition: height .2s ease-in-out;

        div.title-area {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 18px;

            span {
                font-family: ${fonts.font_1};
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 18px;
                color: ${colors.sub_grey};

                &.btn-plus {
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }

        ul {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            
            height: 0px;
            visibility: hidden;
            transition: all .2s ease-out;
            overflow-y: hidden;

            &.active {
                height: auto;
                visibility: visible;
                transition: all .2s ease-in;
            }


            li {
                margin-bottom: 24px;

                a {
                    font-family: ${fonts.font_1};
                    font-style: normal;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 18px;
                    color: ${colors.main_black};
                }
            }
        }
    }
`;

export const Newsletter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px 30px;
    background-color: ${colors.sub_white};

    h3 {
        font-family: ${fonts.font_1};
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 37px;
        display: flex;
        align-items: center;
        text-align: center;
        color: ${colors.sub_grey};
        margin-bottom: 8px;
    }

    form {
        width: 100%;

        fieldset {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;

            input {
                background: ${colors.main_white};
                border: 1px solid ${colors.sub_grey};
                border-radius: 4px;
                padding: 0px 24px;
                height: 26px;
                width: 100%;

                font-family: ${fonts.font_1};
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 21px;
                display: flex;
                align-items: center;
                color: ${colors.sub_grey};
            }

            button {
                background: ${colors.main_yellow};
                border: 1px solid ${colors.main_yellow};
                border-radius: 4px;
                padding: 0px 20px;
                margin-left: 15px;
                height: 26px;

                font-family: ${fonts.font_1};
                font-style: normal;
                font-weight: 700;
                font-size: 14px;
                line-height: 21px;
                display: flex;
                align-items: center;
                color: ${colors.main_white};
            }
        }
    }
`;