import iconMail from '../../assets/images/icon-mail.svg'
import iconMailHover from '../../assets/images/icon-mail-hover.svg'
import type { Spoc } from '../../data/spocs'

const CONTACT_EMAIL = 'xen.core@merkle.com'

export default function SpocCard({ name, role, initials, accent }: Spoc) {
  return (
    <div className="group flex h-[112px] flex-1 items-center gap-4 rounded-xl border border-[#e5e8ec] bg-[#f9fafb] p-4">
      <div
        className="flex size-14 shrink-0 items-center justify-center rounded-full text-[15px] font-semibold text-white transition-transform duration-200 ease-out group-hover:scale-[1.06]"
        style={{ backgroundColor: accent }}
      >
        {initials}
      </div>
      <div className="flex flex-1 items-center justify-between gap-2">
        <div className="flex flex-col gap-1">
          <p className="text-[12px] font-medium uppercase text-brand">{role}</p>
          <p className="text-[16px] font-semibold text-[#111827]">{name}</p>
        </div>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          aria-label={`Email ${name}`}
          className="group/mail flex size-10 shrink-0 items-center justify-center rounded-[10px] border border-[#f9fafb] bg-white opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 hover:border-transparent"
        >
          <img
            src={iconMail}
            alt=""
            className="size-5 group-hover/mail:hidden"
          />
          <img
            src={iconMailHover}
            alt=""
            className="hidden size-5 group-hover/mail:block"
          />
        </a>
      </div>
    </div>
  )
}
