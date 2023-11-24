import React, {
	useState,
} from 'react'
import CopyIcon from '../../../../../../../../assets/icons/copyIcon.svg'
import DeleteIcon from '../../../../../../../../assets/icons/deleteIcon.svg'
import {
	AddAddress,
	AddressesBox, CopyBox, RowItem, RowLabel, SecondTitle, SecondTitleBox, TitleBox,
} from '../addressess-boxes.styled'

const addressesTest = [
	{
		id:      1,
		address: 'RO49AAAA1B310075938400',
	},
	{
		id:      2,
		address: 'RO49AAAA1B310075938400',
	},
]

interface IAdressObj {
    address: string,
    id: number
}

interface IAddressRow {
    data: {
        address: string;
        id: number;
    };
    deleteAdress: (id: string | number) => void
}

const AddressRow: React.FC<IAddressRow> = ({
	data, deleteAdress,
},) => {
	return (
		<div className={RowItem}>
			<div className={RowLabel}>{data.address}</div>
			<img src={DeleteIcon} alt={`Delete Icon #${data.id}`} onClick={(): void => {
				deleteAdress(data.id,)
			}} />
		</div>
	)
}
const IbanAddressesBox: React.FC = () => {
	const [addresses, setAddresses,] = useState<Array<IAdressObj>>(addressesTest,)
	const deleteHandler = (id: string | number,): void => {
		const updatedAddresses = addresses.filter((data: IAdressObj,) => {
			return data.id !== id
		},)
		setAddresses(updatedAddresses,)
	}
	return (
		<div className={AddressesBox}>
			<div className={TitleBox}>
				<h4>Your IBAN Address</h4>
				<div className={CopyBox}>
					<p>GB29...268 19</p>
					<img src={CopyIcon} alt='Copy Icon' />
				</div>
			</div>
			<div>
				<div className={SecondTitleBox}>
					<div className={SecondTitle}>Saved Wallet Addresses</div>
				</div>
				<div>
					{addresses.map((data,) => {
						return <AddressRow data={data} key={data.id} deleteAdress={deleteHandler} />
					},)}
				</div>
				<button className={AddAddress}>+ Add New Saved IBAN Address</button>
			</div>
		</div>
	)
}
export default IbanAddressesBox
