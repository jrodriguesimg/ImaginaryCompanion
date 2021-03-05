import Button from "./Buttons/Button.js"

const ExtensionPopup = (props) => {
  return(
    <div className="ExtensionPopup">
      Crome Extension
      <Button className="brb" text="Be right Back" />
      <Button className="checkin" text="Checkin" />
      <Button className="leaving" text="Leaving" />
      <Button className="lunch" text="Lunch" />
    </div>
  )
}

export default ExtensionPopup;