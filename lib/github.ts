const USERNAME = process.env.GITHUB_USERNAME!;
const TOKEN = process.env.GITHUB_TOKEN;
const headers = {
  Authorization: `Bearer ${TOKEN}`,
  Accept: 'application/vnd.github+json'
}

export async function getGitHub() {
  const [userResp, repoRes] = await Promise.all([
    fetch(`https://api.github.com/users/${USERNAME}`, { headers, next: { revalidate: 3600 } }),
    fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=pushed`, { headers, next: { revalidate: 3600 } })
  ]);

  const user = await userResp.json();
  const repos = await repoRes.json();

  return {
    name: user.name,
    login: user.login,
    avatar: user.avatar_url,
    followers: user.followers,
    publicRepos: user.public_repos,
    totalStars: repos.reduce((s: number, r: any) => s + r.stargazers_count, 0),
    topRepos: [...repos]
      .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6)
      .map((r: any) => ({
        name: r.name,
        description: r.description,
        url: r.html_url,
        stars: r.stargazers_count,
        forks: r.forks_count,
        language: r.language,
      })),
  }
}


export async function getContribution() {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query GetStats($login: String!){
        user(login: $login){
                contributionsCollection {
                  contributionCalendar {
                    totalContributions
                      weeks {
                         contributionDays {
                          date
                          contributionCount
                          weekday
                          }
                        }
                      }
                    }
                  }
                }`,
      variables: { login: process.env.GITHUB_USERNAME }
    }),
    next: { revalidate: 3600 }
  })

  const queryData = await res.json();
  return queryData.data.user.contributionsCollection.contributionCalendar

}