import Right from './components/right'

function App() {


  return (
    <>
      <div className="w-full h-[100vh] bg-black relative -z-[2] overflow-hidden flex items-center justify-between">
        <div className="w-[40vw] h-full">
          <img className="w-[100%] h-[100%] object-cover" src="/6da5c750038ac5caff2b023060fceb6b.jpg" alt="" />
        </div>
        <img className="absolute top-0 right-0 object-cover contrast-[1.7] brightness-[0.8]" src="/top leave.png" alt="" />
        <img className="absolute -bottom-[10%] -z-[1] left-[28%] scale-[0.8] -rotate-[30deg] object-cover contrast-[1.6] brightness-[0.8]" src="/3leaves.png" alt="" />
        <img className="absolute -bottom-[15%] -z-[1] right-[0%] -rotate-90 object-cover contrast-[1.6] brightness-[0.8]" src="/3leave2.png" alt="" />
        <Right />
      </div>
    </>
  )
}

export default App
