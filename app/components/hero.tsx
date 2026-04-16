import Welcome from "./subcomponents/welcome"
import Inspiration from "./subcomponents/inspiration"

export default function Hero() {
  return (
    <div className="select-none flex flex-col">
      <Welcome />
      {/* <Inspiration /> */}
    </div>
  )
}

