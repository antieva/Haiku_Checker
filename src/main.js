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

    Haiku.countSyllables(input);
  });
});
