const countrySelect = document.getElementById("countrySelect");

fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(countries => {
    // Sort countries alphabetically by name
    countries.sort((a, b) => {
      const nameA = a.name.common.toUpperCase();
      const nameB = b.name.common.toUpperCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

    countries.forEach(country => {
      const option = document.createElement("option");
      option.value = country.name.common;
      option.textContent = country.name.common;
      countrySelect.appendChild(option);
    });
  })
  .catch(error => console.error("Error fetching countries:", error));
