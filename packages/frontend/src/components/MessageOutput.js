import histories from './Histories'

export default function MessageOutput(props) {

	let currentChatMate = histories.filter(x => x.name === props.currentFriend)[0]
	let currentUser = histories.filter(x => x.name === 'Senor Monikas')[0]

	return (
		<div className="message-history-container border-round-lg shadow-4 flex-grow-1 overflow-y-auto p-4 mb-3">
			<div className="message-logs" style={{ width: "100%" }}>
				{
					<>
						{
							currentChatMate.chatHistory.map(
								(message) => {
									return (
										<div className='flex flex-row gap-2 shadow-1 p-2 border-round-xl mb-2'>
											<img className='profile-picture border-round-xl'
												src={currentChatMate.image}
												height={60}
												width={60}
												alt={`Profile picture of ${currentChatMate.name}`}
											/>
											{/* prob needs to be taller to see */}
											<div className='flex flex-column'>
												<div className='username mb-1'>{currentChatMate.name}</div>
												<div className='message text-sm'>
													{message}
												</div>
											</div>
										</div>
									)
								}
							)
						}
						{
							currentUser.chatHistory.map(
								(message) => {
									return (
										<div className='flex flex-row gap-2 shadow-1 p-2 border-round-xl mb-2'>
											<img className='profile-picture border-round-xl'
												src={currentUser.image}
												height={60}
												width={60}
												alt={`Profile picture of ${currentUser.name}`}
											/>
											{/* prob needs to be taller to see */}
											<div className='flex flex-column'>
												<div className='username mb-1'>{currentUser.name}</div>
												<div className='message text-sm'>
													{message}
												</div>
											</div>
										</div>
									)
								}
							)
						}
					</>
				}
			</div>
		</div>
	)
}

