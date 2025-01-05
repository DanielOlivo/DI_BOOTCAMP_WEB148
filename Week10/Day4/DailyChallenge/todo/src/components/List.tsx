import { FC, ReactNode } from "react";

// https://dev.to/elhamnajeebullah/react-typescript-create-a-reusable-list-component-using-generic-4065
interface ListProps<T> {
    items: T[]
    renderItem: (item: T) => ReactNode
}

const List = <T,>({items, renderItem}: ListProps<T>) => {
        return (
            <div>
                {items.map((item) => 
                    renderItem(item))}
            </div>
        )
    }

export default List;