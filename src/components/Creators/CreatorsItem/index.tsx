import { GameCreators } from "@/types/type"

interface ICreatorsItem {
    creatorsTeam: GameCreators[] | undefined,
    title: string
}

const CreatorsItem = ({ creatorsTeam, title }: ICreatorsItem) => {
    return (
        <div className="grid__item-container">
            <div className="grid-card">
                <ul className="grid-item">
                    <h3>{title}</h3>
                    <div className="grid-border">
                        {creatorsTeam?.map((item, index) => (
                            <div key={index}>
                                <ul>
                                    <li>
                                        {item.link != "" ? (
                                            <a target="_blank" href={item.link} className="centerItems linkedInItem">
                                                <div className="linkedInContainer">
                                                    {item.name}
                                                    <img className="linkedInIcon" src="Vector.png" alt="linkedin icon" width="25px" height="25px" />
                                                </div>
                                                <div className="role">{item.role}</div>
                                            </a>
                                        ) : (
                                            <div className="centerItems linkedInItem">
                                                <div className="linkedInContainer">
                                                    <span>{item.name}</span>
                                                </div>
                                                <div className="role">{item.role}</div>
                                            </div>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </ul>
            </div>
        </div >
    )
}

export default CreatorsItem;
 