export function getCat() {
    const catImg = document.getElementById('cat_img');
    const random = Math.ceil(Math.random() * 10);
    catImg.src = `./cats/cat${random}.jpg`;	
}

(function() {
    console.log("Welcome to my cats page!");
    getCat();
    document.getElementById('cat_btn').addEventListener('click', getCat);
})()
