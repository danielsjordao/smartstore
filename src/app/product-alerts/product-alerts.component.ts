import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent implements OnInit{
  constructor(){}
  ngOnInit(): void{}
  @Input() product : Product | undefined;
  @Output() notify = new EventEmitter();

}
