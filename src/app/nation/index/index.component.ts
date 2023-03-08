import { Component, OnInit } from '@angular/core';
import { Nation } from '../../../entity/nation';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ElementsState } from '../../store/reducers/index';
import { getAllNations } from '../../store/reducers/nation.reducer';
import { AddNation, GetAllNations } from '../../store/actions';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  nations: Nation[] | undefined;

  show = false;

  model = {} as Nation;

  constructor(private store: Store<ElementsState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetAllNations());
    this.store.select(getAllNations).subscribe((data) => {
      this.nations = data;
    });
  }


  save(): void {
    if (confirm('确认要新增吗?')) {
      const nation = this.model;
      this.store.dispatch(new AddNation(nation));
      this.show = false;
      this.model = {} as Nation;
    }
  }

}
