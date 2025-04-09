import { Claim, User } from "./types";

// Simulated data
const claims: Claim[] = [
  {
    id: "1",
    title: "Car Accident Claim",
    description: "Rear-end collision on Main Street",
    status: "pending",
    amount: 5000,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    title: "Home Insurance Claim",
    description: "Water damage in kitchen",
    status: "approved",
    amount: 2500,
    createdAt: "2024-03-14T15:30:00Z",
  },
];

const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "admin",
    lastActive: "2024-03-15T12:00:00Z",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "user",
    lastActive: "2024-03-15T11:30:00Z",
  },
];

// Simulate network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchClaim = async (id: string): Promise<Claim> => {
  await delay(1000 + Math.random() * 1000); // 1-2 second delay
  const claim = claims.find((c) => c.id === id);
  if (!claim) throw new Error("Claim not found");
  return claim;
};

export const fetchUser = async (id: string): Promise<User> => {
  await delay(1000 + Math.random() * 1000); // 1-2 second delay
  const user = users.find((u) => u.id === id);
  if (!user) throw new Error("User not found");
  return user;
};

export const fetchClaims = async (): Promise<Claim[]> => {
  await delay(500);
  return claims;
};

export const fetchUsers = async (): Promise<User[]> => {
  await delay(500);
  return users;
};
