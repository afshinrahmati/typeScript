// generic <>
const names: string[] = ['afshin', 'amir', 'majid']
const users: Array<string | number> = []
names[0].split('')

console.log(names)

const promise: Promise<any> = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(12)

    resolve('This is done')
  }, 3000)
  console.log(45)
})
promise.then((data) => {
  data.split(' ')
})
