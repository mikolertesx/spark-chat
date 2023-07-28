export default function ChatMateHeader(props) {
	return (
		<div className='p-4' >
			<div className='text-2xl p-1 border-bottom-2 border-primary'>
				{props.selectedFriend}
			</div>
		</div>
	)
}