

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

			//   console.log(res.tempmax);
			 
			  
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

			 
			  const origin = res.map((showAll)=>{
				return showAll.origin;
			  })

			  

			  const ideallight = res.map((showAll)=>{
				return showAll.ideallight;
			  })

			 
		
			  const watering = res.map((showAll)=>{
				return showAll.watering;
			  })

			  const toleratedLight = res.map((showAll)=>{
				return showAll.toleratedlight;
			  })
		
			//   console.log(toleratedLight);

			  const familyName = res.map((showAll)=>{
				return showAll.family;

			  })

			  const latName = res.map((showAll)=>{
				return showAll.latin;

			  })

			  const category = res.map((showAll)=>{
				return  showAll.category;
				

			  })


		

			//   console.log(category);
			//   const set1 = new Set(category)
			//   const set2 = [...set1];
			//   console.log(set2);
			  
			

			  for (let i=0; (i<allData.length) && (i<familyName.length) && (i<latName.length) && (i<category.length) && (i<watering.length)&& (i<origin.length)&& (i<ideallight.length)&& (i<toleratedLight.length);i++){
				// console.log(allData[i])
				

				const dataAll = allData[i];
				
				const familyAll = familyName[i];
				const latNames = latName[i];
				const categories = category[i];
				const water = watering[i];
				const ideallights = ideallight[i];
				const origins = origin[i];
				const toleratedLights = toleratedLight[i];
				// const body = document.querySelector('body');
				const newMainContainer = document.querySelector('.main-container');
				const subContainer = document.createElement('div');
				subContainer.classList.add('subContainer');

				// console.log(dataAll);
				// console.log(categories);


				const newParagraph = document.createElement('p');
				newParagraph.classList.add('commonName')
				newParagraph.innerHTML = ( dataAll );
				subContainer.append(newParagraph);
				newMainContainer.append(subContainer);

				// document.addEventListener("click", function(){
					
				//   });

				
				
				let iconP = document.createElement('p');
				iconP.classList.add('iconP')
				iconP.innerHTML = '<i class="bi bi-cart-plus fa-2x"></i>';
				iconP.setAttribute('type', 'button')
				// iconP.setAttribute('data-bs-target', '#cartModalConfirm')
				subContainer.append(iconP);

				
				
				const newDiv = document.createElement('div');
				newDiv.classList.add('priceAndFavoriteDiv');
				const price = document.createElement('p');
				price.classList.add('price');
				let val = getRandomInt(100, 300);
				
<<<<<<< HEAD
				price.innerHTML = val;
=======
				price.innerHTML = ('Php' + val);
>>>>>>> ac42f70c772a9a83c631bc25d0a049fa514c55c2

				price.setAttribute('value', val)
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
				newImg.setAttribute('data-bs-toggle', 'modal');
				newImg.setAttribute('data-bs-target', '#exampleModal');
				newImg.src = `./image/${dataAll}.webp`

<<<<<<< HEAD
				// const anchor = document.createElement('a');
				// anchor.setAttribute('href', newImg.src)

				// anchor.append(newImg);

		
				
=======
>>>>>>> ac42f70c772a9a83c631bc25d0a049fa514c55c2

				const fig = document.createElement('figure');
				fig.append(newImg);

				// console.log(newImg)



				cardPlant.append(fig);
				cardPlant.append(subContainer);
				cardPlant.append(newDiv);
				newMainContainer.append(cardPlant);


				
			

				newImg.addEventListener('click', e =>{
					
					// console.log( e.target.src);
					const modal = document.querySelector('.modal-body');
					// modal({backdrop: 'static', keyboard: false})
					let wrap = document.createElement('div');
					wrap.classList.add('wrap');
					const detailsDiv = document.createElement('div');
					detailsDiv.classList.add('detailsDiv');

					iconP.innerHTML = ' ';
					wrap.append(cardPlant)

					const categoryParagraph = document.createElement('p');
					categoryParagraph.innerHTML = ('Category Name : ' + '' + categories);
					// categoryParagraph.append(categories);
					
					const familyParagraph = document.createElement('p');
					familyParagraph.innerHTML = ('Family Name : '+ '' + familyAll);
				

					const latinParagraph = document.createElement('p');
					latinParagraph.innerHTML = ('Latin Name : ' + '' + latNames);

					const waterParagraph = document.createElement('p');
					waterParagraph.innerHTML = ('Watering : ' + '' + water);

					const originParagraph = document.createElement('p');
					originParagraph.innerHTML = ('Origin : ' + '' + origins);

					const ideallightParagraph = document.createElement('p');
					ideallightParagraph.innerHTML = ('Ideal Light : ' + '' + ideallights);

					const toleratedLightParagraph = document.createElement('p');
					toleratedLightParagraph.innerHTML = ('Tolerated Light : ' + '' + toleratedLights);

					const buyThisPlantButton = document.createElement('p');
					buyThisPlantButton.classList.add('buyThisPlantButton');
					buyThisPlantButton.setAttribute('type', 'button')
					buyThisPlantButton.setAttribute('data-bs-toggle', 'modal');
					buyThisPlantButton.setAttribute('data-bs-target', '#cartModal');
					
					
					buyThisPlantButton.innerHTML = 'Buy this Plant';

				
					detailsDiv.append(categoryParagraph);
					detailsDiv.append(familyParagraph);
					detailsDiv.append(latinParagraph);
					detailsDiv.append(waterParagraph);
					detailsDiv.append(originParagraph);
					detailsDiv.append(ideallightParagraph);
					detailsDiv.append(toleratedLightParagraph);
			
					detailsDiv.append(buyThisPlantButton);

					

					 wrap.append(detailsDiv);
					//  console.log(wrap)

					

					//  let clonedwrap = wrap.cloneNode(true);
					// clonedwrap.classList= 'clone'

					
					// cloneDiv.append(clonedwrap);
					// console.log(clonedwrap)

					modal.append(wrap);

			
				
					buyThisPlantButton.addEventListener('click', () =>{
						
						addToCart()
						// console.log(clone)
					})
				
				
<<<<<<< HEAD
				})
=======
				}) 
>>>>>>> ac42f70c772a9a83c631bc25d0a049fa514c55c2

				const modalClose = document.querySelector('.btn-secondary');
				modalClose.addEventListener('click', ()=>{

			
					window.location = window.location
					
				})

				iconHeart.addEventListener('click', ()=>{

					if (iconHeart.innerHTML === '<i class="bi bi-heart fa-2x"></i>'){
						iconHeart.innerHTML = '<i class="bi bi-heart-fill fa-2x"></i>'
						iconHeart.style.color = 'green';
					}else{
						(iconHeart.innerHTML = '<i class="bi bi-heart fa-2x"></i>')
						iconHeart.style.color = 'black';
					}
					
					
		
					// function myFunction(iconHeart) {
					// 	iconHeart.classList.toggle("bi bi-heart-fill fa-2x");
					//   }
		
					})
				// -----

			
					
			// ----------------ADD TO CART FUNCTION--------------------------------------
<<<<<<< HEAD
		// dito natapos
			
			iconP.addEventListener('click', (e) =>{
				
				addToCart()
				getTotal()
			
			
			

				
=======
			let arr = []
			iconP.addEventListener('click', (event) =>{
				
				addToCart()
				// getTotal()

				const cartPlantPrice = document.querySelector('.cartPlantPrice');
			
				let thirdchild = document.querySelector('.subCardDiv').children[2].value ;
				const subTotal = document.querySelector('#subTotalPrice')
				
				// arr.push(thirdchild)
				// +
				
				// for (let i = 0; i < cartPlantPrice.length; i++) {
				// 	subTotal.value =  parseInt(subTotal.value) + parseInt(cartPlantPrice.value)
					
				//   }

				// console.log(thirdchild)
>>>>>>> ac42f70c772a9a83c631bc25d0a049fa514c55c2
			
				// cartPlantPrice.clone()
				// subTotal.value = 900

				// total.value = parseInt(subTotal.value) + parseInt(cartPlantPrice.value) + parseInt(shippingFee.value);

<<<<<<< HEAD
				// subTotal.value = parseInt(plantPrice) + parseInt(plantPrice);
			
				iconP.style.color = "red";

=======
				subTotal.value = parseInt(cartPlantPrice) + parseInt(cartPlantPrice);
			
				iconP.style.color = "red";

			}, false)

			iconP.addEventListener('change', ()=>{
				const cartPlantPrice = document.querySelector('.cartPlantPrice');
				const subTotal = document.querySelector('#subTotalPrice');
				console.log(parseInt(cartPlantPrice.value) + parseInt(cartPlantPrice.value ))

>>>>>>> ac42f70c772a9a83c631bc25d0a049fa514c55c2
			})



			function addToCart(){
				const plantItems = document.querySelector('.plant-item-details');

				const subCardDiv = document.createElement('div');
				subCardDiv.classList.add('subCardDiv')

			
				const cartImage = document.createElement('img');

				cartImage.classList.add('cartImage');
				cartImage.src = newImg.src;
				cartImage.setAttribute('width', '20%')

				const cartPlantName = document.createElement('p');
				cartPlantName.classList.add('cartPlantName');
				cartPlantName.append(allData[i]);
		
<<<<<<< HEAD
				let cartPlantPrice = document.createElement('input');
=======
				let cartPlantPrice = document.createElement('p');
>>>>>>> ac42f70c772a9a83c631bc25d0a049fa514c55c2
				cartPlantPrice.classList.add('cartPlantPrice');
			
				cartPlantPrice.setAttribute('value', `${price.innerHTML}` )

<<<<<<< HEAD
				// cartPlantPrice.value = (price.innerHTML).value;
=======
				cartPlantPrice.innerHTML = `${price.innerHTML}`
>>>>>>> ac42f70c772a9a83c631bc25d0a049fa514c55c2

				
		

				const iconDelete = document.createElement('p');
				iconDelete.classList.add('iconDelete')
				iconDelete.innerHTML = '<i class="bi bi-trash"></i>';
				

				subCardDiv.append(cartImage);
				subCardDiv.append(cartPlantName);
				subCardDiv.append(cartPlantPrice);
				subCardDiv.append(iconDelete);
				plantItems.append(subCardDiv);
				
				
				iconDelete.addEventListener('click', ()=>{
					subCardDiv.remove(cartImage);
					subCardDiv.remove(cartPlantName);
					subCardDiv.remove(cartPlantPrice);
					subCardDiv.remove(iconDelete);
				})

			
			}
			

			  }

			})
			.catch(err => console.error(err));


			
<<<<<<< HEAD
			function getTotal(){
				
				arr = []
				
				let cartPlantPrice = document.querySelector('.cartPlantPrice')
				
				arr.push(cartPlantPrice.value)
				console.log(arr)
			

				}
=======
			// function getTotal(){
				
			// 	// arr = []
				
			

			// 	let thirdchild = document.querySelector('.subCardDiv').children[2].value ;
				
			// 	// arr.push(thirdchild)
			// 	console.log(thirdchild  + event.target.textContent)
			

			// 	}
>>>>>>> ac42f70c772a9a83c631bc25d0a049fa514c55c2

			
		
			function getRandomInt(min, max) {
				min = Math.ceil(min);
				max = Math.floor(max);
				return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
			  }
			  
			//   console.log(getRandomInt(100, 300))


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
