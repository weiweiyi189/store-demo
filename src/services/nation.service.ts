import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Nation} from '../entity/nation';

@Injectable()
export class NationService {
  protected URL = 'http://localhost:8080/api/nation';

  constructor(protected http: HttpClient) {
  }

  public findById(id: any): Observable<Nation> {
    return this.http.get<Nation>(this.URL + '/' + id);
  }


  public findAll(params?: any): Observable<Nation[]> {
    console.log(2223);
    // return this.http.get<Nation[]>(this.URL, {params});
    const data = [{
      id: 2,
      name: '汉族',
    },
      {
        id: 3,
        name: '维吾尔族',
      }];
    return new Observable<Nation[]>((subscriber) => {
      setTimeout(() => {
        subscriber.next(data);
        subscriber.complete();
      }, 1000);
    });
  }


  public delete(id: number): Observable<Nation> {
    return this.http.delete<Nation>(this.URL + '/' + id);
  }


  public save(data: Nation): Observable<Nation> {
    // let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    //
    // return this.http.post<Nation>(this.URL, data, {headers});

    return new Observable<Nation>((subscriber) => {
      setTimeout(() => {
        subscriber.next({
          id: 3,
          name: '壮族',
        });
        subscriber.complete();
      }, 1000);
    });

  }

  public update(game: Nation): Observable<Nation> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.put<Nation>(this.URL + '/' + game.id, game, {headers});
  }
}
