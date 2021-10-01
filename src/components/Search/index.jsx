import { useState } from "react";
import { useDispatch } from "react-redux";
import addDigimonsThunk from "../../store/modules/digimons/thunks";


export default function Search() {

    const [input, setInput] = useState("");
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const handleSearch = () => {
        setError(false);
        dispatch(addDigimonsThunk(input));
        setInput("");
    }

    return (
        <div>
            <h2>Procure pelo seu Digimon!</h2>
            <div>
                <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Procure seu Digimon"
                />
                <button onClick={handleSearch}>Pesquisar</button>
            </div>
        </div>
    )
}
