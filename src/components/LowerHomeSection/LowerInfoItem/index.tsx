interface IInfoItem {
    text: string[] | undefined,
    subtitle: string[] | undefined
    title: string
}

const LowerInfoItem = ({text, subtitle, title}: IInfoItem ) => {
    return (
        <>
            <h3>{title}</h3>
            <ul>
                {text?.map((feature: string, idx: number) => (
                    <li key={idx}>
                        <strong>{feature}</strong> <br /> {subtitle?.[idx] || ''}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default LowerInfoItem;