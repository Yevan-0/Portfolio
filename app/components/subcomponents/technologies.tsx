import Image from "next/image";

export default function Technologies() {
  return (
    <div className="overflow-hidden w-full filter drop-shadow-[0px_4px_5px_rgba(0,0,0,0.5)] select-none">
      <div className="uppercase text-white text-[20px] sm:text-[30px] md:text-[30px] lg:text-[32px] flex flex-col items-center">
        Technologies
      </div>
      <div className="flex animation-slide w-max mt-5">
        {[...Array(2)].map((_, i) => (
          <Image
            key={i}
            src={'/images/slide.png'}
            alt="slide"
            width={2000}
            height={1000}
            className="object-contain w-max h-auto"
          />
        ))}
      </div>
      <div className="h-20" />
    </div>
  )
}