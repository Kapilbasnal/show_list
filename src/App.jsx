import shows from "../data.json";

function App() {

  return (
    <>
    <ul>
      {shows.map(show => (
        <li key={show.id}>
          {show.showName}, {show.date}, {show.city}</li>
      ))}
    </ul>
    </>
  )
}

export default App
