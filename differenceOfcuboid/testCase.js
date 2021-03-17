// Legacy compatibility
const funcToBeTested = (typeof findDifference === "function") ? findDifference : find_difference;

function randint(low, up) {
  return Math.floor(Math.random()*(up-low+1)+low);
}

describe("Tests", function(){
  it("Basic tests", function(){
    Test.assertEquals(funcToBeTested([3, 2, 5], [1, 4, 4]), 14);
    Test.assertEquals(funcToBeTested([9, 7, 2], [5, 2, 2]), 106);
    Test.assertEquals(funcToBeTested([11, 2, 5], [1, 10, 8]), 30);
    Test.assertEquals(funcToBeTested([4, 4, 7], [3, 9, 3]), 31);
    Test.assertEquals(funcToBeTested([15, 20, 25], [10, 30, 25]), 0);

  });
  
  it("Random tests", function(){
    for(var i = 0; i < 100; i++) {
      var a = [randint(1, 30), randint(1, 30), randint(1, 30)];
      var b = [randint(1, 30), randint(1, 30), randint(1, 30)];
      var correct = Math.abs((a[0]*a[1]*a[2]) - (b[0]*b[1]*b[2]));
      console.log('Testing for:', a, b);
      console.log('It should be equal:', correct);
      Test.assertEquals(funcToBeTested(a, b), correct);
    }
  });  
});