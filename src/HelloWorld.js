
let test = new Date()
let month = test.getMonth()
month = (month * 1) + 1 // FIXME - this looks incorrect!
let day = test.getDate() //FIXEME - this can't be right!
year = test.getFullYear() // FIXME - should use a let statement

document.write("Hello, world, the date is ",day,"/",month,"/",year,"!" )
