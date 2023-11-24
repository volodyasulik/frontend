import {
	css,
} from '@emotion/css'

export const ModalContainer = css`
width: 24.75rem;
height: 21.6875rem;
border-radius: 12px;
background: var(--black-80, #444548);
box-shadow: 0px 4px 20px 0px rgba(44, 45, 49, 0.05);
padding: 0 10px;
`

export const WindowTitle = css`
& h3 {
    padding: 14px 0 11px 4px;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    
}
`

export const InputsContainer = css`
display: flex;
flex-direction: column;
align-items: center;
`

export const operationButton = (disable: boolean,): string => {
	return css`
        display: flex;
        width: 12.75rem;
        height: 2.625rem;
        padding: 0.625rem 0.25rem;
        justify-content: center;
        align-items: center;
        gap: 0.375rem;
        border-radius: 0.625rem;
        cursor: ${disable ?
		'default' :
		'pointer'
};
       background:${disable ?
		'#737376' :
		'#03BEFF'} ;
        border: 0;
        outline: 0;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-top: 2rem;

        &:focus,
		&:hover {
			outline: none;
		}
    `
}

export const ArrowImg = css`
width: 2rem;
height: 2rem;
`