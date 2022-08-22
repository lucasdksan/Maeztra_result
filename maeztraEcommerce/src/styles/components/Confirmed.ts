import styled from 'styled-components';
import { colors, fonts } from '../themes';

interface AddContainer {
    active: boolean;
}

export const Container = styled.div<AddContainer>`
    position: fixed;
    bottom: ${props => props.active ? "10px" : "-100px"};
    left: 10px;
    display: ${props => props.active ? "block" : "none"};

    button {
        display: flex;
        padding: 5px 10px;
        align-items: center;
        justify-content: space-between;
        background-color: ${colors.main_black};
        border-radius: 8px;

        span {
            font-family: ${fonts.font_1};
            color: ${colors.main_white};
            margin: 0 10px 0 0;
        }
    
        strong {
            font-family: ${fonts.font_1};
            color: ${colors.main_white};
        }
    }
`;