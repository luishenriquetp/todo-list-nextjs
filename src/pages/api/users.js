export default async (req, res) => {
	return fetch('https://jsonplaceholder.typicode.com/users')
		.then((response) => response.json())
		.then((data) => {
			return res.status(200).json(data);
		});
};
