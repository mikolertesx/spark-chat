import histories from './Histories'

export default function ChatsList(props) {

	// TODO: Make ChatsList scrollable.
	// should have values with friends,
	// group chats, etc. and proper icons

	return (
		<div className='flex flex-column w-3 p-4 max-w-full'>
			<div className="chats-list border-round-lg shadow-4 flex-grow-1 p-4" style={{ width: "100%" }}>
				<div className='text-2xl p-1 mb-3 border-bottom-2 border-primary'>Your Friends</div>
				{/* below is likely to be changed */}
				{histories.map(chatData => {
					return (
						<div
							className='text-sm cursor-pointer p-3 shadow-1 mb-3 white-space-nowrap overflow-x-hidden text-overflow-ellipsis'
							onClick={() => props.onChatSelect(chatData.name)}
						>
							{chatData.name}
						</div>
					)
				})}
			</div>
		</div>
	)
}