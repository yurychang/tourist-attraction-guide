import { Component } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';
import { appIconPack } from './app-icon-pack';
import { TaiwanCityCnLabel } from './core/enum/taiwan-city.enum';
import { TourismTypeCnLabel } from './core/enum/tourism-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cities = Object.entries(TaiwanCityCnLabel).sort((a, b) => a[1].localeCompare(b[1], 'zh-TW'));

  tourismTypeCn = TourismTypeCnLabel;

  constructor(private iconLibraries: NbIconLibraries) {
    this.iconLibraries.registerSvgPack('app', appIconPack);
  }
}
