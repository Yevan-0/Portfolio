export default function Banner() {
    const items = Array(10).fill('ABOUT ME');

    const Strip = ({ text }: { text: string[] }) => {
        return (
            <div className="inline-flex shrink-0">
                {text.map((t, i) => (
                    <span key={i} className="mx-6 font-hanson text-xl tracking-wide">
                        {t}
                    </span>
                ))}
            </div>
        )
    }
    return (
        <div className="relative py-8 overflow-hidden ">
            <div className="absolute w-[150%] left-[-25%] bg-white text-strawberry py-3 top-0 rotate-0 md:top-17 md:rotate-[-4deg] filter drop-shadow-[4px_4px_6px_rgba(0,0,0,0.8)]">
                <div className="flex animation-marque whitespace-nowrap">
                    <Strip text={items} />
                    <Strip text={items} />
                </div>
            </div>

            <div className="absolute w-[150%] left-[-25%] bg-black text-strawberry py-3 top-10 rotate-0 md:top-17 md:rotate-[2.5deg] filter drop-shadow-[4px_4px_6px_rgba(0,0,0,0.8)]">
                <div className="flex animation-reverse whitespace-nowrap">
                    <Strip text={items} />
                    <Strip text={items} />
                </div>
            </div>

            <div className="h-10 md:h-35"/>
        </div>
    )
}