import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetAnimal } from '../store/animal.actions';
import { ZooState } from '../store/animal.state';
import { AnimalGetInterface } from '../model/AnimalGet.model';
@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css']
})
export class ZooComponent implements OnInit {

  constructor(private store : Store) { }

  ngOnInit(): void {
    this.getAnimal();
  }
  getAnimalArray: AnimalGetInterface[] = []
  @Select(ZooState.getAnimalSelector) getAnimalOb$ : Observable<AnimalGetInterface[]> | undefined
  getAnimal() {
    console.log("calling zoo compoenent ts");
    
   // debugger;
    this.store.dispatch(new GetAnimal());
    this.getAnimalOb$?.subscribe((res:AnimalGetInterface[])=> {
      console.log(res);
      this.getAnimalArray = res;
      
    })
    
  }
}
