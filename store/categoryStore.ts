import {create} from 'zustand';

type CategoryStore={
    categoryId:string,
    addCategory:(id:string)=>void

}

export const useCategoryStore=create<CategoryStore>((set)=>({
    categoryId:'0',
    addCategory:(id)=>{
        set(()=>({
            categoryId:id
        }))
    }
}))