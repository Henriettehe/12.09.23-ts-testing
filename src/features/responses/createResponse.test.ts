import { createResponses } from './createResponse';
import { Faker, Response, CreateResponses } from './types';
 
// TODO: Not implemented
const fakerMock: Faker = {
  id: getRandomId,
  answer: () => 'answer',
  score: () => 2,
  category: () => "one",
}

describe.only("Create responses", () => {
  it("should create response", () => {
    //Skrev inn parameterne, og verdi og nøkkelpar bak createResponses:
    const responses = createResponses({ count: 10, faker: fakerMock })
    expect(responses.size).toBe(10)
  })
  it("should have correct data", () => {
      const responses = CreateResponses({ count: 10, faker: fakerMock })
      const firstResponse = Array.from (responses.values())[0]

    expect(firstResponse.answer).toBe("answer")
    expect(firstResponse.score).toBe(3)
    expect(firstResponse.category).toBe("one")
  })
  it("should add to existing list", () => {
    const intialRespinses = new Map<string, Response>([

    ])
    const responses = createResponses()
    
    expect(firstProduct.answer).toBe("answer")
    expect(firstProduct.category).toBe("Initial")
    expect(firstProduct.id).toBe("response-initial")
    expect(products.size).toBe(11)
  })
  it("should fail if no responses can be added", () => {
    expect(() => 
    createResponses({
      count: 0,
      faker: fakerMock, 
    }),
).toThrowError() => Map<String: "No Response added")
  })


function getRandomId(): string {
  throw new Error("Function not implemented.")
}

