import five from "johnny-five";
import createBoard from "./create-board.js";

const board = await createBoard({ port: "COM8" });

const relay1 = new five.Relay(3);
const relay2 = new five.Relay(2);

const open = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      relay1.open();
      relay2.close();
      console.log("open");
      resolve();
    }, 5000);
  });
};

const close = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      relay1.close();
      relay2.open();
      console.log("close");
      resolve();
    }, 5000);
  });
};

const finish = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      relay1.close();
      relay2.close();
      console.log("finish");
      resolve();
    }, 5000);
  });
};

// Aquí encadenamos las llamadas:
const runSequence = async () => {
  await open();
  await close();
  await finish();
};

runSequence();
