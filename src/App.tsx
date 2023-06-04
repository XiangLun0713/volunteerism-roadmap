import Landing from "./components/Landing"
import Roadmap from "./components/Roadmap"
import { activites } from "./assets/activities"

function App() {
  return (
    <main className="max-w-screen-md mx-auto px-7">
      <Landing />
      <Roadmap activities={activites} />
    </main>
  )
}

export default App
