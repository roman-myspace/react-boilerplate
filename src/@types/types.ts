
export interface ContextTypes {
    data: string
}

export interface ContextProviderPropTypes {
    children?: React.ReactNode
}

export interface ReduxTypes {
    user?: Object | null 
}

export interface MenuTypes { 
    name: string; 
    slug: string; 
    url: string; 
}