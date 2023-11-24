import {
	css,
} from '@emotion/css'
import colors from '../../styles/colors.consts'
import {
	interNormal,
} from '../../styles/fonts'

export const btn = css`
    display: inline-flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    border: none;
    column-gap: 6px;
    padding: 10px 4px;

    ${interNormal};
    font-size: 18px;
    color: ${colors.black};

	cursor: pointer;
    border-radius: 10px;
    outline: none;

    background-color: ${colors.lightBlue};


    &:disabled {
         background-color: ${colors.sonicSilver}; 
    }
    /* &:hover,&:focus {
        outline: none;
        background-color: ${colors.black};
    } */
`
