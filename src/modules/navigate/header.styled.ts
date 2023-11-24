import {
	css,
} from '@emotion/css'

export const HeaderStyle = css`
display: flex;
padding-top: 52px;
align-items: center;
justify-content: space-between;
padding-left: 7.25rem;
padding-right: 7.25rem;
`
export const HeaderLogo = css`
width: 4.86138rem;
height: 4.86138rem;
`

export const HeaderNav = css`
    & ul {
        display: flex;
        & li {
            & a {
                margin-left: 2.19rem;
                color: #FFF;
                font-size: 1.25rem;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                text-decoration: none;
            }

            & a:hover {
                font-weight: 900;
            }
        }
    }
`

export const BackGroundImg = css`
 width: 100%;
 height: 63.9375rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  & img {
    width: 100%;
    height: 100%;
  }
`