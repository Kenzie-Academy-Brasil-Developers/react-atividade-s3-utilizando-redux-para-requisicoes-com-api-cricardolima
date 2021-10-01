import { useSelector } from "react-redux";

export default function Digimons() {

    const { digimons } = useSelector((state) => state);
    
    return (
        <div>
                {digimons.map((digimon, index) => {
                    return (
                        <div key={index}>
                            <img src={digimon.img} alt=""/>
                            <p>{digimon.name}</p>
                            <p>{digimon.level}</p>
                        </div>
                    )
                })}
        </div>
    )
}
