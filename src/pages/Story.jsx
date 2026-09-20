import {useState} from 'react'
import {BookOpen,ArrowRight,X,Music,Wallet,Clock,GitBranch} from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

const chapters=[
  {
    no:'01',
    period:'2013–2014',
    meta:'2,785 music records',
    title:'The Early Signal',
    text:'The archive begins quietly: a small number of music receipts establish the first trace of the story.',
    icon:Music,
    evidence:[
      'The music archive begins in 2013.',
      'The early period contains 2,785 music records.',
      'This establishes the starting point of the digital archive.',
      'The story grows as more activity appears in later years.'
    ]
  },
  {
    no:'02',
    period:'2015–2018',
    meta:'50,359 music + 1,303 household receipts',
    title:'The Listening Years',
    text:'Music activity rises sharply while household receipts provide a second view of everyday life. This is the strongest shared window between the first two datasets.',
    icon:GitBranch,
    evidence:[
      '2015–2018 is the strongest shared window.',
      '50,359 music records fall inside this period.',
      '1,303 household receipts overlap the same years.',
      'The two datasets can therefore be explored side by side.'
    ]
  },
  {
    no:'03',
    period:'2020–2021',
    meta:'12,158 music records',
    title:'The High-Activity Era',
    text:'Music becomes a much larger part of the archive, with 2020 and 2021 standing out as especially active years.',
    icon:Clock,
    evidence:[
      'The archive shows a strong increase in music activity.',
      '2020 and 2021 stand out as highly active years.',
      'The yearly distribution makes this change visible.',
      'This chapter represents a major shift in the scale of the archive.'
    ]
  },
  {
    no:'04',
    period:'2022–2024',
    meta:'37,095 music + 9,417 transactions',
    title:'A New Spending Lens',
    text:'The later archive pairs music with a different transaction dataset, opening new threads around shopping, travel, entertainment, and fitness/medical spending.',
    icon:Wallet,
    evidence:[
      '2022–2024 is the shared window for music and India transactions.',
      '37,095 music records occur in this period.',
      '9,417 transaction records provide a second lens.',
      'Shopping, travel, entertainment and fitness/medical activity become visible.'
    ]
  }
]

function ChapterModal({chapter,onClose}){
  const Icon=chapter.icon

  return(
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-5 backdrop-blur-sm">
      <div className="glass w-full max-w-2xl rounded-3xl p-6">
        <div className="flex items-start justify-between">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-400/10 text-blue-300">
            <Icon size={20}/>
          </div>

          <button
            onClick={onClose}
            aria-label="Close chapter"
            className="focus-ring rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white"
          >
            <X size={20}/>
          </button>
        </div>

        <p className="mt-6 text-xs uppercase tracking-widest text-blue-300">
          Chapter {chapter.no}
        </p>

        <h2 className="mt-2 text-2xl font-semibold text-white">
          {chapter.title}
        </h2>

        <p className="mt-2 text-sm text-blue-200">
          {chapter.period} · {chapter.meta}
        </p>

        <p className="mt-4 leading-7 text-slate-400">
          {chapter.text}
        </p>

        <div className="mt-6 space-y-3">
          {chapter.evidence.map((item,i)=>(
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/[.03] p-4 text-sm text-slate-300"
            >
              <span className="mr-3 text-blue-300">
                0{i+1}
              </span>
              {item}
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="focus-ring mt-6 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200"
        >
          Close chapter
        </button>
      </div>
    </div>
  )
}

export default function Story(){
  const [selected,setSelected]=useState(null)

  return(
    <main className="mx-auto max-w-5xl px-5 py-12">
      <SectionTitle
        eyebrow="Story mode"
        title="Four chapters hiding inside the archive."
        text="A narrative layer built from the actual time ranges represented in the three datasets."
      />

      <div className="relative ml-1 border-l border-white/10 pl-8">
        <div className="space-y-5">
          {chapters.map(chapter=>(
            <article
              key={chapter.no}
              className="glass relative rounded-3xl p-6 transition hover:bg-white/[.07]"
            >
              <span className="absolute -left-[43px] grid h-7 w-7 place-items-center rounded-full border border-blue-400/40 bg-slate-950 text-[10px] text-blue-300">
                {chapter.no}
              </span>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-500">
                    {chapter.period} · {chapter.meta}
                  </p>

                  <h2 className="mt-3 text-xl font-semibold text-white">
                    {chapter.title}
                  </h2>

                  <p className="mt-2 max-w-2xl leading-6 text-slate-400">
                    {chapter.text}
                  </p>
                </div>

                <div className="hidden rounded-xl bg-blue-400/10 p-3 text-blue-300 sm:block">
                  <chapter.icon size={19}/>
                </div>
              </div>

              <button
                onClick={()=>setSelected(chapter)}
                className="focus-ring mt-6 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-300"
              >
                Explore this chapter
                <ArrowRight size={15}/>
              </button>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/[.02] p-7 text-center">
        <BookOpen className="mx-auto text-blue-300"/>

        <h3 className="mt-4 font-semibold text-white">
          The story is still interactive.
        </h3>

        <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-400">
          Every chapter opens evidence from the archive, so the narrative never becomes a static slideshow.
        </p>
      </div>

      {selected && (
        <ChapterModal
          chapter={selected}
          onClose={()=>setSelected(null)}
        />
      )}
    </main>
  )
}