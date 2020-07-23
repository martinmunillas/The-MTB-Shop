const initialState = {
  cart: [],
  exchange: "USD",
  items: [
    {
      id: 1,
      name: "Bike Model A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, urna vitae gravida luctus, mi justo fermentum nisl, et feugiat magna metus nec purus. Integer pharetra orci vel tellus blandit, a feugiat ante rhoncus. Pellentesque posuere vitae nisi eget pellentesque. Duis posuere efficitur erat, sed tincidunt dolor tristique eget. Nullam a ex sem. Donec faucibus, felis sit amet lobortis feugiat, est augue scelerisque turpis, sit amet fringilla mi ex vel elit. Aliquam ultrices nisi velit, elementum volutpat enim rutrum eu. Aliquam consequat ornare volutpat. Fusce porttitor facilisis aliquam. Sed in sapien in ante malesuada iaculis. Nunc ac ex posuere, lobortis nulla vel, ultrices erat. Suspendisse potenti. Nam nec sapien ac ex vestibulum hendrerit in vitae nisi. Aenean tristique lorem non rutrum bibendum. Vivamus vulputate sollicitudin tellus in ultrices. Cras dignissim sapien ante, sagittis luctus turpis sollicitudin in.",
      types: [
        {
          name: "colors",
          variants: [
            {
              color: "orange",
              image: "",
            },
            {
              color: "blue",
              image: "",
            },
            {
              color: "grey",
              image: "",
            },
          ],
        },
      ],
      imageSrc: "./assets/static/products/bike.png",
      price: 109,
      discount: 40,
    },

    {
      id: 2,
      name: "Bike Model B",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, urna vitae gravida luctus, mi justo fermentum nisl, et feugiat magna metus nec purus. Integer pharetra orci vel tellus blandit, a feugiat ante rhoncus. Pellentesque posuere vitae nisi eget pellentesque. Duis posuere efficitur erat, sed tincidunt dolor tristique eget. Nullam a ex sem. Donec faucibus, felis sit amet lobortis feugiat, est augue scelerisque turpis, sit amet fringilla mi ex vel elit. Aliquam ultrices nisi velit, elementum volutpat enim rutrum eu. Aliquam consequat ornare volutpat. Fusce porttitor facilisis aliquam. Sed in sapien in ante malesuada iaculis. Nunc ac ex posuere, lobortis nulla vel, ultrices erat. Suspendisse potenti. Nam nec sapien ac ex vestibulum hendrerit in vitae nisi. Aenean tristique lorem non rutrum bibendum. Vivamus vulputate sollicitudin tellus in ultrices. Cras dignissim sapien ante, sagittis luctus turpis sollicitudin in.",
      types: [
        {
          name: "colors",
          variants: [
            {
              color: "red",
              image: "",
            },
            {
              color: "pink",
              image: "",
            },
            {
              color: "green",
              image: "",
            },
          ],
        },
      ],
      imageSrc: "./assets/static/products/bike2.svg",
      price: 130,
      discount: null,
    },

    {
      id: 3,
      name: "Bike Shirt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, urna vitae gravida luctus, mi justo fermentum nisl, et feugiat magna metus nec purus. Integer pharetra orci vel tellus blandit, a feugiat ante rhoncus. Pellentesque posuere vitae nisi eget pellentesque. Duis posuere efficitur erat, sed tincidunt dolor tristique eget. Nullam a ex sem. Donec faucibus, felis sit amet lobortis feugiat, est augue scelerisque turpis, sit amet fringilla mi ex vel elit. Aliquam ultrices nisi velit, elementum volutpat enim rutrum eu. Aliquam consequat ornare volutpat. Fusce porttitor facilisis aliquam. Sed in sapien in ante malesuada iaculis. Nunc ac ex posuere, lobortis nulla vel, ultrices erat. Suspendisse potenti. Nam nec sapien ac ex vestibulum hendrerit in vitae nisi. Aenean tristique lorem non rutrum bibendum. Vivamus vulputate sollicitudin tellus in ultrices. Cras dignissim sapien ante, sagittis luctus turpis sollicitudin in.",
      types: [
        {
          name: "colors",
          variants: [
            {
              color: "orange",
              image: "",
            },
            {
              color: "blue",
              image: "",
            },
          ],
        },
      ],
      imageSrc: "",
      price: 109,
      discount: null,
    },
  ],
};

export default initialState;
