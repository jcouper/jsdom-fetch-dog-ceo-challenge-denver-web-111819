console.log('%c woohoo', 'color: firebrick')


fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
        .then(response => displayDogs(response.message))





function displayDogs(array){
    for (const element of array){
      let img = document.createElement('img')
         img.src = element
        document.body.append(img)
        }
         }



fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
         .then(response => listDogs(response.message))
         .then(filterFunction)



      function listDogs(hash){
        for (const key in hash) {
            let li = document.createElement('li')
            li.innerText = key 
            document.getElementById('dog-breeds').append(li)
          }
          let uList = document.getElementById("dog-breeds");

      
          let listItems = uList.getElementsByTagName("li");
  
        for(li of  listItems){
          li.addEventListener('click', function(){
            if(this.classList.contains('active')){
              this.classList.remove("active");
            } else {
              this.classList.add("active");
            }
          })
    }}


    function filterFunction() {

        document.getElementById('breed-dropdown').addEventListener('change', function(){
        // Declare variables
        var input, filter, aList, liList, a, i, txtValue;
        input = document.getElementById('breed-dropdown').value
        aList = document.getElementById("dog-breeds");
        liList= aList.getElementsByTagName('li');
      
        // Loop through all list items, and hide those who don't match the search query

        for (li of liList)
        if (li.textContent[0] == input){
            li.style.display = ""
        } else {
            li.style.display = "none"
        }
      })
    }