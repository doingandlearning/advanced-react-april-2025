import { useQuery } from '@tanstack/react-query'
import { fetchClaims, fetchUsers } from '../api'
import PrefetchLink from '../components/PrefetchLink'

export default function Home() {
	const { data: claims, isLoading: isLoadingClaims } = useQuery({
		queryKey: ['claims'],
		queryFn: fetchClaims,
	})

	const { data: users, isLoading: isLoadingUsers } = useQuery({
		queryKey: ['users'],
		queryFn: fetchUsers,
	})

	if (isLoadingClaims || isLoadingUsers) {
		return <div className="text-center">Loading...</div>
	}

	return (
		<div className="space-y-8">
			<section>
				<h2 className="text-2xl font-semibold mb-4">Claims</h2>
				<div className="space-y-2">
					{claims?.map(claim => (
						<div key={claim.id} className="p-4 border rounded">
							<PrefetchLink to={`/claim/${claim.id}`} prefetchType="claim">
								{claim.title}
							</PrefetchLink>
							<p className="text-gray-600">{claim.description}</p>
							<p className="text-sm text-gray-500">Status: {claim.status}</p>
						</div>
					))}
				</div>
			</section>

			<section>
				<h2 className="text-2xl font-semibold mb-4">Users</h2>
				<div className="space-y-2">
					{users?.map(user => (
						<div key={user.id} className="p-4 border rounded">
							<PrefetchLink to={`/user/${user.id}`} prefetchType="user">
								{user.name}
							</PrefetchLink>
							<p className="text-gray-600">{user.email}</p>
							<p className="text-sm text-gray-500">Role: {user.role}</p>
						</div>
					))}
				</div>
			</section>
		</div>
	)
} 