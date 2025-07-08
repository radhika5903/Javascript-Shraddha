const profile = {
    username : "@Shraddha_Khapra",
    isFollow : true,
    Posts : 195,
    followers : 569000,
    following : 4,
    Bio : "Apna college , Ex-microsoft, DROD",

}
console.log(profile);
console.log(typeof profile);
console.log(profile.Posts);
console.log(profile["Bio"]);

profile.following = profile["following"] + 5;
console.log(profile.following);
profile["isFollow"] = false;
console.log(profile.isFollow);