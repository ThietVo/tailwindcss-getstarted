function NavItem({ item }) {
    return ( 
        <div className="flex items-center text-lg text-white px-4 py-2 cursor-pointer hover:bg-white hover:text-black">
            {item.icon}
            <p className="ml-4">{item.label}</p>
        </div>
     );
}

export default NavItem;