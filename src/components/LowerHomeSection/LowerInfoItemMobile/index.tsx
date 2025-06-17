interface IInfoItemMobile {
    textPrimary: string[] | undefined
    subtitlePrimary: string[] | undefined
    textSecondary: string[] | undefined
    subtitleSecondary: string[] | undefined
}

const LowerInfoItemMobile = ({textPrimary, subtitlePrimary, textSecondary, subtitleSecondary}:IInfoItemMobile) => {
    return (
        <ul>
            {textPrimary?.map((feature: string, idx: number) => (
                <li key={idx}>
                    <strong>{feature}</strong> <br /> {subtitlePrimary?.[idx] || ''}
                </li>
            ))}
            {textSecondary?.map((feature: string, idx: number) => (
                <li key={idx}>
                    <strong>{feature}</strong> <br /> {subtitleSecondary?.[idx] || ''}
                </li>
            ))}
        </ul>
    )
}

export default LowerInfoItemMobile;