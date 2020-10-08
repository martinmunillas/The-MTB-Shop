const initialState = {
  currentPage: 'home',
  cart: [],
  exchange: 'USD',
  comboA: {
    items: [1, 7, 11],
    price: 200,
  },
  items: [
    {
      id: 1,
      name: 'Bike Model A',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, urna vitae gravida luctus, mi justo fermentum nisl, et feugiat magna metus nec purus. Integer pharetra orci vel tellus blandit, a feugiat ante rhoncus. Pellentesque posuere vitae nisi eget pellentesque. Duis posuere efficitur erat, sed tincidunt dolor tristique eget. Nullam a ex sem. Donec faucibus, felis sit amet lobortis feugiat, est augue scelerisque turpis, sit amet fringilla mi ex vel elit. Aliquam ultrices nisi velit, elementum volutpat enim rutrum eu. Aliquam consequat ornare volutpat. Fusce porttitor facilisis aliquam. Sed in sapien in ante malesuada iaculis. Nunc ac ex posuere, lobortis nulla vel, ultrices erat. Suspendisse potenti. Nam nec sapien ac ex vestibulum hendrerit in vitae nisi. Aenean tristique lorem non rutrum bibendum. Vivamus vulputate sollicitudin tellus in ultrices. Cras dignissim sapien ante, sagittis luctus turpis sollicitudin in.',
      types: [
        {
          name: 'colors',
          variants: [
            {
              color: 'orange',
              image: '',
            },
            {
              color: 'blue',
              image: '',
            },
            {
              color: 'grey',
              image: '',
            },
          ],
        },
      ],
      imageSrc: '/static/products/bike.svg',
      price: 109,
      discount: 40,
    },

    {
      id: 2,
      name: 'Bike Model B',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, urna vitae gravida luctus, mi justo fermentum nisl, et feugiat magna metus nec purus. Integer pharetra orci vel tellus blandit, a feugiat ante rhoncus. Pellentesque posuere vitae nisi eget pellentesque. Duis posuere efficitur erat, sed tincidunt dolor tristique eget. Nullam a ex sem. Donec faucibus, felis sit amet lobortis feugiat, est augue scelerisque turpis, sit amet fringilla mi ex vel elit. Aliquam ultrices nisi velit, elementum volutpat enim rutrum eu. Aliquam consequat ornare volutpat. Fusce porttitor facilisis aliquam. Sed in sapien in ante malesuada iaculis. Nunc ac ex posuere, lobortis nulla vel, ultrices erat. Suspendisse potenti. Nam nec sapien ac ex vestibulum hendrerit in vitae nisi. Aenean tristique lorem non rutrum bibendum. Vivamus vulputate sollicitudin tellus in ultrices. Cras dignissim sapien ante, sagittis luctus turpis sollicitudin in.',
      types: [
        {
          name: 'colors',
          variants: [
            {
              color: 'red',
              image: '',
            },
            {
              color: 'pink',
              image: '',
            },
            {
              color: 'green',
              image: '',
            },
          ],
        },
      ],
      imageSrc: '/static/products/bike2.svg',
      price: 130,
      discount: null,
    },

    {
      id: 3,
      name: 'Bike Shirt',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, urna vitae gravida luctus, mi justo fermentum nisl, et feugiat magna metus nec purus. Integer pharetra orci vel tellus blandit, a feugiat ante rhoncus. Pellentesque posuere vitae nisi eget pellentesque. Duis posuere efficitur erat, sed tincidunt dolor tristique eget. Nullam a ex sem. Donec faucibus, felis sit amet lobortis feugiat, est augue scelerisque turpis, sit amet fringilla mi ex vel elit. Aliquam ultrices nisi velit, elementum volutpat enim rutrum eu. Aliquam consequat ornare volutpat. Fusce porttitor facilisis aliquam. Sed in sapien in ante malesuada iaculis. Nunc ac ex posuere, lobortis nulla vel, ultrices erat. Suspendisse potenti. Nam nec sapien ac ex vestibulum hendrerit in vitae nisi. Aenean tristique lorem non rutrum bibendum. Vivamus vulputate sollicitudin tellus in ultrices. Cras dignissim sapien ante, sagittis luctus turpis sollicitudin in.',
      types: [
        {
          name: 'colors',
          variants: [
            {
              color: 'orange',
              image: '',
            },
            {
              color: 'blue',
              image: '',
            },
          ],
        },
      ],
      imageSrc: '/static/products/shirt.svg',
      price: 40,
      discount: null,
    },

    {
      id: 4,
      name: 'Bike Short',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, urna vitae gravida luctus, mi justo fermentum nisl, et feugiat magna metus nec purus. Integer pharetra orci vel tellus blandit, a feugiat ante rhoncus. Pellentesque posuere vitae nisi eget pellentesque. Duis posuere efficitur erat, sed tincidunt dolor tristique eget. Nullam a ex sem. Donec faucibus, felis sit amet lobortis feugiat, est augue scelerisque turpis, sit amet fringilla mi ex vel elit. Aliquam ultrices nisi velit, elementum volutpat enim rutrum eu. Aliquam consequat ornare volutpat. Fusce porttitor facilisis aliquam. Sed in sapien in ante malesuada iaculis. Nunc ac ex posuere, lobortis nulla vel, ultrices erat. Suspendisse potenti. Nam nec sapien ac ex vestibulum hendrerit in vitae nisi. Aenean tristique lorem non rutrum bibendum. Vivamus vulputate sollicitudin tellus in ultrices. Cras dignissim sapien ante, sagittis luctus turpis sollicitudin in.',
      types: [
        {
          name: 'colors',
          variants: [
            {
              color: 'orange',
              image: '',
            },
          ],
        },
      ],
      imageSrc: '/static/products/shorts.svg',
      price: 70,
      discount: 15,
    },

    {
      id: 5,
      name: 'Bike Bag',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, urna vitae gravida luctus, mi justo fermentum nisl, et feugiat magna metus nec purus. Integer pharetra orci vel tellus blandit, a feugiat ante rhoncus. Pellentesque posuere vitae nisi eget pellentesque. Duis posuere efficitur erat, sed tincidunt dolor tristique eget. Nullam a ex sem. Donec faucibus, felis sit amet lobortis feugiat, est augue scelerisque turpis, sit amet fringilla mi ex vel elit. Aliquam ultrices nisi velit, elementum volutpat enim rutrum eu. Aliquam consequat ornare volutpat. Fusce porttitor facilisis aliquam. Sed in sapien in ante malesuada iaculis. Nunc ac ex posuere, lobortis nulla vel, ultrices erat. Suspendisse potenti. Nam nec sapien ac ex vestibulum hendrerit in vitae nisi. Aenean tristique lorem non rutrum bibendum. Vivamus vulputate sollicitudin tellus in ultrices. Cras dignissim sapien ante, sagittis luctus turpis sollicitudin in.',
      types: [
        {
          name: 'colors',
          variants: [
            {
              color: 'blue',
              image: '',
            },
          ],
        },
      ],
      imageSrc: '/static/products/bag.svg',
      price: 109,
      discount: null,
    },

    {
      id: 6,
      name: 'Bike Bottle',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, urna vitae gravida luctus, mi justo fermentum nisl, et feugiat magna metus nec purus. Integer pharetra orci vel tellus blandit, a feugiat ante rhoncus. Pellentesque posuere vitae nisi eget pellentesque. Duis posuere efficitur erat, sed tincidunt dolor tristique eget. Nullam a ex sem. Donec faucibus, felis sit amet lobortis feugiat, est augue scelerisque turpis, sit amet fringilla mi ex vel elit. Aliquam ultrices nisi velit, elementum volutpat enim rutrum eu. Aliquam consequat ornare volutpat. Fusce porttitor facilisis aliquam. Sed in sapien in ante malesuada iaculis. Nunc ac ex posuere, lobortis nulla vel, ultrices erat. Suspendisse potenti. Nam nec sapien ac ex vestibulum hendrerit in vitae nisi. Aenean tristique lorem non rutrum bibendum. Vivamus vulputate sollicitudin tellus in ultrices. Cras dignissim sapien ante, sagittis luctus turpis sollicitudin in.',
      types: [
        {
          name: 'colors',
          variants: [
            {
              color: 'blue',
              image: '',
            },
          ],
        },
      ],
      imageSrc: '/static/products/bottle.svg',
      price: 15,
      discount: null,
    },

    {
      id: 7,
      name: 'Bike Gloves',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, urna vitae gravida luctus, mi justo fermentum nisl, et feugiat magna metus nec purus. Integer pharetra orci vel tellus blandit, a feugiat ante rhoncus. Pellentesque posuere vitae nisi eget pellentesque. Duis posuere efficitur erat, sed tincidunt dolor tristique eget. Nullam a ex sem. Donec faucibus, felis sit amet lobortis feugiat, est augue scelerisque turpis, sit amet fringilla mi ex vel elit. Aliquam ultrices nisi velit, elementum volutpat enim rutrum eu. Aliquam consequat ornare volutpat. Fusce porttitor facilisis aliquam. Sed in sapien in ante malesuada iaculis. Nunc ac ex posuere, lobortis nulla vel, ultrices erat. Suspendisse potenti. Nam nec sapien ac ex vestibulum hendrerit in vitae nisi. Aenean tristique lorem non rutrum bibendum. Vivamus vulputate sollicitudin tellus in ultrices. Cras dignissim sapien ante, sagittis luctus turpis sollicitudin in.',
      types: [
        {
          name: 'colors',
          variants: [
            {
              color: 'blue',
              image: '',
            },
          ],
        },
      ],
      imageSrc: '/static/products/gloves.svg',
      price: 40,
      discount: 50,
    },

    {
      id: 8,
      name: 'Bike Helmet',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, urna vitae gravida luctus, mi justo fermentum nisl, et feugiat magna metus nec purus. Integer pharetra orci vel tellus blandit, a feugiat ante rhoncus. Pellentesque posuere vitae nisi eget pellentesque. Duis posuere efficitur erat, sed tincidunt dolor tristique eget. Nullam a ex sem. Donec faucibus, felis sit amet lobortis feugiat, est augue scelerisque turpis, sit amet fringilla mi ex vel elit. Aliquam ultrices nisi velit, elementum volutpat enim rutrum eu. Aliquam consequat ornare volutpat. Fusce porttitor facilisis aliquam. Sed in sapien in ante malesuada iaculis. Nunc ac ex posuere, lobortis nulla vel, ultrices erat. Suspendisse potenti. Nam nec sapien ac ex vestibulum hendrerit in vitae nisi. Aenean tristique lorem non rutrum bibendum. Vivamus vulputate sollicitudin tellus in ultrices. Cras dignissim sapien ante, sagittis luctus turpis sollicitudin in.',
      types: [
        {
          name: 'colors',
          variants: [
            {
              color: 'blue',
              image: '',
            },
          ],
        },
      ],
      imageSrc: '/static/products/helmet.svg',
      price: 200,
      discount: 20,
    },

    {
      id: 9,
      name: 'Bike Lens',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, urna vitae gravida luctus, mi justo fermentum nisl, et feugiat magna metus nec purus. Integer pharetra orci vel tellus blandit, a feugiat ante rhoncus. Pellentesque posuere vitae nisi eget pellentesque. Duis posuere efficitur erat, sed tincidunt dolor tristique eget. Nullam a ex sem. Donec faucibus, felis sit amet lobortis feugiat, est augue scelerisque turpis, sit amet fringilla mi ex vel elit. Aliquam ultrices nisi velit, elementum volutpat enim rutrum eu. Aliquam consequat ornare volutpat. Fusce porttitor facilisis aliquam. Sed in sapien in ante malesuada iaculis. Nunc ac ex posuere, lobortis nulla vel, ultrices erat. Suspendisse potenti. Nam nec sapien ac ex vestibulum hendrerit in vitae nisi. Aenean tristique lorem non rutrum bibendum. Vivamus vulputate sollicitudin tellus in ultrices. Cras dignissim sapien ante, sagittis luctus turpis sollicitudin in.',
      types: [
        {
          name: 'colors',
          variants: [
            {
              color: 'blue',
              image: '',
            },
          ],
        },
      ],
      imageSrc: '/static/products/lens.svg',
      price: 120,
      discount: 10,
    },

    {
      id: 10,
      name: 'Bike Lock',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, urna vitae gravida luctus, mi justo fermentum nisl, et feugiat magna metus nec purus. Integer pharetra orci vel tellus blandit, a feugiat ante rhoncus. Pellentesque posuere vitae nisi eget pellentesque. Duis posuere efficitur erat, sed tincidunt dolor tristique eget. Nullam a ex sem. Donec faucibus, felis sit amet lobortis feugiat, est augue scelerisque turpis, sit amet fringilla mi ex vel elit. Aliquam ultrices nisi velit, elementum volutpat enim rutrum eu. Aliquam consequat ornare volutpat. Fusce porttitor facilisis aliquam. Sed in sapien in ante malesuada iaculis. Nunc ac ex posuere, lobortis nulla vel, ultrices erat. Suspendisse potenti. Nam nec sapien ac ex vestibulum hendrerit in vitae nisi. Aenean tristique lorem non rutrum bibendum. Vivamus vulputate sollicitudin tellus in ultrices. Cras dignissim sapien ante, sagittis luctus turpis sollicitudin in.',
      types: [
        {
          name: 'colors',
          variants: [
            {
              color: 'blue',
              image: '',
            },
          ],
        },
      ],
      imageSrc: '/static/products/lock.svg',
      price: 15,
      discount: null,
    },

    {
      id: 11,
      name: 'Tire Pump',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, urna vitae gravida luctus, mi justo fermentum nisl, et feugiat magna metus nec purus. Integer pharetra orci vel tellus blandit, a feugiat ante rhoncus. Pellentesque posuere vitae nisi eget pellentesque. Duis posuere efficitur erat, sed tincidunt dolor tristique eget. Nullam a ex sem. Donec faucibus, felis sit amet lobortis feugiat, est augue scelerisque turpis, sit amet fringilla mi ex vel elit. Aliquam ultrices nisi velit, elementum volutpat enim rutrum eu. Aliquam consequat ornare volutpat. Fusce porttitor facilisis aliquam. Sed in sapien in ante malesuada iaculis. Nunc ac ex posuere, lobortis nulla vel, ultrices erat. Suspendisse potenti. Nam nec sapien ac ex vestibulum hendrerit in vitae nisi. Aenean tristique lorem non rutrum bibendum. Vivamus vulputate sollicitudin tellus in ultrices. Cras dignissim sapien ante, sagittis luctus turpis sollicitudin in.',
      types: [
        {
          name: 'colors',
          variants: [
            {
              color: 'blue',
              image: '',
            },
          ],
        },
      ],
      imageSrc: '/static/products/pump.svg',
      price: 80,
      discount: null,
    },

    {
      id: 12,
      name: 'Bike Shoes',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, urna vitae gravida luctus, mi justo fermentum nisl, et feugiat magna metus nec purus. Integer pharetra orci vel tellus blandit, a feugiat ante rhoncus. Pellentesque posuere vitae nisi eget pellentesque. Duis posuere efficitur erat, sed tincidunt dolor tristique eget. Nullam a ex sem. Donec faucibus, felis sit amet lobortis feugiat, est augue scelerisque turpis, sit amet fringilla mi ex vel elit. Aliquam ultrices nisi velit, elementum volutpat enim rutrum eu. Aliquam consequat ornare volutpat. Fusce porttitor facilisis aliquam. Sed in sapien in ante malesuada iaculis. Nunc ac ex posuere, lobortis nulla vel, ultrices erat. Suspendisse potenti. Nam nec sapien ac ex vestibulum hendrerit in vitae nisi. Aenean tristique lorem non rutrum bibendum. Vivamus vulputate sollicitudin tellus in ultrices. Cras dignissim sapien ante, sagittis luctus turpis sollicitudin in.',
      types: [
        {
          name: 'colors',
          variants: [
            {
              color: 'blue',
              image: '',
            },
          ],
        },
      ],
      imageSrc: '/static/products/shoes.svg',
      price: 210,
      discount: 35,
    },

    {
      id: 13,
      name: 'Bike Wheel',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, urna vitae gravida luctus, mi justo fermentum nisl, et feugiat magna metus nec purus. Integer pharetra orci vel tellus blandit, a feugiat ante rhoncus. Pellentesque posuere vitae nisi eget pellentesque. Duis posuere efficitur erat, sed tincidunt dolor tristique eget. Nullam a ex sem. Donec faucibus, felis sit amet lobortis feugiat, est augue scelerisque turpis, sit amet fringilla mi ex vel elit. Aliquam ultrices nisi velit, elementum volutpat enim rutrum eu. Aliquam consequat ornare volutpat. Fusce porttitor facilisis aliquam. Sed in sapien in ante malesuada iaculis. Nunc ac ex posuere, lobortis nulla vel, ultrices erat. Suspendisse potenti. Nam nec sapien ac ex vestibulum hendrerit in vitae nisi. Aenean tristique lorem non rutrum bibendum. Vivamus vulputate sollicitudin tellus in ultrices. Cras dignissim sapien ante, sagittis luctus turpis sollicitudin in.',
      types: [
        {
          name: 'colors',
          variants: [
            {
              color: 'blue',
              image: '',
            },
          ],
        },
      ],
      imageSrc: '/static/products/wheel.svg',
      price: 80,
      discount: null,
    },
  ],
};

export default initialState;
