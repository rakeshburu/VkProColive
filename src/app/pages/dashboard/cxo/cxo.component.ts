import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cxo',
  templateUrl: './cxo.component.html',
  styleUrls: ['./cxo.component.scss']
})
export class CxoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
//
// import {Component, OnDestroy} from '@angular/core';
// import { NbThemeService } from '@nebular/theme';
// import { takeWhile } from 'rxjs/operators' ;
// import { SolarData } from '../../../@core/data/solar';                       // '../../@core/data/solar';

// interface CardSettings {
//   title: string;
//   iconClass: string;
//   type: string;
// }

// @Component({
//   selector: 'app-cxo',                                // 'ngx-dashboard',
//   styleUrls: ['./cxo.component.scss'],
//   templateUrl: './cxo.component.html',
// })
// export class CxoComponent implements OnDestroy {

//   private alive = true;

//   solarValue: number;
//   lightCard: CardSettings = {
//     title: 'Light',
//     iconClass: 'nb-lightbulb',
//     type: 'primary',
//   };
//   rollerShadesCard: CardSettings = {
//     title: 'Roller Shades',
//     iconClass: 'nb-roller-shades',
//     type: 'success',
//   };
//   wirelessAudioCard: CardSettings = {
//     title: 'Wireless Audio',
//     iconClass: 'nb-audio',
//     type: 'info',
//   };
//   coffeeMakerCard: CardSettings = {
//     title: 'Coffee Maker',
//     iconClass: 'nb-coffee-maker',
//     type: 'warning',
//   };

//   statusCards: string;

//   commonStatusCardsSet: CardSettings[] = [
//     this.lightCard,
//     this.rollerShadesCard,
//     this.wirelessAudioCard,
//     this.coffeeMakerCard,
//   ];

//   statusCardsByThemes: {
//     default: CardSettings[];
//     cosmic: CardSettings[];
//     corporate: CardSettings[];
//   } = {
//     default: this.commonStatusCardsSet,
//     cosmic: this.commonStatusCardsSet,
//     corporate: [
//       {
//         ...this.lightCard,
//         type: 'warning',
//       },
//       {
//         ...this.rollerShadesCard,
//         type: 'primary',
//       },
//       {
//         ...this.wirelessAudioCard,
//         type: 'danger',
//       },
//       {
//         ...this.coffeeMakerCard,
//         type: 'secondary',
//       },
//     ],
//   };

//   constructor(private themeService: NbThemeService,
//               private solarService: SolarData) {
//     this.themeService.getJsTheme()
//       .pipe(takeWhile(() => this.alive))
//       .subscribe(theme => {
//         this.statusCards = this.statusCardsByThemes[theme.name];
//     });

//     this.solarService.getSolarData()
//       .pipe(takeWhile(() => this.alive))
//       .subscribe((data) => {
//         this.solarValue = data;
//       });
//   }

//   ngOnDestroy() {
//     this.alive = false;
//   }
// }

