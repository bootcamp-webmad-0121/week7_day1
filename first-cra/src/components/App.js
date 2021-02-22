import './App.css'
import Header from './Header'
import UserCard from './User-card'
import Button from './Button'

import Player from 'react-player'

function App() {
  return (
    <>
      <section>
        <Header titleText="Staff de Madrid" subtitle="Por orden de entrada" />

        <div className="flex-container">
          <UserCard
            name="Teo"
            lastName="López"
            job="Instructor"
            age="33"
            imageURL="https://i.pinimg.com/280x280_RS/83/86/27/8386271216061bfa4c0c8f3495ecacd7.jpg"
          />
          <UserCard name="Germán" lastName="Álvarez" job="Lead" age="33" imageURL="https://avatars.githubusercontent.com/u/46670724?s=400&u=57aaae39a2003075f844981090894c8afd9f77fe&v=4" />
          <UserCard name="Isa" lastName="Whatever" job="Lead" age="33" />
          <UserCard name="Paco" lastName="Pil" job="Partyboy" age="33" imageURL="https://www.lafactoriadelshow.com/xpfl_8042.jpg" />
        </div>

        <Button link="https://www.google.es" type="warn" text="Ir a Google" />
      </section>


      <section>
        <Header titleText="Vídeo incrustado aw :3" subtitle="A través de un componente prefabricado" />
        <Player
          url="https://www.youtube.com/watch?v=zNIRLjbqJcE"
          playing
          controls
          volume="0.5"
        />
      </section>
    </>
  )
}

export default App