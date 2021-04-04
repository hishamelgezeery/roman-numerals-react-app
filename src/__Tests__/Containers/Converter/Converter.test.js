import renderer from 'react-test-renderer'
import Converter from '../../../Containers/Converter'

describe('Converter Container', () => {
  it('should render correctly', () => {
    const instance = renderer.create(<Converter
        />).toJSON()
    expect(instance).toMatchSnapshot()
    })
})
