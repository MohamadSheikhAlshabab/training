var container = document.getElementById('head');

var head1 = document.createElement('header');
container.appendChild(head1);

var div1 = document.createElement('div');
head1.appendChild(div1);
div1.setAttribute('id', 'div1');

var logo = document.createElement('img');
div1.appendChild(logo);
logo.setAttribute('id', 'logo');
logo.setAttribute('src', 'browser.png');
logo.setAttribute('width', '70px');
logo.setAttribute('height', '70px');
logo.setAttribute('margin', '25px');
logo.setAttribute('color', 'white');

var logoText = document.createElement('p');
div1.appendChild(logoText);
logoText.textContent = "CodeFellows";
logoText.setAttribute('id', 'logoText');

var list1 = document.createElement('i');
list1.setAttribute('class', 'fa fa-list');
list1.setAttribute('aria-hidden', 'true');
list1.setAttribute('MouseEvent', "true");
// list1.setAttribute('::after',"function ulLi()");
div1.appendChild(list1);



// if (MouseEvent){
//     function ulLi(){
//     var ul1=document.createElement('ul');
//     list1.appendChild(ul1);
//     var li1=document.createElement('li');
//     ul1.appendChild(li1);
//     li1.textContent='Home';
//     var li2=document.createElement('li');
//     ul1.appendChild(li2);
//     li2.textContent='Contact Us';
//     var li3=document.createElement('li');
//     ul1.appendChild(li3);
//     li3.textContent='About Us';
//     }
// }




var container1 = document.getElementById('formMain');
var form1 = document.createElement('form');
container1.appendChild(form1);
var lbl1 = document.createElement('label');
form1.appendChild(lbl1);
lbl1.setAttribute('for', 'inp1');
lbl1.setAttribute('id', 'inp1');
lbl1.textContent = 'Enter Your Name :'

var inp1 = document.createElement('input');
form1.appendChild(inp1);
inp1.setAttribute('id', 'inp1');
inp1.setAttribute('placeholder', 'John');
inp1.setAttribute('value', 'John');

var br1 = document.createElement('br');
form1.appendChild(br1);

// var inp2=document.createElement('input');
// form1.appendChild(inp2);
// inp2.setAttribute('type','submit');
// inp2.setAttribute('id','inp2');
// inp2.setAttribute('value','submit');



var lbl2 = document.createElement('label');
form1.appendChild(lbl2);
lbl2.setAttribute('for', 'inp2');
lbl2.setAttribute('id', 'inp2');
lbl2.textContent = 'Enter Your Age :'

var inp2 = document.createElement('input');
form1.appendChild(inp2);
inp2.setAttribute('id', 'inp2');
inp2.setAttribute('placeholder', '18');
inp2.setAttribute('value', '25');

var br1 = document.createElement('br');
form1.appendChild(br1);

var inp3 = document.createElement('input');
form1.appendChild(inp3);
inp3.setAttribute('type', 'submit');
inp3.setAttribute('id', 'inp3');
inp3.setAttribute('value', 'submit');


function nextEdge(side1, side2) {
    var sum = (side1 + side2) - 1;
    return sum;
}
nextEdge(8, 10);
nextEdge(5, 7);
nextEdge(9, 2);


for (i = 0; i < 10; i++) {
    if (i == 5) {

        continue
        ;
    }
    
    document.write(i);
    document.write("<br>");
    document.write("<br>"); 
}

function getLastItem(arr) {
    for (i = 0; i < arr.length; i++) {
        var p = arr.length-1;
        document.write(arr[p]);
        document.write("<br>");
        document.write("<br>"); 
        return p;
    }
}

getLastItem(['Cat', 'Dog', 'Duck']);
getLastItem([1, 2, 3]);
getLastItem([undefined])
getLastItem([true, false, false, true]);
getLastItem([7, 'String', false, undefined, null]);
getLastItem([false]);
getLastItem([undefined, undefined, undefined]);
getLastItem([1, 2, 3, 56, 87, 23, 65, 45]);
getLastItem(['Apple', 'Orange', undefined]);
getLastItem([true, false, 'Apple']);
getLastItem([null, null, null]);
getLastItem([1]);

var fruits = ["Banana", "Orange", "Apple"];
fruits.push("Kiwi");
document.write(fruits);
document.write("<br>");
document.write("<br>"); 


var fruits1 = ["Banana", "Orange", "Apple", "Kiwi"];
fruits1.splice(0, 1);
document.write(fruits1);
document.write("<br>");
document.write("<br>"); 


var arr=[1,2,3,4,5];
var item=3;
// console.log("fsd");
// function search(arr, item) {
// 	for (var i=0;i<arr.length;i++){
//      console.log("i",i);
// 		if(arr[i]== item){
//       console.log("i=",i);
//       console.log("arr",arr[i]);
//       console.log("item",item);
//     //   console.log(i);
// 		}else{
// 			console.log(-1);
// 		}
// 	}
// }
search([1,2,3,4,5],3);
// search([1,2],5);



// var z=-1;

// function search(arr, item) {
// 	for (var i=0;i<arr.length;i++){
//      console.log("i",i);
// 		//if(arr[i]== item){
// 			console.log("i1",i);
// // return i;
		
// 	//	}else{
// 			console.log("i2",i);
// 			// return z;
// 		//}
// 	}
// }


// var z=-1;
// // console.log(z);
// function search(arr, item) {
// 	for (var i=0;i<arr.length;i++){
//     //  console.log("i",item);
// 		if(arr[i]==item){
// console.log(item);

// 		// return i;
// 		}else{
// 			console.log(z);
// 			// return z;
// 		}
// 	}
// }


// var z=-1;

function search(arr, item) {
	for (var i=0;i<arr.length;i++){
        console.log(arr.indexOf(item));
		if(arr.indexOf(item)){
console.log(i);
		// return i;
		}else{
            console.log("-1");
					// return z;
		}
	}
}


// search(arr, item);