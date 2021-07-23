import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import mockFetchColors from '../services/fetchColorService';

jest.mock('../services/fetchColorService')


const testData = {
  data: [
  {color: "aliceblue", code: {hex: "#f0f8ff"}, id: 1},
  {color: "limegreen", code: {hex: "#99ddbc"}, id: 2},
  {color: "aqua", code: {hex: "#00ffff"}, id: 3},
]
}

test("Renders BubblePage without errors", () => {
  render(<BubblePage/>)
});


test("Fetches data and renders the bubbles on mounting",  async () => {
  mockFetchColors.mockResolvedValueOnce(testData)
  render(<BubblePage />)
  const color =  screen.findByTestId(/123/i)
  expect(color)
  console.log(color)
});