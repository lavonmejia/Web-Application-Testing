import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";


import Logic from "./Logic";

describe("<Logic />", () => {
  it("should render without crashing", () => {
    render(<Logic/>)
  });


it("should display 'Dashboard, ball, strike, foul, and hit'", () => {
    const { getByText } = render(<Logic />)

    getByText(/balls/i)
    getByText(/strikes/i)
    getByText(/fouls/i)
    getByText(/hits/i)
});

}
)