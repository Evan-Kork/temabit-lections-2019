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

// requests: {
//     branches: {
//         name: "Інформація про відділення",
//         requests: {
//             all: "/branches",
//             number: "/branches/{number}",
//             city: "/branches?{param}"
//         }
//     },
//     branch_types: {
//         name: "Інформація про типи відділень",
//         requests: {
//             all: "/branch_types"
//         }
//     },
//     branch_locator: {
//         name: "Пошук найближчого відділення",
//         requests: {
//             address: "/branches_locator/{param}"
//         }
//     },
//     tracking: {
//         name: "Відслідковування відправлення",
//         requests: {
//             order: "/tracking/{param}"
//         }
//     },
//     tracking_history: {
//         name: "Історія руху відправлення",
//         requests: {
//             order: "/tracking_history/{param}"
//         }
//     },
//     localities: {
//         name: "Інформація про населені пункти",
//         requests: {
//             all: "/localities",
//             active: "/localities/activity"
//         }
//     },
//     services: {
//         name: "Інформація про доступні сервіси",
//         requests: {
//             all: "/services"
//         }
//     }
// }
