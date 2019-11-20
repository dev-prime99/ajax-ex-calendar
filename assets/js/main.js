// url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0."


$.ajax({

  url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
  method: "GET",
  success: function (data){

    var num_gg = moment("2018-01-01", "YYYY-MM-DD").daysInMonth();
    var cont = 0;

    for (var i = 1; i <= num_gg; i++) {
      var day = "2018-01-" + i;
      var month = moment(num_gg).format("MMMM");
      if (cont < data.response.length && (moment(data.response[cont].date).day() == i)) {
        $(".list").append("<li date='" + day + "'" + "class='red'>" + i + " " + month);
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
