
export type ElementType = {
    id: string;
    title: string;
    description: string;
    url: string;
    additionalSources?: string[];
}

export const Element: React.FC<ElementType> = ({
    id,
    title,
    description,
    url,
    additionalSources
}) => {

    return (
        <>
            <h3>{title}</h3>
            <p>{title}</p>
            <p>{description}</p>
            <p><a href={url} target="blank">link</a></p>
        </>
    )
}