import { ReactNode } from "react";

interface ListProp<T> {
    items: T[],
    renderFn: (item: T) => ReactNode
}

export function List <T>({items, renderFn}: ListProp<T>): ReactNode {
    return (
        <div
            className="w-2/3 flex flex-col mt-6" 
        >
            {items.map(renderFn)}
        </div>
    )
}