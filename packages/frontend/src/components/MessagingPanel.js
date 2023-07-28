import MessageOutput from './MessageOutput'
import MessageInput from './MessageInput'
import ChatMateHeader from './ChatMateHeader'

export default function MessagingPanel(props) {

	function onSendHandler(message) {
		setHistory([...history, message])
	}

	return (
		<div className='flex flex-column w-9 m-4 border-round-lg shadow-4'>
			{
				props.selectedFriend ?
					<>
						<ChatMateHeader
							selectedFriend={props.selectedFriend}
						/>
						<MessageOutput
							currentFriend={props.selectedFriend}
							chatHistory={history}
						/>
						<MessageInput
							currentFriend={props.selectedFriend}
							onSend={onSendHandler}
						/>
					</>
					:
					<div className='border-round-lg shadow-4 flex-grow-1 p-6 text-center'>
						<span className='text-4xl vertical-align-middle' >
							Select a friend to get started!
						</span>
					</div>
			}
		</div>
	)
}