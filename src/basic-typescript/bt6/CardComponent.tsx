interface User {
  name: string;
  age: number;
  email: string;
  isPremium: boolean;
}

interface UserCardProps {
  user: User;
}
import { Card } from "antd";
function UserCard({ user }: UserCardProps) {
  return (
    <div>
      <Card>
        <h3>Name: {user.name}</h3>
        <h3>Age: {user.age}</h3>
        <h3>Email: {user.email}</h3>
        <h3>{user.isPremium ? "Premium User" : "Free User"}</h3>
      </Card>
    </div>
  );
}

export default UserCard;
