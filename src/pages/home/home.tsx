import 
ToDo from "../../components/ToDo"

function Home() {
  return (
    <div className="h-screen flex"><div className="h-[500px] w-[500px] m-auto bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 rounded-3xl rotate-[-12deg]"><ToDo></ToDo></div></div>
  )
}

export default Home