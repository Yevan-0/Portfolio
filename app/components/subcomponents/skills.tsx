import Image from "next/image"

const skills = {
    "Design": ['UI/UX Design', 'Typography', 'Colour Theory'],
    "Development": ['Front End', 'Web Development', 'Version Control', 'Animation & Motion Design'],
    "Soft Skills": ['Attention to detail', 'Design to code translation', 'Creative Problem Solving', 'Self taught & Self Driven']
}

export default function Skills() {
    return (
        <div className="flex flex-col gap-10 justify-center px-6 items-center select-none">
            <div className="flex border bg-strawberry border-radius rounded-full border-strawberry w-100 md:w-200 md:h-22 px-6 justify-between items-center max-w-4xl py-4 filter drop-shadow-[0px_4px_5px_rgba(0,0,0,0.5)]">
                <Image
                    src={'/images/Abilities-2.png'}
                    alt="Abilities-2"
                    width={50}
                    height={50}
                    className="object-contain w-8 h-auto"
                />
                <span className="font-hanson text-white md:text-[32px] tracking-widest text-center">
                    SKILLS
                </span>
                <Image
                    src={'/images/Abilities-2.png'}
                    alt="Abilities-2"
                    width={50}
                    height={50}
                    className="object-contain w-8 h-auto scale-x-[-1]"
                />
            </div>

            <div className="flex flex-col gap-15">
                {Object.entries(skills).map(([cat, items]) => (
                    <div key={cat} className="flex flex-col gap-3 justify-center items-center">
                        <div className="flex items-center justify-center gap-4 w-full">
                            <div className="h-1 bg-white md:flex-1" />
                            <div className="font-hanson text-white uppercase text-[24px]">{cat}</div>
                            <div className="h-1 bg-white md:flex-1" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-10 mt-3">
                            {items.map((skill) => (
                                <div key={skill}
                                    className="flex items-center justify-center border border-white rounded-full tracking tracking-wide text-center py-2 px-3 w-60  bg-white text-purple uppercase">{skill}</div>
                            ))}
                        </div>

                    </div>
                ))}

            </div>

        </div>
    )
}