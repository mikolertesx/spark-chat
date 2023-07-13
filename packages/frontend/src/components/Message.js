
export default function Message({ message, imageLink }) {
	return (
		<div className='flex flex-row'>
			{/* prime react image does not take border-radius */}
			<img className='border-circle' height={65} src={imageLink} />
			<div className='text-center'>
				{message}
			</div>
		</div>
	)
}