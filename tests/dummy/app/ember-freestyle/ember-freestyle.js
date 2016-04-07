export default {
  title: 'Dummy App Styleguide',
  sections: [
    'Colors',
    'Typography',
    'Custom Foo'
  ],
  components: [
    {
      name: 'freestyle-headers',
      section: 'Typography',
      attrs: {
        h1: 'A Dummy App Using Ember Freestyle 1',
        h2: 'A Dummy App Using Ember Freestyle 2',
        h3: 'A Dummy App Using Ember Freestyle 3',
        h4: 'A Dummy App Using Ember Freestyle 4',
        h5: 'A Dummy App Using Ember Freestyle 5',
        h6: 'A Dummy App Using Ember Freestyle 6'
      }
    },
    {
      name: 'freestyle-palette',
      section: 'Colors',
      attrs: {
        title: 'Color Palette',
        colors: [
          {
            name: 'mauve',
            hex: '#dbb1bc'
          },
          {
            name: 'lilac',
            hex: '#d3c4e3'
          },
          {
            name: 'periwinkle',
            hex: '#8f95d3'
          },
          {
            name: 'sky',
            hex: '#89daff'
          },
          {
            name: 'coffee',
            hex: '#58504a'
          }
        ]
      }
    },
    {
      name: 'elevio-module',
      section: 'Custom Foo',
      attrs: {
        text: 'Preview'
      }
    },
  ]
};
