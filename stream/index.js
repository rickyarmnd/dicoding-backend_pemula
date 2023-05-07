/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require("fs");

const readableStream = fs.createReadStream("stream/input.txt", {
    highWaterMark: 15,
});

let word = "";
readableStream.on("readable", () => {
    try {
        let teks = readableStream.read();
        word += `${teks.toString()}, \n`
        // console.log(`Teksnya adalah : ${word}`);
    } catch (error) {
        //Error Handling
    }
});

readableStream.on('end' , () => {
    console.log(word)
})
readableStream.on("end", () => {
    try {
        // console.log(output)
        const output = word.split(",");
        // console.log(word)
        const writableStream = fs.createWriteStream("stream/output.txt");
        for (let i = 0; i <= output.length - 3; i++) {
            writableStream.write(output[i]);
        }
        writableStream.end(output[output.length - 2]);
    } catch (error) {
            //Error Handling
    }
});
