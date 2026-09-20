import {useState} from 'react'
import {GitBranch,ArrowRight,Lightbulb,X,Music,Wallet,Clock,ShoppingBag} from 'lucide-react'
import {connections,yearly,artists,householdCats,indiaCats,hours} from '../data/insights'
import SectionTitle from '../components/SectionTitle'

const details=[
  {
    icon:Music,
    title:'The overlap years',
    summary:'Music and household activity share the same four-year window.',
    points:[
      '2015–2018 is the shared period between the two datasets.',
      'Music records: 50,359',
      'Household receipts: 1,303',
      'This gives us a common window for comparing two different parts of the archive.'
    ]
  },
  {
    icon:Wallet,
    title:'A later chapter begins',
    summary:'The India transaction dataset adds a new spending lens from 2022.',
    points:[
      '2022–2024 is the shared period between music and India transactions.',
      'Music records: 37,095',
      'India transactions: 9,417',
      'Online shopping, travel, entertainment and fitness/medical activity form the main transaction groups.'
    ]
  },
  {
    icon:Clock,
    title:'Late-night listening',
    summary:'The listening archive contains a strong overnight activity pattern.',
    points:[
      'The strongest overnight window is 00:00–02:59.',
      'Hourly activity can be compared across the full 24-hour day.',
      'This turns raw timestamps into a time-of-day story thread.',
      'The pattern describes listening behaviour without claiming a cause for it.'
    ]
  },
  {
    icon:ShoppingBag,
    title:'Spending themes',
    summary:'Different spending categories create a second layer of the story.',
    points:[
      'Food leads the household categories with 907 receipts.',
      'Transportation follows with 307 receipts.',
      'Online shopping leads the India transaction categories with 2,596 transactions.',
      'Travel and entertainment are also major transaction themes.'
    ]
  }
]

function Evidence({item,onClose}){
  const Icon=item.icon

  return(
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-5 backdrop-blur-sm">
      <div className="glass w-full max-w-2xl rounded-3xl p-6 shadow-2xl">
        <div className="flex items-start justify-between">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-400/10 text-blue-300">
            <Icon size={20}/>
          </div>
          <button
            onClick={onClose}
            aria-label="Close evidence"
            className="focus-ring rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white"
          >
            <X size={20}/>
          </button>
        </div>

        <p className="mt-6 text-xs font-medium uppercase tracking-widest text-blue-300">
          Evidence thread
        </p>

        <h2 className="mt-2 text-2xl font-semibold text-white">
          {item.title}
        </h2>

        <p className="mt-3 leading-7 text-slate-400">
          {item.summary}
        </p>

        <div className="mt-6 space-y-3">
          {item.points.map((point,i)=>(
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/[.03] p-4 text-sm text-slate-300"
            >
              <span className="mr-3 text-blue-300">0{i+1}</span>
              {point}
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="focus-ring mt-6 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200"
        >
          Close thread
        </button>
      </div>
    </div>
  )
}

export default function Connections(){
  const [selected,setSelected]=useState(null)

  return(
    <main className="mx-auto max-w-7xl px-5 py-12">
      <SectionTitle
        eyebrow="Discover"
        title="Follow the threads."
        text="These connections are derived from the supplied datasets: shared years, time-of-day behaviour, and recurring spending themes. They are presented as evidence-led story prompts, not invented personal facts."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {connections.map((c,i)=>(
          <article
            key={c.title}
            className="glass rounded-3xl p-6 transition hover:bg-white/[.07]"
          >
            <div className="flex items-start justify-between">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-400/10 text-blue-300">
                <GitBranch size={19}/>
              </div>

              <span className="text-xs text-slate-500">
                THREAD {String(i+1).padStart(2,'0')}
              </span>
            </div>

            <p className="mt-7 text-xs font-medium uppercase tracking-widest text-blue-300">
              {c.period}
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-white">
              {c.title}
            </h2>

            <p className="mt-3 leading-7 text-slate-400">
              {c.text}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {c.tags.map(t=>(
                <span
                  key={t}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400"
                >
                  {t}
                </span>
              ))}
            </div>

            <button
              onClick={()=>setSelected(details[i])}
              className="focus-ring mt-7 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-300"
            >
              Open thread
              <ArrowRight size={15}/>
            </button>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-blue-400/15 bg-blue-400/5 p-6">
        <div className="flex gap-4">
          <Lightbulb className="mt-1 shrink-0 text-blue-300"/>

          <div>
            <h3 className="font-semibold text-white">
              How the connections work
            </h3>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
              We compare timestamps, years, categories, and aggregate frequencies in the browser. The app intentionally avoids claiming that two receipts are causally related; it surfaces patterns the user can inspect.
            </p>
          </div>
        </div>
      </div>

      {selected && (
        <Evidence
          item={selected}
          onClose={()=>setSelected(null)}
        />
      )}
    </main>
  )
}