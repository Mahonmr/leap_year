describe('leapYear', function() {
  it("is false for a year that is not divisible by 4, 100, 400", function() {
    expect(leapYear(1993)).to.eq(false);
  });

  it("is true for a year that is divisible by 4", function() {
    expect(leapYear(2004)).to.eq(true);
  });

  it("is false for a year that is divisable by 100", function() {
    expect(leapYear(1900)).to.eq(false);
  });

  it("is true for a year that is divisable by 400", function() {
    expect(leapYear(2000)).to.eq(true);
  });

  it("returns invalid input if input is not a number", function() {
    expect(leapYear('this is a sting')).to.eq("invalid input");
  });

  it("returns invalid input if input is less than zero", function() {
    expect(leapYear(-1)).to.eq("invalid input");
  });

  it("returns invalid input if input blank", function() {
    expect(leapYear(' ')).to.eq("invalid input");
  });
});
