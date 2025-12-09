interface WelcomeProps {
  name: string;
  age: number;
  isActive: boolean;
}

function Welcome({ name, age, isActive }: WelcomeProps) {
  return (
    <>
      <h3> Hello, {name} </h3>
      <h3> you age: {age} years old. </h3>
      <h3>Still active: {isActive ? "Yes" : "No"}</h3>
    </>
  );
}

export default Welcome;
