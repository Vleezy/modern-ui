import React from "react";

import Header from "../";

describe("<Header />", () => {
  it("should render and match the snapshot", () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });
  it("should render tabs if it has isHomePage prop", () => {});
});
