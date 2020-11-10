import { Element } from '@angular/compiler';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge-type-select',
  templateUrl: './badge-type-select.component.html',
  styleUrls: ['./badge-type-select.component.css']
})
export class BadgeTypeSelectComponent{

  sizes = [
    {id: 0, size: '95 x 65 mm', border: '2px solid #39B980', bgColor: '#F4FBF9'}, 
    {id: 1, size: '102 x 100 mm', border: '1px solid #DFE4E9', bgColor: 'white'}
  ];

  func(el){
    // let curEl = el.id;

    // for(let i of this.sizes){
    //   i.border = '1px solid #DFE4E9';
    //   i.bgColor = 'white';
    // }

    // this.sizes[curEl].border = '2px solid #39B980';
    // this.sizes[curEl].bgColor = '#F4FBF9';
    
  }
}