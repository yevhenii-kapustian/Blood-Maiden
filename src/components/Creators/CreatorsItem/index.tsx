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
                    <div className="grid-border">
                    {creatorsTeam?.map((item, index) => (
                        <div key={index}>
                            <ul>
                                <li>{item.name} - {item.role}</li>
                                <div className="centerItems">
                                    <img className="linkedInIcon" src="Vector.png" alt="linkedin icon" width="25px" height="25px" />
                                    <a className="linkedInItem" href={item.link}>{item.name} | LinkedIn </a>
                            </div>
                            {/* <li className="list-menu"><a href={item.link}>{item.name} | LinkedIn </a></li> */}
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