
var urlApi = 'http://157.230.17.132:3005/todos';
var wrapper = $('.wrapper');
var input = $('#insert')
var button = $('#mybutton');

$(document).ready(function() {

  getData()

  $.ajax({
    url: urlApi,
    method: 'GET',
    success: function(data){
      console.log(data);

      printData(data);
    },
    error: function(err){

    }
  });

  button.click(function(){
    var mytext = input.val();
    $.ajax({
      url: urlApi,
      method: 'POST',
      data: {
        text: mytext
      },
      success: function(data){
        console.log(data);


      },
      error: function(err){

      }
    });
  });

});

function printData(obj){
  wrapper.html('<ul>');
  for (var i = 0; i < obj.length; i++) {
    wrapper.children('ul').append('<li><span>id:'  + obj[i].id + '</span>' + obj[i].text + '<li>');
  }
  wrapper.append('</ul>');
};

function getData() {
  $.ajax({
    url: urlApi,
    method: 'GET',
    success: function(data){
      console.log(data);

      printData(data);
    },
    error: function(err){

    }
  });
};
