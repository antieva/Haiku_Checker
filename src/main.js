import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Haiku } from './haiku.js';

$(document).ready(function() {
  $('#haiku-form').submit(function(event) {
    event.preventDefault();

    let input1 = $('#first-line').val().split(/[\s\.:;?!~,`"&|\(\)<>{}\[\]\r\n/\\]+/).filter(n => n);
    let input2 = $('#second-line').val().split(/[\s\.:;?!~,`"&|\(\)<>{}\[\]\r\n/\\]+/).filter(n => n);
    let input3 = $('#third-line').val().split(/[\s\.:;?!~,`"&|\(\)<>{}\[\]\r\n/\\]+/).filter(n => n);

    let syllables1 = 0;
    input1.forEach(function(word){
      syllables1 += Haiku.countSyllables(word);
      console.log(syllables1);
    });
    let syllables2 = 0;
    input2.forEach(function(word){
      syllables2 += Haiku.countSyllables(word);
    });
    let syllables3 = 0;
    input3.forEach(function(word){
      syllables3 += Haiku.countSyllables(word);
    });

    if (syllables1 === 5 && syllables2 === 7 && syllables3 === 5) {
      $("#checker-output").text("Congratulations! Your poem is a true haiku!");
    } else {
      $("#checker-output").text("Sorry, your poem is not a haiku!");
    }
    $("#output").show();

  });
});
