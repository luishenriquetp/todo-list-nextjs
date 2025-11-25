export default async (req, res) => {
	if (!req.query.title) {
		return res.status(400).send('title obrigatorio.');
	}
	if (!req.query.userId) {
		return res.status(400).send('userId obrigatorio.');
	}

	const title = encodeURI(req.query.title);
	const userId = encodeURI(req.query.userId);

	return fetch('https://jsonplaceholder.typicode.com/todo', {
		method: 'POST',
		body: JSON.stringify({
			title: title,
			userId: userId,
			completed: false,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then((response) => response.json())
		.then((data) => {
			return res.status(200).json(data);
		});
};
