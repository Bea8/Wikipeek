$( () => {

	$("input").addClass("showUp");

    $("input").keydown( function(e){
       const target = $("input").val();
			 let isOnScreen = false;
			 let divCarousel = () => {
				 $("form").addClass("downScale");
				 $("div").empty().removeClass("left").addClass("slideFromLeft");
			 };

          if(e.which == 13){
						e.preventDefault();
						divCarousel();
             $.ajax({
               url: "//en.wikipedia.org/w/api.php",
               data: { action: "query", list: "search", format: "json", srsearch: target, srlimit: 5},
               dataType: "jsonp",
               type: "post",
               success: function (data) {
                  const collection = data.query.search;
                     $.each( collection, (i,v) => {
                        $("div").append("<button>" + "<p>" + v.title + "</p>" + "</br>" + v.snippet + "</button>");
                           $("button").attr("id", i => {
                                 return collection[i].title;
                           });
                     });

      $("button").click( function() {
            const hit = $(this).attr("id");
            window.open("https://en.wikipedia.org/wiki/" + hit, "_blank");
      });
               }
             });

          }
    });
});
