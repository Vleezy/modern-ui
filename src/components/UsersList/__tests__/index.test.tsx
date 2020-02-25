import React from "react";
import { render } from "@testing-library/react";

import UsersList from "./../index";
import { MemoryRouter } from "react-router-dom";

describe("<UsersList />", () => {
  it("should render the loading indicator if its loading", () => {
    const { container } = render(<UsersList loading users={[]} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render the users if loading was successful", () => {
    const users = [
      {
        username: "Chuckie",
        look: "",
        online: false
      }
    ];

    const { container } = render(
      <MemoryRouter>
        <UsersList users={users} />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
