export default async (req, res) => {
	if (!req.query.userId) {
		return res.status(400).send('userId obrigatorio.');
	}
	const userId = encodeURI(req.query.userId);

	return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
		.then((response) => response.json())
		.then((data) => {
			return res.status(200).json(data);
		});
};
