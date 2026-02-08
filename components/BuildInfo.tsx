'use client'

// These are injected at build time via next.config.js
const buildInfo = {
  commitHash: process.env.NEXT_PUBLIC_COMMIT_SHA || 'development',
  buildTime: process.env.NEXT_PUBLIC_BUILD_TIME || new Date().toISOString(),
}

export default function BuildInfo() {
  const shortHash = buildInfo.commitHash.substring(0, 7)
  const buildDate = new Date(buildInfo.buildTime)
  const formattedDate = buildDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <span className="inline-flex items-center gap-2 text-text-secondary/70 text-xs">
      <span className="hidden sm:inline">·</span>
      <a
        href="https://github.com/nikoszagk/corebitops/actions"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors inline-flex items-center gap-1"
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="hidden sm:inline">CI/CD</span>
      </a>
      <span>·</span>
      {buildInfo.commitHash === 'development' ? (
        <span className="font-mono">local</span>
      ) : (
        <a
          href={`https://github.com/nikoszagk/corebitops/commit/${buildInfo.commitHash}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono hover:text-primary transition-colors"
        >
          {shortHash}
        </a>
      )}
      <span>·</span>
      <span>{formattedDate}</span>
    </span>
  )
}
