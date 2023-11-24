import {
	css,
} from '@emotion/css'

export const TitleContainer = css`
display: flex;
margin-bottom:16px ;
align-items: center;

& img {
    width: 42px;
    height: 42px;
}

& span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    background-color: #15161A;
    border-radius: 50%;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--white, #FFF);
}

& h3 {
    color: var(--white, #FFF);
    text-align: center;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 10px;
}
`

export const linkItem = function(fontSize = '18px',): string {
	return css`
    display: flex;
    width: 100%;
    height: auto;
    padding: 6px 4px;
    align-items: center;
    gap: 6px;
    align-self: stretch;
    margin-top: 10px;
    background-color: transparent;

    &:hover {
      border-radius: 6px;
      background-color: #15161A;
    }

    & img {
      width: 32px;
      height: 32px;
    }

    a {
      text-decoration: none;
    }

    & p {
      color: var(--White, #FFF);
      font-size: ${fontSize};
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin-left: 6px;
    }
  `
}

export const ActiveLink = css`
    border-radius: 6px;
    background-color: #15161A !important;
`

export const PlanContainer = css`
margin: 32px 0;
width: 100%;
height: auto;
`

export const PlanTitleContainer = css`
display: flex;
justify-content: space-between;
align-items: center;

& p {
    color: var(--White, #FFF);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}


`

export const PlanLinkTextContainer = css`
display: flex;
padding: 2px 2px 2px 6px;
justify-content: space-between;
align-items: center;
margin-bottom: 6px;
`

export const PlanImg = css`
   object-fit: cover;
`

export const SedavaLogoStyle = css`
margin-top: 52px;
`

