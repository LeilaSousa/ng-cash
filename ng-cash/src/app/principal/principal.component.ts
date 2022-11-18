import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  visibility:boolean = true;
  saldo:string = '100,00';
  visibilityIcon: string = 'visibility_off';

  constructor() { }

  ngOnInit(): void {
  }
  changeVisibility(){
    this.visibility = !this.visibility
    if(this.visibility == false){this.    visibilityIcon = 'visibility'
    this.saldo = '_____'}
    else{
      this.visibilityIcon = 'visibility_off'
      this.saldo = '100,00'
    }
  }

}
