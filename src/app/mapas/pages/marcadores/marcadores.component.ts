import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
      .mapa-container{
        width: 100%;
        height: 100%;
      }
    `
  ]
})
export class MarcadoresComponent implements AfterViewInit, OnDestroy {

  @ViewChild('mapa') divMapa!: ElementRef;

  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [-73.24741850841495, 10.457050725168402];

  constructor() { }
  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });

    // const markerHtml: HTMLElement = document.createElement('div');
    // markerHtml.innerHTML = 'Hola Mundo!'
    // {element: markerHtml}
    new mapboxgl.Marker()
      .setLngLat(this.center)
      .addTo(this.mapa);
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
