import { Injectable } from '@angular/core'

import { HousingLocation } from './housing-location/housing-location'

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  // protected housingLocationList: HousingLocation[] = Array.from(
  //   { length: 10 },
  //   (_, index) => ({
  //     id: faker.database.mongodbObjectId(),
  //     name: faker.company.name(),
  //     city: faker.location.city(),
  //     state: faker.location.state(),
  //     avaliableUnits: faker.number.int({ min: 1, max: 10 }),
  //     photo: faker.image.urlPicsumPhotos(),
  //     wifi: index % 2 === 0,
  //     laudry: !(index % 2 === 0),
  //   })
  // );

  url = 'http://localhost:3000/locations'

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url)
    return (await data.json()) ?? []
  }

  async getHousingLocationById(id: string): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`)

    return data.json() ?? {}
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email)
  }
}
