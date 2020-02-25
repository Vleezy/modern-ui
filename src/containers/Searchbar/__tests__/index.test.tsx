import React from "react";
import { render } from "@testing-library/react";

import Searchbar from "./../index";

describe("<Searchbar />", () => {
  it("should render and match the snapshot", () => {
    const onChangeFunc = jest.fn();
    const { container } = render(<Searchbar onChangeFunc={onChangeFunc} />);

    expect(container).toMatchSnapshot();
  });
});
