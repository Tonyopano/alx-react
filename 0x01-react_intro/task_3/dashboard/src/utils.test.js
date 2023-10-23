import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("Get full year", function() {
  it("should return the correct year", function() {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });
})

describe("Get footer message", function() {
  const trueMessage = 'Holberton School';
  const falseMessage = 'Holberton School main dashboard';

  it("should return the true footer message", function() {
    const currentMessage = getFooterCopy(true);
    expect(currentMessage).toBe(trueMessage);
  });
  it("should return the false footer message", function() {
    const currentMessage = getFooterCopy(false);
    expect(currentMessage).toBe(falseMessage);
  })
})

describe("Get latest notification", function() {
  it("should return the urgent message text", function() {
    const message = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(message).toBe(getLatestNotification());
  });
})
