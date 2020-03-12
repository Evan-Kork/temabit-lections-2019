const fs = require("fs");
const path = require("path");

const cl = console.log;

cl("HELLO");

// cl(process.cwd());
// cl(__dirname);

// VARIANT 1
async function scanDir1 (dir_name) {

	const dir = fs.opendirSync(
		path.resolve(__dirname, dir_name)
	);

	for await (const dirent of dir) {

		cl(path.join(dir.path, dirent.name));

		if ( dirent.isDirectory() ) {
			scanDir1(path.join(dir.path, dirent.name));
		}
	}

	//dir.closeSync();
}

// VARIANT 2
function scanDir2 (dir_name) {

	fs.opendir(
		path.resolve(__dirname, dir_name),
	
		async function(err, dir) {
			for await (const dirent of dir) {

				cl(path.join(dir.path, dirent.name));

				if ( dirent.isDirectory() ) {
					scanDir2(path.join(dir.path, dirent.name));
				}
			}
		}
	);

	//dir.closeSync();
}

// VARIANT 3
async function scanDir3 (dir_name) {

	const dir = await fs.promises.opendir(
		path.resolve(__dirname, dir_name)
	);

	for await (const dirent of dir) {

		cl(path.join(dir.path, dirent.name));

		if ( dirent.isDirectory() ) {
			scanDir3(path.join(dir.path, dirent.name));
		}
	}

	//dir.closeSync();
}

// VARIANT 4
function scanDir4 (dir_name) {

	fs.promises.opendir(
		path.resolve(__dirname, dir_name)
	)
	.then(
	
		async function(dir) {
			for await (const dirent of dir) {

				cl(path.join(dir.path, dirent.name));

				if ( dirent.isDirectory() ) {
					scanDir4(path.join(dir.path, dirent.name));
				}
			}
		}
	);

	//dir.closeSync();
}

//VARIANT 5
function scanDir5 (dir_name) {

	fs.promises.opendir(
		path.resolve(__dirname, dir_name)
	)
	.then(
	
		function(dir) {
			let dirent;
			while ( dirent = dir.readSync() ) {

				cl(path.join(dir.path, dirent.name));

				if ( dirent.isDirectory() ) {
					scanDir5(path.join(dir.path, dirent.name));
				}
			}
		}
	);

	//dir.closeSync();
}

//VARIANT 6
function scanDir6 (dir_name) {

	fs.promises.opendir(
		path.resolve(__dirname, dir_name)
	)
	.then(
	
		async function(dir) {
			let dirent;
			while ( dirent = await dir.read() ) {

				cl(path.join(dir.path, dirent.name));

				if ( dirent.isDirectory() ) {
					scanDir6(path.join(dir.path, dirent.name));
				}
			}
		}
	);

	//dir.closeSync();
}

//VARIANT 7
function scanDir7 (dir_name) {

	fs.promises.opendir(
		path.resolve(__dirname, dir_name)
	)
	.then(
	
		function sD(dir) {
			dir.read( (err, dirent) => {
				
				if (!dirent) return;
				
				cl(path.join(dir.path, dirent.name));

				if ( dirent.isDirectory() ) {
					scanDir7(path.join(dir.path, dirent.name));
				}

				if (dirent) sD(dir);

			})
		}
	);

	//dir.closeSync();
}

// scanDir1("");
// scanDir2("");
// scanDir3("");
// scanDir4("");
// scanDir5("");
// scanDir6("");
// scanDir7("");

function copyDir(dir_name_from, dir_name_to) {

	scanDir(dir_name_from);

	async function scanDir (dir_name) {

		const dir = await fs.promises.opendir(
			path.resolve(dir_name)
		);

		for await (const dirent of dir) {

			cl(path.join(dir.path, dirent.name));

			if ( dirent.isDirectory() ) {
				scanDir(path.join(dir.path, dirent.name));
			} else {
				
				const from = path.join(dir.path, dirent.name);
				const dir_to = path.join(dir_name_to, path.relative(dir_name_from, dir.path));
				fs.mkdirSync(dir_to, { recursive: true });
				const to = path.join(dir_to, dirent.name);
				
				cl("from: " + from);
				cl("to: " + to);

				fs.copyFileSync(from, to);
			}
		}
	}
}

function copyDir1(dir_name_from, dir_name_to) {

	scanDir(dir_name_from);

	async function scanDir (dir_name) {

		const dir = await fs.promises.opendir(
			path.resolve(dir_name)
		);

		for await (const dirent of dir) {

			const dirent_path = path.join(dir.path, dirent.name);

			cl(dirent_path);

			if ( dirent.isDirectory() ) {
				scanDir(dirent_path);
			} else {
				
				const file_from = dirent_path;
				const dir_to = path.join(dir_name_to, path.relative(dir_name_from, dir.path));
				fs.mkdirSync(dir_to, { recursive: true });
				const file_to = path.join(dir_to, dirent.name);

				cl("from: " + file_from);
				cl("to: " + file_to);

				const from = await fs.promises.open(file_from);
				const to = await fs.promises.open(file_to, "a");
				const buffer = Buffer.alloc(1024);

				rw();

				function rw() {
					fs.read(from.fd, buffer, 0, 1024, null, (err, bytesRead, buffer) => {
						cl("write: " + file_to + " " + bytesRead);
						fs.write(to.fd, buffer, 0, bytesRead, err => {if (bytesRead) rw()});
					});
				}
			}
		}
	}
}

copyDir1("src_2", "src_1");
