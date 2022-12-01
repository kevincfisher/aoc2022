import { readFileSync } from "fs";
import path from "path";

const parsedInput = readFileSync(path.resolve(__dirname, './input.txt')).toString().split('\n\n')
const elfMap = new Map<number, number>()
for(const index in parsedInput) {
  const totalCalories = parsedInput[index].split('\n').map(Number).reduce((calories, totalCalories) => {
    totalCalories = totalCalories += calories
    return totalCalories
  }, 0)

  elfMap.set(index, totalCalories)
}

console.log('Max calories - ', Math.max(...elfMap.values()))

