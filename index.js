const motor= {
    name: "TVS",
    plate: "RAB 23744",
    owner: "jean",
}
localStorage.setItem('motorkey',JSON.stringify(motor))

const lewis= localStorage.getItem('motorkey')
console.log(JSON.parse(lewis))