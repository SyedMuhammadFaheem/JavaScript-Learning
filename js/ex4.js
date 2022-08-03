//Question # 1

var shipments = {
  standard: {
    leadTime: 7,
    fee: 2,
  },
  express: {
    leadTime: 3,
    fee: 4.5,
  },
};


var dropdown=document.getElementById('shipments');

dropdown.addEventListener('change',function()
{
    var selected=document.getElementById('shipments').options.selectedIndex;
    var value=document.getElementById('shipments').options[selected].innerHTML;
    if(value=='Express (3 days)')
    {
        document.getElementById('order_date').innerHTML=shipments[0].standard.

    }
    else if(value=='Standard (7 days)')
    {

    }
})