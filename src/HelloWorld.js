
let test = new Date()
let month = test.getMonth()
month = (month * 1) + 1 // FIXME - this looks incorrect!
let day = test.getDate()
let year = test.getFullYear()

document.write("Hello, world, the date is ",day,"/",month,"/",year,"!" )
