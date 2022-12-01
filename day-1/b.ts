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

const topThree = [...elfMap.values()].sort((a, b) =>  b - a).splice(0,3)

console.log(`Top Three total calories: ${topThree.reduce((currentCalories, totalCalories) => {
  totalCalories = totalCalories + currentCalories
  return totalCalories
}, 0)}`)

