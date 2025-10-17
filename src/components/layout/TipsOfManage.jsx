const tips = [
    {
        id: 1,
        tipNumber: "01",
        title: "Track company-wide progress",
        text: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
    },
    {
        id: 2,
        tipNumber: "02",
        title: "Advanced built-in reports",
        text: "Set internal delivery estimates and track progress toward company   goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
    },
    {
        id: 3,
        tipNumber: "03",
        title: "Everything you need in one place",
        text: "Stop jumping from one service to another to communicate, store files,   track tasks and share documents. Manage offers an all-in-one team productivity solution."
    }
]


export const TipsOfManage = () => {

  return (
    <section className="flex flex-col gap-5 lg:w-160 lg:gap-10">
      {tips.map(({id, tipNumber, title, text}) => (
        <div key={id} className="flex flex-col gap-3">
        <div className="bg-orange-200 lg:bg-transparent gap-3 lg:gap-5 flex items-center font-bold h-10 rounded-tl-full rounded-bl-full">
          <div className="bg-orange-600 text-white w-15 h-full flex items-center justify-center rounded-full">{tipNumber}</div>
          <h1 className="text-blue-950 font-bold w-65">{title}</h1>  
        </div>
        <p className="text-gray-500 lg:max-w-lg lg:ml-20">{text}</p>
      </div>  
      ))}
    </section>
  )
}
