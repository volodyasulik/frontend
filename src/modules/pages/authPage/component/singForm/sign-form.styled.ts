import {
	css,
} from '@emotion/css'

export const createUserFormStyles = css`
	display: flex;
	flex-direction: column;
	gap: 10px;
`

export const usersListWrapperStyles = css`
    display: grid;
    gap: 10px;
    grid-template-rows: minmax(142px, 1fr) 48px;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr;
`

export const usersListStyles = css`
    list-style: none;
    padding: 0;
    max-width: 430px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    height: 100%;
`

export const userListItem = css`
    display: grid;
    font-size: 16px;
    gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 40px 40px;
    text-align: left;
`

export const userListControlsWrapper = css`
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
    font-size: 22px;
`

export const deleteUserTitle = css`
	text-align: center;
`

export const deleteUserControlsWrapper = css`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 10px;
`
