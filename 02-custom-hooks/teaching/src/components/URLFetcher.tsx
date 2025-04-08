import { useState } from 'react';
import DataDisplay from './DataDisplay';
import React from 'react';

function URLFetcher() {
	const [url, setUrl] = useState('');
	const inputRef = React.useRef<HTMLInputElement>(null)
	const handleFetchData = () => {
		setUrl(inputRef!.current.value);
	};

	return (
		<div>
			<h1>URL Fetcher</h1>
			<input
				type="text"
				placeholder="Enter API URL"
				ref={inputRef}
			/>
			<button onClick={handleFetchData}>Fetch Data</button>
			{url && <DataDisplay url={url} />}
		</div>
	);
}

export default URLFetcher;
