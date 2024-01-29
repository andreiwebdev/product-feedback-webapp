import { Sidebar } from "./components/Sidebar";
import { ActionsTopBar, NoFeedback } from "./components/SuggestionsScreen";
import { Wrapper } from "./components/common";

function App() {
    return (
        <main className="bg-lightGrey w-full h-screen md:pt-[56px]">
            <div className="xl:flex xl:max-w-7xl xl:mx-auto xl:gap-[30px] xl:px-[24px] xl:h-full">
                <Sidebar />
                <div className="w-full">
                    <ActionsTopBar />
                    <Wrapper>
                        <NoFeedback />
                    </Wrapper>
                </div>
            </div>
        </main>
    );
}

export default App;
