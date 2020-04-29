import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navelement',
  templateUrl: './navelement.component.html',
  styleUrls: ['./navelement.component.css']
})
export class NavelementComponent implements OnInit {
  @Input() public cardTitle = '';
  @Output() public onElementSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onNavElementClicked(cardTitle: string): void {
    this.onElementSelected.emit(cardTitle);
  }

}
