"use strict";
//****************************** */ Callback Hell*****************************************************

// function downloadFile(url, downloaded) {
//   console.log(`starting download from url ${url}`);
//   setTimeout(() => {
//     const path = url.split("/").pop();
//     downloaded(path);
//   }, 3000);
// }

// function compressFile(path, compresed) {
//   console.log(`Starting the file compression for ${path}`);
//   setTimeout(() => {
//     const compressedPath = path.split(".")[0] + ".zip";
//     compresed(compressedPath);
//   }, 2000);
// }

// function uploadFile(compresedPath, uploaded) {
//   console.log(`Starting the file upload from ${compresedPath}`);
//   setTimeout(() => {
//     const upLoadedPath = "https://localsystem/" + compresedPath;
//     uploaded(upLoadedPath);
//   }, 3000);
// }

// downloadFile("https://facebook.com/profile.jpg", function (path) {
//   console.log(`file downloaded succesfully as ${path}`);
//   compressFile(path, function (compresedPath) {
//     console.log(`file compressed succesfully  as ${compresedPath}`);
//     uploadFile(compresedPath, function (upLoadedPath) {
//       console.log(`File Uploded Succesfully at ${upLoadedPath}`);
//       console.log("everything done");
//     });
//   });
// });

// *************************callbackhell hard**********************************************

// ***********************callback hell easy************************************************

// function download(downloadFile) {
//   console.log("satrting download...");
//   setTimeout(() => {
//     downloadFile();
//   }, 3000);
// }

// function compress(compressed) {
//   console.log("starting compression...");
//   setTimeout(() => {
//     compressed();
//   }, 2000);
// }

// function upload(uploaded) {
//   console.log("starting upoad...");
//   setTimeout(() => {
//     uploaded();
//   }, 2000);
// }

// download(function () {
//   console.log("file downloaded");
//   compress(function () {
//     console.log("file compressed succesfully");
//     upload(function () {
//       console.log("file upladeed");
//       console.log("everythig done");
//     });
//   });
// });

// *********************************************************************************************************

// **********************using promises**************************

function download() {
  console.log("starting download...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("file downloaded");
      resolve();
    }, 3000);
  });
}

function compress() {
  console.log("starting compression...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("file compressed");
      resolve();
    }, 2000);
  });
}

function upload() {
  console.log("starting upload...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("file uploaded");
      resolve();
    }, 2000);
  });
}

download()
  .then(compress)
  .then(upload)
  .then(() => {
    console.log("everything done");
  })
  .catch((err) => {
    console.log("Something went wrong");
    // console.log(err);
    console.log(err.message);
  });
