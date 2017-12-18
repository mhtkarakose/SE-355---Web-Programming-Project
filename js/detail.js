var comingData;

$(document).ready(function(){
  //This sessionStorage.getItem(); is also a predefined function in javascript
  //will retrieve session and get the value;
  comingData = sessionStorage.getItem("sent");
});

var Data;
$.ajax({

    url: "https://www.netdata.com/JSON/aed8665a/",
    method: "GET",
    data: Data,

}).success(function (Data) {
    //console.log("successfully run ajax request..." + Data);

    // display suggested search
    for (var i = 0; i < Data.length; i++) {

      if(Data[i].dc_Video_Baslik === comingData){
        console.log("matching data found");

      var parser2 = document.createElement('a');
      parser2.href = Data[i].dc_Link;
      var pro2 = parser2.protocol;
      var youtube2 = parser2.host;
      var str2 = parser2.search;
      var res2 = str2.slice(3,14);
      // url parsing finish

      // creating url
      var link2 = pro2 + "//" + youtube2 + "/embed/" + res2;

      var VideoID2 = Data[i].ID;

      // creating video name
      var VideoName2 = Data[i].dc_Video_Baslik;

      // creating video playlist
      var VideoPlaylist2 = Data[i].dc_Playlist_Kategori;

      // creating video detail
      var VideoRank2 = Data[i].dc_Izlenme_Sayisi;

        $("#detailVideoContent").append('<iframe id="contentVideo" src="' + link2 + '"></iframe><h4 id="detailVideoTitle">"' + VideoName2 + '"</h4><p class=" contentDescription">' + VideoPlaylist2 + '</p><p class="contentRankVideo">' + VideoRank2 + ' seed</p>');
      }

      $('#NameOfVideo').append("<option value='" + Data[i].dc_Video_Baslik + "' id=" + Data[i].ID + ">");
    }

    for(var i=0; i<4; i++){

      // url parsing start
      var parser = document.createElement('a');
      parser.href = Data[i].dc_Link;
      var pro = parser.protocol;
      var youtube = parser.host;
      var str = parser.search;
      var res = str.slice(3,14);
      // url parsing finish

      // creating url
      var link = pro + "//" + youtube + "/embed/" + res;

      var VideoID = Data[i].ID;

      // creating video name
      var VideoName = Data[i].dc_Video_Baslik;

      // creating video playlist
      var VideoPlaylist = Data[i].dc_Playlist_Kategori;

      // creating video detail
      var VideoRank = Data[i].dc_Izlenme_Sayisi;

      // display video in html
      $("#Content").append('<div class="col contentCard"><iframe class="contentIframe" src="' + link + '"></iframe><h4 class="contentTitle getSelectedVideo" text="'+ VideoName +'">'+ VideoName +'</h4><p class=" contentDescription">' + VideoPlaylist + '</p><p class="contentRankVideo">' + VideoRank + ' seed</p></div>');

    }
    // when click the video name opening the detail page.
    $('.getSelectedVideo').click(function(){
      var namex2 = $(".getSelectedVideo").attr("text");
      sessionStorage.setItem("sent", namex2);
      //this is to open a window in new tab
      window.open("detail.html","_blank");
    });

    $("#inputSearch").on('input',function(e){
       $( "#btn_Search" ).click(function() {
          //sending selected text
          var idx = $("#inputSearch").val();
          sessionStorage.setItem("sent", idx);
          //this is to open a window in new tab
          window.open("detail.html","_blank");
       });
   });


}).done(function () {

    console.log("I am from done function");

}).fail(function () {

    console.log("I am from fail function.");

}).always(function () {

    console.log("I am from always function");

});
