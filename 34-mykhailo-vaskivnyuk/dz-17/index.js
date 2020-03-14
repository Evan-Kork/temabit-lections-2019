const fs = require("fs");
const path = require("path");
const { ScanDir1, ScanDir2, ScanDir3 } = require("./ScanDir");

const dir_name_from = "src_2";
const dir_name_to = "src_1";

//---------------------------------------------------------------------

const scan_dir_1 = new ScanDir1();
scan_dir_1.on("fileOpen", copyFile1);
console.log("ВАРІАНТ 1 >> ");
scan_dir_1.scan(dir_name_from);

const scan_dir_2 = new ScanDir2();
scan_dir_2.on("fileOpen", copyFile2);
setTimeout( () => {
	console.log("\nВАРІАНТ 2 >> ");
	scan_dir_2.scan(dir_name_from);
	}, 2000
);

const scan_dir_3 = new ScanDir3();
scan_dir_3.on("fileOpen", copyFile3);
setTimeout( () => {
	console.log("\nВАРІАНТ 3 >> ");
	scan_dir_3.scan(dir_name_from);
	}, 4000
);

//---------------------------------------------------------------------

function copyFile1(file_handler_from, file_path) {

	const rel_file_path = path.relative(dir_name_from, file_path);
	const rel_path = path.dirname(rel_file_path);
	const path_to_file = path.join(dir_name_to, rel_path);
	fs.mkdirSync(path_to_file, { recursive: true });
	file_path = path.join(dir_name_to, rel_file_path);

	let file_handler_to;
	
	fs.promises.open(file_path, "w")
	.then( file_handler => {
		console.log("Open file for write: " + file_path);
		file_handler_to = file_handler;
		return file_handler_from.readFile();
	})
	.then( file_data => {
		console.log("Read from file: " + file_path);
		file_handler_to.writeFile(file_data);
	})
	.then( () => {
		console.log("Write to file: " + file_path);
	})
	.catch( err => {
		console.log(err);
		fs.closeSync(file_handler_from.fd);
		fs.closeSync(file_handler_to.fd);
	});
}

//---------------------------------------------------------------------

function copyFile2(file_path_from) {

	const rel_file_path = path.relative(dir_name_from, file_path_from);
	const rel_path = path.dirname(rel_file_path);
	const path_to_file = path.join(dir_name_to, rel_path);
	fs.mkdirSync(path_to_file, { recursive: true });
	file_path_to = path.join(dir_name_to, rel_file_path);

	fs.promises.copyFile(file_path_from, file_path_to)
	.then( () => {
		console.log("File is copied: " + file_path_from);
	})
	.catch( err => {
		console.log(err);
	});
}

//---------------------------------------------------------------------

function copyFile3(readable, file_path) {

	const rel_file_path = path.relative(dir_name_from, file_path);
	const rel_path = path.dirname(rel_file_path);
	const path_to_file = path.join(dir_name_to, rel_path);
	fs.mkdirSync(path_to_file, { recursive: true });
	file_path = path.join(dir_name_to, rel_file_path);
	
	const writable = fs.createWriteStream(file_path);

	writable.on("finish", () => {
		console.log("Write to file: " + file_path);
	});

	writable.on("error", err => {
		console.log(err);
	});

	readable.pipe(writable);
}
