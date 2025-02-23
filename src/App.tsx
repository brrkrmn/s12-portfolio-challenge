import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Profile from "./components/Profile/Profile"
import Projects from "./components/Projects/Projects"
import Settings from "./components/Settings/Settings"
import Skills from "./components/Skills/Skills"

const App = () => {
  return (
    <div className="flex bg-bg items-center justify-start h-screen w-screen font-inter">
      <div className="flex flex-col gap-14 bg-bg items-center justify-start h-full w-full px-2 tablet:px-10 mx-auto min-w-[320px] max-w-[1024px]">
        <div className="flex flex-col items-center justify-start w-full gap-2">
          <Settings />
          <Header />
        </div>
        <Hero />
        <Skills />
        <hr className="divider" />
        <Profile />
        <hr className="divider" />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default App
