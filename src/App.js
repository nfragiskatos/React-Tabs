import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App () {
	const fetchData = async () => {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
	};
	fetchData();
	console.log('hello after data fetch');

	return <h2>tabs project setup</h2>;
}

export default App;
