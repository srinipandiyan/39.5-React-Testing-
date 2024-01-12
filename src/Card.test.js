import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card.js";
//import TEST_IMAGES from "./_testCommon.js";


test('it renders without crashing', () => {
  render(<Card
      caption='card-title-test'
      src='image-src-test'
      currNum={1}
      totalNum={3}
    />
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});