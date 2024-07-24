import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Breed } from './breeds.model'; 

@Injectable({
    providedIn: 'root'
})
export class BreedService {
    private apiUrl = 'http://localhost:3000/api/breeds';

    constructor(private http: HttpClient) { }

    getRandomBreed(): Observable<Breed | null> {
        return this.http.get<{ message: string, breeds: any[] }>(this.apiUrl).pipe(
            map(response => {
                if (!Array.isArray(response.breeds)) {
                    throw new Error('Expected "breeds" to be an array');
                }
                // Transform the _id to id
                const transformedData = response.breeds.map(breed => ({
                    ...breed,
                    id: breed._id, // Map _id to id
                    _id: undefined // Remove _id from the object
                }));
                // Check if there are breeds
                if (transformedData.length > 0) {
                    const randomIndex = Math.floor(Math.random() * transformedData.length);
                    return transformedData[randomIndex]; // Return a random breed
                } else {
                    return null; // Handle the case when there are no breeds
                }
            })
        );
    }
}
