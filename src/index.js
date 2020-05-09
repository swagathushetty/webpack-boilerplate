import users,{ getPremiumUsers } from './data'


console.log(users)
const premUsers=getPremiumUsers(users)
console.log('hello',premUsers)

