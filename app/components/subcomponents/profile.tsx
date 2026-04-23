import Image from "next/image";

type Props = {
  avatar: string;
  name: string;
  login: string;
  repos: number;
  stars: number;
  followers: number;
};

export default function Profile({ avatar, name, login, repos, stars, followers }: Props) {
  return (
    <div className="flex flex-col items-center bg-gray-950 w-80 p-6 rounded-xl font-poppins">
      <Image
        src={avatar}
        alt={login}
        width={80}
        height={80}
        className="rounded-full"
      />
      <h2 className="text-white text-lg font-semibold mt-3 text-center">{name || login}</h2>
      <p className="text-gray-400 text-sm">@{login}</p>

      <div className="flex gap-6 mt-4 text-center items-center justify-center">
        <div className="flex flex-col">
          <span className="text-white font-bold">{repos}</span>
          <span className="text-gray-400 text-xs uppercase tracking-wide">Repos</span>
        </div>
        <div className="flex flex-col">
          <span className="text-white font-bold">{stars || 0}</span>
          <span className="text-gray-400 text-xs uppercase tracking-wide">Stars</span>
        </div>
        <div className="flex flex-col">
          <span className="text-white font-bold">{followers}</span>
          <span className="text-gray-400 text-xs uppercase tracking-wide">Followers</span>
        </div>
      </div>

      <a
        href={`https://github.com/${login}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 bg-green-500 text-black text-sm font-bold px-6 py-2 rounded-full hover:bg-green-400 transition-colors"
      >
        Go to Profile
      </a>
    </div>
  );
}