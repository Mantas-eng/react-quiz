export const shuffleArray = (array: any[]) =>
[...array].sort(() => Math.random() - 0.5); //and this is kind of  a quick fix for creating a randomizer function