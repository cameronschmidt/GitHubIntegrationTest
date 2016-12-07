
let test = new Date()
month = test.getMonth()
month = (month * 1) + 1
day = test.getDate()
year = test.getFullYear()

if (year === NaN) {
  document.write("Year is not a number!")
}

document.write("Hello for the second time, world, the date is ",day,"/",month,"/",year,"!" )
