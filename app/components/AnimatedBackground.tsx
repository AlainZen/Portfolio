export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient de base */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />

      {/* Blobs animés en CSS pur (perf mobile) */}
      <div className="animate-blob-1 absolute top-0 -left-4 h-48 w-48 rounded-full bg-teal-500/20 mix-blend-multiply blur-xl will-change-transform dark:bg-teal-500/10 dark:mix-blend-lighten sm:h-72 sm:w-72" />
      <div className="animate-blob-2 absolute top-0 -right-4 h-48 w-48 rounded-full bg-cyan-500/20 mix-blend-multiply blur-xl will-change-transform dark:bg-cyan-500/10 dark:mix-blend-lighten sm:h-72 sm:w-72" />
      <div className="animate-blob-3 absolute -bottom-8 left-20 hidden h-72 w-72 rounded-full bg-emerald-500/20 mix-blend-multiply blur-xl will-change-transform dark:bg-emerald-500/10 dark:mix-blend-lighten sm:block" />

      {/* Grille subtile */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  )
}
