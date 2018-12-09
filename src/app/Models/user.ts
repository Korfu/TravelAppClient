import { Country } from "./country";

export class User {
    id: number;
    firstName: string;
    lastName: string;
    visitedCountries: Country[];
}