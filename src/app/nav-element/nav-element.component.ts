import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navelement',
  templateUrl: './nav-element.component.html',
  styleUrls: ['./nav-element.component.css']
})
export class NavElementComponent implements OnInit {
  @Input() public cardTitle = '';
  @Output() public onElementSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onNavElementClicked(cardTitle: string): void {
    this.onElementSelected.emit(cardTitle);
  }

}
