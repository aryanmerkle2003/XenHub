export default function PageFooter({ className = 'px-12' }: { className?: string }) {
  return (
    <div className={`w-full pt-[35px] ${className}`}>
      <div className="flex items-center justify-between border-t border-[#edeff2] py-5 text-[13px] text-[#6b7280]">
        <p>© 2026 Merkle XEN.</p>
        <a href="mailto:xen.core@merkle.com" className="font-medium">
          xen.core@merkle.com
        </a>
      </div>
    </div>
  )
}
