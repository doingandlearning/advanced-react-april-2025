export interface Claim {
  id: string;
  title: string;
  description: string;
  status: "pending" | "approved" | "rejected";
  amount: number;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  lastActive: string;
}
