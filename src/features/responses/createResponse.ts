import { number, string } from "zod"
import { CreateResponses, Faker, CreateResponseParams, Response } from './types';
import { existsSync } from "fs";

const fakeAnswers: string[] = [
  "GlitterGlo Lipstick",
  "QuantumQuench Energy Drink",
  "StellarScent Perfume",
  "PurrfectPillow Pet Bed",
]

const fakeScores: number[] = [3, 2, 1]

const fakeCategories: string[] = ["Math", "Code", "Science"]

//En generisk, inni krokodillene kan være T, U, V. Hva som helst egentlig. men bedre med en bokstav. 
//returner random tall. 
const getRandomItem = <T>(items: T[]) => {
  return items[Math.floor(Math.random() * items.length)]
}

const getRandomId = () => {
  return Math.random().toString(36).slice(2)
}

// Oppgave 1 - Not implemented
//Denne googlet jeg/brukte chatpgt til å forklare hva som manglet av syntax. Da jeg ikke har så mye kunnskap enda om TypeScript syntax. 
const faker: Faker = {
  //Setter inn funksjonene inn i de ulike verdiene. 
  id: getRandomId,
  answer: () => getRandomItem(fakeAnswers), 
  score: () => getRandomItem(fakeScores), 
  category: () => getRandomItem(fakeCategories), 
};

// TODO: Oppgave 1 - Not implemented
const createResponses: CreateResponses = ({ 
  count, 
  faker,
}) => {
  const responses = new Map(existingResponses)
  if (responses.size === 0 && count === 0) throw new Error("No response added")
  for(let i = 0; i < count; i ++) {
    const response = {
      id: faker.id(), 
      question: '1',
      answer: faker.answer(),
      score: faker.score(),
      category: faker.category(), 
    };
    //Mangler en linje her; test reponse: 
  }
  return responses;
};

// TODO: Oppgave 3 - Not implemented
const calcAverageScore = (responses: Map<string, Response>) => {
  return 0
}

export { createResponses }
