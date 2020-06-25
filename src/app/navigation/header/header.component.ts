import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sideNavToggle= new EventEmitter<void>();
  badge:number;


  constructor() { }

  ngOnInit() {
    this.badge=4;
  }

  onToggleSideNav(){
    this.sideNavToggle.emit();
  }

}
