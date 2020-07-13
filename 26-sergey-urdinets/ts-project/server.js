const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get("/:firstParam/:secondParam", (req, res) => {
				fetch(`https://${req.params["firstParam"]}/${encodeURI(req.params["secondParam"])}?locality=${encodeURI(req.query.locality)}`)
					.then(response => response.json())
					.then(result => res.json(result))
					.catch((e)=>console.log(e));
});

app.get("/:firstParam/:secondParam/:thirdParam", (req, res) => {
				fetch(`https://${req.params["firstParam"]}/${encodeURI(req.params["secondParam"])}/${encodeURI(req.params["thirdParam"])}`)
					.then(response => response.json())
					.then(result => res.json(result))
					.catch((e)=>console.log(e));
});

app.listen(3000);