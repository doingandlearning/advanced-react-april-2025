import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchUser } from '../api'
import { Link } from 'react-router-dom'

export default function UserDetail() {
	const { id } = useParams<{ id: string }>()
	const { data: user, isLoading, isFetching } = useQuery({
		queryKey: ['user', id],
		queryFn: () => fetchUser(id!),
		staleTime: 0, // Always fetch fresh data
	})

	if (isLoading) {
		return <div className="text-center">Loading user details...</div>
	}
	if (!user) {

		return <div>Problem retrieving user.</div>
	}
	return (
		<div className="space-y-4">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-semibold">{user?.name}</h2>
				<Link to="/" className="text-blue-600 hover:text-blue-800">
					← Back to Home
				</Link>
			</div>

			<div className="bg-white p-6 rounded-lg shadow">
				<div className="grid grid-cols-2 gap-4">
					<div>
						<p className="text-sm text-gray-500">Email</p>
						<p className="font-medium">{user?.email}</p>
					</div>
					<div>
						<p className="text-sm text-gray-500">Role</p>
						<p className="font-medium">{user?.role}</p>
					</div>
					<div>
						<p className="text-sm text-gray-500">Last Active</p>
						<p className="font-medium">
							{new Date(user?.lastActive || '').toLocaleString()}
						</p>
					</div>
				</div>
			</div>

			{isFetching && !isLoading && (
				<div className="text-sm text-gray-500">Refreshing data...</div>
			)}
		</div>
	)
} 