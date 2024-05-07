import {create} from 'zustand';

type SearchStore={
    search:string,
    searchList:{
        id:number,
        query:string
    }[],
    addSearch:(query:string)=>void

}

export const useSearchStore=create<SearchStore>((set)=>({
    search:'',
    searchList:[],
    addSearch:(query)=>{
        set((state)=>({
            search:query,
            searchList:[...state.searchList,{id:state.searchList.length+1,query}]
        }))
    }
}))