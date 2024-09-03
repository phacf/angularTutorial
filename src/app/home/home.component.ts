import { CommonModule } from '@angular/common' // Importando o CommonModule
import { Component } from '@angular/core'

import { HousingLocation } from '../housing-location/housing-location'
import { HousingLocationComponent } from '../housing-location/housing-location.component'
import { HousingService } from '../housing.service'

@Component({
  selector: 'app-home', // Changed from attribute selector to element selector
  standalone: true,
  imports: [CommonModule, HousingLocationComponent], // Adicionando o CommonModule
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Corrigido o plural
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = []
  filteredLocationList: HousingLocation[] = []

  constructor(private housingService: HousingService) {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList
      this.filteredLocationList = housingLocationList
    })
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList
    } else {
      this.filteredLocationList = this.housingLocationList.filter((location) =>
        location.city.toLowerCase().includes(text.toLowerCase()),
      )
    }
  }
}
