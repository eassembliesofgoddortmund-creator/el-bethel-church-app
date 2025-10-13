import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GUI from 'lil-gui';
@Component({
  selector: 'app-earth',
  imports: [],
  templateUrl: './earth.component.html',
  styleUrl: './earth.component.scss'
})
export class EarthComponent  implements OnInit {

    ngOnInit(): void {
    }


}

