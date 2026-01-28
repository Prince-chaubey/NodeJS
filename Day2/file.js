const fs = require("fs");

// 1️⃣ Write file synchronously
fs.writeFileSync("file.txt", "Hello From Synchronous");

// 2️⃣ Write file asynchronously
fs.writeFile("file.txt", "Hello from Asynchronous!", (err) => {
  if (err) {
    console.log("Write error:", err);
    return;
  }
  console.log("Asynchronous write completed");
});

// 3️⃣ Read file asynchronously
fs.readFile("./contact.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("Read error:", err);
    return;
  }
  console.log("Async read:", result);
});

// 4️⃣ Read file synchronously
try {
  const r = fs.readFileSync("./contact.txt", "utf-8");
  console.log("Sync read:", r);
} catch (err) {
  console.log("Sync read error:", err);
}
