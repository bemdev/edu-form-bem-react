import Variants from './Variants'

describe('Variants component test', () => {
    it('Variants no empty render', () => {
        const wrapper = shallow(<Variants />)
        expect(wrapper.isEmptyRender()).toBe(false)
    })
})
