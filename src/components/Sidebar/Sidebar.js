import Nav from "../Nav";


const Sidebar = () => {
    return (
        <div className="w-80 h-screen bg-gradient-to-b from-red-400 to-red-600 px-4 py-2">
            <div className="py-16 px-4 mt-9 mb-2.5 text-2xl font-semibold">Company <br/> Name</div>

            <Nav />
        </div>
    )
}

export default Sidebar;