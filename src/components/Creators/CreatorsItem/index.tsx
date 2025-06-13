import { GameCreators } from "@/types/type"

interface ICreatorsItem {
    creatorsTeam: GameCreators[] | undefined,
    title: string
}

const CreatorsItem = ({ creatorsTeam, title }: ICreatorsItem) => {
    return (
        <div className="gridItem">
            <div className="grid-card">
                <ul className="grid-item">
                    <h3>{title}</h3>
                    {creatorsTeam?.map((item, index) => (
                        <li key={index}>
                            <ul>
                                <li>{item.name} - {item.role}</li>
                                <li className="list-menu"><a href={item.link}>{item.name} | LinkedIn </a></li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default CreatorsItem;