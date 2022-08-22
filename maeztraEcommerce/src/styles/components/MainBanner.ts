import styled from "styled-components";
import { colors, fonts } from "../themes";

export const Container = styled.div`
    width: 100%;
    height: auto;

    div.slick-slider.container {
        .slick- {
            &arrow {
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10;
            }

            &prev {
                left: 25px;

                &:before {
                    content:"";
                }

                img {
                    height: 20px;
                    width: auto;
                }
            }

            &next {
                right: 25px;

                &:before {
                    content:"";
                }

                img {
                    height: 20px;
                    width: auto;
                }
            }

            &dots {
                bottom: 10px;
                
                li {
                    margin: 0 .7px;

                    &.slick-active {
                        button {
                            &:before {
                                opacity: 1;
                                background: ${colors.main_yellow};
                            }
                        }
                    }

                    button {
                        padding: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        &:before {
                            opacity: 1;
                            content: "";
                            color: transparent;
                            background: transparent;
                            width: 8px;
                            height: 8px;
                            border-radius: 50%;
                            border: 1px solid ${colors.main_yellow};
                        }
                    }
                }
            }

            &disabled {
                img {
                    display: none;
                }
            }
        }
    }
`;