import React from 'react'

declare global {
  // eslint-disable-next-line @typescript-eslint/naming-convention, no-unused-vars
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ComplyCube: any;
  }
}

const ComplyCubeBtn: React.FC = () => {
	const startVerification = ():void => {
		const complycube = window.ComplyCube.mount({
			token:      '<TOKEN>',
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onComplete(data:any,) {
				// eslint-disable-next-line no-console
				console.log('Capture complete', data,)
			},
		},)

		// eslint-disable-next-line no-console
		console.log('complycube :>> ', complycube,)
	}
	return <button onClick={startVerification}>KYD</button>
}

export default ComplyCubeBtn