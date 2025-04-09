import 'server-only';

import { prisma } from '@/db';

export async function getJokes() {
  console.log('Hello');
  return prisma.joke.findMany({
    orderBy: { createdAt: 'desc' },
  });
}
