$(document).ready(function() {
    $("#birthday").datepicker();
    var languages = [
      "Java",
      "Python",
      "JavaScript",
      "C",
      "C++",
      "C#",
      "Go",
      "Rust",
      "Kotlin",
      "Swift",
      "Ruby",
      "PHP",
      "TypeScript"
    ];
    $("#language").autocomplete({
      source: languages
    });
  });
  
  
  
  
  
  