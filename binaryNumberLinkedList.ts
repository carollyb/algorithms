function getNumber(binary) {
  let listLength = getLength(binary) - 1;
  let result = BigInt(0);
  let tempNode = binary;

  while (tempNode !== null) {
    if (tempNode.data == 1) {
      let power = BigInt(listLength);
      let value = BigInt(1);

      while (power > BigInt(0)) {
        value *= BigInt(2);
        power--;
      }

      result += value;
    }

    listLength--;
    tempNode = tempNode.next;
  }

  return result.toString();
}
function getLength(head) {
  let result = 0;
  let temp_head = head;
  while (temp_head !== null) {
    result++;
    temp_head = temp_head.next;
  }
  return result;
}
