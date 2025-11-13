import type { Country } from "../models/Countries";

export const createHtml = (countries: Country[]) => {
    const app = document.getElementById("app");

    countries.forEach((country) => {
        const countryContainer = document.createElement("div");
        const imgContainer = document.createElement("div");
        const img = document.createElement("img");
        const countryName = document.createElement("h2");
        const countryNameOfficial = document.createElement("h3");
        const noInfo = document.createElement("div");
        const noInfoText = document.createElement("p");

        const infoFlag = document.createElement("p");
        infoFlag.className = "infoFlag";
        infoFlag.innerHTML = country.flags.alt ?? country.name.common;
        countryContainer.appendChild(infoFlag);

        countryContainer.className = "countryContainer";
        imgContainer.className = "imgContainer";
        countryName.className = "countryName";
        countryNameOfficial.className = "countryNameOfficial";
        noInfo.className = "noInfo";

        img.src = country.flags.svg;
        img.alt = country.flags.alt ?? country.name.common;
        countryName.innerHTML = country.name.common;
        countryNameOfficial.innerHTML = country.name.official;
        noInfoText.textContent = `No information available about the flag of ${countryName.innerHTML}`;

        countryContainer.appendChild(imgContainer);
        imgContainer.appendChild(img);
        countryContainer.appendChild(countryName);
        countryContainer.appendChild(countryNameOfficial);
        app?.appendChild(countryContainer);
        noInfo.appendChild(noInfoText);
        countryContainer.appendChild(noInfo);

        countryContainer.addEventListener("click", () => {

            infoFlag.classList.toggle("show");

            if (img.alt === "") {
            noInfo.classList.toggle("show");
            }
        
        });
    });
}