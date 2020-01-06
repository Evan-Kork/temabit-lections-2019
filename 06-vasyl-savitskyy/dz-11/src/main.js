import "bootstrap-css-only/css/bootstrap.min.css";
import "./scss/main.scss";
import Slice from "./js/class/Slice";
import Splice from "./js/class/Splice";
import Concat from "./js/class/Concat";
import App from "./js/App";
import { carouselCustom } from "./js/utils";
import { data } from "./api/data";

try {
    // throw "error";
    const root = document.getElementById("root");
    root.classList.add("container");
    root.addEventListener("click", (e) => carouselCustom(e));
    const row = document.createElement("row");
    row.classList.add("row");
    const MOUNT_NODE = document.createElement("col");
    MOUNT_NODE.classList.add("col", "col-md-6");
    row.appendChild(MOUNT_NODE);
    root.appendChild(row);

    const { params } = data;
    const app = new App(MOUNT_NODE, [
        new Slice(params[0].initParam, ...params[0].parameters),
        new Splice(params[1].initParam, ...params[1].parameters),
        new Concat(params[2].initParam, ...params[2].parameters),
    ]);
    app.render();

} catch (error) {
    document.body.innerHTML = `
        <h4 class="w-100 mt-5 text-center text-danger">Щось пішло не так =( !!!</h4>
        <h1 class="w-100 text-center">404</h1>
    `
}


