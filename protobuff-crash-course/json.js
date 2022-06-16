const fs = require("fs");
const employees = [];

let i = 0;

while (i < 10) {
	employees.push({
		name: "dylan",
		salary: 1000,
		id: 1
	});
	i++;
}

fs.writeFileSync("jsondata.json", JSON.stringify(employees));
