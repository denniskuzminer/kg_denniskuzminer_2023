// convert command line args to array
let args = process.argv.slice(2);
let ans = "";
for (let j = 0; j < args.length; j++) {
  let num = args[j];
  for (let i = 0; i < num.length; i++) {
    switch (num.charAt(i)) {
      case "1":
        ans += "One";
        break;
      case "2":
        ans += "Two";
        break;
      case "3":
        ans += "Three";
        break;
      case "4":
        ans += "Four";
        break;
      case "5":
        ans += "Five";
        break;
      case "6":
        ans += "Six";
        break;
      case "7":
        ans += "Seven";
        break;
      case "8":
        ans += "Eight";
        break;
      case "9":
        ans += "Nine";
        break;
      case "0":
        ans += "Zero";
        break;
      default:
        ans += "";
        break;
    }
  }
  j !== args.length - 1 ? (ans += ",") : (ans += "");
}

console.log(ans);
