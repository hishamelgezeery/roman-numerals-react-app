import renderer from 'react-test-renderer'
import App from '../../../Containers/App'

describe('App Container', () => {
  it('should render correctly', () => {
    const instance = renderer.create(<App
        />).toJSON()
    expect(instance).toMatchSnapshot()
    })
})
