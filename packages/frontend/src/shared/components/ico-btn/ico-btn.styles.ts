import {
	css,
} from '@emotion/css'
import colors from '../../styles/colors.consts'
import {
	interRegular,
} from '../../styles/fonts'

export interface IButonClassProps {
    sufixImage?: string;
    prefixImage?: string;
    textColor?:string
    backgroundColor?:string
    howerTextColor?:string

}
export const btn = ({
	sufixImage,
	prefixImage,
	textColor,
	backgroundColor,
}:IButonClassProps,): string => {
	return css`
    display: inline-flex;
    width: 100%;
    align-items: center;
    flex-shrink: 0;

    border: none;
    column-gap: 6px;
    padding: 6px 4px;

    ${interRegular};
    font-size: 18px;
    color: ${colors.white};
    ${Boolean(textColor,) && `color: ${textColor!}`};

    ${Boolean(backgroundColor,) && `background-color:${backgroundColor!}`};

	cursor: pointer;
    border-radius: 6px;
    outline: none;

    &:hover,&:focus {
        outline: none;
        background-color: ${colors.black};
    }

    &::before, &::after {       
        width: 32px;
        height: 32px;
        flex-shrink: 0;
        mask-repeat: no-repeat;
        mask-position: center;
        
        background: ${colors.white};
        ${Boolean(textColor,) && `background: ${textColor!}`};
    }

    &::before {
        ${Boolean(prefixImage,) && 'content:"";'}
        mask-image: url(${prefixImage});
    }

    &::after {
        ${Boolean(sufixImage,) && 'content:"";'}
        mask-image: url(${sufixImage});
    }
`
}
