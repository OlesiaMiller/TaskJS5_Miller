
var container = document.getElementById("container");
var a = document.getElementsByClassName('container_item');
var imgCont = document.getElementsByClassName('container_item-img');
var img = document.getElementsByClassName('img');
var description = document.getElementsByClassName('container_item-description');
var price = document.getElementsByClassName('container_item-price');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');

var imgCollect = [{name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                 {name: 'images/airplant3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'},
                 {name: 'images/cactus-1.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                 {name: 'images/cactus-18.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                 {name: 'images/gorshok-1.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                 {name: 'images/is3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                 {name: 'images/th4.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                 {name: 'images/the-sill_1.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                 {name: 'images/the-sill_2.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                 {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                 {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'},    
                 {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                 {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                 {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                 {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                 {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                 {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                 {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                 {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                 {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$100'}, 

]

var z = 0;
var y = 8;

var cellClick = function() {
    for (let i = z; i < y; i++) {
        var n = document.createElement('div');
        n.className = 'container_item-grid';
        container.appendChild(n);

        var m = document.createElement('div');
        m.className = 'container_item-img container_item-list-img';
        n.appendChild(m);

        var l = document.createElement('img');
        l.className = 'img img-list';
        l.setAttribute('src',imgCollect[i].name);
        m.appendChild(l);
        

        var r = document.createElement('div');
        r.className = 'container_item-description container_item-list-description';
        n.appendChild(r);

        
        var p = document.createElement('p');
        p.innerHTML = imgCollect[i].description;
        r.appendChild(p);

        var pr = document.createElement('div');
        pr.className = 'container_item-price container_item-list-price';
        n.appendChild(pr);

        var cost = document.createElement('p');
        cost.innerHTML = imgCollect[i].price;
        pr.appendChild(cost);
    }
}



cell.addEventListener('click', function() {
    event.stopImmediatePropagation();

    container.innerHTML = '';
    z = 0;
    y = 8;

    cellClick();
    button.style.display = 'block';

    for (let i = 0; i < a.length; i++) {
        a[i].classList.add('container_item-grid'); 
        a[i].classList.remove('container_item-list'); 


    }
 
    
});

var listClick = function() {
    for (let i = z; i < y; i++) {
        var n = document.createElement('div');
        n.className = 'container_item-list';
        container.appendChild(n);

        var m = document.createElement('div');
        m.className = 'container_item-list-img';
        n.appendChild(m);

        var l = document.createElement('img');
        l.className = 'img-list';
        l.setAttribute('src',imgCollect[i].name);
        m.appendChild(l);
        

        var r = document.createElement('div');
        r.className = 'container_item-list-description';
        n.appendChild(r);

        
        var p = document.createElement('p');
        p.innerHTML = imgCollect[i].description;
        r.appendChild(p);

        var pr = document.createElement('div');
        pr.className = 'container_item-list-price';
        n.appendChild(pr);

        var cost = document.createElement('p');
        cost.innerHTML = imgCollect[i].price;
        pr.appendChild(cost);
    }
}


button.addEventListener('click', function() {
    z += 8;
    y += 8;


    if (y >= imgCollect.length) {
        button.style.display = 'none';
    }

    let test = document.getElementsByClassName('container_item-grid');
    test.length > 0 ? cellClick() : listClick();
    
})

list.addEventListener('click', function() {
    
        container.innerHTML = '';
    z = 0;
    y = 8;
    button.style.display = 'block';
    listClick();

    for (let i = 0; i < a.length; i++) {
        a[i].classList.add('container_item-list'); 
        a[i].classList.remove('container_item-grid'); 
        imgCont[i].classList.add('container_item-list-img');
        img[i].classList.add('img-list'); 
        description[i].classList.add('container_item-list-description'); 
        price[i].classList.add('container_item-list-price'); 
    }

})

$(document).on('click', '#btn', function(){
    var formData = new FormData();
    formData.append("myFile", document.getElementById("file").files[0], 'chris1.jpg');
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "index.php");
    xhr.send(formData);
});


////////////////
$("form#data").submit(function(event){ 
    event.preventDefault();
   
    // складируем форму в ......форму))
    var formData = new FormData($(this)[0]);
   
    $.ajax({
      url: 'mySuperPuperURL.php',
      type: 'POST',
      data: formData,
      async: false,
      cache: false,
      contentType: false,
      processData: false,
      success: function (returndata) {
        alert(returndata);
      }
    });
   
    return false;
  });

  

    










