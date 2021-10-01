import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
	const [users, setUsers] = useState();

	const loadUsers = () => {
		fetch('api/users')
			.then((response) => response.json())
			.then((data) => {
				setUsers(data);
			});
	};

	useEffect(() => {
		loadUsers();
	}, []);

	if (!users) return 'Carregando...';
	return (
		<>
			{users.map((user, index) => (
				<Link href={`/${user.id}`} passHref key={index}>
					<a className="bg-gray-700 text-gray-300 px-3 py-2 rounded-md text-sm font-medium block m-3 hover:bg-gray-900 hover:text-white">
						<img
							className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
							src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
						/>
						<span className="ml-3">{user.name}</span>
					</a>
				</Link>
			))}
		</>
	);
}
