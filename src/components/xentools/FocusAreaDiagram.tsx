import { focusAreas } from '../../data/xenTools'

export default function FocusAreaDiagram() {
  return (
    <div
      className="relative mx-auto w-full max-w-[688px]"
      style={{ aspectRatio: '688 / 319' }}
    >
      {focusAreas.map((area) => (
        <div
          key={area.id}
          className={`absolute flex items-center justify-center rounded-full ${area.inset}`}
          style={{ backgroundColor: area.color }}
        >
          <p className="w-[70%] text-center text-[13px] font-semibold leading-[normal] text-white">
            {area.label}
          </p>
        </div>
      ))}
    </div>
  )
}
