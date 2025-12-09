import useToggle from "./useToggle.tsx";
import useLocalStorage from "./useLocalStorage.tsx";
import useLocalStorageV3 from "./useLocalStorageV3.tsx";
import useLocalStorageV4 from "./useLocalStorageV4.tsx";
import useLocalStorageV5 from "./useLocalStorageV5.tsx";
import { Button } from "antd";
const MyComponent = () => {
  const { value, toggle, on, off } = useToggle(false);
  const [name, setName] = useLocalStorage(
    "name",
    "value is data from local storage"
  );
  // Lưu số
  const [age, setAge] = useLocalStorageV3("age", 5);
  const [isHappy, setIsHappy] = useLocalStorageV3("happy", true);
  const [toy] = useLocalStorageV3<{ name: string; color: string }>("toy", {
    name: "Gấu bông",
    color: "Hồng",
  });

  const [namee, setNamee, clearNamee] = useLocalStorageV4("namee", "vuive");

  const [name5, setName5] = useLocalStorageV5("name5", "Bé Siêu Nhân");

  const [age5, setAge5] = useLocalStorageV5("age5", 5);
  return (
    <div>
      <h1>Local Storage</h1>
      <hr />
      <h3>Ex5 in local storage</h3>
      <input
        value={name5}
        onChange={(e) => setName5(e.target.value)}
        placeholder="input name"
        style={{ fontSize: 20, padding: 10 }}
      />

      <h2>Tuổi: {age5}</h2>
      <Button onClick={() => setAge5(age5 + 1)} size="large">
        Tăng tuổi +1
      </Button>
      <Button onClick={() => setAge5(age5 - 1)} size="large">
        Giảm tuổi -1
      </Button>

      <hr />
      <h3>Delete data in local storage</h3>
      <p>Name: {namee}</p>
      <Button onClick={() => setNamee("the anh")}>show name</Button>
      <Button onClick={() => clearNamee()}>Clear name</Button>

      <hr />
      <h3>Object data in local storage</h3>
      <p>Toy name: {toy.name}</p>
      <p>Toy color: {toy.color}</p>

      <p>Age: {age}</p>
      <Button onClick={() => setAge(age + 1)}>Tăng tuổi</Button>
      <Button onClick={() => setAge(age - 1)}>Giảm tuổi</Button>
      <hr />
      <p>Is Happy: {isHappy ? "Yes" : "No"}</p>
      <Button onClick={() => setIsHappy((isHappy) => !isHappy)}>
        Happy of not
      </Button>
      <hr />
      <p>Name: {name}</p>
      <Button onClick={() => setName("the anh")}>change name</Button>
      <Button onClick={() => setName("")}>clear name</Button>
      <hr />
      <h1>Save state</h1>
      <p>Status: {value ? "ON" : "OFF"}</p>

      <Button onClick={toggle}>Toggle</Button>
      <Button onClick={on}>ON</Button>
      <Button onClick={off}>OFF</Button>
    </div>
  );
};

export default MyComponent;
