import MessageOutput from './MessageOutput'
import MessageInput from './MessageInput'
import { Card } from 'primereact/card';

export default function MessagingPanel(props) {
	function onSendHandler(message) {
		setHistory([...history, message])
	}

	return (
		<div className='relative flex flex-column w-9 m-4 border-round-lg'>
			{
				props.selectedFriend ?
					<>
						<Card
							title={props.selectedFriend}
							className='shadow-2 surface-50 mb-2 py-0 h-100'
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
						<span className='text-4xl  vertical-align-middle' >
							Select a friend to get started!
						</span>
					</div>
			}
    </div>
	)
}