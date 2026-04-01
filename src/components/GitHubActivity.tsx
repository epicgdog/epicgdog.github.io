export default function GitHubActivity() {
  return (
    <section className="bg-[#f5f0e6] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-bold text-stone-900 sm:text-5xl">GitHub Activity</h2>
        <a
          href="https://github.com/epicgdog"
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-xl border border-[#d8cebc] bg-[#fffaf1] p-3 transition hover:shadow-lg"
        >
          <img
            src="https://ghchart.rshah.org/epicgdog"
            alt="GitHub contributions graph for epicgdog"
            className="w-full rounded-md"
            loading="lazy"
          />
        </a>
      </div>
    </section>
  )
}
