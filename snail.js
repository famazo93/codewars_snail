
function snail(arrays) {
  let nums = {};
  let newArr = [];
  let posObj = {};

  let cols = arrays[0].length;
  let rows = arrays.length;
  let el = cols * rows;

  let stepCounter = 0;
  let posCounter = 1;

  while (posCounter <= el) {
    if (posCounter <= el) {
      for (let x = 1 + stepCounter; x <= cols - stepCounter; x++) {
        posObj[`Position${posCounter}`] = {
          "x": x,
          "y": 1 + stepCounter,
          value: arrays[stepCounter][x-1],
        };
        posCounter++;
      }
    }

    if (posCounter <= el) {
      for (let y = 1 + stepCounter + 1; y <= rows - stepCounter; y++) {
        posObj[`Position${posCounter}`] = {
          "x": cols - stepCounter,
          "y": y,
          value: arrays[y-1][cols-stepCounter-1],
        };
        posCounter++;
      }
    }

    if (posCounter <= el) {
      for (let x = cols - stepCounter - 1; x >= 1 + stepCounter; x--) {
        posObj[`Position${posCounter}`] = {
          "x": x,
          "y": rows - stepCounter,
          value: arrays[rows-stepCounter-1][x-1],
        };
        posCounter++;
      }
    }

    if(posCounter <= el) {
      for (let y = rows - stepCounter - 1; y >= 1 + stepCounter + 1; y--) {
        posObj[`Position${posCounter}`] = {
          "x": 1 + stepCounter,
          "y": y,
          value: arrays[y-1][stepCounter],
        };
        posCounter++;
      }
      stepCounter++;
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
  return newArr;
}

let example = [[1,2,3,1,5],
               [4,5,6,4,5],
               [7,8,9,7,5],
               [7,8,9,7,5],
               [7,8,9,7,5]];

snail(example);