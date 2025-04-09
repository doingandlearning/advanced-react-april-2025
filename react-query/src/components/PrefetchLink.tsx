import { Link, useNavigate } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query'
import { fetchClaim, fetchUser } from '../api'

interface PrefetchLinkProps {
	to: string
	children: React.ReactNode
	prefetchType: 'claim' | 'user'
}

export default function PrefetchLink({ to, children, prefetchType }: PrefetchLinkProps) {
	const queryClient = useQueryClient()
	const navigate = useNavigate()
	const id = to.split('/').pop() || ''

	const handleMouseEnter = () => {
		if (prefetchType === 'claim') {
			queryClient.prefetchQuery({
				queryKey: ['claim', id],
				queryFn: () => fetchClaim(id),
			})
		} else {
			queryClient.prefetchQuery({
				queryKey: ['user', id],
				queryFn: () => fetchUser(id),
			})
		}
	}

	const handleClick = async (e: React.MouseEvent) => {
		e.preventDefault()
		try {
			if (prefetchType === 'claim') {
				await queryClient.ensureQueryData({
					queryKey: ['claim', id],
					queryFn: () => fetchClaim(id),
				})
			} else {
				await queryClient.ensureQueryData({
					queryKey: ['user', id],
					queryFn: () => fetchUser(id),
				})
			}
			navigate(to)
		} catch (error) {
			console.error('Failed to prefetch data:', error)
			navigate(to)
		}
	}

	return (
		<Link
			to={to}
			onMouseEnter={handleMouseEnter}
			onClick={handleClick}
			className="text-blue-600 hover:text-blue-800 underline"
		>
			{children}
		</Link>
	)
} 