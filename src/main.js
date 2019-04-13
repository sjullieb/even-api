import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { apiCall } from "./api-call.js";

$(document).ready(function() {
  apiCall();
});
