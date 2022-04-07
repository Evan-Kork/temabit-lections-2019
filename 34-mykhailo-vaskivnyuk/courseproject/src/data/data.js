const data = {

	menu: {
		list: [
			{	id: 1,
				link: "",
				text: "Головна"},
			{	id: 2,
				link: "branches",
				text: "Список відділень"},
			{	id: 3,
				link: "branches/locality",
				text: "Список відділень по місту"},
			{	id: 4,
				link: "branch",
				text: "Інформація про відділення"},	
			{	id: 5,
				link: "tracking",
				text: "Інформація про відправлення"},							           
			{	id: 6,
				link: "news",
				text: "Новини"}],
		selected: null
	},

	test: "test field",

	responses: {
		branches: {
			data: null,
			error: null
		},
		localities: {
			data: null,
			error: null
		}
	}
}

export default data;
