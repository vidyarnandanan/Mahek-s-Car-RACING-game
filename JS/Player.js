class Player{
constructor() {
this.index = null
this.distance = 0
this.name = null

}
getcount() {
    var playercountref = database.ref("playercount")
    playercountref.on ("value",function(data){
        playercount = data.val()
    })

}
updatecount(count){
    database.ref('/').update({
       playercount:count
    })
}
update() {
    var playerindex = "players/player"+this.index 
    database.ref(playerindex).set({
       name:this.name,
       distance:this.distance

    })
}
static getplayerinfo() {
    var playerinforef = database.ref("players")
    playerinforef.on("value",function(data){
        allplayers = data.val()

    })
        
    
    


}

}