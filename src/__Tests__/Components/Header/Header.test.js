import renderer from 'react-test-renderer'
import Header from '../../../Components/Header'

describe('Header Component', () => {
  it('should render correctly', () => {
    const instance = renderer.create(<Header navbarLink={"#"} backgroundColor={'light'} navbarText={'test navbar'} variantType={'dark'}
        />).toJSON()
    expect(instance).toMatchSnapshot()
  })
})
