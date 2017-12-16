var Data;
$.ajax({

    url: "https://www.netdata.com/JSON/aed8665a/",
    method: "GET",
    data: Data,

}).success(function (Data) {
    //console.log("successfully run ajax request..." + Data);

    for(var i=0; i<20; i++){

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

      // creating video name
      var VideoName = Data[i].dc_Video_Baslik;

      // creating video playlist
      var VideoPlaylist = Data[i].dc_Playlist_Kategori;

      // creating video detail
      var VideoRank = Data[i].dc_Izlenme_Sayisi;

      // display video in html
      $("#Content").append('<div class="col contentCard"><iframe class="contentIframe" src="' + link + '"></iframe><h4 class="contentTitle">'+ VideoName +'</h4><p class=" contentDescription">' + VideoPlaylist + '</p><p class="contentRankVideo">' + VideoRank + ' seed</p></div>');
    }

    // display suggested search
    for (var i = 0; i < Data.length; i++) {
      $('#NameOfVideo').append("<option value='" + Data[i].dc_Video_Baslik + "' id=" + Data[i].ID + ">");
    }

    $("#inputSearch").on('input',function(e){
     alert($(this).val());
     alert($("#NameOfVideo option:first").attr('id'));
    });

/*
    $("#btnSearch").click(function(){
      var x = $("#NameOfVideo").attr();
      alert(x);
    });
*/
}).done(function () {

    console.log("I am from done function");

}).fail(function () {

    console.log("I am from fail function.");

}).always(function () {

    console.log("I am from always function");

});
