import {create} from 'zustand';

type DataStore={
    data:[],
    addData:(data:[])=>void

}

export const useDataStore=create<DataStore>((set)=>({
    data:[],
    addData:(data)=>{
        set(()=>({
            data:data
        }))
    }
}))