

//navbar
let navElement=document.createElement("nav");
console.log(navElement);
document.body.appendChild(navElement);
document.querySelector("nav").innerHTML="<img src='images/logo.png'><ul><li><a href='#'>Home</a></li><li><a href='#'>Services</a></li> <li><a href='#'>About</a></li><li><a href='#'>Contact</a></li></ul>";
document.querySelector("nav").classList.add("zero");


// Search Bar 
{/* <form class='form-inline my-2 my-lg-0'>
<input class='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search'>
<button class='btn btn-outline-success my-2 my-sm-0' type='submit'>Search</button>
</form> */}


// //header
let headerElement=document.createElement("header");
document.body.append(headerElement);
document.querySelector("header").innerHTML="<div class='container'><div class='row'><div class='col-md-6 headleft'><h2>Welcome Back</h2> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus blanditiis ipsum id consequatur labore dignissimos cum, mollitia, possimus beatae ut suscipit neque nulla?</p><button type='button'>Click me</button></div><div class='col-md-6 headright'><img src='images/logo.png'></div></div></div>";



//Sections
let sectionElement=document.createElement("sections");
document.body.append(sectionElement);
document.querySelector("sections").innerHTML="<div class='container'><div class='row'><div class='col-md-3 s1'><h3><img src='images/r1.png'></h3></div><div class='col-md-3 s2'><h3><img src='images/r2.png'></h3></div><div class='col-md-3 s3'><h3><img src='images/r3.png'></h3></div><div class='col-md-3 s4'><h3><img src='images/r4.png'></h3></div></div></div>";





//footer
let footerElement=document.createElement("myfooter");
document.body.append(footerElement);
document.querySelector("myfooter").innerHTML="<!-- Footer --><footer class='page-footer font-small blue pt-4'><!-- Footer Links --><div class='container-fluid text-center text-md-left'><!-- Grid row --><div class='row'><!-- Grid column --><div class='col-md-6 mt-md-0 mt-3'><!-- Content --><h5 class='text-uppercase'>Footer Content</h5><p>Here you can use rows and columns to organize your footer content.</p></div><!-- Grid column --><hr class='clearfix w-100 d-md-none pb-3'><!-- Grid column --><div class='col-md-3 mb-md-0 mb-3'><!-- Links --><h5 class='text-uppercase'>Links</h5><ul class='list-unstyled'><li><a href='#!'>Link 1</a></li><li><a href='#!'>Link 2</a></li><li><a href='#!'>Link 3</a></li><li><a href='#!'>Link 4</a></li></ul></div><!-- Grid column --><!-- Grid column --><div class='col-md-3 mb-md-0 mb-3'><!-- Links --><h5 class='text-uppercase'>Links</h5><ul class='list-unstyled'><li><a href='#!'>Link 1</a></li><li><a href='#!'>Link 2</a></li><li><a href='#!'>Link 3</a></li><li><a href='#!'>Link 4</a></li></ul></div><!-- Grid column --></div><!-- Grid row --></div><!-- Footer Links --><!-- Copyright --><div class='footer-copyright text-center py-3'>© 2021 Copyright:<a href='#'>Mujtaba Shafique</a></div><!-- Copyright --></footer><!-- Footer -->";