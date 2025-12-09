export interface CardProps {
  title: string;
  children: React.ReactNode;
}
import "bootstrap/dist/css/bootstrap.min.css";
export default function ChildrenProp({ title, children }: CardProps) {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">{children}</div>
    </div>
  );
}
