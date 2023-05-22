import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
    constructor() { }

    public characters: Character[] = [
        {
            id: 1,
            name: 'Krillin',
            power: 1000
        },
        {
            id: 2,
            name: 'Goku',
            power: 9500
        },
        {
            id: 3,
            name: 'Vegeta',
            power: 7500
        }
    ];

    onNewCharacter(character: Character): void {
        character.id = this.characters.length + 1;
        this.characters.push(character);
    }

    onDeleteCharacter(index: number): void{
        this.characters = this.characters.filter(c => c.id !== index);
    }
    
}