import './Sections.scss'

interface ISections {
  tabs: {name: string}[]
}

export default function Sections({ tabs }: ISections) {

  return (
    <div className='sections_container'>
      <span>Name</span>
      <div className='sections_container__sections' style={{ gridTemplateColumns: `repeat(${tabs.length}, 100px)`}}>
        {tabs.map((tab, index) => (
          <span key={index}>{tab.name}</span>
        ))}
      </div>
    </div>
  )
}
