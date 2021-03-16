Test.describe("Basic tests",_=>{
    Test.assertEquals(getAge("4 years old"), 4);
    Test.assertEquals(getAge("5 years old"), 5);
    Test.assertEquals(getAge("7 years old"), 7);
    Test.assertEquals(getAge("6 years old"), 6);
    Test.assertEquals(getAge("8 years old"), 8);
    Test.assertEquals(getAge("9 years old"), 9);
    Test.assertEquals(getAge("1 year old"), 1);
    Test.assertEquals(getAge("2 years old"), 2);
    Test.assertEquals(getAge("3 years old"), 3);
    })