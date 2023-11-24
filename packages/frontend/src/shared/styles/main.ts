/* eslint-disable no-unused-expressions */
import {
	injectGlobal,
} from '@emotion/css'
import {
	montserratAlternatesRegular,
} from './fonts'

injectGlobal`
	html, body {
		height: 100%;
	}

	body {
		line-height: 1.5;
		-webkit-font-smoothing: antialiased;
	}

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none; // Yeah, yeah everybody write about it
    }

    input[type='number'],
    input[type="number"]:hover,
    input[type="number"]:focus {
        appearance: none;
        -moz-appearance: textfield;
    }

	:root {
		width: 100%;
		isolation: isolate;
	}

	*, *::before, *::after {
		box-sizing: border-box;
	}

	* {
		margin: 0;
        transition: all 200ms;
	}

    ul, ol {
        padding: 0;
        margin: 0;
        list-style: none;
    }

	img, picture, video, canvas, svg {
		display: block;
		max-width: 100%;
	}

	p, h1, h2, h3, h4, h5, h6 {
		${montserratAlternatesRegular}
		overflow-wrap: break-word;
		margin-bottom: 0;
		color: var(--reverted-accent-color);
	}

	input, button, textarea, select {
		${montserratAlternatesRegular}
	}

	button {
		cursor: pointer;
	}

	.hidden-el {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		border: 0;
		padding: 0;
		clip: rect(0 0 0 0);
		overflow: hidden;
	}
`
