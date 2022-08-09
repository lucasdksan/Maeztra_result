import styled from 'styled-components';
import { colors, fonts } from '../themes';

export const Container = styled.nav`
    display: flex;
    width: 100%;
    flex: 1;

    ul {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        flex: 1;

        li {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            padding: 18px 20px;
            border-bottom: 1px solid ${colors.sub_grey};

            &:last-child {
                border: none;
            }

            &:first-child {
                img {
                    display: none;
                }
            }

            a {
                font-family: ${fonts.font_1};
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 21px;
                color: ${colors.sub_grey};
            }
        }
    }

`;
