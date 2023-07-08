import { Card } from 'primereact/card';
import histories from './Histories'


export default function ChatsList(props) {

	// TODO: Make ChatsList scrollable.
	// should have values with friends,
	// group chats, etc. and proper icons

	return (
		<div className='flex flex-column w-3 p-4 max-w-full'>
			<Card className='surface-50 mb-3 shadow-3 border-noround text-lg'>Your Friends</Card>
			<div
				className="chats-list border-round-lg shadow-4 flex-grow-1 p-4"
				style={{ width: "100%" }}
			>
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