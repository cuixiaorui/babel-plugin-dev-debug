const babel = require("@babel/core");
const plugin = require("../");
const inputCode = `
        const a = 10;
        const b = 20;

        if(DEBUG){
            console.log("heihei")
        }
        `;

describe("babel-plugin-dev-debug", () => {
  it("dev", () => {
    // input
    process.env.NODE_ENV = "development";

    const { code } = babel.transform(inputCode, { plugins: [plugin] });
    expect(code).toMatchSnapshot();
  });

  it("prod", () => {
    // input
    process.env.NODE_ENV = "production";

    const { code } = babel.transform(inputCode, { plugins: [plugin] });
    expect(code).toMatchSnapshot();
  });
});
