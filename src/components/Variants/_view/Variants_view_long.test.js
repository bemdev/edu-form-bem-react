import Variants_view_long from './Variants_view_long'

describe('Variants_view_long component test', () => {
    it('Variants_view_long no empty render', () => {
        const wrapper = shallow(<Variants_view_long />)
        expect(wrapper.isEmptyRender()).toBe(false)
    })
})
