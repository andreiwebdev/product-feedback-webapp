import { Sidebar } from "./components/Sidebar";

function App() {
    return (
        <main className="bg-lightGrey w-full h-screen md:pt-[56px]">
            <div className="xl:flex xl:max-w-7xl xl:mx-auto xl:gap-[30px] xl:px-[24px] xl:h-full">
                <Sidebar />
                {/* content */}
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        A officiis placeat reiciendis minima nihil. Voluptas,
                        quibusdam voluptatibus. Dolores, iste nostrum quas
                        expedita, atque cum et repellendus reprehenderit
                        inventore totam molestiae.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default App;
