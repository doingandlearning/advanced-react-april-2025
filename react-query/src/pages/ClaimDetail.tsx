import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchClaim } from '../api'
import { Link } from 'react-router-dom'

export default function ClaimDetail() {
	const { id } = useParams<{ id: string }>()
	const { data: claim, isLoading, isFetching } = useQuery({
		queryKey: ['claim', id],
		queryFn: () => fetchClaim(id!),
		staleTime: 5 * 60 * 1000, // 5 minutes
	})

	if (isLoading) {
		return <div className="text-center">Loading claim details...</div>
	}

	return (
		<div className="space-y-4">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-semibold">{claim?.title}</h2>
				<Link to="/" className="text-blue-600 hover:text-blue-800">
					← Back to Home
				</Link>
			</div>

			<div className="bg-white p-6 rounded-lg shadow">
				<p className="text-gray-600 mb-4">{claim?.description}</p>
				<div className="grid grid-cols-2 gap-4">
					<div>
						<p className="text-sm text-gray-500">Status</p>
						<p className="font-medium">{claim?.status}</p>
					</div>
					<div>
						<p className="text-sm text-gray-500">Amount</p>
						<p className="font-medium">${claim?.amount.toLocaleString()}</p>
					</div>
					<div>
						<p className="text-sm text-gray-500">Created At</p>
						<p className="font-medium">
							{new Date(claim?.createdAt || '').toLocaleDateString()}
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