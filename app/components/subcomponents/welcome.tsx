'use client'
import { useRef, useEffect } from "react"

const COUNT = 6;

export default function Welcome() {
  const leftRefs = useRef<HTMLDivElement[]>([]);
  const rightRefs = useRef<HTMLDivElement[]>([]);
  const mesgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = () => {
      leftRefs.current.forEach(element => {
        element.style.transition = 'none'
        element.style.opacity = '0'
        element.style.transform = 'translateX(-120px)'
      });

      rightRefs.current.forEach(element => {
        element.style.transition = 'none'
        element.style.opacity = '0'
        element.style.transform = 'translateX(120px)'
      });

      if (mesgRef.current) {
        mesgRef.current.style.transition = 'none'
        mesgRef.current.style.opacity = '0'
        mesgRef.current.style.transform = 'scale(0.8)'
      };

      setTimeout(() => {
        leftRefs.current.forEach((element, i) => {
          setTimeout(() => {
            element.style.transition = 'all 0.5s cubic-bezier(0.22, 1, 0.36,1)'
            element.style.opacity = '1'
            element.style.transform = 'translateX(0)'
          }, i * 100)
        });

        rightRefs.current.forEach((element, i) => {
          const reverseIndex = (COUNT - 1) - i;
          setTimeout(() => {
            element.style.transition = 'all 0.5s cubic-bezier(0.22, 1, 0.36,1)'
            element.style.opacity = '1'
            element.style.transform = 'translateX(0)'
          }, reverseIndex * 100)
        });

        setTimeout(() => {
          if (mesgRef.current) {
            mesgRef.current.style.transition = 'all 0.5s cubic-bezier(0.22, 1, 0.36,1)'
            mesgRef.current.style.opacity = '1'
            mesgRef.current.style.transform = 'scale(1)'
          };
        }, (COUNT * 100) + 100)
      },)
    }
    animate()
    const id = setInterval(animate, 3500);
    return () => clearInterval(id);
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden">
      <div className="flex items-center text-[20px] text-2xl sm:text-3xl lg:text-6xl gap-1 md:gap-2">
        {
          Array.from({ length: COUNT }).map((_, i) => (
            <div
              className="text-white"
              key={i}
              ref={(el) => {
                if (el) {
                  leftRefs.current[i] = el;
                }
              }}
            >{'>'}
            </div>
          ))
        }
        <div ref={mesgRef}
          className="text-white">WELCOME
        </div>
        {
          Array.from({ length: COUNT }).map((_, i) => (
            <div
              className="text-white"
              key={i}
              ref={(el) => {
                if (el) {
                  rightRefs.current[i] = el;
                }
              }}
            >{'<'}
            </div>
          ))
        }
      </div>
    </div>
  )
}

