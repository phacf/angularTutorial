import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'

import { HousingLocation } from '../housing-location/housing-location'
import { HousingService } from '../housing.service'

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'], // Correção: styleUrls no plural
})
export class DetailsComponent {
  housingLocationId = ''
  housingLocation?: HousingLocation = undefined
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  })

  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService,
  ) {
    // Acessa o parâmetro 'id' da rota
    const housingLocationId = this.route.snapshot.params['id'] || ''

    this.housingService.getHousingLocationById(housingLocationId).then((housingLocation?: HousingLocation) => {
      this.housingLocation = housingLocation
    })
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    )
  }
}
