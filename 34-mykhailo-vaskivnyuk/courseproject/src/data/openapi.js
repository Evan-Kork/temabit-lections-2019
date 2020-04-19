const methods = {
	branches: {
		name: "Інформація про відділення",
		request: "/branches"
	},
	branch_types: {
		name: "Інформація про типи відділень",
		request: "/branch_types"
	},
	branch_locator: {
		name: "Пошук найближчого відділення",
		request: "/branches_locator"
	},
	tracking: {
		name: "Відслідковування відправлення",
		request: "/tracking"
	},
	tracking_history: {
		name: "Історія руху відправлення",
		request: "/tracking_history"
	},
	localities: {
		name: "Інформація про населені пункти",
		request: "/localities"
	},
	services: {
		name: "Інформація про доступні сервіси",
		request: "/services"
	}
}

export default methods;
