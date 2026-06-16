import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import RestaurantCategory from "../components/RestaurantCategory";
import RestaurantMenu from "../components/RestaurantMenu";
import RestaurantMenuCardItem from "../components/RestaurantMenuCardItem";
import MOCK_DATA from "../mocks/RestaurantMenuList.json";
import appStore from "../redux/appStore";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);
it("should render the restaurant menu component", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
          <RestaurantCategory />
          <RestaurantMenuCardItem />
        </BrowserRouter>
      </Provider>
    );
  });
  const title = screen.getByText("Signature Burgers");
  expect(title).toBeInTheDocument();
  const accBtn = screen.getAllByTestId("accordianClick");
  fireEvent.click(accBtn[0]);
  const cardItem = screen.getAllByTestId("menuCardItem");
  expect(cardItem.length).toBe(3);
});
it("should update header cart value when we tap on the add cart button", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
          <RestaurantCategory />
          <RestaurantMenuCardItem />
        </BrowserRouter>
      </Provider>
    );
  });
  const title = screen.getByText("Signature Burgers");
  expect(title).toBeInTheDocument();
  const accBtn = screen.getAllByTestId("accordianClick");
  fireEvent.click(accBtn[0]);
  const cardItem = screen.getAllByTestId("menuCardItem");
  expect(cardItem.length).toBe(3);
  const addBtn = screen.getAllByRole("button", { name: "ADD" });
  const headerLabel = screen.getByText("Cart(0)");
  expect(headerLabel).toBeInTheDocument();
  console.log(addBtn.length);
  fireEvent.click(addBtn[0]);
  const cartHeader = screen.getByText("Cart(1)");
  expect(cartHeader).toBeInTheDocument();
});
