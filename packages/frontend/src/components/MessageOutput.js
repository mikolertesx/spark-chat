import histories from './Histories'

export default function MessageOutput(props) {

	return (
		<div className="message-history-container border-round-lg shadow-4 flex-grow-1 overflow-y-auto p-4 mb-3">
			<div className="message-logs" style={{ width: "100%" }}>

			</div>
		</div>
	)
}

