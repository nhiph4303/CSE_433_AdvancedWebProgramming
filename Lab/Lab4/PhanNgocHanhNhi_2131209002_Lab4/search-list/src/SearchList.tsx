import { useMemo, useState } from "react";

const users = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`
}));

export default function SearchList() {
    const [keyword, setKeyword] = useState("");
    const [status, setStatus] = useState(false);

    function getFilteredUsers(keyword: string) {
        console.log("Fetch!");
        return users.filter(user => user.name.toLowerCase().includes(keyword.toLowerCase()));
    }

    const getFilteredUsersMemo = useMemo(() => getFilteredUsers(keyword), [status]);
    return <div>
        <input type="text"
            placeholder="Keyword..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
        />
        <button onClick={() => setStatus(!status)}>Search</button>
        <ul>
            {getFilteredUsersMemo.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </div>;
}