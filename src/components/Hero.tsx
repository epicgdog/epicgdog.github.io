import React from 'react'

type ContributionDay = {
  date: string
  count: number
}

const GRID_CELLS = 91

export default function Hero() {
  const [contributions, setContributions] = React.useState<ContributionDay[]>([])
  const [visibleSquares, setVisibleSquares] = React.useState(0)
  const [isCommitAnimationReady, setIsCommitAnimationReady] = React.useState(false)

  React.useEffect(() => {
    const sources = [
      'https://github-contributions-api.jogruber.de/v4/epicgdog',
      'https://github-contributions.vercel.app/api/v1/epicgdog',
    ]

    const loadContributions = async () => {
      const today = new Date()
      const todayIso = today.toISOString().slice(0, 10)
      const start = new Date(today)
      start.setDate(start.getDate() - 89)
      const startIso = start.toISOString().slice(0, 10)

      for (const source of sources) {
        try {
          const response = await fetch(source)
          if (!response.ok) {
            continue
          }

          const data = await response.json()
          const items = Array.isArray(data?.contributions) ? data.contributions : []
          const normalized: ContributionDay[] = items
            .map((item: { date?: string; count?: number }) => ({
              date: item.date ?? '',
              count: Number(item.count ?? 0),
            }))
            .filter((item: ContributionDay) => item.date && item.date >= startIso && item.date <= todayIso)
            .sort((a: ContributionDay, b: ContributionDay) => a.date.localeCompare(b.date))
            .slice(-90)

          if (normalized.length > 0) {
            setContributions(normalized)
            return
          }
        } catch {
          // try next source
        }
      }
    }

    void loadContributions()
  }, [])

  React.useEffect(() => {
    const totalSquares = contributions.length > 0 ? GRID_CELLS : 0
    if (totalSquares === 0) {
      setVisibleSquares(0)
      setIsCommitAnimationReady(false)
      return
    }

    setIsCommitAnimationReady(false)
    setVisibleSquares(0)
    let timer: number | null = null
    const frame = window.requestAnimationFrame(() => {
      setIsCommitAnimationReady(true)
      timer = window.setInterval(() => {
        setVisibleSquares((current) => {
          if (current >= totalSquares) {
            if (timer !== null) {
              window.clearInterval(timer)
            }
            return totalSquares
          }
          return current + 1
        })
      }, 16)
    })

    return () => {
      window.cancelAnimationFrame(frame)
      if (timer !== null) {
        window.clearInterval(timer)
      }
    }
  }, [contributions])

  const getIntensity = (count: number) => {
    const level = count === 0 ? 0 : count <= 2 ? 1 : count <= 5 ? 2 : count <= 10 ? 3 : 4
    return ['bg-[#ece2d2]', 'bg-[#d4d4d4]', 'bg-[#a3a3a3]', 'bg-[#737373]', 'bg-[#404040]'][level]
  }

  const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0)

  const paddedContributions = Array.from({ length: Math.max(0, GRID_CELLS - contributions.length) }, () => ({
    date: '',
    count: 0,
  })).concat(contributions)

  return (
    <section id="about" className="bg-[#ece2d2] px-4 pb-[78px] pt-[126px] sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div className="space-y-5">
          <h1 className="whitespace-nowrap text-left text-6xl font-bold text-stone-900 sm:text-7xl">
            Gerard Consuelo
          </h1>
          <p className="max-w-2xl text-left text-base leading-relaxed text-stone-700">
            Passionate about automation, distributed systems, and creating impactful software solutions. Building real-time systems, AI agents, and developer tools.
          </p>
          <div className="flex flex-wrap gap-2">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#e5dac8] px-3 py-1 text-xs font-medium text-stone-700">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Have {totalContributions} contributions in the last 3 months
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#e5dac8] px-3 py-1 text-xs font-medium text-stone-700">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              San Jose, CA
            </div>
          </div>
          <div className="flex flex-wrap gap-3 pt-1">
          <a
            href="https://github.com/epicgdog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-stone-800"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/gerard-consuelo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[#c8bca8] bg-[#f0e3cf] px-4 py-2 text-sm font-medium text-stone-800 transition-colors hover:bg-[#e8d8c0]"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a
            href="mailto:gcon.work@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-[#b9ad9a] bg-transparent px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:border-stone-700 hover:text-stone-900"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </a>
        </div>
        </div>

        <div className="mx-auto flex h-[320px] w-[320px] items-center justify-center bg-[#ece2d2] p-4 lg:mx-0 lg:translate-x-6">
          <div>
            {contributions.length > 0 ? (
              <div
                className="grid gap-[3px]"
                style={{
                  gridTemplateRows: 'repeat(7, minmax(0, 1fr))',
                  gridAutoFlow: 'column',
                }}
              >
                {paddedContributions.map((day, i) => (
                <div
                  key={i}
                  className={`h-4 w-4 transition-opacity duration-150 ${getIntensity(day.count)} ${
                    isCommitAnimationReady && i < visibleSquares ? 'opacity-100' : 'opacity-0'
                  }`}
                  title={day.date ? `${day.count} contributions` : ''}
                />
                ))}
              </div>
            ) : (
              <div
                className="grid gap-[3px]"
                style={{
                  gridTemplateRows: 'repeat(7, minmax(0, 1fr))',
                  gridAutoFlow: 'column',
                }}
              >
                {Array.from({ length: GRID_CELLS }).map((_, i) => (
                  <div key={i} className="h-4 w-4 bg-[#ece2d2]" />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
