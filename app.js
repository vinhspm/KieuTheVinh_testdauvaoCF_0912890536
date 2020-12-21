//bài 1
function printUnique(arr1, arr2) {
    let all = []
    arr1.forEach(element => {
        all.push(element)
    });
    arr2.forEach(element => {
        all.push(element)
    })
    let toRemove = []
    for(let ele in arr1) {
        for(let ele2 in arr2) {
            if(arr1[ele] === arr2[ele2]) {
                toRemove.push(arr1[ele])
                console.log("true");         
            }
        }
    }
    all = all.filter(item => !toRemove.includes(item))
    console.log(all)
}

let arr_1 = [1,2,3,4,5,6]
let arr_2 = [1,2,7,9,0]
printUnique(arr_1,arr_2)

//bai 2
function sortByProperties(teams) {
    let arr = []
    for(let team in teams) {
        arr.push(teams[team])
    }
    arr.sort(function(a, b) {
        return (a.points - b.points !== 0)? a.points - b.points : (a.GD - b.GD !== 0) ? a.GD - b.GD : (a.name).localeCompare(b.name);
    })
    console.log(arr)
}
let allTeams = [
    {
        name:'g',
        points: 99,
        GD:4,
    },
    {
        points:99,
        GD:4,
        name:'a',
    },
    {
        points:40,
    }
]
sortByProperties(allTeams)