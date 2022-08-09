import {createContext} from "react"

interface Task {
    id: string,
    text: string
}

interface List {
    id: string,
    text: string,
    tasks: Task[]
}

export interface AppState {
    lists: List[]
}

interface AppStateContextProps {
    statee: AppState
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

const appData : AppState = {
    lists: [
        {
        id: "0",
        text: "To Do",
        tasks: [{ id: "c0", text: "Generate app scaffold" }]
        },
        {
        id: "1",
        text: "In Progress",
        tasks: [{ id: "c2", text: "Learn Typescript" }]
        },
        {
        id: "2",
        text: "Done",
        tasks: [{ id: "c3", text: "Begin to use static typing" }]
}
]
}