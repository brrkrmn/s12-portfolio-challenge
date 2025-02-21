import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"

const App = () => {
  return (
    <div className="flex bg-bg items-center justify-start h-screen w-screen font-inter">
      <div className="flex flex-col bg-bg items-center justify-start h-full w-full px-2 mx-auto min-w-[320px] max-w-[1024px]">
        <Header />
        <Footer />
      </div>
    </div>
  )
}

export default App
