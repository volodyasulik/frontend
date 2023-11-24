import {
	spaces,
} from '../../styles/spaces.consts'
import
colors
	from '../../styles/colors.consts'

import {
	css,
} from '@emotion/css'

export const btn = css`
	cursor: pointer;
	font-size: 24px;
	padding: ${spaces.small} ${spaces.medium};
	background: ${colors.platinum};
	border: 1.5px solid ${colors.blackChocolate};
	border-radius: 10px;

	&:hover {
		filter: contrast(120%);
	}

	&:focus {
		filter: contrast(120%);
	}

	&:active {
		filter: contrast(120%);
	}

    &:disabled {
        cursor: default;
        filter: grayscale(60%);
    }
`

export const iconBtn = css`
    padding: 5px;
    width: max-content;
`
