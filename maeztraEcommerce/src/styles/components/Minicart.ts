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
    }
`;
