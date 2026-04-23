import { NextResponse } from "next/server"

export async function GET() {
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
  return NextResponse.json(
    queryData.data.user.contributionsCollection.contributionCalendar
  )
}