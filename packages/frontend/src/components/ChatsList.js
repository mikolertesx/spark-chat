import { ListBox } from 'primereact/listbox';
import { Card } from 'primereact/card';
import { VirtualScroller } from 'primereact/virtualscroller';

export default function ChatsList(props) {

	// TODO: Make ListBox scrollable.
	let friends = [
		'PaxFilipinas',
		'Senor Monikas',
		'Toyota Prius International Fan Club',
		'test',
		'test1',
		'test2',
		'test3',
		'test4',
		'test5',
		'test6',
		// 'test7',
		// 'test8',
		// 'test9',
		// 'test10'
	]

	// should have values with friends,
	// group chats, etc. and proper icons
	return (
		<div className='flex flex-column w-3 p-4 max-w-full'>
			<Card title='Your Friends' className='surface-50 mb-3 shadow-3 border-noround' />
			<ListBox
				filter
				onChange={(e) => props.onChatSelect(e.value)}
				onClick={() => { console.log('list box clicked') }}
				options={friends}
				className='flex-grow-1 shadow-5'
			/>
		</div>
	)
}