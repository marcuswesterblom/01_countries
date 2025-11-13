import { createHtml } from "./utils/createHtmlUtils";
import type { Country } from "./models/Countries";
import './style.css'

fetch("https://restcountries.com/v3.1/all?fields=name,flags")
.then((response) => response.json())
.then((data: Country[]) => {
  createHtml(data);
});
