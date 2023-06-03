// so far it works with 3x3 tables, but not with bigger ones

function snail(arrays) {
  let nums = {};
  let counter = 1;
  let newArr = [];
  let posObj = {};

  let cols = arrays[0].length;
  let rows = arrays.length;
  let el = cols * rows;
  
  for (let arr of arrays) {
    for (let num of arr) {
      nums[`Number${counter}`] = {
        "x": arr.indexOf(num) + 1,
        "y": arrays.indexOf(arr) + 1,
        "value": num
      }
      counter++;
    }
  }

  let stepCounter = 0;
  let posCounter = 1;

  while (posCounter <= el) {
    if (posCounter <= el) {
      for (let x = 1 + stepCounter; x <= cols - stepCounter; x++) {
        posObj[`Position${posCounter}`] = {
          "x": x,
          "y": 1 + stepCounter,
          value: 0
        };
        posCounter++;
      }
    }

    if (posCounter <= el) {
      for (let y = 1 + stepCounter + 1; y <= rows - stepCounter; y++) {
        posObj[`Position${posCounter}`] = {
          "x": cols - stepCounter,
          "y": y,
          value: 0
        };
        posCounter++;
      }
    }

    if (posCounter <= el) {
      for (let x = cols - stepCounter - 1; x >= 1 + stepCounter; x--) {
        posObj[`Position${posCounter}`] = {
          "x": x,
          "y": rows - stepCounter,
          value: 0
        };
        posCounter++;
      }
    }

    if(posCounter <= el) {
      for (let y = rows - stepCounter - 1; y >= 1 + stepCounter + 1; y--) {
        posObj[`Position${posCounter}`] = {
          "x": 1 + stepCounter,
          "y": y,
          value: 0
        };
        posCounter++;
        stepCounter++;
      }
    }
  }

  for (let i = 1; i <= Object.keys(posObj).length; i++) {
    for (let j = 1; j <= Object.keys(nums).length; j++) {
      if (nums[`Number${j}`]["x"] === posObj[`Position${i}`]["x"] && nums[`Number${j}`]["y"] === posObj[`Position${i}`]["y"]) {
        posObj[`Position${i}`]["value"] = nums[`Number${j}`]["value"]
      }
    }
    newArr.push(posObj[`Position${i}`]["value"])
  }
  console.log(nums);
  console.log(posObj);
  console.log(newArr);
  return newArr;
}

let example = [[1,2,3,1,5],
               [4,5,6,4,5],
               [7,8,9,7,5],
               [7,8,9,7,5],
               [7,8,9,7,5]];

snail(example);