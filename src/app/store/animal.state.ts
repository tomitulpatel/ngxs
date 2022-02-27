import { State, Action, StateContext } from "@ngxs/store";
import { AnimalGetInterface } from "../model/AnimalGet.model";
//import { AnimalAddInterface } from "../model/AnimalAdd.model";
import { Injectable } from "@angular/core";
import { Selector } from "@ngxs/store";
import { GetAnimal } from "./animal.actions";
import { ApiService } from "../apiService/api.service";
import { tap } from "rxjs/operators";

export interface ZooStateModel {
    GetAnimal: AnimalGetInterface[],
    //AddAnimal: AnimalAddInterface[]
}


@State<ZooStateModel>({
    name: "Zoo",
    defaults: {
        GetAnimal: [],
        // AddAnimal: []
    }
})

@Injectable()
export class ZooState {
    // static apiService: ApiService;

    constructor(private apiService: ApiService) {

    }

    @Selector()
    static getAnimalSelector(state: ZooStateModel) {
        console.log("calling ZooState getAnimal selecctor");
        
        return state.GetAnimal
    }

    @Action(GetAnimal)
    getAnimalStateSelection(ctx: StateContext<ZooStateModel>) {
        console.log("calling ZooState getAnimal state model");
        
        return this.apiService.getAnimalService().pipe(tap((res: any) => {
            const state = ctx.getState();
            ctx.setState({
                ...state,
                GetAnimal: res
            })

        }))
    }



}