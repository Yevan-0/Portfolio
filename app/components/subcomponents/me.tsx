import Image from "next/image"

export default function Me() {
    return (
        <div className="flex flex-col items-center justify-center pointer-events-none select-none">
            <div className="flex flex-col justify-center items-center md:flex-row">
                <div className="flex w-50 md:w-100">
                    <Image
                        src={'/images/profile-image.png'}
                        alt="Profile-image"
                        width={525}
                        height={612.6}
                        loading="eager"
                        className="flex w-auto h-auto md:w-87"
                    />
                </div>
                <div className="flex flex-col gap-5 items-center uppercase text-[13px] text-center text-white tracking-wider font-monument pr-2 pl-2 lg:max-w-2xl lg:text-[20px] md:text-[10px] md:font-semibold md:text-left md:tracking-widest md:pl-0 md:pr-0">
                    <div>
                        I'm a <span className="text-orange">developer</span> based in Sri Lanka, currently studying at the
                        Informatics Institute of Technology affiliated
                        with the University of Westminster.
                    </div>
                    <div>
                        By day I'm interning at <span className="text-orange">IMI Games</span> building
                        frontend experiences. By night I'm pushing pixels,
                        breaking layouts, and putting them back together.
                    </div>
                </div>

            </div>
        </div>
    )
}