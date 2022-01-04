import Calculator from "./Calculator";
import Screen from "./Screen";
import Button from "./Button";

function App() {
  const buttonColour = "#1f3d7a";

  return (
    <Calculator>
      <Screen />
      <Button name="7" />
      <Button name="8" />
      <Button name="9" />
      <Button name="/" bkgdColor={buttonColour} />
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
      <Button name="*" bkgdColor={buttonColour} />
      <Button name="1" />
      <Button name="2" />
      <Button name="3" />
      <Button name="+" bkgdColor={buttonColour} />
      <Button name="0" />
      <Button name="." />
      <Button name="=" />
      <Button name="-" bkgdColor={buttonColour} />
      <button id="clear">CLEAR</button>
    </Calculator>
  );
}

export default App;
