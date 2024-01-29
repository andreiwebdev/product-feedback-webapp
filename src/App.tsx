import { Sidebar } from "./components/Sidebar";
import { ActionsTopBar } from "./components/SuggestionsScreen";

function App() {
    return (
        <main className="bg-lightGrey w-full h-screen md:pt-[56px]">
            <div className="xl:flex xl:max-w-7xl xl:mx-auto xl:gap-[30px] xl:px-[24px] xl:h-full">
                <Sidebar />
                {/* content */}
                <div className="mx-auto md:px-[24px] xl:px-0 xs:px-0 sm:max-w-3xl xl:w-[80%] xl:max-w-full xl:mx-0">
                    <ActionsTopBar />
                </div>
            </div>
        </main>
    );
}

export default App;
