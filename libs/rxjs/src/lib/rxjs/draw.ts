
/*declare module Observable {
  interface Observable<T> {
    map<U>(f: (x: T) => U): Observable<U>;
  }
}

Observable.prototype.map = function (f) {

}*/


import { filter, finalize, Observable, OperatorFunction, tap } from 'rxjs';
import * as d3 from 'd3';
import { RxjsService } from './rxjs.service';
import { ApplicationRef, inject, Injector } from '@angular/core';
import { RootInjector } from './root-injector';
/*
export function draw<T, G extends boolean, Z extends Observable<any>>(display: G, obs: Z): OperatorFunction<T, Exclude<T, G>> {
  console.log('rrrrrrrrrr', obs);
  createContainer();

  obs.subscribe(() => {
    console.log('CLOSE');
  })

  return filter((value): value is Exclude<T, G> => {
    console.log('VALUE DRAW ', value, display);

    const graphic = d3.select("g");
    graphic.append("circle")
      .attr('cy', '60')
      .attr('r', '150')
      .attr('cx', '100')
      .style("fill", 'rgb(44, 160, 44)')
      .style("stroke", 'rgb(33, 120, 33)')
      .style("stroke-width", '2')


    return true;
  });

  function createContainer() {
    d3.select('body')
      .insert('svg')
      .attr('width',`100%`)
      .attr('height',`300`)
      .attr('x',`0`)
      .attr('y',`0`)
      .style('position', 'absolute')
      .style('bottom', '0')
      .style('background-color', 'red')
      .style('z-index', '10000')
      .attr('viewBox',`0 0 1920 1280`)
      .attr('svg-content-responsive',true)
      .insert('g');
  }
}*/

export function draw<T, G extends string>(name: G): <T>(source: Observable<T>) => Observable<T> {
  console.log('DRAW');
  const rxjsService = RootInjector.get(RxjsService);

  rxjsService!.trace();
  return function <T>(source: Observable<T>): Observable<T> {
    console.log('DRAW RETURN');
    const obs$: Observable<T> = new Observable(subscriber => {
      const subscription = source.subscribe({
        next(value) {
          subscriber.next(value);
        },
        error(error) {
          subscriber.error(error);
        },
        complete() {
          console.log('COMPLETE');
          subscriber.complete();
        }
      });
      return () => subscription.unsubscribe();
    });

    obs$.pipe(finalize(() => {
      console.log('COMPLETE');
    }))

    return obs$;
  };
};

