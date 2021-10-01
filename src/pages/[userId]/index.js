import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function User() {
	const router = useRouter();
	const { userId } = router.query;

	const [todos, setTodos] = useState(null);
	const [user, setUser] = useState(null);
	const [todo, setTodo] = useState('');
	const changeHandler = (event) => {
		setTodo(event.target.value);
	};

	const addTodo = (event) => {
		event.preventDefault();
		fetch('/api/add?title=' + todo + '&userId=' + userId)
			.then((response) => response.json())
			.then((resp) => {
				const AllTodos = [...todos];
				AllTodos.push({
					id: todos[todos.length - 1].id + 1,
					title: todo,
					userId: userId,
					completed: false,
				});
				setTodos(AllTodos);
				setTodo('');
			});
	};

	const removeTodo = (item) => {
		fetch('/api/remove?todoId=' + item.id)
			.then((response) => response.json())
			.then((resp) => {
				setTodos(todos.filter((todoItem) => todoItem.id !== item.id));
			});
	};

	const loadTodos = (id) => {
		fetch('api/list?userId=' + id)
			.then((response) => response.json())
			.then((resp) => {
				setTodos(resp);
			});
	};

	const loadUser = (id) => {
		fetch('api/user?userId=' + id)
			.then((response) => response.json())
			.then((resp) => {
				setUser(resp);
			});
	};

	useEffect(() => {
		if (userId) {
			loadTodos(userId);
			loadUser(userId);
		}
	}, [userId]);

	if (!todos || !user) return 'Carregando...';
	return (
		<>
			<h3 className="text-center text-lg font-bold my-5">
				Usuario: {user.name}
			</h3>

			<form onSubmit={addTodo}>
				<input
					type="text"
					name="todo"
					onChange={changeHandler}
					value={todo}
					placeholder="Adicione um item"
					className="border rounded w-full p-2 m-3 focus:outline-none focus:ring focus:border-blue-300"
				/>
			</form>

			{todos
				.slice(0)
				.reverse()
				.map((item, index) => (
					<a
						href="#"
						onClick={() => removeTodo(item)}
						className="bg-gray-100 text-black px-3 py-2 rounded-md text-sm font-medium block m-3 hover:bg-gray-200 hover:text-black"
						key={index}
					>
						<span className="ml-3">
							{item.id} - {item.title}
						</span>
					</a>
				))}
		</>
	);
}
