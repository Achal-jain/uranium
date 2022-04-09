let postapi= function (req, res) {
    let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ]
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ]
        },
    ]
    let x=req.body
    let y=req.body.name
    for(let i=0;i<players.length;i++){
        if(players [i].name==y){
            res.send("Duplicate Data")
            break;
        }

    }
    players.push(x)

    res.send( players )
}
module.exports.postapi=postapi