var Data;
$.ajax({

    url: "https://www.netdata.com/JSON/aed8665a/",
    method: "GET",
    data: Data,

}).success(function (Data) {
    //console.log("successfully run ajax request..." + Data);

    for(var i=0; i<12; i++){

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
    $(".form_datetime").datetimepicker({
        format: "dd MM yyyy",
        autoclose: true,
        todayBtn: true,
        startDate: "2000-12-19 10:00",
        minuteStep: 10
    });
    // when click the video name opening the detail page.
    $('.getSelectedVideo').click(function(){
      var namex = $(".getSelectedVideo").attr("text");
      sessionStorage.setItem("sent", namex);
      //this is to open a window in new tab
      window.open("detail.html","_blank");
    });

    // display suggested search
    for (var i = 0; i < Data.length; i++) {

      $('#StartDate').append("<option value='" + Data[i].dc_Yayinlanma_Tarihi + "' id=" + Data[i].ID + ">");
      $('#NameOfVideo').append("<option value='" + Data[i].dc_Video_Baslik + "' id=" + Data[i].ID + ">");
    }

    $("#inputSearch").on('input',function(e){
       $( "#btn_Search" ).click(function() {
          //sending selected text
          var idx = $("#inputSearch").val();
          sessionStorage.setItem("sent", idx);
          //this is to open a window in new tab
          window.open("detail.html","_blank");
       });
   });


  $("#btn_deneme").click(function(){

    var asdf = $("#deneme").val();

    //var jsDate = Date.parse(asdf,"yyyy-MM-dd HH:mm:ss");
    alert(asdf);

  });



}).done(function () {

    console.log("I am from done function");

}).fail(function () {

    console.log("I am from fail function.");

}).always(function () {

    console.log("I am from always function");

});
