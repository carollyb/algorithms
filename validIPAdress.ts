export function validIPAddresses(string: string) {
  const ipAddressesFound: string[] = [];
  for (let i = 0; i < Math.min(string.length, 4); i++) {
    const currentIPAddressParts = ["", "", "", ""];
    currentIPAddressParts[0] = string.slice(0, i);
    if (!isValid(currentIPAddressParts[0])) continue;
    for (let j = i + 1; j < i + Math.min(string.length - 1, 4); j++) {
      currentIPAddressParts[1] = string.slice(i, j);
      if (!isValid(currentIPAddressParts[1])) continue;
      for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) {
        currentIPAddressParts[2] = string.slice(j, k);
        currentIPAddressParts[3] = string.slice(k);
        if (
          isValid(currentIPAddressParts[2]) &&
          isValid(currentIPAddressParts[3])
        ) {
          ipAddressesFound.push(currentIPAddressParts.join(""));
        }
      }
    }
  }
  return ipAddressesFound;
}

function isValid(string: string) {
  if (Number(string) > 255) return false;
  return true;
}
