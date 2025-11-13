import type { Country } from "../models/Countries";

export const createHtml = (countries: Country[]) => {
    const app = document.getElementById("app");

    countries.forEach((country) => {
        const countryContainer = document.createElement("div");
        const imgContainer = document.createElement("div");
        const img = document.createElement("img");
        const countryName = document.createElement("h2");
        const countryNameOfficial = document.createElement("h3");

        countryContainer.className = "countryContainer";
        imgContainer.className = "imgContainer";
        countryName.className = "countryName";
        countryNameOfficial.className = "countryNameOfficial";

        img.src = country.flags.svg;
        img.alt = country.flags.alt ?? country.name.common;
        countryName.innerHTML = country.name.common;
        countryNameOfficial.innerHTML = country.name.official;

        countryContainer.appendChild(imgContainer);
        imgContainer.appendChild(img);
        countryContainer.appendChild(countryName);
        countryContainer.appendChild(countryNameOfficial);
        app?.appendChild(countryContainer);

        countryContainer.addEventListener("click", () => {
            const existingInfo = countryContainer.querySelector(".infoFlag");
            const existingNoInfo = countryContainer.querySelector(".noInfo");
            if(existingInfo) {
                existingInfo.remove();

            } else {
                const infoFlag = document.createElement("p");
                infoFlag.className = "infoFlag";
                infoFlag.innerHTML = country.flags.alt ?? country.name.common;
                countryContainer.appendChild(infoFlag);
            }
            if(existingNoInfo) {
                existingNoInfo.remove();

            } else {
            if(img.alt === "") {
            const noInfo = document.createElement("div");
            const noInfoText = document.createElement("p");

            noInfo.className = "noInfo";

            noInfoText.textContent = `No information available about the flag of ${countryName.innerHTML}`;

            noInfo.appendChild(noInfoText);
            countryContainer.appendChild(noInfo);
            }
        }
        });
    });

}