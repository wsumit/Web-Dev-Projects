$(document).ready(function(){

    var api_key="AIzaSyAKuqs-ljN9r-1KKSGgHF1T8yYSvzCN0sU";

    $("#search").click(function(){
        const text=$("#text").val();
        
        addVideos(text,4);

    });

    function addVideos(text,maxResults){
        $.get(`https://www.googleapis.com/youtube/v3/search?key=${api_key}&type=video&part=snippet&maxResults=${maxResults}&q=${text}`,function(data)
        {
                
            console.log(data)
            // if(data.item==null){console.log("error!!");return;}

            $("#youtube").empty(); 
            data.items.forEach(item=>{
                    var video=`<iframe width="40%" height="200px" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen ></iframe>`;
                    $("#youtube").append(video);
                });
        });
    };

});