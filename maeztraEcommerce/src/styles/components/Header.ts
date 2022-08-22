import styled from "styled-components";
import { colors, fonts } from "../themes";

type HeaderProps = {
    move: boolean;
}

type MenuProps = {
    active: boolean;
}

export const Container = styled.header<HeaderProps>`
    display: flex;
    position: fixed;
    top: ${(props)=> props.move ? '0px' : '24px'};
    left: 0;
    right: 0;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 88px;
    background-color: ${colors.main_white};
    padding: 0px 16px;
    z-index: 1000;
`;

export const FistLine = styled.div<HeaderProps>`
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
                top: ${(props)=> props.move ? '88px' : '112px'};
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
            font-size: 0px;

            img {
                height: 100%;
                width: auto;
            }

            &.search-button {
                margin-right: 15px;
            }

            &.account-button,
            &.Wishlist-button {
                display: none;
            }
        }
    }
`;

export const SecondLine = styled.div<MenuProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.main_white};

    position: fixed;
    overflow: hidden;
    top: 0;
    left: ${props=> props.active ? '0px' : '-100vw'};
    width: 100%;
    height: 100%;
    opacity: ${props=> props.active ? 1 : 0};
    visibility: ${props=> props.active ? 'visible' : 'hidden'};
    z-index: 5002;
    transition: all .2s ease-in-out;

    div {
        &.header-menu {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 100%;
            height: 50px;
            padding: 5px 15px;

            span.close-btn {
                font-family: ${fonts.font_1};
                font-style: normal;
                font-weight: 700;
                font-size: 22px;
                line-height: 24px;
                color: ${colors.sub_grey};
            }
        }

        &.footer-menu {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 55px;
            border-top: 1px solid ${colors.sub_grey};

            a {
                border-right: 1px solid ${colors.sub_grey};
            }

            span,
            a {
                display: flex;
                flex: 1;
                height: 100%;
                align-items: center;
                justify-content: center;

                font-family: ${fonts.font_1};
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 21px;
                color: ${colors.sub_grey};

                img {
                    margin-right: 15px;
                }
            }

        }
    }
`;