import styled from 'styled-components';
import { colors, fonts } from '../themes';

type Props = {
    font: number;
}

export const Container = styled.section<Props>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span.first-title {
        font-family: ${fonts.font_1};
        font-style: normal;
        font-weight: 700;
        font-size: ${props => `${props.font}px`};
        line-height: ${props => props.font === 16 ? '24px' : '37px'};
        margin-bottom: ${props => props.font === 16 ? '21px' : '25px'};
        color: ${colors.sub_grey};
    }

    div {
        &.container {
            overflow-x: scroll;
            width: 100%;

            &::-webkit-scrollbar{
                width: 10px;
                background-color: transparent;
            }
            &::-webkit-scrollbar-thumb{
                background-color: transparent;
            }

            div {
                &.card-element {
                    display: flex;
                    margin-right: 16px;
                    width: 290px;
                    padding: 16px 26px;
                    background-color: ${colors.sub_grey_5};

                    .card-description {
                        display: flex;
                        flex-direction: column;
                        margin-left: 21px;

                        span {
                            &.title {
                                font-family: ${fonts.font_1};
                                font-style: normal;
                                font-weight: 700;
                                font-size: 14px;
                                line-height: 21px;
                                color: ${colors.sub_grey};
                            }

                            &.description {
                                font-family: ${fonts.font_1};
                                font-style: normal;
                                font-weight: 400;
                                font-size: 12px;
                                line-height: 18px;
                                color: ${colors.sub_grey_1};
                            }
                        }
                    }
                }

                &.element {
                    width: 290px;

                    img {
                        width: auto;
                    }
                }
            }
        }
    }
`;