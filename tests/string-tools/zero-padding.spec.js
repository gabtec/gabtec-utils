import { expect } from "chai";
import { zeroPadding } from "../../lib/index.js";

describe("String Tools:: #zeroPadding() Test Suite", () => {
  context("# Happy Path", () => {
    it("should return '01' if input 1", () => {
      const input = 1;
      const output = "01";
      const result = zeroPadding(input);

      expect(result).to.be.eql(output);
    });

    it("should return '01' if input '1'", () => {
      const input = "1";
      const output = "01";
      const result = zeroPadding(input);

      expect(result).to.be.eql(output);
    });

    it("should return '01' if input '01", () => {
      const input = "01";
      const output = "01";
      const result = zeroPadding(input);

      expect(result).to.be.eql(output);
    });
  });

  context("# Errors Path", () => {});
});
