// list of musics (Array of Object)
let musics=[{ 
    id:1,
    name:"yaaradi nee mogini",
    artist:"Yuvan Shankar Raja",
    imagesrc:"image/yaradi nee mogini.jpeg",
    audiosrc:"music/Yaaradi Nee Mohini Enkeyoo Partha Video Dhanush Yuvanshankar Raja.mp3"

},
{
    id:2,
    name:"Sorgame Endralum",
    artist:"S. Janaki",
    imagesrc:"https://a.ltrbxd.com/resized/film-poster/2/0/6/6/9/8/206698-ooru-vittu-ooru-vanthu-0-230-0-345-crop.jpg?k=9ebff69f41",
    audiosrc:"music/Sorgame Endralum.mp3"
},
{ 
    id:3,
    name:"illa nenje vaa",
    artist:"K. J. Yesudas",
    imagesrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_gTn6nkRW-G3VodsLics1ySm6phB6loV4qw&usqp=CAU",
    audiosrc:"music/Ila-Nenje-Vaa-K.J.-Yesudas.mp3"

},
{ 
    id:4,
    name:"Unnal Mudiumthambi thambi thambi",
    artist:"S.P.Balasubrahmanyam",
    imagesrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtpY6XNqoFu2MYl8jjPuC87NerMHVMKOJ-ng&usqp=CAU",
    audiosrc:"music/Unnal Mudiyum.mp3"

},

]

// to add musics in dynamically (if you want more musics just add in above list of musics)

for(let i=0;i<musics.length;i++)
{  
    let tile=document.createElement("div");
    tile.classList.add("tile");

    let thumbnail=document.createElement("div");
    thumbnail.classList.add("thumbnail");

    let img=document.createElement("img");
    img.src=musics[i].imagesrc;

    thumbnail.append(img);
    tile.append(thumbnail);

    let discription=document.createElement("div");
    discription.classList.add("discription");

    let h2=document.createElement("h2");
    h2.append(musics[i].name);
    discription.append(h2);

    let h3=document.createElement("h3");
    h3.append(musics[i].artist);
    discription.append(h3);

    tile.append(discription);
    tile.addEventListener("click",function(){playmusic(musics[i]);
        addFadeInClass();});
    
    document.querySelector(".music-list").append(tile);
 
}

function playmusic(music)
{
    document.querySelector(".player").style.marginLeft="0";
    document.querySelector(".main-thumbnail-img").src=music.imagesrc;
    document.querySelector(".song-name").innerText=music.name;
    document.querySelector(".song-artist").innerText=music.artist;
    document.querySelector(".audio").src=music.audiosrc;
    document.querySelector(".audio").play();
}
function addFadeInClass() {
    let mainThumbnail = document.querySelector(".main-thumbnail");
    mainThumbnail.classList.add("fade-in");
}
function closeplayer()
{
    document.querySelector(".player").style.marginLeft="100%";
}