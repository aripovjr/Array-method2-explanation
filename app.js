//filter method creates a new array with all elements that pass the test implemented by the provided function
//it can manipulate the size of a new array
//returns based on condition
const fruits = [
    {name: 'apple', price: 5},
    {name: 'banana', price: 10},
    {name: 'strawberry', price: 7},
    {name: 'pineapple', price: 11}
]
//we have fruits array with name and price so lets filter them and find cheap fruits among them
const cheap_fruits = fruits.filter(item=>{return item.price<10})
console.log(`${cheap_fruits.map(fruit=>fruit.name)} are cheaper than 10 dollars`)

//we have another option for this, above we trited to access name

//in this case we can use find 
//it returns first match, if no match then undefined
//really handy to get unique value
//lets try the exercise above with find

let expensive_fuits = fruits.find(fruit=>fruit.price == 11)
console.log(expensive_fuits.name)//pineapple
//lets unshift new fruit into our array

fruits.unshift({name: 'kiwi', price: 11})
//now we have inserted new fruit to the beginning of our array which is kiwi price 11
//lets try our find again and see what happens
expensive_fuits = fruits.find(fruit=>fruit.price == 11)
console.log(expensive_fuits.name)//kiwi
//so as i told before it returns first match
//before we unshifted new fruit it prited pineapple which is last 
//and we added new object to the firstand then the prices became 11, 5, 10, 7, 11
//second print shows us kiwi as it is first match
