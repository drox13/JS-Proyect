$(document).ready(function(){
    
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
    });

    //Posts
    var posts=[
        {
            title: "Prueba de titulo 1",
            Date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor nec feugiat nisl pretium fusce id. Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris sit amet massa vitae. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Gravida rutrum quisque non tellus orci ac auctor augue. Id donec ultrices tincidunt arcu non sodales neque. Aliquam sem et tortor consequat id porta nibh venenatis cras. Habitant morbi tristique senectus et netus et malesuada fames. Sollicitudin nibh sit amet commodo. Feugiat pretium nibh ipsum consequat nisl vel. Faucibus in ornare quam viverra orci. Sed turpis tincidunt id aliquet risus feugiat. Ut sem nulla pharetra diam sit amet."
        },
        {
            title: "Prueba de titulo 2",
            Date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor nec feugiat nisl pretium fusce id. Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris sit amet massa vitae. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Gravida rutrum quisque non tellus orci ac auctor augue. Id donec ultrices tincidunt arcu non sodales neque. Aliquam sem et tortor consequat id porta nibh venenatis cras. Habitant morbi tristique senectus et netus et malesuada fames. Sollicitudin nibh sit amet commodo. Feugiat pretium nibh ipsum consequat nisl vel. Faucibus in ornare quam viverra orci. Sed turpis tincidunt id aliquet risus feugiat. Ut sem nulla pharetra diam sit amet."
        },
        {
            title: "Prueba de titulo 3",
            Date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor nec feugiat nisl pretium fusce id. Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris sit amet massa vitae. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Gravida rutrum quisque non tellus orci ac auctor augue. Id donec ultrices tincidunt arcu non sodales neque. Aliquam sem et tortor consequat id porta nibh venenatis cras. Habitant morbi tristique senectus et netus et malesuada fames. Sollicitudin nibh sit amet commodo. Feugiat pretium nibh ipsum consequat nisl vel. Faucibus in ornare quam viverra orci. Sed turpis tincidunt id aliquet risus feugiat. Ut sem nulla pharetra diam sit amet."
        },
        {
            title: "Prueba de titulo 4",
            Date: new Date(),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor nec feugiat nisl pretium fusce id. Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris sit amet massa vitae. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Gravida rutrum quisque non tellus orci ac auctor augue. Id donec ultrices tincidunt arcu non sodales neque. Aliquam sem et tortor consequat id porta nibh venenatis cras. Habitant morbi tristique senectus et netus et malesuada fames. Sollicitudin nibh sit amet commodo. Feugiat pretium nibh ipsum consequat nisl vel. Faucibus in ornare quam viverra orci. Sed turpis tincidunt id aliquet risus feugiat. Ut sem nulla pharetra diam sit amet."
        },
    ];

    posts.forEach((item, index)=>{
        var post =`
            <article class="post">
                <h2>${item.title}</h2>
            <span class="date">${item.Date}</span>
            <p>
                ${item.content}
            </p>
            <a href="#" class="button-more">Leer Mas</a>
        </article>
        `;

        $("#posts").append(post)
    })

    //selector de tema
    var theme = $("#theme")
    
    theme.attr("href", localStorage.getItem("themeSelect"))
    
    $("#to-green").click(function(){
        theme.attr("href", "css/green.css")
        localStorage.setItem("themeSelect", "css/green.css");
    })

    $("#to-red").click(function(){
        theme.attr("href", "css/red.css")
        localStorage.setItem("themeSelect", "css/red.css");
    })

    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css")
        localStorage.setItem("themeSelect", "css/blue.css");
    })

   //scroll arriba de la web
   $(".subir").click(function(e){
    e.preventDefault();

    $("html, body").animate({
        scrollTop: 0,
    }, 500)
   })
   return false;

});