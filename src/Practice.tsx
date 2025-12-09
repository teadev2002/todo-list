import WelcomeUI from "./basic-typescript/bt1/WelcomeUI";
import ButtonList from "./basic-typescript/bt2/ButtonList";
import Counter from "./basic-typescript/bt3/BasicCounter";
import FormInputControlled from "./basic-typescript/bt4/FormInputControlled";
import ButtonToggle from "./basic-typescript/bt5/ButtonToggle";
import CardInput from "./basic-typescript/bt6/CardInput";
import ListComponentWithGenericUI from "./basic-typescript/bt7/ListComponentWithGenericUI";
import ChildrenPropUI from "./basic-typescript/bt8/ChildrenPropUI";
import DarkModeButton from "./todo-app/components/ThemeToggle";

const Practice = () => {
  return (
    <div>
      <DarkModeButton />
      <hr></hr>
      <h1>Children Prop</h1>
      <ChildrenPropUI />
      <hr></hr>
      <h1>List Component With Generic</h1>
      <ListComponentWithGenericUI />
      <hr></hr>
      <h1>Card Component</h1>
      <CardInput />
      <hr></hr>
      <h1> Button Toggle</h1>
      <ButtonToggle />
      <hr></hr>
      <h1> Form Input Controlled</h1>
      <FormInputControlled />
      <hr></hr>
      <h1> Basic Counter</h1>
      <Counter />
      <hr></hr>
      <h1> Button Component</h1>
      <ButtonList />
      <hr></hr>
      <h1> Basic React Typescript</h1>
      <WelcomeUI />
      {/* <MyComponent /> <br /> <hr></hr>
      <PracticeAFCount /> <hr></hr>
      <PracticeAFCallName /> */}
      <hr></hr>
    </div>
  );
};

export default Practice;
