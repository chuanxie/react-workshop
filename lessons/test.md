## Testing

React components are also really nice to test. We can use a library called Enzyme to test these. Enzyme lets us mount a component and then query it in a very jQuery like manner.

### Snapshot testing

Enzyme also has a way to snapshot the output of a component and test against that. This can be preferable to writing lots of small specs to test the output of a component.

```js
import renderer from 'react-test-renderer'

test('renders correctly', () => {
  const tree = renderer.create(
    <ListOfPeople people={[]} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
```

### Testing events

We'll test the Counter component in order to look at how we can test events.
