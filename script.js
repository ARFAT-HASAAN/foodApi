const Meals = () => {
  document.getElementById("spinner").style.display = "block";
  const container = document.getElementById("Contaienr");
  container.textContent = "";
  const item = document.getElementById("SearchFiled").value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => ShowMeals(data.meals));

  document.getElementById("SearchFiled").value = "";
};

const ShowMeals = (data) => {
  const container = document.getElementById("Contaienr");
  if (Array.isArray(data)) {
    document.getElementById("spinner").style.display = "none";

    document.getElementById("else").style.display = "none";

    data.forEach((meal) => {
      const div = document.createElement("div");
      div.classList.add("col-4");

      div.innerHTML = `
     
     <img width="100%" src="${meal.strMealThumb}" alt="food">
     <h2>${meal.strMeal} </h2>
     <p>${meal.strInstructions.slice(0, 200)} </p>
     <button onclick="seeDetails(${meal.idMeal})" >Details</button> 
     
    `;
      container.appendChild(div);
    });
  } else {
    document.getElementById("else").style.display = "block";
  }
};

const seeDetails = (details) => {
  const id = Number(details);
  const url = `www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
};
