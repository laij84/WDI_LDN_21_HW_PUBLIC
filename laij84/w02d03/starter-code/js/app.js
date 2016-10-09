
// {
// "user_thumbnail":"http://pbs.twimg.com/profile_images/589705612864331777/rZPuXSEA_normal.jpg",
// "created_at":"2015-10-07 14:58:34 +0000",
// "text":"Freehold - Responsive Real Estate Theme http://t.co/e7QnameF8I ",
// "name":"Trends 2015",
// "screen_name":"trendbisnis2015"
// }

//loop through array of objects
$(function(){

  $(window.tweets).each(function(i){

    var $userThumbnail = window.tweets[i].user_thumbnail;
    var $createdAt = window.tweets[i].created_at;
    var $tweetText = window.tweets[i].text;
    var $userName = window.tweets[i].name;
    var $screenName = window.tweets[i].screen_name;

    var readableDate = new Date($createdAt);

    // console.log($screenName);

    $('.stream-items').append(

      '<div class="tweet">' +
      '<a href="#">' +
      '<img src="' + $userThumbnail + '" alt="User image goes here.">'+
      '</a>'+
      '<div class="content">'+
      '<strong class="fullname">'+$userName+'</strong>'+
      '<span>&rlm; </span>'+
      '<span>@</span><b>'+$screenName+'</b>'+
      '&nbsp;&middot;&nbsp;'+
      '<small class="time">'+
      readableDate.toLocaleString()+
      '</small>'+
      '<p>'+$tweetText+'</p>'+
      '</div>'+
      '</div>'+
      '</li>'
      );

  });


  $("#new-tweet-input").attr('maxlength','140');    
  
    $("input").on("click", function(event) {
      event.preventDefault();
      var $newTweet = $("#new-tweet-input");
      var $dateTime = new Date();

      if($newTweet.val() !== "") {
        $('.stream-items').prepend(

         '<div class="tweet">' +
         '<a href="#">' +
         '<img src="' +'https://placekitten.com/50/50'+ '" alt="User image goes here.">'+
         '</a>'+
         '<div class="content">'+
         '<strong class="fullname">'+'Jason'+'</strong>'+
         '<span>&rlm; </span>'+
         '<span>@</span><b>'+'Jason'+'</b>'+
         '&nbsp;&middot;&nbsp;'+
         '<small class="time">'+
         $dateTime.toLocaleString()+
         '</small>'+
         '<p>'+$newTweet.val()+'</p>'+
         '</div>'+
         '</div>'+
         '</li>'
        );
        $newTweet.val("");

        $('#new-tweets-bar').show("slow");
        setTimeout(function(){
          $('#new-tweets-bar').hide("slow");
          },3000);


        // $("#new-tweets-bar").fadeIn('slow', function(){
        //   setTimeout(function(){
        //     $('#new-tweets-bar').css("display","none");
        //   },5000);
        // });



      }
    });


});












