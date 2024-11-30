interface IUser {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string; // Optional: URL for the user's avatar
  role: UserRole; // User roles (e.g., Admin, User, Manager)
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean; // Status to indicate if the user is active
  assignedTasks?: string[]; // Array of task IDs assigned to the user
  lastLogin?: Date; // Optional: Date of the user's last login
}
