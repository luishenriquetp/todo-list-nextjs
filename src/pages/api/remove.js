export default async (req, res) => {
	if (!req.query.todoId) {
		return res.status(400).send('todo obrigatorio.');
	}
	const todoId = encodeURI(req.query.todoId);

	return fetch(`https://jsonplaceholder.typicode.com/todo/${todoId}`, {
		method: 'DELETE',
	})
		.then((response) => response.json())
		.then((data) => {
			return res.status(200).json(data);
		});
};
