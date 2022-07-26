

		const options = {
			method: 'GET',
			headers: {
			  'X-RapidAPI-Key': 'b7e21a7304msh9cbad96d4b859b2p17967cjsnaab2590c43b9',
			  'X-RapidAPI-Host': 'house-plants.p.rapidapi.com'
			}
		  };
		  
		  fetch('https://house-plants.p.rapidapi.com/all', options)
			.then(response => response.json())
			.then(response => {
			  console.log(response)
			  
			
			  const res = response;
			 
			  
			  const allData = res.map((showAll)=>{
				const commonIndex = showAll.common;

				if (commonIndex[0] === 'Chinese Evergreen'){
					return commonIndex[1]
				}else if(commonIndex[0]===commonIndex[0]){
					return commonIndex[0]
				}else{
					return commonIndex[0]
				}
			   
			  })

			  const familyName = res.map((showAll)=>{
				return showAll.family;

			  })

			  const latName = res.map((showAll)=>{
				return showAll.latin;

			  })

			  const category = res.map((showAll)=>{
				return  showAll.category;
				

			  })

		
			  
			

			  for (let i=0; (i<allData.length) && (i<familyName.length) && (i<latName.length) && (i<category.length);i++){
				// console.log(allData[i])
				

				const dataAll = allData[i];
				// const familyAll = familyName[i];
				// const latNames = latName[i];
				const categories = category[i];
				const newMainContainer = document.querySelector('.main-container');
        
				const subContainer = document.createElement('div');
				subContainer.classList.add('subContainer');

				// console.log(dataAll);
				// console.log(categories);

				// ***************this is for category display ********************************
				const arrayCategory = {name:dataAll, category:categories};
			
				if (arrayCategory.category === 'Topiairy'){
					const topiairyCategory = arrayCategory;

				const newParagraph = document.createElement('p');
				newParagraph.classList.add('commonName')
				newParagraph.innerHTML = ( dataAll );
				subContainer.append(newParagraph);
				newMainContainer.append(subContainer);

				const iconP = document.createElement('p');
				iconP.classList.add('iconP')
				iconP.innerHTML = '<i class="bi bi-cart-plus fa-2x"></i>';
				subContainer.append(iconP);
				
				const newDiv = document.createElement('div');
				newDiv.classList.add('priceAndFavoriteDiv');
				const price = document.createElement('p');
				price.classList.add('price');
				price.innerHTML = ('Php ' + '' + getRandomInt(100, 300) + '.00');
				newDiv.append(price);
				
				const iconHeart = document.createElement('p');
				iconHeart.classList.add('iconHeart')
				iconHeart.innerHTML = '<i class="bi bi-heart fa-2x"></i>';
				newDiv.append(iconHeart);

				const cardPlant = document.createElement('div');
				cardPlant.classList.add('card');

				const newImg = document.createElement('img');
				newImg.classList.add('card-img-top');
				newImg.setAttribute('id', 'imageCard');
				
				newImg.src = `/image/${topiairyCategory.name}.webp` 

				const fig = document.createElement('figure');
				fig.append(newImg);
		

				cardPlant.append(fig);
				cardPlant.append(subContainer);
				cardPlant.append(newDiv);
				newMainContainer.append(cardPlant);
				console.log(topiairyCategory);
                

				
				
                }

			  }
			})
			.catch(err => console.error(err));


			function getRandomInt(min, max) {
				min = Math.ceil(min);
				max = Math.floor(max);
				return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
			  }


              //  ******************** BACK TO TOP ARROW ********************************

			  let mybutton = document.querySelector("#myBtn");
			  let navbar = document.querySelector('.navbar')
		
			  
			  // When the user scrolls down 20px from the top of the document, show the button
			  window.onscroll = function() {scrollFunction()};
			  
			  function scrollFunction() {
				if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				  mybutton.style.display = "block";
					navbar.style.backgroundColor = "white";
					// navbar.style.color = "white";
				} else {
				  mybutton.style.display = "none";
				//   navbar.style.backgroundColor = "transparent";
				}
			  }
			  
			  // When the user clicks on the button, scroll to the top of the document
			  function topFunction() {
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
				
			  }

	//  ******************** BACK TO TOP ARROW ********************************
			  
		

