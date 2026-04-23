'use client'

type Day = { date: string; contributionCount: number; weekday: number }
type Week = { contributionDays: Day[] }

export default function Graph({ weeks, total }: { weeks: Week[], total: number }) {
  const max = Math.max(...weeks.flatMap((w) => w.contributionDays.map((d) => d.contributionCount)))

  const level = (count: number) => {
    if (!count) return 0;
    const p = count / max;
    return p < 0.25 ? 1 : p < 0.5 ? 2 : p < 0.7 ? 3 : 4
  }

  const colors = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"];

  return (
    <div className="bg-gray-950 p-3 rounded-2xl w-auto h-40 font-poppins">
      <p className="text-sm mb-3">{total.toLocaleString()} Contributions in the last year.</p>
      <div className="overflow-x-auto">
        <div className="flex gap-[3px]">
          {weeks.map((week, wi) => (
            <div
              key={wi}
              className="flex flex-col gap-[3px]"
            >
              {week.contributionDays.map((day) => (
                <div
                  key={day.date}
                  title={`${day.date}: ${day.contributionCount} contributions`}
                  style={{ background: colors[level(day.contributionCount)] }}
                  className="w-3 h-3 rounded-sm"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}