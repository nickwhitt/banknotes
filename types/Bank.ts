export type Bank = {
    letter: string
    number: number
    city: string
    state: string
}

interface Banks {
    a: Bank
    b: Bank
    c: Bank
    d: Bank
    e: Bank
    f: Bank
    g: Bank
    h: Bank
    i: Bank
    j: Bank
    k: Bank
    l: Bank
}

export const boston: Bank = { letter: 'A', number: 1, city: 'Boston', state: 'MA' }
export const newYork: Bank = { letter: 'B', number: 2, city: 'New York', state: 'NY' }
export const philadelphia: Bank = { letter: 'C', number: 3, city: 'Philadelphia', state: 'PA' }
export const cleveland: Bank = { letter: 'D', number: 4, city: 'Cleveland', state: 'OH' }
export const richmond: Bank = { letter: 'E', number: 5, city: 'Richmond', state: 'VA' }
export const atlanta: Bank = { letter: 'F', number: 6, city: 'Atlanta', state: 'GA' }
export const chicago: Bank = { letter: 'G', number: 7, city: 'Chicago', state: 'IL' }
export const stLouis: Bank = { letter: 'H', number: 8, city: 'St. Louis', state: 'MO' }
export const minneapolis: Bank = { letter: 'I', number: 9, city: 'Minneapolis', state: 'MN' }
export const kansasCity: Bank = { letter: 'J', number: 10, city: 'Kansas City', state: 'MO' }
export const dallas: Bank = { letter: 'K', number: 11, city: 'Dallas', state: 'TX' }
export const sanFrancisco: Bank = { letter: 'L', number: 12, city: 'San Francisco', state: 'CA' }

export const banks: Banks = {
    a: boston,
    b: newYork,
    c: philadelphia,
    d: cleveland,
    e: richmond,
    f: atlanta,
    g: chicago,
    h: stLouis,
    i: minneapolis,
    j: kansasCity,
    k: dallas,
    l: sanFrancisco,
}
