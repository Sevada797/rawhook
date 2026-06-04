workerCode=`fetch('https://github.com')`;
const blob = new Blob([workerCode]);
const w = new Worker(URL.createObjectURL(blob));
