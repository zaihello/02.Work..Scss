

window.onload = function(){
    let Btn = document.querySelectorAll('.XsBreadIcon-a')[0];
    // let list = document.querySelectorAll('.xs-list').style.display;
    let change = 1;
    Btn.onclick = function(){
        if(change){
            // Btn.style.color="red";
            this.innerHTML = '<i class="fa-solid fa-xmark"></i>';//按麵包屑轉成x圖案
            document.getElementById('xs-list').style.display = "block";
            change--;
            //  Btn.style.fontsize="1.3rem";

        }
        else{
             
            this.innerHTML = '<i class="fa-solid fa-bars"></i>';//按x圖案轉成麵包屑圖案
            document.getElementById('xs-list').style.display = "none";
            change++;
        }
    }

}