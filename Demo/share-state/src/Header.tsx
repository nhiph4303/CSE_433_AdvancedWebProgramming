export default function Header(){
    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <span>
                Nhi has signed in
            </span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Sign out</button>
        </header>
    )
}