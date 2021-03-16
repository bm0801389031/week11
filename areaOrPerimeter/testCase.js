Test.assertEquals(areaOrPerimeter(4 , 4) , 16);
Test.assertEquals(areaOrPerimeter(6 , 10) , 32);
area = (l , w) => l == w ? Math.pow(l , 2) : 2 * (l + w)
Test.describe("Some basic tests" , function() {
  for(var i = 1; i < 4; i++) {
    var a = (Math.random() * 1200) + 10;
    var b = (Math.random() * 1500) + 10;
    Test.assertApproxEquals(areaOrPerimeter(a , b) , area(a , b))
  }
})
Test.describe("A lot more test" , () => {
  Test.it("Just tests" , () => {
    for(var i = 0; i < 100; i++) {
      Test.assertApproxEquals(areaOrPerimeter((i * 1200) + 2 , (i * 2100) + 2) , area((i * 1200) + 2 , (i * 2100) + 2))
      Test.assertApproxEquals(areaOrPerimeter((i * 100) + 20 , (i * 100) + 20) , area((i * 100) + 20 , (i * 100) + 20))
    }
  })
});