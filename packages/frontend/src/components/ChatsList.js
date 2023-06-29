import { useState } from 'react';
import { ListBox } from 'primereact/listbox';
import { Card } from 'primereact/card';

export default function ChatsList() {
	// tho idk, maybe make the parent handle the state.
	const [selectedChat, setSelectedChat] = useState('')
	let friends = [
		'PaxFilipinas',
		'Senor Monikas',
		'Toyota Prius International Fan Club'
	]

	// should have values with friends,
	// group chats, etc. and proper icons
	return (
		<div className='flex flex-column w-3'>
			<Card title='Your Friends' className='mb-2'></Card>
			<ListBox
				filter
				value={selectedChat}
				onChange={(e) => setSelectedChat(e.value)}
				options={friends}
				className='flex-grow-1'
			/>
		</div>
	)
}