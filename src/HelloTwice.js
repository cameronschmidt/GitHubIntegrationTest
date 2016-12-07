// FIXME - added on let but forgot some others

let test = new Date()
month = test.getMonth()
month = (month * 1) + 1
day = test.getDate()
year = test.getFullYear()

<<<<<<< Updated upstream
if (year === NaN) {
  document.write("Year is not a number!")
}

document.write("Hello for the second time, world, the date is ",day,"/",month,"/",year,"!" )
=======
if (year !== year) {
  console.log("year is not a number");
}

document.write("US date format: ",month,"/",day,"/",year," ")

>>>>>>> Stashed changes
