import { Injectable, OnInit } from '@angular/core';
import { Superhuman } from "../../interfaces/superhuman";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SuperhumanService implements OnInit{
  /***
   * Here sind die Superhumen in superhumans
   */
  superhumans: Superhuman[] = [{
    id: 1,
    name: 'Fabio',
    intelligence: 9,
    power: 9,
    strength: 9,
    healthMax:10,
    dead: false
  },
  {
    id: 2,
    name: 'Jawdat',
    intelligence: 9999,
    power: 9999,
    strength: 99999,
    healthMax: 99999,
    dead: false
  },
  {
    id: 3,
    name: 'dsgag',
    dead: true
  },
  {
    id: 4,
    name: 'unbekannt',
    dead: true
  }];

  /**
   * Here sind die Superhumen aus Local Server
  */
  private baseUrl: string = "http://localhost:8015/superhuman";

  constructor(private client: HttpClient) {

  }

  getSuperhumans(): Observable<Superhuman[]> {
    return this.client.get<Superhuman[]>(this.baseUrl + "/all")
  }

  ngOnInit(): void {

  }

  // getById(id: number): Superhuman {
  //   return this.superhumans.filter(sup => sup.id === id)[0];
  // }

  getById(id: number): Observable<Superhuman> {
    return this.client.get<Superhuman>(`${this.baseUrl}/${id}`);
  }

  // For fighting
  getByIds(attackerId: number, defenderId: number): Observable<[Superhuman, Superhuman]> {
    const attacker$ = this.getById(attackerId);
    const defender$ = this.getById(defenderId);

    return forkJoin([attacker$, defender$]);
  }

  addSuperhuman(superhuman: Superhuman): Observable<HttpResponse<any>> {
    return this.client.post<any>(this.baseUrl, superhuman);
  }
}
