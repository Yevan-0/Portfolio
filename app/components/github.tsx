import Image from "next/image";
import Profile from "./subcomponents/profile"
import Graph from "./subcomponents/graph"
import FadeUp from "./subcomponents/fadeup";
const getData = async () => {
  const base = process.env.NEXT_PUBLIC_BASE_URL;

  const [profile, contributions] = await Promise.all([
    fetch(`${base}/api/github`, { next: { revalidate: 3600 } }).then((r) => r.json()),
    fetch(`${base}/api/github/contributions`, { next: { revalidate: 3600 } }).then((r) => r.json())
  ])
  return { profile, contributions }
}

export default async function GitHub() {
  const { profile, contributions } = await getData();

  return (
    <div className="flex flex-col gap-10 md:gap-15 overflow-hidden select-none justify-center items-center filter drop-shadow-gray-950 ">
      <FadeUp>
        <div className="flex items-center justify-center gap-5">
          <Image
            src={'/images/git-hub.png'}
            alt="github"
            width={60}
            height={60}
            className="object-contain"
          />
          <div className="text-[32px] uppercase">GitHub</div>
        </div>
      </FadeUp>
      <FadeUp>
        <div className="flex flex-col items-center md:flex-row gap-10">
          <div className="overflow-hidden">
            <Profile
              avatar={profile.avatar}
              name={profile.name}
              login={profile.login}
              repos={profile.publicRepos}
              stars={profile.totalStars}
              followers={profile.followers}
            />
          </div>

          <div className="scale-50 md:scale-100">
            <Graph
              weeks={contributions.weeks}
              total={contributions.totalContributions}
            />
          </div>

          <div className="flex flex-col bg-gray-950 w-auto h-auto p-6 rounded-2xl font-poppins overflow-hidden">
            <div className="uppercase text-center pb-5 font-bold">Top Repositories</div>
            <div className="border-white border p-3 rounded-2xl">
              {profile.topRepos.map((repo: any) => (
                <a key={repo.name} href={repo.url} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-300 transition-colors font-bold">
                  <p>{repo.name}</p>
                  <p>{repo.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </FadeUp>
    </div>
  )
}