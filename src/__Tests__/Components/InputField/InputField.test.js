import renderer from 'react-test-renderer'
import InputField from '../../../Components/InputField'

describe('InputField Component', () => {
  it('should render correctly', () => {
    const instance = renderer.create(<InputField labelText="Test Label"
    value={'test string in input'}
        />).toJSON()
    expect(instance).toMatchSnapshot()
    })
  it('should render correctly with button', () => {
    const instance = renderer.create(<InputField labelText="Test Label"
    withButton
    buttonText="Convert"
    value={'test string in input'}
        />).toJSON()
    expect(instance).toMatchSnapshot()
  })
})
