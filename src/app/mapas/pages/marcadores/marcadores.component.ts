import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'

interface MarcadorColor {
  color: string;
  marker: mapboxgl.Marker;
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
      .mapa-container{
        width: 100%;
        height: 100%;
      }
      .list-group{
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 99;
      }
      li{
        cursor: pointer;
        user-select: none;
      }
    `
  ]
})
export class MarcadoresComponent implements AfterViewInit, OnDestroy {

  @ViewChild('mapa') divMapa!: ElementRef;

  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [-73.24741850841495, 10.457050725168402];

  // Arreglo de marcadores
  marcadores: MarcadorColor[] = [];

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

    // new mapboxgl.Marker()
    //   .setLngLat(this.center)
    //   .addTo(this.mapa);
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  agregarMarker() {
    const color = "#xxxxxx".replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
    // console.log(color);

    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color
    })
      .setLngLat(this.center)
      .addTo(this.mapa);

    // const lngLat = nuevoMarcador.getLngLat();
    // console.log('lngLat', lngLat);

    this.marcadores.push({
      color,
      marker: nuevoMarcador,
    })
  }

  irMarcador( marker: mapboxgl.Marker ) {
    this.mapa.flyTo({
      center: marker.getLngLat()
    })
  }

  guardarMarcadoresLocalStorage(){

  }

  leerLocalStorage(){

  }

}
