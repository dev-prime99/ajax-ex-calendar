// url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0."

var m = 0;

calendario();

$("#btn_next").click(function (){
  $(".list").empty();
  if (m == 11) {
    m = 0;
  } else{
    m++;
  }
  console.log(m);
  calendario()
});

$("#btn_prev").click(function (){
  $(".list").empty();
  if (m == 0) {
    m = 11;
  } else{
    m--;
  }
  console.log(m);
  calendario()
});


function calendario(){
  $.ajax({

    url: 'https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=' + m,
    method: "GET",
    success: function (data){

      var contm = m + 1;
      var date = moment("2018-"+contm+"-01", "YYYY-MM-DD")
      var num_gg = date.daysInMonth();
      var cont = 0;

      for (var i = 1; i <= num_gg; i++) {
        var day = "2018-"+contm+"-" + i;
        var month = date.format("MMMM");
        console.log(date);
        if (cont < data.response.length && (moment(data.response[cont].date).day() == i)) {
          $(".list").append("<li date='" + day + "'" + "class='red'>" + i + " " + month + " - " + data.response[cont].name);
          cont++;
        } else{
          $(".list").append("<li date='" + day + "'>" + i + " " + month)
        }
      }

      // console.log(data);
      // console.log(num_gg);
      // console.log(month);

    },
    error: function (errore){
      alert(errore);
    }

  });
}
