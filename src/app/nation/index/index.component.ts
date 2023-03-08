import { Component, OnInit } from '@angular/core';
import {Nation} from '../../../entity/nation';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import { ElementsState } from '../../store/reducers/index';
import {getAllNations} from '../../store/reducers/nation.reducer';
import {GetAllNations} from '../../store/actions';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  nations: Nation[] | undefined;

  constructor(private store: Store<ElementsState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetAllNations());
    this.store.select(getAllNations).subscribe( (data) => {
      this.nations = data;
    });
  }


  // save(id: number): void {
  //   if (confirm('Are you sure do you want to delete this Game?')) {
  //     this.store.dispatch(new gameActions.RemoveGame(id));
  //   }
  // }

}
