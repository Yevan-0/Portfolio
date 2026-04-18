import Welcome from "./subcomponents/welcome"
import Inspiration from "./subcomponents/inspiration"

export default function Hero() {
  return (
    <div className="select-none flex flex-col">
      <div className="xs:hidden text-yellow-200">Mobile</div>
      <div className="hidden xs:block md:hidden text-red-300">Tablet</div>
      <Welcome />
      <Inspiration />
    </div>
  )
}

