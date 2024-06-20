function openNav() {
    document.getElementById("mySidebar").style.width = "500px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}


function toggleDropdown() {
    var dropdown = document.getElementById("dropdownContent");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }

// function toggleMenu1() {
//     debugger
    
//         $('#dropdownMenuww').toggle();
//     ;
// }