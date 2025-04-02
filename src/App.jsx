import ProfileCard from "./Profile.Card"


function App() {
 
  return (
    <>
 
     <section className="hero is-dark">
      <div className="hero-body">
        <p className="title">Personal Digital Assistants</p>
      </div>
     </section>
     
     <div className="container">
    <section className="section">
      <div className="columns">
        <div className="column is-4"></div>
      <ProfileCard />
      title="Alexa"
      </div>
      <div className="column is-4">
      <ProfileCard />
      </div>
      </section>
      </div>
      <ProfileCard />


     </>
  )
}
