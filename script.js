$(function(){
  $('a').click(function(e){
    //when user clicks a link
    e.preventDefault();
    //stop the default action of the event
    var url = $(this).attr('href');
    //get the attribute value href for this link and store as url
    //format of /nicoleterncom/link/
    history.pushState(url, null, url);
    //third parameter changes the url in address bar
    //first parameter is location of or state obj of data we will need if
    //back or forward button is pressed
    console.log(url.split('/')[2] + '.html');
    loadContent(url);
  });
  function loadContent(file){
    //format of file /nicoleterncom/filename/
    //to separate filename from string, split string by /
    //the 2nd to last element of the resulting array is filename
    $('.content').load('/nicoleterncom/' + file.split('/')[2] + '.html');
    //this loads the contents of filename into div.content
  }
  window.addEventListener('popstate', function(e){
    //when the back or forward button is pressed popstate is fired
    //e.state is the location of the last page we were on
    if(e.state == null){
      //if e.state is null then we clear div.content
      $('.content').text('');
    }else{
      //else load the data
      loadContent(e.state);
    }
  });
});
