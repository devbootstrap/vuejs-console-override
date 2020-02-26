export default function overrideLog(store:any) {
  const { dispatch } = store;

  const o_log = console.log;
  console.log = (...args) => {
    dispatch("appendLog", {
      log: args.join(" "),
    });
    o_log(...args);
  };
}