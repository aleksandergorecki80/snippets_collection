import { ElementType, Element } from "./Element"

export const ElementList: React.FC = () => {


    const data: ElementType[] = [
        {
            id: "01",
            title: "Generic Basic",
            description: "Basic usage of generics",
            url: "https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABAcwKZQGIwE4GcoCiANqgLaphQA8xZFUAKgJ4AOqAfABSonmW4AuRLT6NWqANoBdAJQBvAFCJlibOhDYkPOvwkAGKQG4FAX0OIFliAnyIwIUgCNUeRAF5EEgCwAaAKw+AOw+AIxGCtZgtvjYMGDIuO6eAEQAhkSpyT6IyaSZ2ckA1nBQmeERNlCIwDj4AMpQsfFJaJi1hLz0VDFxyFw98bgyxpG2NXhQAHIOztgt6FgTIl32Ti5cq7NDhkA",
        }
    ]

    return (
        <>{data.map((element) => {
            return <Element 
                id={element.id}
                title={element.title}
                description={element.description}
                url={element.url}
            />
        })}</>
    )
}