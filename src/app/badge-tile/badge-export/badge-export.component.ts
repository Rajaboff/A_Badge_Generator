import { Component, OnChanges, OnInit } from '@angular/core';
import { Font } from '../../fonts';

import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
import { promise } from 'protractor';
import { image } from 'html2canvas/dist/types/css/types/image';

@Component({
  selector: 'app-badge-export',
  templateUrl: './badge-export.component.html',
  styleUrls: ['./badge-export.component.css']
})
export class BadgeExportComponent {

  //Массив ошибов в конкретных бейджах
  misteakesBadge = [];

  //Размер шрифта имени в бейдже
  fontSize = 25;

  //Текст вывода ошибки в имени
  mistakeText = '';

  //Массив бейджиков
  badges = [
    { id: 0, name: 'Ном', border: '2px solid #39B980', bgColor: '#F4FBF9', mistakes: false }
  ]

  // Текущий бейдж (по id)
  curbadge = 0;

  //Добавка стилизации при выборе бейджа
  funcStyle() {
    for (let i of this.badges) {
      i.border = '1px solid #DFE4E9';
      i.bgColor = 'white';
    }

    this.badges[this.curbadge].border = '2px solid #39B980';
    this.badges[this.curbadge].bgColor = '#F4FBF9';
  }

  //Сортировка id в массиве badges
  funcSortId() {
    for (let j = 0; j < this.badges.length; j++) {
      this.badges[j].id = j;
    }
  }
  aaa = 0;

  func2() {
    let p = document.getElementById('name');
    let can = document.getElementById('badge_preview');
    let badge = document.getElementById('badge');

    can.style.position = 'absolute';
    can.style.left = '-8.5px';

    window.scrollTo(0, 0);

    if (this.badges.length > 1) {
      let arr = []
      for (let i = 0; i < this.badges.length; i++) {
        p.textContent = this.badges[i].name;
        html2canvas(can, {
          scale: 10
        }).then(canvas => {
          var ctx = canvas.getContext("2d");
          ctx.beginPath();
          ctx.rect(20, 20, 150, 100);
          ctx.stroke();
          var doc = new jspdf.jsPDF({
            orientation: 'l',
            format: [95, 65],
          });

          this.aaa += 1;

          arr.push(canvas.toDataURL("image/jpeg"));
          if (this.aaa == this.badges.length) {
            doc.addImage(arr[0], "JPEG", 0, 0, 95, 65);
            for (let j = 1; j < arr.length; j++) {
              doc.addPage();
              doc.addImage(arr[j], "JPEG", 0, 0, 95, 65);
            }
            doc.save('badges.pdf');
            this.aaa = 0;
          }
        })
      }
    }
    else {

      html2canvas(can, {
        scale: 10
      }).then(canvas => {

        var doc = new jspdf.jsPDF({
          orientation: 'l',
          format: [95, 65]
        });

        let d = canvas.toDataURL("image/jpeg");

        doc.addImage(d, "JPEG", 0, 0, 95, 65);
        doc.save('badge.pdf');
      })
    }
    can.style.position = 'relative';
    
  }

  //Удаление бейджа
  delBadge(el) {
    this.badges.splice(this.curbadge, 1);
    this.curbadge = 0;

    this.funcStyle();
    this.funcSortId();
    this.mistakeInput(el);
  }

  // Добавка нового бейджа
  addBadge() {
    this.badges.push({ id: this.badges.length, name: 'Ном', border: '1px solid #DFE4E9', bgColor: 'white', mistakes: false });
    this.curbadge = this.badges.length - 1;

    this.funcStyle();
    this.funcSortId();
  }

  //Выбор текущего бейджа
  curBadgeClick(el) {
    this.curbadge = el.id;
    this.funcStyle();
  }

  //Function for showing mistake in input name
  mistakeInput(el) {
    this.misteakesBadge = [];
    for (let i = 0; i < this.badges.length; i++) {

      if (this.badges[i].name.match(/\d+/) != null || this.badges[i].name.length < 2) {
        this.badges[i].mistakes = true;
        this.misteakesBadge.push(this.badges[i].id + 1);
      }
      else {
        this.badges[i].mistakes = false;
      }
    }

    if (this.misteakesBadge.length != 0) {
      this.mistakeText = `Дар ${this.misteakesBadge.join(', ')}-ум бейджик хатогиро мебинам (◕ᴥ◕)`;
      el.style.border = '1px solid tomato';
    }

    else {
      this.mistakeText = '';
      el.style.border = '1px solid #A6ABB0';
    }
  }
}