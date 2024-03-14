import "./App.css";
import profil from "./beral-profil.png";

function App() {
  return (
    <div className="App h-screen w-screen ">
      {/* card */}
      <div className="relative mt-[100px] mx-auto h-[320px] w-[250px] ">
        <div className="absolute h-full w-full shadow-md   card text-white">
          <div className="absolute flex flex-col items-center justify-center px-5 side w-full h-full bg-gradient-to-tr to-[#84fab0] from-[#8fb3f4] z-10 ">
            <img
              src={profil}
              alt="profil Beral"
              className="size-[100px] rounded-full "
            />
            <h1 className="text-center text-[22px] my-3 font-[600] ">
              Hi, I'm Assaf{" "}
            </h1>
            <p className="text-center font-[300] text-[16px] ">
              Would you mind knowing more about me ?{" "}
            </p>

            <div className="mt-5 py-2 border rounded-md w-full text-center font-500">
              Contact me
            </div>
          </div>
          <div className="absolute flex flex-col gap-2 p-4 justify-center side w-full h-full bg-gradient-to-tr from-[#fa709a] to-[#fee140]   rotate-y-180 ">
            <a href="" role="button">
              <button className="w-full border rounded-md py-3 hover:bg-gradient-to-r from-[#f43b47] to-[#453a94] hover:font-bold ">
                LinkedIn
              </button>
            </a>

            <a href="mailto:beral.assaf@gmail.com">
              <button className="w-full border rounded-md py-3 hover:bg-gradient-to-r from-[#f43b47] to-[#453a94] hover:font-bold">
                Gmail
              </button>
            </a>
            <a href="https://github.com/ASSAF1er/">
              <button className="w-full border rounded-md py-3 hover:bg-gradient-to-r from-[#f43b47] to-[#453a94] hover:font-bold">
                Github
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
