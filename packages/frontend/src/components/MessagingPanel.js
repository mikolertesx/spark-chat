import MessageOutput from './MessageOutput'
import MessageInput from './MessageInput'
import { Card } from 'primereact/card';

export default function MessagingPanel(props) {
	return (
		<div className='relative flex flex-column w-9 m-4 border-round-lg'>
			<Card title={props.selectedFriend} className='shadow-2 surface-50 mb-2 py-0' />
			<MessageOutput />
			<MessageInput />
		</div>
	)
}