const accountId = 12343
let accountEmail = "pravin@gmail.com"
var accountPassword = "12345"
accountCity = "mumbai"

accountEmail = "xyz@gmail.com"
accountPassword = "3423"
accountCity = "delhi"

// accountId = 1    -- get error because of constant varible we can't change
// console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity])


/*
    let has block scope and prevent redeclarations, while var has a function scope
    and allow redeclaration.
*/