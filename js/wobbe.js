$(function(){

  $('.datepicker').pickadate({
    min: new Date(2014,0,13)
  });

  $('.timepicker').pickatime({
    min: [6,00],
    max: [23,30],
    disable: [3, 5, 7],
    interval: 15
  });

  $('button').click(function(e){
    var $button = $(e.target);
    handleEvent($button);
  });

  function handleEvent(button){
    if (button.text().indexOf('Next') != -1){
      nextStep(button);
    } else if (button.text().indexOf('Previous') != -1){
      previousStep(button);
    } else if (button.text().indexOf('Confirm') != -1){
      confirm();
    }
  }

  function confirm(){
    alert('Awesome booking');
  }

  function nextStep(button){
    button.parent().toggle();
    button.parent().next().toggle();
  }

  function previousStep(button){
    button.parent().toggle();
    button.parent().prev().toggle();
  }

  $(document).on('swipeleft', swipeleftHandler);
  $(document).on('swiperight', swiperightHandler);

  function swipeleftHandler(e){
    var button = ($('button:visible:contains("Next")')[0] || $('button:visible:contains("Confirm")')[0]);
    handleEvent($(button));
  }

  function swiperightHandler(e){
    var button = $('button:visible:contains("Previous")')[0];
    handleEvent($(button));
  }
});
