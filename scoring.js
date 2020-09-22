$(document).ready(function(){
  function score_indicate(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    let sum = 0;
    let num = subject_points.length;
    for (let i=0; i<num; i++){
      sum += subject_points[i];}
    $(`#sum_indicate`).text(sum);
    let average_score = sum/num;
    $(`#average_indicate`).text(average_score);
  };

  function get_achievement(){
    let averageIndicate = $(`#average_indicate`).text();
      if ( averageIndicate >= 80){
        return "A";
      } else if ( averageIndicate >= 60) {
        return "B";
      } else if (averageIndicate >= 40){
        return "C";
      }
      else {
        return "D";
      }
  }
  function get_pass_or_failure(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    let number = subject_points.length;
    let judge ="pass";
    for(let i=0; i<number; i++){
      if(subject_points[i]<60){
        judge = "failure";
        return judge;
        break;
      }
    }
    return judge;
  };

  function judgement(){
    let achievement = get_achievement();
    let pass_or_failure = get_pass_or_failure();
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">your grade is ${achievement}. it is ${pass_or_failure}.</label>`);
  };
  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });
  $('#btn-evaluation').click(function() {
    $("#evaluation").text(get_achievement());
  });
    $('#btn-judge').click(function() {
    $("#judge").text(get_pass_or_failure());
  });
  $('#btn-declaration').click(function() {
    $(`#declaration label:last`).remove();
    $(`#declaration`).text(judgement());
  });
});
