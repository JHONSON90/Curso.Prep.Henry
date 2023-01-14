var str = "The Henry Challenge is close!"

var NewString = []

for (let i = 0; i < str.length; i++) {
  NewString.unshift(str[i])
  }
  console.log(NewString)