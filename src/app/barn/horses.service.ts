import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Horse } from './horse.model'; 

@Injectable({
    providedIn: 'root'
})
export class HorseService {
    private apiUrl = 'http://localhost:3000/api/myBarn'; 
    horses: Horse[] = [];
    constructor(private http: HttpClient) { }

    // Fetch a list of all horses
    getHorses(): Observable<Horse[]> {
        return this.http.get<{ message: string, horses: any[] }>(this.apiUrl).pipe(
            map(response => {
                if (!Array.isArray(response.horses)) {
                    throw new Error('Expected "horses" to be an array');
                }
                
                // Transform the _id to id
                const transformedData = response.horses.map(horse => ({
                    ...horse,
                    id: horse._id, // Map _id to id
                    _id: undefined // Remove _id from the object
                }));
                
                return transformedData;
            })
        );
    }

    // Fetch a horse by its ID
    getHorseById(id: string): Observable<Horse> {
        return this.http.get<{ message: string, horse: any }>(`${this.apiUrl}/${id}`).pipe(
            map(response => {
                if (!response.horse) {
                    throw new Error('Horse not found');
                }
                // Transform the _id to id
                const horse = {
                    ...response.horse,
                    id: response.horse._id, // Map _id to id
                    _id: undefined // Remove _id from the object
                };
                
                return horse;
            })
        );
    }

    // Delete a horse by its ID
    deleteHorse(id: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    // Create a new horse
    createHorse(horse: Horse): Observable<Horse> {
        return this.http.post<{ message: string, horse: any }>(this.apiUrl, horse).pipe(
            map(response => {
                if (!response.horse) {
                    throw new Error('Failed to create horse');
                }
                // Transform the _id to id
                const createdHorse = {
                    ...response.horse,
                    id: response.horse._id, // Map _id to id
                    _id: undefined // Remove _id from the object
                };
                return createdHorse;
            })
        );
    }

    // Update an existing horse
    updateHorse(id: string, horse: Horse): Observable<Horse> {
        return this.http.put<{ message: string, horse: any }>(`${this.apiUrl}/${id}`, horse).pipe(
            map(response => {
                if (!response.horse) {
                    throw new Error('Failed to update horse');
                }
                // Transform the _id to id
                const updatedHorse = {
                    ...response.horse,
                    id: response.horse._id, // Map _id to id
                    _id: undefined // Remove _id from the object
                };
                return updatedHorse;
            })
        );
    }
}
