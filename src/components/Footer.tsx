export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-between gap-2 bg-[#f7f7f7] px-6 py-6 text-xs sm:flex-row md:px-[76px]">
      <p className="text-muted">© 2026 Merkle XEN. All rights reserved.</p>
      <a href="mailto:xen.core@merkle.com" className="font-medium text-brand-dark">
        xen.core@merkle.com
      </a>
    </footer>
  )
}
